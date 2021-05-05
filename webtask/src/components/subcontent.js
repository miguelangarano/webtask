import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {changeImageSelected} from '../redux/actions'
import CarSpecs from './carSpecs'

function Subcontent(props){
    const dispatch = useDispatch()
    const [images, setImages] = useState([])
    const [specs, setSpecs] = useState([])
    useEffect(()=>{
        setImages([...props.images])
        setSpecs([...props.specs])
    },[])

    function setSelectedImage(value){
        dispatch(changeImageSelected(value))
    }

    return (
      <div className="App-subcontent">
        <div className="App-carousel">
            {images.map((element, index)=>{
                return (<img
                key={index}
                className="App-images"
                src={element}
                alt="Carrito partes"
                onClick={()=>setSelectedImage(element)}
              ></img>)
            })}
        </div>
        <div className="App-carSpecs">
            {specs.map((element, index)=>{
                return(
                    <CarSpecs key={index} specs={element} />
                )
            })}
        </div>
      </div>
    );
}

export default Subcontent