import NewImage from "../../images/img-newsletter.png";
import { useInView } from "react-intersection-observer";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";

function SendMail() {
  const [captchaToken, setCaptchaToken] = useState("");
  const [email, setEmail] = useState("");
  const [successfully, setSuccessfully] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const captchaRef = useRef(null);
  const [refLocation, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const handleSubmit = async (w) => {
    w.preventDefault();
    const templateParams = {
      "g-recaptcha-response": captchaToken,
      email,
    };
    const vaildEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
    if (!vaildEmail(email)) {
      setErrorMessage("Invalid email address");
      return;
    }
    try {
      await emailjs.send(
        "service_7irpmyy",
        "template_gr1aptv",
        templateParams,
        "XgQ8PPANQGVvx81L-"
      );
      setEmail("");
      setCaptchaToken("");
      setSuccessfully("Thanks For Subscription");
      captchaRef.current.reset();
    } catch (error) {
      setSuccessfully("");
      setErrorMessage("Please Put Email only ");
      console.log(error);
      alert(error.text);
    }
  };

  return (
    <>
      <section ref={refLocation}>
        <div className="flex items-center max-sm:block">
          <div
            className={`w-1/2 max-sm:w-full max-sm:p-5 ${
              inView
                ? "animate__animated animate__zoomInLeft animate__slow"
                : ""
            }`}
          >
            <img src={NewImage} alt="News Img" />
          </div>
          <div
            className={`w-1/2 max-sm:w-full max-sm:p-5 ${
              inView
                ? "animate__animated animate__zoomInRight animate__slow"
                : ""
            }`}
          >
            <span className="text-5xl text-mainText1 ">→</span>
            <h2 className="inline-block font-bold font-slab text-mainText1 text-6xl">
              Financial Advices
            </h2>
            <h3 className="font-bold  text-blue-500 text-4xl">On Your Phone</h3>
            <p className="w-2/3 leading-8 my-5 max-sm:w-full">
              Sign up for Avantage newsletter to receive all the new offers and
              discounts for any financial project you might have. Simply type in
              your email address and we’ll include you in our next update.
            </p>
            <div>
              <form
                onSubmit={handleSubmit}
                className="g-recaptcha grid grid-cols-2  gap-3 "
                data-sitekey="6LcXyb8nAAAAAKL6IBzXeXqrWX6R0o2DUirJH0dA"
              >
                <div className="mb-5">
                  <input
                    className="p-5 border w-full rounded-full  max-sm:w-auto max-sm:p-2 "
                    type="email"
                    value={email}
                    onChange={(w) => setEmail(w.target.value)}
                    placeholder="Enter Your Email Address"
                    name="email"
                    required
                  />
                </div>

                <div>
                  <button
                    className=" p-3 bg-mainText1 text-white text-2xl rounded-full cursor-pointer max-sm:text-sm    font-bold hover:bg-green-400 ease-in-out"
                    value="Subscribe Now "
                  >
                    Subscribe Now
                  </button>
                </div>
                <div>
                  <ReCAPTCHA
                    sitekey="6Ld07cEnAAAAAItUt79ih31HK5c9TOZZ2OV3ABlq"
                    required
                    ref={captchaRef}
                    onChange={(token) => setCaptchaToken(token)}
                  />
                </div>
                <div className="overflow-hidden" ref={refLocation}>
                  {successfully && (
                    <div
                      className={`text-center text-green-400 text-2xl ${
                        inView
                          ? "animate__animated animate__bounceOutRight animate__delay-3s animate__slower "
                          : ""
                      }`}
                    >
                      {successfully}
                    </div>
                  )}
                  {errorMessage && (
                    <div
                      className={`text-center text-red-400 text-2xl ${
                        inView
                          ? "animate__animated animate__bounceOutRight animate__delay-3s animate__slower "
                          : ""
                      }`}
                    >
                      {errorMessage}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SendMail;
