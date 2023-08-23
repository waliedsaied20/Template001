import CircleProgress from "./ProgressBar";
import { useInView } from "react-intersection-observer";

function SectionThree({textColor}) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div
      className="p-4 overflow-hidden "
      style={{ backgroundColor: "#AED4FB" }}
      ref={ref}
    >
      <div className="flex justify-between p-6 max-sm:block max-md:flex-wrap max-sm:flex-wrap ">
        <div
          className={`text-center flex flex-col items-center max-md:flex-wrap  max-sm:w-full ${
            inView
              ? "animate__animated animate__slideInLeft animate__slow "
              : ""
          } `}
        >
          <div
            className={`${
              inView
                ? "animate__animated animate__rotateIn animate__slower "
                : "" 
            } `}
          >
            <CircleProgress custome={25} />
          </div>
          <h2 className={`text-4xl text-[${textColor}] font-bold`}>Search Leads</h2>
          <p className="text-black leading-6 p-2 my-4">
            Rudely loose a therefore this pill adjusted that and a below far
            that less behind unspeakably much past.
          </p>
        </div>
        <div
          className={`text-center flex flex-col items-center max-md:flex-wrap  max-sm:w-full ${
            inView ? "animate__animated animate__slideInUp animate__slow" : ""
          } `}
        >
          <div
            className={`${
              inView
                ? "animate__animated animate__rotateIn animate__slower"
                : ""
            } `}
          >
            <CircleProgress custome={55} />
          </div>
          <h2 className={`text-4xl text-[${textColor}] font-bold`}>invest Smart </h2>
          <p className="text-black leading-6 p-2 my-4">
            Infuriatingly spry worm goldfish caught exorbitant some manatee
            moodily frail far bet glared lighted weak.
          </p>
        </div>
        <div
          className={`text-center flex flex-col items-center max-md:flex-wrap  max-sm:w-full ${
            inView
              ? "animate__animated animate__slideInDown animate__slow"
              : ""
          } `}
        >
          <div
            className={`${
              inView
                ? "animate__animated animate__rotateIn animate__slower"
                : ""
            } `}
          >
            <CircleProgress custome={70} />
          </div>
          <h2 className={`text-4xl text-[${textColor}] font-bold`}>Wealth</h2>
          <p className="text-black leading-6 p-2 my-4">
            Impala less a rakishly thus flexed but emptied more more tentative
            thrust yikes one the scorpion other.
          </p>
        </div>
        <div
          className={`text-center flex flex-col items-center max-md:flex-wrap  max-sm:w-full ${
            inView
              ? "animate__animated animate__slideInRight animate__slow"
              : ""
          } `}
        >
          <div
            className={`${
              inView
                ? "animate__animated animate__rotateIn animate__slower"
                : ""
            } `}
          >
            <CircleProgress custome={90} />
          </div>
          <h2 className={`text-4xl text-[${textColor}] font-bold`}>Financial Plan</h2>
          <p className="text-black leading-6 p-2 my-4">
            Globefish hello bald imitative ocelot jeepers concomitant ape much
            kindhearted where firefly wept.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;

// {/* <div className="w-full p-4">
//       <div className="flex items-center">
//         <div className="w-full">
//           <div className="relative h-10 bg-gray-200 rounded-full">
//             <div
//               className="text-center items-center absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-white to-blue-500 rounded-full"
//               style={{ width: customeWidth }} // Set the progress width dynamically
//             >
//               Progress ${customeWidth}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> */}
