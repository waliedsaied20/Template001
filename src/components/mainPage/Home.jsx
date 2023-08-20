// import { Link } from "react-router-dom";
// import Navbar from "../menu/Navbar"; // import as a default from App.jsx
import Headers from "../menu/Header_1";
import SectionTwo from "../menu/SectionTwo";
import SectionThree from "../menu/SectionThree";
import SectionFour from "../menu/SectionFour";
import SectionFive from "../menu/SectionFive";
import SectionSix from "../menu/SectionSix";
import TextSlider from "../OwlTest";
import SingleDeskTop from "../menu/SingleDeskTop";
import FinancialPlanning from "../menu/Financial_Planning";
import AvantageNews from "../menu/AvantageNews";
import Maping from "../menu/Maping";
import UnderLoca from "../menu/UnderLoca";
import ContactUs from "../menu/ContactUs";
import FooterLocation from "../menu/FotterLocation";
// import SectionOwl from "../menu/SectionOwl";
// import TextSlider from "../OwlTest";
// import MakeCusoual from "../Owl_Cusoual";

function HomePage2() {
  const mainTextColor = "#FF5C98";
  return (
    <div className="selection:bg-mainText1 selection:text-white">
      {/* <Navbar textColor={mainTextColor} /> */}
      <Headers textColor={mainTextColor} />
      <SectionTwo textColor={mainTextColor} />
      <SectionThree textColor={mainTextColor} />
      <SectionFour textColor={mainTextColor} />
      <SectionFive textColor={mainTextColor} />
      <SectionSix textColor={mainTextColor} />
      {/* <SectionOwl />  */}
      <div className="bg-[#ADD5F8] py-10 ">
        <TextSlider />
      </div>
      <SingleDeskTop />
      <FinancialPlanning />
      <AvantageNews />
      <Maping />
      <UnderLoca />
      <ContactUs />
      <FooterLocation/>
    </div>
  );
}

export default HomePage2;
