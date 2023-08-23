import  { useEffect, useState , useRef } from "react";
import slideImage1 from "../../images/first_Slider/img-slider-01.jpg";
import slideImage2 from "../../images/first_Slider/img-slider-02.jpg";
import slideImage3 from "../../images/first_Slider/img-slider-03.jpg";

function HeaderPage() {
  const slidesData = [
    {
      image: slideImage1,
      title: "Slide Image 1",
      par1: "This is Paragraph 1",
      par2: "This is Paragraph 1",
      button1: "First Button 1",
      button2: "Check Button 1",
    },
    {
      image: slideImage2,
      title: "Slide Image 2",
      par1: "Building Your",
      par2: "Foundations",
      button1: "Our Services",
      button2: "Veiw Portfolio",
    },
    {
      image: slideImage3,
      title: "Slide Image 3",
      par1: "This is Paragraph 3",
      par2: "This is Paragraph 3",
      button1: "Third Button 3",
      button2: "Check Button 3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((check) => (check + 1) % slidesData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide, slidesData.length]);
  // const customeHight = "calc(100vh - 74px)";

  const goToSlide = (index) => {
    setCurrentSlide(index);
    clearInterval(timerRef.current);
    startTimer();
  };
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((check) => (check + 1) % slidesData.length);
    }, 7000);
  };
  const timerRef = useRef(null);
  return (  // change screen to h-fit
    <section className="w-full h-screen relative -z-20 max-sm:h-screen overflow-hidden" >
      <div className="slideshow-container w-full  max-sm:h-s">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide  ${
              index === currentSlide ? "block" : "hidden"
            } transition-opacity duration-1000 ease-in-out`}
          >
            <div className="relative h-full max-sm:h-72 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto max-h-full object-cover "
              />
              <div
                className={`absolute max-sm:w-48 ${
                  index === 0
                    ? "top-1/4 right-2/4 max-sm:transform max-sm:-translate-x-1/2 max-sm:top-0 max-sm:left-1/3 max-sm:h-fit"
                    : index === 1
                    ? "bottom-1/3 left-1/2  max-sm:transform max-sm:-translate-x-1/2 max-sm:left-2/3 max-sm:top-0 max-sm:h-fit"
                    : "top-1/4 left-1/2 max-sm:left-1/3 transform -translate-x-1/2 max-sm:top-5"
                }  px-4 py-2 rounded-md max-sm:shadow-md`}
              >
                <h2 className="text-sm md:text-4xl lg:text-6xl py-3 text-blue-400 font-bold animate__animated animate__backInUp animate__slow">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base lg:text-3xl py-3 text-pink-400 font-bold animate__animated animate__backInRight animate__slow">
                  {slide.par1}
                </p>
                <p className="text-xs md:text-sm lg:text-base py-2 animate__animated animate__backInLeft">
                  {slide.par2}
                </p>
                <p className="text-xs">{slide.par3}</p>
                <div className="flex justify-around items-center mt-4">
                  <button className="p-2 md:p-3 border-2 border-blue-500 animate__animated animate__fadeInBottomLeft animate__slow bg-transparent rounded-xl hover:bg-blue-500 max-sm:text-sm max-sm:p-1">
                    {slide.button1}
                  </button>
                  <button className="p-2 md:p-3 border-2 border-pink-400 animate__animated animate__fadeInBottomRight animate__slow mx-2 rounded-xl bg-transparent hover:bg-pink-400 max-sm:text-sm max-sm:p-1">
                    {slide.button2}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Points */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2  max-sm:-bottom-4 z-1000">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 md:h-4 md:w-4 mx-2 rounded-full ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeaderPage;
