import ServiceDesk from "../../images/bgn-services.png";
import { useInView } from "react-intersection-observer";

function SingleDeskTop() {
  
  const [refLocation , inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })
  
  const styleDisk = {
    backgroundImage: `url(${ServiceDesk})`,
    backgroundSize: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  // const changeColor = "#FF5C98";
  return (
    <>
      <section ref={refLocation} className="h-[500px]  bg-mainBgBlue  selection:bg-pink-400 selection:text-white ">
        <div
          className="h-full w-full flex   flex-col justify-center max-sm:block "
          style={styleDisk}
        >
          <div className={`ml-24 max-sm:ml-5 ${inView ? 'animate__animated animate__fadeInTopLeft animate__slow' : ""}`}>
            <div>
              <span id="hed" className={`font-bold text-5xl max-sm:text-2xl mr-3 text-mainText1 ${inView ? 'animate__animated animate__backInLeft animate__slower': ''}`}> →</span>
              <label htmlFor="hed" className="font-slab font-medium text-2xl max-sm:text-xl">
                Working For Your Better Tommorrow
              </label>
            </div>
            <h2 className={` text-5xl font-bold text-mainText1 max-sm:text-3xl`}>
              Acting in Your{" "}
              <span className="block text-blue-500"> Best Interest </span>
            </h2>
            <p className="w-1/3 max-sm:w-1/2">
              Intrinsically incubate intuitive opportunities and real-time
              potentialities. Appropriately communicate one-to-one technology
              after plug-and-play networks.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleDeskTop;
