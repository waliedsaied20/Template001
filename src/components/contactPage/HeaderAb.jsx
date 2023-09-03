import {
  MdLocationSearching,
  MdLocationPin,
  MdAttachEmail,
  MdOutlinePhoneInTalk,
} from "react-icons/md";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import imagContact from "../../images/img-contact.png";
import bgPage from "../../images/bgn-footer-curve.png";
import { useInView } from "react-intersection-observer";

function HeaderAb() {
  const bgStyle = {
    backgroundImage: `url(${bgPage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
  };

  const [refLocation , inView] =useInView({
    triggerOnce: false,
    threshold: 0.4,
  })
  return (
    <>
      <section className="headerAbout !max-sm:bg-cover overflow-hidden" ref={refLocation} style={bgStyle}>
        <div >
          <div >
            <div className="container mx-auto px-12 py-4">
              <div className="text-3xl font-slab">
                <span className="text-mainText1 text-5xl font-bold">→</span>
                <span>Solve your finacial issues</span>
              </div>
              <h1 className="text-6xl my-2 max-sm:ml-4  text-mainText1 font-bold ">Visit us</h1>
              <h1 className="text-4xl my-2 max-sm:text-center font-bold text-mainTextBlue">Anytime</h1>
              <p className="w-1/3 leading-8 max-sm:w-full max-sm:px-6  text-xl font-slab">
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence.
              </p>
              <hr className="w-1/2 bg-gray-400 mx-auto h-2 my-4" />
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
                <div className={`grid grid-cols-2 grid-rows-2 h-72 max-sm:h-fit max-sm:grid-cols-2 gap-4 my-8  items-center mx-auto px-8 container ${inView ? 'animate__animated animate__rotateInDownLeft animate__slow' : ''}`}>
                  <div className="dd01 flex h-fit max-sm:block">
                    <div className="relative">
                      <MdLocationSearching className="animate-spin p-2 text-7xl text-mainText1" />
                      <MdLocationPin className="text-3xl  text-mainText1 absolute top-5 left-5 " />
                    </div>
                    <div>
                      <h2 className="text-mainTextBlue max-sm:text-xl text-3xl font-bold">
                        London office
                      </h2>
                      <p className="font-slab max-sm:text-sm leading-6 font-medium text-xl">
                        Bloomsbury Square, <br /> London WC1B 4EA
                      </p>
                    </div>
                  </div>
                  <div className="dd02 flex h-fit max-sm:block">
                    <div>
                      <LiaMapMarkedAltSolid className="text-7xl  text-mainText1" />
                    </div>
                    <div>
                      <h2 className="text-mainTextBlue max-sm:text-xl text-3xl font-bold">
                        Ontario Office
                      </h2>
                      <p className="font-slab max-sm:text-sm leading-6 font-medium text-xl">
                        20 Gerrard St E, <br /> Toronto ON M5B 2P3, Canada
                      </p>
                    </div>
                  </div>
                  <div className="dd03 flex  h-fit max-sm:block" >
                    <div>
                      <MdAttachEmail className="text-7xl  text-mainText1" />
                    </div>
                    <div>
                      <h2 className="text-mainTextBlue max-sm:text-xl text-3xl font-bold">
                        Email Us
                      </h2>
                      <p className="font-slab max-sm:text-sm leading-6 font-medium text-xl">
                        info
                        @avantage.co.uk
                        <br />
                        office
                        @avantage.co.uk
                      </p>
                    </div>
                  </div>
                  <div className="dd04 flex  h-fit max-sm:block">
                    <div>
                      <MdOutlinePhoneInTalk className="text-7xl  text-mainText1" />
                    </div>
                    <div>
                      <h2 className="text-mainTextBlue max-sm:text-xl text-3xl font-bold">
                        Call Us{" "}
                      </h2>
                      <p className="font-slab max-sm:text-sm leading-6 font-medium text-xl">
                        020 7946 020
                        <br />
                        020 7996 223
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${inView ? 'animate__animated animate__rotateInDownRight animate__slow' : ''}`}>
                  <div >
                    <img className="w-full" src={imagContact} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderAb;
