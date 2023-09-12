const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const DataModel = require("./DataModel");
const XLSX = require("xlsx");
const path = require("path");

require("dotenv").config();

const app = express();

// app.use(express.static("../Frontend/dist"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
// });

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = process.env.COSMOS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

mongoose.pluralize(null);

async function collectionExists(collectionName) {
  const collections = await mongoose.connection.db.listCollections().toArray();
  return collections.some((col) => col.name === collectionName);
}

app.post("/api/store/:collectionName", async (req, res) => {
  try {
    let { collectionName } = req.params;
    const dataArray = req.body;

    if (!collectionName) {
      collectionName = "open";
    }

    const checkCollectionExists = await collectionExists(collectionName);

    if (collectionName === "open" && checkCollectionExists) {
      const DataModelForCollection = mongoose.model(
        collectionName,
        DataModel.schema
      );
      const result = await DataModelForCollection.insertMany(dataArray);

      return res
        .status(201)
        .json({ message: "Data saved successfully", data: result });
    } else if (checkCollectionExists && collectionName !== "open") {
      return res.status(400).json({ message: "Collection already exists" });
    } else {
      await mongoose.connection.createCollection(collectionName);
      const DataModelForCollection = mongoose.model(
        collectionName,
        DataModel.schema
      );
      const result = await DataModelForCollection.insertMany(dataArray);

      return res
        .status(201)
        .json({ message: "Data saved successfully", data: result });
    }
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/verify-collection/:collectionName?", async (req, res) => {
  let { collectionName } = req.params;

  if (!collectionName) {
    collectionName = "open";
  }

  const exists = await collectionExists(collectionName);

  if (collectionName === "open") {
    res.json({ exists: false });
  } else {
    res.json({ exists });
  }
});

app.get("/api/fetch/:collectionName?", async (req, res) => {
  const { collectionName = "open" } = req.params;

  try {
    if (!(await collectionExists(collectionName))) {
      return res.status(404).json({ message: "Collection not found" });
    }

    const DataModelForCollection = mongoose.model(
      collectionName,
      DataModel.schema
    );
    const data = await DataModelForCollection.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port,'0.0.0.0', () => {
  console.log(`Server is running on port: ${port}`);
});
