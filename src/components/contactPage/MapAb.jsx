import { useInView } from "react-intersection-observer";
import emailjs from 'emailjs-com'
import { useRef , useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function MapAb() {
  const [refLocation, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const [name , setName ] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [captchaToken, setCaptchaToken] = useState('')
  const form = useRef()

  // if(!captchaToken) {
  //   alert('Please Complate the recaptcha');
  //   return ;
  // }
const handleSubmitForm = (ee) => {
  ee.preventDefault();
  try{
    emailjs.send('service_4dfbwp8', 'template_32zrjxr', form.current , "XgQ8PPANQGVvx81L-")
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setCaptchaToken('')

  }catch (error){
      console.log(error , "Error Sending Email")
  }

}

  return (
    <>
      <section ref={refLocation} className="bg-mainBgBlue max-sm:py-8">
        <div className="flex items-center  bg-mainBgBlue max-sm:block max-md:block">
          <div className="w-1/2  max-sm:w-full max-md:w-full px-8">
            <iframe
              title="Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.276459874479!2d31.283082399999998!3d29.9714839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458387ab412fc13%3A0xd41ca8b84d97b6a1!2sSalec%20Egypt%2C%20S.A.E.!5e0!3m2!1sar!2seg!4v1692547424769!5m2!1sar!2seg"
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
          <div className={`w-1/2 max-sm:w-full max-md:w-full max-md:mx-auto p-4  ${inView ? 'animate__animated animate__rotateInUpRight animate__slow' :''}`}>
            <div>
              <h1 className="text-mainText1 font-bold text-5xl max-sm:text-center">
                Get in <span className="text-mainTextBlue"> touch </span>
              </h1>
              <p className="text-xl font-slab max-sm:mx-auto my-5 leading-8 w-2/3">
                Visit our agency or simply send us an email anytime you want. If
                you have any questions, please feel free to contact us.
              </p>
            </div>
            <form action="" className="g-recaptcha" data-sitekey="6LcXyb8nAAAAAKL6IBzXeXqrWX6R0o2DUirJH0dA" onSubmit={handleSubmitForm}>
              <ul>
                <li className="my-3 w-3/4  max-sm:mx-auto">
                  <input
                    className="p-4 rounded-xl w-full"
                    type="text" name="from_name" value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name*"
                  />
                </li>
                <li className="my-3 w-3/4 max-sm:mx-auto">
                  <input
                    className="p-4 rounded-xl w-full"
                    type="email"
                    placeholder="Enter Your Email Address*"
                    name="from_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
                <li className="my-3 w-3/4 max-sm:mx-auto">
                  <input
                    className="p-4 rounded-xl w-full"
                    type="text"
                    placeholder="Enter Your Subject*"
                    name="subject"
                    value={subject}
                    onChange={(w) => setSubject(w.target.value)}
/>
                </li>
                <li className="my-3 w-3/4 max-sm:mx-auto">
                  <textarea
                    className="p-4 rounded-xl w-full"
                    cols={50}
                    rows={10}
                    name="message"
                    placeholder="Enter Your Message*"
                    value={message}
                    onChange={(w) => setMessage(w.target.value)}
                  />
                </li>
                <li>
                  <ReCAPTCHA sitekey="6LcXyb8nAAAAAKL6IBzXeXqrWX6R0o2DUirJH0dA" onChange={(token) => setCaptchaToken(token)} />
                  <button className="max-sm:w-3/4 px-8 py-2 max-sm:mx-auto block text-2xl bg-mainTextBlue max-sm:p-2 rounded-xl text-white hover:bg-green-500 ">Submit </button>
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
