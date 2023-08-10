import ImageService1 from "../../images/newsBlog/blog-post-10-640x640.jpg";
import ImageService2 from "../../images/newsBlog/blog-post-05-640x640.jpg";
import ImageService3 from "../../images/newsBlog/blog-post-04-640x640.jpg";
import ImageService4 from "../../images/newsBlog/blog-post-02-640x640.jpg";
import { Link } from "react-router-dom";
import { RiTimeLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";

function AvantageNews() {
  const TimeNow = Date.now();
  const today = new Date(TimeNow);

  const [refLocation, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const createNews = [
    {
      id: 1,
      image: ImageService1,
      date: today.toLocaleDateString(),
      Time: today.toLocaleTimeString(),
      title: "Consulting Project",
      des: "Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before process-centric communities. ",
      ReadUrl: "1",
      animateSet: 'animate__zoomInLeft'
    },
    {
      id: 2,
      image: ImageService2,
      date: today.toLocaleDateString(),
      Time: today.toLocaleTimeString(),
      title: "Saving money, smart",
      des: "Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes with effective convergence. ",
      ReadUrl: "2",
      animateSet: 'animate__zoomInUp'
    },
    {
      id: 3,
      image: ImageService3,
      date: today.toLocaleDateString(),
      Time: today.toLocaleTimeString(),
      title: "Financial reconstruction",
      des: "Efficiently enable enabled sources and cost effective products. Completely synthesize principle-....",
      ReadUrl: "3",
      animateSet: 'animate__zoomInDown'
    },
    {
      id: 4,
      image: ImageService4,
      date: today.toLocaleDateString(),
      Time: today.toLocaleTimeString(),
      title: "Latest Client",
      des: "Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate",
      ReadUrl: "4",
      animateSet: 'animate__zoomInRight'
    },
  ];
  const renderNews = createNews.map((news) => {
    if(window.innerWidth <= 768){

        if(news.id === 4) {
            news.animateSet = ''  
        }
    }
    return (
      <div key={news.id} className={`text-center ${inView ? `animate__animated ${news.animateSet} animate__slow` : ''}`} >
        <div>
          <img className={`rounded-full ${inView ? `animate__animated animate__flip animate__slow animate__delay-1s` : ''}`} src={news.image} alt={news.title} />
        </div>
        <h5 className="my-4 font-bold text-blue-400">
          <RiTimeLine className="inline-block text-mainText1" /> {news.Time} -{" "}
          <span className="text-mainText1">{news.date} </span>
        </h5>
        <h2 className="text-2xl text-mainText1 font-bold h-14 my-3 text-left">
          {news.title}
        </h2>
        <p className="font-slab leading-6 h-40 text-left">{news.des}</p>
        <button className="text-mainText1 block font-medium">
          <Link to={`/${news.ReadUrl}`}>Read More ⇒</Link>
        </button>
      </div>
    );
  });
  

  return (
    <>
      <section className="container px-10 mx-auto overflow-hidden" ref={refLocation}>
        <div>
          <span className="text-4xl font-bold text-mainText1">→</span>
          <h4 className="text-xl font-bold">Out latest Articles </h4>
          <h2 className="text-blue-500 text-6xl font-bold">
            Avantage <span className="text-mainText1"> News </span>
          </h2>
          <div className="grid grid-cols-4 gap-6 my-10 max-sm:grid-cols-1">{renderNews}</div>
        </div>
      </section>
    </>
  );
}

export default AvantageNews;
