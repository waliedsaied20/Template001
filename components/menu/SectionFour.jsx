/* eslint-disable no-unused-expressions */
import bgGround from "../../images/bgn-services-curve.png";
import { useInView } from "react-intersection-observer";
// import 'https://fonts.googleapis.com/css2?=Roboto+Slab&display=swap';

function SectionFour({ textColor }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const handleBg = {
    backgroundImage: `url(${bgGround})`,
    backgroundSize: "inherit",
    backgroundPosition: "top left",
    backgroundRepeat: "no-repeat",
  };
  const hoverUp = "hover:translate-y-[-10px] transition-transform duration-500";
  return (
    <div>
      <section className="px-12 m-auto py-10 " style={handleBg} ref={ref}>
        <div >
          <div className="flex justify-between items-center p-3 max-sm:block">
            <div
              className={`w-1/2 max-sm:w-full ${
                inView
                  ? "animate__animated animate__rotateInDownLeft animate__slow"
                  : ""
              }`}
            >
              <h4>Let Tomorrow Begin Today</h4>
              <h2 className="text-5xl font-bold" style={{ color: textColor }}>
                Planning For{" "}
              </h2>
              <h3 className="text-3xl font-bold text-blue-400">The Future</h3>
              <p className="w-2/3">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation.
              </p>
            </div>
            <div
              className={`max-sm:hidden ${
                inView
                  ? "animate__animated animate__rollIn animate__slow  "
                  : ""
              }`}
            >
              <hr className="w-full border-2 border-blue-500 h-40" />
            </div>
            <div
              className={`py-10 relative w-1/2 flex flex-col items-center justify-center max-sm:w-full ${
                inView
                  ? "animate__animated animate__rotateInDownRight animate__slow"
                  : ""
              } `}
            >
              <blockquote className="py-12 absolute top-0 left-1/3 opacity-20 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-48 h-48"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <text
                    x="50%"
                    y="50%"
                    dominantbaselinee="middle"
                    textAnchor="middle"
                  >
                    ,,
                  </text>
                </svg>
              </blockquote>
              <h2 className=" w-2/3 mt-10 font-bold font-slab  text-2xl leading-relaxed">
                The better we know you, the more we can do. Aligning your
                financial strategy matters to both of us.
              </h2>
              <button
                className={`max-sm:my-10 mt-14 font-medium text-2xl rounded-xl block 
  mx-auto p-3 border-2 border-${textColor} shadow-md shadow-${textColor} hover:bg-blue-500 hover:text-white ${
                  inView
                    ? ` animate__animated animate__flipInX animate__slow animate__delay-2s  ${hoverUp}`
                    : ""
                }`}
              >
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionFour;
