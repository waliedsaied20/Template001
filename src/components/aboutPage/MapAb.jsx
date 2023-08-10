import { useInView } from "react-intersection-observer";

function MapAb() {
  const [refLocation, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <>
      <section className="" ref={refLocation}>
        <div className="flex bg-mainBgBlue max-sm:block">
          <div className="w-1/2 max-sm:w-full px-8">
            <iframe
              title="Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.258536338884!2d31.286132125084407!3d29.971999122000643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839613b4f5aaf%3A0xb272318268f67c6c!2sBarq%20Systems!5e0!3m2!1sar!2seg!4v1691583571766!5m2!1sar!2seg"
              className={`w-[500px] h-[500px] max-sm:w-[300px] max-sm:h-[300px] max-sm:mx-auto  overflow-hidden rounded-full ${
                inView
                  ? `animate__animated animate__rotateIn  animate__slower `
                  : ""
              }`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={`w-1/2 max-sm:w-full  ${inView ? 'animate__animated animate__rotateInUpRight animate__slow' :''}`}>
            <div>
              <h1 className="text-mainText1 font-bold text-5xl max-sm:text-center">
                Get in <span className="text-mainTextBlue"> touch </span>
              </h1>
              <p className="text-xl font-slab max-sm:mx-auto my-5 leading-8 w-2/3">
                Visit our agency or simply send us an email anytime you want. If
                you have any questions, please feel free to contact us.
              </p>
            </div>
            <form action="">
              <ul className="">
                <li className="my-3 w-3/4  max-sm:mx-auto">
                  <input
                    className="p-4 rounded-xl w-full"
                    type="text"
                    placeholder="Enter Your Name*"
                  />
                </li>
                <li className="my-3 w-3/4 max-sm:mx-auto">
                  <input
                    className="p-4 rounded-xl w-full"
                    type="email"
                    placeholder="Enter Your Email Address*"
                  />
                </li>
                <li className="my-3 w-3/4 max-sm:mx-auto">
                  <input
                    className="p-4 rounded-xl w-full"
                    type="text"
                    placeholder="Enter Your Subject*"
                  />
                </li>
                <li className="my-3 w-3/4 max-sm:mx-auto">
                  <textarea
                    className="p-4 rounded-xl w-full"
                    cols={50}
                    rows={10}
                    placeholder="Enter Your Message*"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default MapAb;
