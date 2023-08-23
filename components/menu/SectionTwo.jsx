import React from "react";
import serviceImage from "../../images/work_team.png";
import waveStyle from "../../images/waveService.svg";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "animate.css"; // Import the animate.css library for animations

function SectionTwo({textColor}) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3, // Adjust the threshold as needed (0.3 means 30% of the element is visible)
  });

  const styleWave = {
    backgroundImage: `url(${waveStyle})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={styleWave} className="overflow-hidden max-sm:mt-10">
      <section ref={ref} className="max-sm:p-4">
        <div className="relative w-1/3  translate-x-5 translate-y-32"></div>
        <div className="flex items-center max-sm:block">
          <div
            className={`w-1/2 max-sm:w-full ${
              inView
                ? "animate__animated animate__slideInLeft animate__slower"
                : ""
            }`}
          >
            <img src={serviceImage} className="w-full" alt="Service Img" />
          </div>
          <div
            className={`w-1/2 max-sm:w-full ${
              inView
                ? "animate__animated animate__rubberBand animate__slower"
                : ""
            }`}
          >
            <div>
              <span className={`w-32 h-32 border-4 border-[${textColor}] transform-gpu translate-x-4 translate-y-5 rotate-45 border-solid `}> </span>
              <h2 className={`text-6xl font-bold text-[${textColor}]`}>Dream, </h2>
              <h3 className="text-4xl font-bold text-blue-500">
                Plan & Enjoy{" "}
              </h3>
              <p className="text-2xl leading-10 font-medium">
                Phosfluorescently engage worldwide methodologies with
                web-enabled technology. Interactively coordinate proactive
                e-commerce via process-centric outside the box thinking.
              </p>
              <button
                className={`max-sm:my-10 my-5 font-medium text-2xl rounded-xl block 
                mx-auto p-3 border-2 border-blue-500
                 shadow-md shadow-blue-500 hover:bg-blue-500 hover:text-white ${
                  inView
                    ? "animate__animated animate__flipInX animate__slow animate__delay-2s"
                    : ""
                }`}
              >
                <Link to="/2">View Our Service</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionTwo;
