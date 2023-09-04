
import Client_1 from "../images/clicent/client-01-300x300.jpg";
import Client_2 from "../images/clicent/client-02-300x300.jpg";
import Client_3 from "../images/clicent/client-03-300x300.jpg";
import Client_4 from "../images/clicent/client-04-300x300.jpg";
import Client_5 from "../images/clicent/client-05-300x300.jpg";
import Client_6 from "../images/clicent/client-06-300x300.jpg";

import React, { useContext } from "react";
import {
  ScrollMenu,
  VisibilityContext,

} from "react-horizontal-scrolling-menu"; // Add VisibilityProvider import
import "react-horizontal-scrolling-menu/dist/styles.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";



const slideData = [
  {
    id: 1,
    image: Client_1,
    name: "Lilah Back",
    titlePer: "All The Right Answers",
    pargh:
      "Efficiently enable enabled sources and cost effective products. Completely synthesize principle-centered information after ethical communities.",
  },
  {
    id: 2,
    image: Client_2,
    name: "Ahmed Hassan",
    titlePer: "Best People for Me ",
    pargh:
      "Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures. Interactively productize premium technologies.",
  },
  {
    id: 3,
    image: Client_3,
    name: "Denia Ahmed",
    titlePer: "Absolutely spot-on",
    pargh:
      "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals.",
  },
  {
    id: 4,
    image: Client_4,
    name: "Mohamed Khald",
    titlePer: "Best decision ever",
    pargh:
      "Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.",
  },
  {
    id: 5,
    image: Client_5,
    name: "Hanaa Sayed",
    titlePer: "Save My Business",
    pargh:
      "Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competency communities.",
  },
  {
    id: 6,
    image: Client_6,
    name: "Sara Ail",
    titlePer: "The right investment",
    pargh:
      "Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes convergence.",
  },
  {
    id: 7,
    image: Client_1,
    name: "Lolaa Ahmed",
    titlePer: "All The Right Answers",
    pargh:
      "Efficiently enable enabled sources and cost effective products. Completely synthesize principle-centered information after ethical communities.",
  },
  {
    id: 8,
    image: Client_2,
    name: "Walied Saied ",
    titlePer: "Best People for Me ",
    pargh:
      "Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures. Interactively productize premium technologies.",
  },
];

const Slide = ({ name, id, image, pargh , titlePer}) => {
  const [refLocation, inView] = useInView({
    triggerOnce:false,
    threshold: 0.4,
  })
  return (
    <div ref={refLocation} className={`slide  bg-[#ADD5F8] flex flex-col  items-center w-[400px] max-sm:w-[250px] p-5 h-fit mr-4 ${inView ? 'animate__animated animate__flipInY animate__slow' : ''} `}>
      <img src={image} alt={name} className={`w-full h-full rounded-full  my-4 hover:scale-110 duration-300 ${inView ? 'animate__animated animate__rotateIn slower duration-300 delay-[3000]' :""}`} />
      <div className="font-bold text-2xl text-pink-400 my-4 font-slab">{titlePer}</div>
      <p className="font-slab leading-8  ">{pargh}</p>
      <span className="w-full block ">⭐⭐⭐⭐⭐</span>
      <div className="font-bold text-xl my-4 py-5 ">{name}</div>
    </div>
  );
};
// This is Main Function
function TextSlider()  {

  // const [selected, setSelected] = React.useState([]);
  // const isItemSelected = (id) => selected.includes(id);



  // const handleClick = (id) => () => {
  //   setSelected((currentSelected) =>
  //     currentSelected.includes(id)
  //       ? currentSelected.filter((el) => el !== id)
  //       : [...currentSelected, id]
  //   );
  // };
 
  const getItems = () =>
    slideData.map((slide) => (
      <Slide
        key={slide.id}
        name={slide.name}
        id={slide.id}
        image={slide.image}
        pargh={slide.pargh}
        titlePer={slide.titlePer}
      />
    ));

  return (
    <div className="scroll-menu-containerd overflow-x-hidden">
      <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {getItems()}
      </ScrollMenu>
    </div>
  );
};

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <FiChevronLeft
      className="hover:cursor-pointer hover:text-orange-500"  size={50} disabled={isFirstItemVisible} onClick={() => scrollPrev()}  />
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <FiChevronRight className="hover:cursor-pointer hover:text-orange-500"  size={50} disabled={isLastItemVisible} onClick={() => scrollNext()}/>
  );
}

export default TextSlider;
