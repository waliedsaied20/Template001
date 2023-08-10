import Service1 from "../../images/img-service-01-640x669.png";
import Service2 from "../../images/img-service-02-640x669.png";
import Service3 from "../../images/img-service-03-640x669.png";
import Service4 from "../../images/img-service-04-640x669.png";
import { useInView } from "react-intersection-observer";


const renderItems = [
  {
    id: 1,
    image: Service1,
    title: "Financial Anlysis",
    titleStyle: "",
    mainStyle: '',
    pargh:
      "Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence.",
    btn: "Read More 1 >",
  },
  {
    id: 2,
    image: Service2,
    title: "Wealth Protection",
    titleStyle: "",
    mainStyle: '',
    pargh:
      "Nanotechnology immersion along the information highway will close the loop on focusing bottom line.",
    btn: "Read More 2 >",
  },
  {
    id: 3,
    image: Service3,
    title: "Plan Your Sevings",
    titleStyle: "",
    mainStyle: '',
    pargh:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test digital devide.",
    btn: "Read More 3 >",
  },
  {
    id: 4,
    image: Service4,
    title: "Research & Audit",
    titleStyle: "",
    mainStyle: "",
    pargh:
      "Dynamically innovate resource leveling customer service for state of the art customer service.",
    btn: "Read More 4 >",
  },
];
function SectionFive({ textColor }) {

  const [ref , inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })
  const items = renderItems.map((item) => {
    if (item.id === 1) {
      item.titleStyle = `text-pink-500 `;
      item.mainStyle = `${inView ? "animate__animated animate__backInLeft animate__slow" : ""}`
    } else if (item.id === 2) {
      item.titleStyle = `text-blue-500`;
      item.mainStyle = `${inView ? "animate__animated animate__backInUp animate__slow": ''}`
    } else if (item.id === 3) {
      item.titleStyle = `text-pink-500`;
      item.mainStyle = `${inView ? "animate__animated animate__backInDown animate__slow" : ''}`
    } else if (item.id === 4) {
      item.titleStyle = `text-blue-500`;
      // item.mainStyle = `${inView ? "animate__animated animate__slideInRight animate__slower animate__delay-2s" : ""}`
      
    }
    return (
      <div key={item.id} className={`p-4 overflow-hidden ${inView ? item.mainStyle : ""} `} ref={ref}>
        <div>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={` `}>
          <h3 className={`${item.titleStyle} font-bold text-4xl text-center`}>
            {item.title}
          </h3>
          <p className="p-2 text-black leading-8 h-40 max-sm:h-fit">
            {item.pargh}{" "}
          </p>
          <button className={`p-2 text-pink-500 !text-left`}>
            {item.btn}{" "}
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      <section className=" px-12 mx-auto  selection:bg-orange-400">
        <div>
          <div className="flex justify-around items-center max-md:flex-wrap max-sm:block">
            {items}
          </div>
          <hr className="w-1/2 mx-auto border-2 border-pink-500 " />
        </div>
      </section>
    </>
  );
}

export default SectionFive;
