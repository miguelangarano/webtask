import "./App.scss";
import Header from "./components/header";
import Content from "./components/content";
import Subcontent from "./components/subcontent";
import Footer from "./components/footer"
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import {changeImageSelected} from './redux/actions'
import axios from 'axios'

function App() {
  const dispatch = useDispatch()
  const [images, setImages] = useState([]);
  const [carSpecs, setCarSpecs] = useState([])
  const [carGeneralData, setCarGeneralData] = useState({})

  useEffect(() => {
    document.title = "CarDetail"
    axios.get('http://localhost:3880/cars/all', {headers: {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"}})
    .then((value)=>{
      if(value.data.status===true){
        let data = value.data.data
        setImages(data[0].images)
        setCarSpecs(data[0].specs)
        setCarGeneralData({
          name: data[0].name,
          year: data[0].year,
          priceRange: data[0].priceRange,
          mileage: data[0].mileage,
          itemNumber: data[0].itemNumber,
          vin: data[0].vin,
          views: data[0].views,
          saves: data[0].saves,
          shares: data[0].shares
        })
        dispatch(changeImageSelected(data[0].images[0]))
      }
    }).catch((error)=>{
      console.log(error)
    })
  }, []);

  if (images.length > 0 && carSpecs.length>0 && carGeneralData.name!==undefined) {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Content images={images} carData={carGeneralData}/>
        </div>
        <div className="App-buttonContainer">
          <div className="App-button">
            <h4>CALL US</h4>
          </div>
        </div>
        <div className="App-subcontent">
          <Subcontent images={images} specs={carSpecs} />
        </div>
        <div className="App-footer">
          <Footer/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App-loadingPage">
        <div className="loader"></div>
      </div>
    );
  }
}

export default App;
