import  Navbar  from "../components/menu/Navbar";
import HeaderAb from "./aboutPage/HeaderAb";
import MapAb from "./aboutPage/MapAb";
import TopHeaderAb from "./aboutPage/TopHeaderAb";



function About(){
    return (
        <div>
           <Navbar/>
           <TopHeaderAb/>
            <HeaderAb />
            <MapAb/>
        </div>
    )
}

export default About;