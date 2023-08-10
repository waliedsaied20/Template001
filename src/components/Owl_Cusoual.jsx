// import jQuery from "jquery";
// import "owl.carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import OwlCarousel from "react-owl-carousel";
// import Client_1 from "../images/clicent/client-01-300x300.jpg";
// import Client_2 from "../images/clicent/client-02-300x300.jpg";
// import Client_3 from "../images/clicent/client-03-300x300.jpg";
// import Client_4 from "../images/clicent/client-04-300x300.jpg";
// import Client_5 from "../images/clicent/client-05-300x300.jpg";
// import Client_6 from "../images/clicent/client-06-300x300.jpg";
// import {
//   LiaAngleDoubleLeftSolid,
//   LiaAngleDoubleRightSolid,
// } from "react-icons/lia";

// function OwlCursoual() {
//   window.$ = jQuery;

//   const opitions = {
//     items: 5,
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     nav: true,
//     navText: [{ LiaAngleDoubleLeftSolid }, { LiaAngleDoubleRightSolid }],
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 3,
//       },
//       1000: {
//         items: 4,
//       },
//     },
//   };

//   const totalClients = [
//     {
//       id: 1,
//       image: Client_1,
//       name: "Lilah Back",
//       titlePer: "All The Right Answers",
//       pargh:
//         "Efficiently enable enabled sources and cost effective products. Completely synthesize principle-centered information after ethical communities.",
//     },
//     {
//       id: 2,
//       image: Client_2,
//       name: "Ahmed Hassan",
//       titlePer: "Best People for Me ",
//       pargh:
//         "Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures. Interactively productize premium technologies.",
//     },
//     {
//       id: 3,
//       image: Client_3,
//       name: "Denia Ahmed",
//       titlePer: "Absolutely spot-on",
//       pargh:
//         "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals.",
//     },
//     {
//       id: 4,
//       image: Client_4,
//       name: "Mohamed Khald",
//       titlePer: "Best decision ever",
//       pargh:
//         "Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.",
//     },
//     {
//       id: 5,
//       image: Client_5,
//       name: "Hanaa Sayed",
//       titlePer: "Save My Business",
//       pargh:
//         "Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competency communities.",
//     },
//     {
//       id: 6,
//       image: Client_6,
//       name: "Walied Mohamed",
//       titlePer: "The right investment",
//       pargh:
//         "Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes convergence.",
//     },
//   ];
//   const renderClients = totalClients.map((client) => {
//     return (
//       <div key={client.id}>
//         <div>
//           <h2>{client.titlePer}</h2>
//           <img src={client.image} alt={client.name} />
//           <p>{client.pargh}</p>
//           <span> ⭐⭐⭐⭐⭐</span>
//           <label htmlFor={client.id}>{client.name}</label>
//         </div>
//       </div>
//     );
//   });
//   return (
//     <>
//       <OwlCarousel className="owl-theme" {...opitions}>
//         <div>{renderClients}</div>
//       </OwlCarousel>
//     </>
//   );
// }
// export default OwlCursoual;

// The Second Trying

// import "react-horizontal-scrolling-menu/styles.css";
// import { ScrollMenu } from "react-horizontal-scrolling-menu";

import Client_1 from "../images/clicent/client-01-300x300.jpg";
import Client_2 from "../images/clicent/client-02-300x300.jpg";
import Client_3 from "../images/clicent/client-03-300x300.jpg";
import Client_4 from "../images/clicent/client-04-300x300.jpg";
import Client_5 from "../images/clicent/client-05-300x300.jpg";
import Client_6 from "../images/clicent/client-06-300x300.jpg";
import { MdChevronLeft , MdChevronRight } from "react-icons/md";
function MakeCusoual() {
  const totalClients = [
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
      name: "Walied Mohamed",
      titlePer: "The right investment",
      pargh:
        "Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes convergence.",
    },
    {
      id: 7,
      image: Client_6,
      name: "Walied Mohamed",
      titlePer: "The right investment",
      pargh:
        "Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes convergence.",
    },
  ];
  const SlideLeft = () => {
    let Slider = document.getElementById('Slider');
    Slider.scrollLeft  = Slider.scrollLeft - 500
  }
  const SlideRight = () => {
    let Slider = document.getElementById('Slider');
    Slider.scrollLeft = Slider.scrollLeft + 500
  }
  const renderClients = totalClients.map((client) => {
    return (
      <div key={client.id} className=" w-[200px] h-full mx-4">
        <h2>{client.titlePer}</h2>
        <img
          src={client.image}
          alt={client.name}
          className="w-full inline-block p-4 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-full"
        />
        <p className="block ">{client.pargh}</p>
        <span>⭐⭐⭐⭐⭐</span>
        <label  htmlFor={client.id} className="block">
          {client.name}
        </label>
      </div>
    );
  });

  return (
    <>
      <div id="Slider" className="Slider flex items-center  h-full overflow-x-scroll scroll scroll-smooth">
        {/* <ScrollMenu {...carsoulOpations}>{renderClients}</ScrollMenu> */}
        <MdChevronLeft onClick={SlideLeft} size={350} height={300} className="hover:cursor-pointer"/>
        {renderClients}
        <MdChevronRight onClick={SlideRight} size={350} className="hover:cursor-pointer"/>
      </div>
    </>
  );
}

export default MakeCusoual;
That Component is not working 