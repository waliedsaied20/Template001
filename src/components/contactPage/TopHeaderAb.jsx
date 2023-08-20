import YoutubeVideo from "react-youtube";
// import { useState, useEffect } from "react";
import "./styley.css";
import { useInView } from "react-intersection-observer";
import styleBgColor from "../../images/Untitled_design.png";
function TopHeaderAb() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [windowHeight, setWindowHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     const handleResizeHeight = () => {
//       setWindowHeight(window.innerHeight);
//     };
//     window.addEventListener("resize", handleResizeHeight);
//     window.addEventListener("resize", handleResize);
//   }, []);

//   const getWidth = () => {
//     if (windowWidth >= 768) {
//       return 400;
//     } else {
//       return windowWidth - 100;
//     }
//   };
//   const getHeight = () => {
//     if (windowHeight >= 768) {
//       return 400;
//     } else {
//       return windowHeight - 100;
//     }
//   };

  const opts = {
    height: '400',
    width: '400',
    playerVars: {
      autoplay: 0,
    },
  };
  const [refLocation, InView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const styleBg = {
    backgroundImage: `url(${styleBgColor})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <>
      <section className="w-full" ref={refLocation} style={styleBg}>
        <div className="flex items-center max-sm:block max-sm:my-0">
          <div
            className={`w-1/2 max-sm:w-full ${
              InView
                ? `animate__animated animate__zoomInLeft animate__slow`
                : ""
            }`}
          >
            {/* <h2 className="text-6xl font-bold ">About Us </h2> */}
            <p className="text-2xl font-slab leading-8 p-5 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis autem saepe, consequuntur consectetur natus magnam
              aspernatur. Optio sit esse harum quidem illum assumenda, amet
              commodi, soluta, debitis ut molestias exercitationem?
            </p>
          </div>

          <div
            className={`w-1/2 max-sm:w-full px-5 mx-auto  max-sm:h-fit py-5 max-sm:mx-auto  max-sm:my-0 text-center ${
              InView ? `animate__animated animate__zoomInRight` : ""
            }`}
          >
            <div className=" z-0">
              <YoutubeVideo
                videoId="97AHPDXsSEY"
                style={{ borderRadius: "20px" , marginLeft:'auto', marginRight: 'auto' ,zIndex: '-1px' }}
                opts={opts}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopHeaderAb;
