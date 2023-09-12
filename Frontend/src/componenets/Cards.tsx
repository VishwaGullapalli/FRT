import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from './Popup';


interface CardProps {
  _id: string;
  Question: string;
  Option1: string;
  Option2: string;
  Option3: string;
  Option4: string;
  Solution: string;
}

interface CardsProps {
  collectionName: string;
}

const Cards: React.FC<CardsProps> = ({ collectionName }) => {
  const [data, setData] = useState<CardProps[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://4.224.47.39:5000/api/fetch/${collectionName}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
        setShowAlert(true);
      }
    };

    fetchData();
  }, [collectionName]);

  // Function to close the alert
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <section className="bg-yellow-200 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {data.map((item) => (
            <div className="bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700" key={item._id}>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.Question}
                </h3>
                <ol className="list-decimal pl-5 mt-4 space-y-2">
                  <li>
                    <p className="font-light text-gray-500 dark:text-gray-400">{item.Option1}</p>
                  </li>
                  <li>
                    <p className="font-light text-gray-500 dark:text-gray-400">{item.Option2}</p>
                  </li>
                  <li>
                    <p className="font-light text-gray-500 dark:text-gray-400">{item.Option3}</p>
                  </li>
                  <li>
                    <p className="font-light text-gray-500 dark:text-gray-400">{item.Option4}</p>
                  </li>
                </ol>
                <br />
                <strong className="text-green-500 dark:text-green-300">
                  {item.Solution}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAlert && (
        <Popup
          message={`Collection "${collectionName}" is not present.`}
          onClose={handleCloseAlert}
        />
      )}
    </section>
  );
};

export default Cards;
