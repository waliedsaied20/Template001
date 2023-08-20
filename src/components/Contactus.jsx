import HeaderAb from "./contactPage/HeaderAb";
import TopHeaderAb from "./contactPage/TopHeaderAb";
import MapAb from "./contactPage/MapAb";
import FooterLocation from "./menu/FotterLocation";
import { HeadProduct } from "./products/TotalProducts";


function Contactus() {
    return (
        <div>
            <HeadProduct title={"Home"} child={"Contact Us"} />

            <HeaderAb />
            <TopHeaderAb/>
            <MapAb/>
            <FooterLocation />
        
        </div>
    )
}

export default Contactus;