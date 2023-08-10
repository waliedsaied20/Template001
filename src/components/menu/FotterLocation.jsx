import {
  LuMessagesSquare,
  LuLocateFixed,
  LuMapPin,
  LuFacebook,
  LuTwitter,
  LuLinkedin,
} from "react-icons/lu";
import { MdWhatsapp } from "react-icons/md";
import mapFooter from "../../images/img-footer-map.png";
import bgFooter from '../../images/bgn-footer-curve.png';
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function FooterLocation() {
    const styleBg = {
        backgroundImage: `url(${bgFooter})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
    }

    const [refLocation , inView] = useInView({
        triggerOnce:false,
        threshold: 0.3
    })
  return (
    <>
      <section className="footerLocation overflow-hidden" ref={refLocation} style={styleBg}>
        <div className="container mx-auto px-6">
          <div className="flex max-md:flex-wrap max-sm:block">
            <div className={`div1 py-3 ${inView ? `animate__animated animate__fadeInTopLeft animate__slow`: ''}`}>
              <span>Avantage</span>
              <h2 className="text-mainText1 text-2xl font-bold">
                Headquarters
              </h2>
              <p className="py-4 text-left">
                Organically grow the holistic world view of disruptive
                innovation via empowerment.
              </p>
              <div className="block">
                <a href="tel:+0201124976668" className="tel flex">
                  <label
                    htmlFor="tel"
                    className="text-blue-500 text-2xl mr-3 bg-blue-200 rounded-full hover:cursor-pointer"
                  >
                    🤳
                  </label>
                  0201124976668
                </a>
              </div>
              <div>
                <button className="flex">
                  <LuMessagesSquare
                    id="email"
                    className="text-blue-500 text-2xl mr-3"
                  />
                  walied.saied12@yahoo.com
                </button>
              </div>
              <div className="">
                <Link
                  to="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex"
                >
                  <LuLocateFixed className="text-blue-500 text-2xl inline-block mr-4" />

                  <span className="inline-block">www.google.com</span>
                </Link>
              </div>
            </div>
            <div className={`div2 ${inView ? `animate__animated animate__fadeInUpBig animate__slow`: ''}`}>
              <span>Our locations</span>
              <h2 className="text-mainText1 text-2xl font-bold">
                Where to find us?
              </h2>
              <p>
                <img src={mapFooter} alt="Map Footer" />
              </p>
            </div>
            <div className={`div3 ${inView ? `animate__animated animate__fadeInUpBig animate__slow`: ''}`}>
              <div className=" ">
                <p className="my-3">
                  <LuMapPin className="text-blue-500 text-2xl inline-block" />{" "}
                  London: <a href="tel:0201124976668"> 0201124976668</a>
                </p>
                <p className="my-3">
                  <LuMapPin className="text-blue-500 text-2xl inline-block" />{" "}
                  Alexandera: <a href="tel:0201124976668"> 0201124976668</a>
                </p>
                <p className="my-3">
                  <LuMapPin className="text-blue-500 text-2xl inline-block" />{" "}
                  Aswin: <a href="tel:0201124976668"> 0201124976668</a>
                </p>
              </div>
            </div>
            <div className={`div4 ${inView ? `animate__animated animate__fadeInTopRight animate__slow`: ''}`}>
              <div>
                <span>Get in touch</span>
                <h2 className="text-mainText1 text-2xl font-bold">
                  Avantage Social links
                </h2>
                <p className="leading-8 py-4">
                  Taking seamless key performance indicators offline to maximise
                  the long tail.
                </p>
              </div>
              <div className="social flex justify-around">
                <Link to="https://www.google.com" target="_blank">
                  <LuFacebook className="text-5xl p-3 text-white border rounded-full bg-blue-500 hover:bg-white hover:text-blue-500 duration-300 ease-in-out cursor-pointer hover:border-2 hover:border-blue-500" />
                </Link>
                <Link to="https://www.google.com" target="_blank">
                  <MdWhatsapp className="text-5xl p-3 text-white border rounded-full bg-blue-500 hover:bg-white hover:text-blue-500 duration-300 ease-in-out cursor-pointer hover:border-2 hover:border-blue-500" />
                </Link>
                <Link to="https://www.google.com" target="_blank">
                  <LuTwitter className="text-5xl p-3 text-white border rounded-full bg-blue-500 hover:bg-white hover:text-blue-500 duration-300 ease-in-out cursor-pointer hover:border-2 hover:border-blue-500" />
                </Link>
                <Link to="https://www.google.com" target="_blank">
                  <LuLinkedin className="text-5xl p-3 text-white border rounded-full bg-blue-500 hover:bg-white hover:text-blue-500 duration-300 ease-in-out cursor-pointer hover:border-2 hover:border-blue-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterLocation;
