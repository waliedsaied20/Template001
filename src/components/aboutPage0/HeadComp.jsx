import { HeadProduct } from "../products/TotalProducts";
import bgimage from "../../images/aboutCareve.png";
import teamAbout from '../../images/aboutPage/teamwork001-removebg.png'
import { useInView } from "react-intersection-observer";
function HeadComp() {
  const changeBg = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
    height: "500px",
  };

  const [refLocation, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  })
  return ( 
    <>
      <section className="py-4 overflow-hidden">
        <div className="bg-mainBgBlue ">
          <div className="container  mx-auto px-10 ">
            <div >
              <HeadProduct title={"Home"} child={"About"} />
              <div className="flex justify-center items-center" ref={refLocation}>

              <div className={`w-1/2 p-2 ${inView ? " animate__animated  animate__fadeInTopLeft animate__slow " : ""}`}>
                <h2 className="text-4xl text-mainText1">Company History </h2>
                <p className=" font-medium leading-8 ">
                  Proactively fabricate one-to-one materials via effective
                  e-business. Completely synergize scalable e-commerce rather
                  than high standards in e-services. Assertively iterate
                  resource maximizing products after leading-edge intellectual
                  capital.
                </p>
              </div>
              <div className={`w-1/2 ${inView ? 'animate__animated animate__fadeInTopRight animate__slow' : ""}`}>
                <img src={teamAbout} className="w-full rounded-xl" alt="Team about" />
              </div>
              </div>
            </div>
          </div>
            <div className="changeBg container mx-auto px-10" style={changeBg}>
              <div className="text-mainText1">
                <span id="he" className="mr-2">
                  ———
                </span>
                <label htmlFor="he" className="text-mainText1 text-xl">
                  Excellence in Accounting
                </label>
              </div>
              <div className="w-1/2 max-sm:w-full py-8">
                <h2 className="text-4xl text-mainText1 ">
                  Caring your Finances
                </h2>
                <h2 className="text-mainTextBlue">More Than 20 Years</h2>
                <p className="leading-8">
                  Proactively envisioned multimedia based expertise and
                  cross-media growth strategies. Seamlessly visualize quality
                  intellectual capital without superior collaboration and
                  idea-sharing.
                </p>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default HeadComp;
