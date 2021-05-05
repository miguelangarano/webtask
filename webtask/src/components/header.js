import {ReactComponent as Clock} from '../assets/clock.svg'
import {ReactComponent as Search} from '../assets/search.svg'
import {ReactComponent as Location} from '../assets/location.svg'
import {ReactComponent as Phone} from '../assets/phone.svg'

function Header() {
    return(
        <div className="App-header">
            <div className="App-headerIconOut final">
            <Search className="App-iconOut"/>
            </div>
            <div className="App-iconsContainer">
            <div className="App-iconsContainerUp">
                <div className="App-headerIconContainer">
                <Location className="App-icon"/>
                </div>
                <div className="App-headerIconContainer">
                <Phone className="App-icon"/>
                </div>
                <div className="App-headerIconContainer final">
                <Clock className="App-icon"/>
                </div>
            </div>
            <div className="App-parallelogramDown"></div>
            </div>
        </div>
    )
}

export default Header