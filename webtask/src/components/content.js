import { useEffect, useState } from 'react'
import {ReactComponent as Email} from '../assets/email.svg'
import {useSelector} from 'react-redux'

function Content(props) {
    const imageSelectedStore = useSelector(state => state.imageSelected)
    const [images, setImages] = useState([])
    const [carData, setCarData] = useState({})
    useEffect(()=>{
        setImages([...props.images])
        setCarData({...props.carData})
    },[])


    return(
        <div className="App-content">
                <div className="App-imageContent">
                    <img className="App-images" src={imageSelectedStore} alt="Carrito"></img>
                </div>
                <div className="App-imageContentCarousel">
                    <div className="App-imagesContainer">
                        {images.map((element, index)=>{
                            return <img key={index} className="App-images" src={element} alt="Carrito"></img>
                        })}
                    </div>
                    <div className="App-dotsContainer">
                        {images.map((element, index)=>{
                            return <span key={index} className="dot"></span>
                        })}
                    </div>
                </div>
                <div className="App-generalDataContent">
                    <h4 className="App-generalTitle">{carData.name}</h4>
                    <div className="App-dataContainer">
                        <div className="App-topData">
                            <div className="App-dataContent">
                                <h4 className="App-title">Year</h4>
                                <h4 className="App-data">{carData.year}</h4>
                                <h4 className="App-title">Price Range</h4>
                                <h4 className="App-data">{carData.priceRange}</h4>
                                <h4 className="App-title">Mileage</h4>
                                <h4 className="App-data">{carData.mileage}</h4>
                            </div>
                        </div>
                        <div className="App-bottomData">
                            <h4 className="App-title">Item Number: {carData.itemNumber}</h4>
                            <h4 className="App-title">VIN: {carData.vin}</h4>
                            <div className="App-shareContainer">
                                <h4 className="App-shareText">Share this car</h4>
                                <Email className="App-shareIcon"/>
                            </div>
                            <div className="App-analyticsContainer">
                            <div className="App-analyticsItem">
                                <h4 className="App-title">Views</h4>
                                <h4 className="App-analyticsData">{carData.views}</h4>
                            </div>
                            <div className="App-analyticsItem only">
                                <h4 className="App-title">Saves</h4>
                                <h4 className="App-analyticsData">{carData.saves}</h4>
                            </div>
                            <div className="App-analyticsItem only">
                                <h4 className="App-title">Shares</h4>
                                <h4 className="App-analyticsData">{carData.shares}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content