import { useEffect } from "react"

function CardSpecs(props){

    return(
        <div className="App-cardSpecs">
            <h4 className="App-cardTitle">{props.specs.title}</h4>
            <div className="App-cardContent">
              {props.specs.specs.map((element, index)=>{
                if(index===props.specs.specs.length-1){
                  return (
                    <div key={index}>
                      <div className="App-cardContentItem">
                        <h4 className="App-itemTitle">{element.title}</h4>
                        <h4 className="App-itemContent">{element.value}</h4>
                      </div>
                    </div>
                  )
                }else{
                  return (
                    <div key={index}>
                      <div className="App-cardContentItem">
                        <h4 className="App-itemTitle">{element.title}</h4>
                        <h4 className="App-itemContent">{element.value}</h4>
                      </div>
                      <hr className="solid"></hr>
                    </div>
                  )
                }
              })}
            </div>
          </div>
    )
}

export default CardSpecs