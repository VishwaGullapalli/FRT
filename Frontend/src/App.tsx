import { BrowserRouter } from "react-router-dom"
import Footer from "./componenets/Footer"
import Header from "./componenets/Header"
import NewsLetter from "./componenets/NewsLetter"
import RoutingLinks from "./componenets/RoutingLinks"

function App() {

  return (
    <BrowserRouter>
      <>
        <div className='app bg-indigo-600 max-h-full'>

          <div>
            <Header />
          </div>
          <div>
            <RoutingLinks />
          </div>
          <div>
            <NewsLetter />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </>
    </BrowserRouter>
  )
}

export default App

