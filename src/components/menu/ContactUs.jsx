import NewImage from "../../images/img-newsletter.png";
import { useInView } from "react-intersection-observer";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [refLocation , inView] = useInView({
    triggerOnce: false,
    threshold: 0.4
  })
  return (
    <>
      <section ref={refLocation}>
        <div className="flex items-center max-sm:block">
          <div className={`w-1/2 max-sm:w-full max-sm:p-5 ${inView ? 'animate__animated animate__zoomInLeft animate__slow'  : ''}`}>
            <img src={NewImage} alt="News Img" />
          </div>
          <div className={`w-1/2 max-sm:w-full max-sm:p-5 ${inView ? 'animate__animated animate__zoomInRight animate__slow'  : ''}`}>
            <span className="text-5xl text-mainText1 ">→</span>
            <h2 className="inline-block font-bold font-slab text-mainText1 text-6xl">
              Financial Advices
            </h2>
            <h3 className="font-bold font-slab text-blue-500 text-4xl">
              On Your Phone
            </h3>
            <p className="w-2/3 leading-8 my-5 max-sm:w-full">
              Sign up for Avantage newsletter to receive all the new offers and
              discounts for any financial project you might have. Simply type in
              your email address and we’ll include you in our next update.
            </p>
            <div className="">
              <form action="" className="flex justify-around " onSubmit={handleSubmit}>
                <input
                  className="p-5 border w-2/3 rounded-full  max-sm:w-auto max-sm:p-2 "
                  type="email"
                  placeholder="Enter Your Email Address"
                  name="email"
                />
                <input
                  className="p-3 bg-mainText1 text-white text-2xl rounded-full cursor-pointer max-sm:text-sm    font-bold hover:bg-green-400 ease-in-out"
                  type="submit"
                  value="Subscribe Now "
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
