import React from "react";
import { useInView } from "react-intersection-observer";

function HistoryAb(props) {
  const [refLocation, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const {
    title,
    head,
    pargh,
    icon1,
    icon2,
    title2,
    head2,
    pargh2,
    img,
    img2,
    img3,
    btn1,
    btn2,
  } = props.box;

  return (
    <section ref={refLocation} className="max-sm:my-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-rows-1 grid-cols-7 max-sm:block ">
          <div className={`col-span-3 `}>
            <form
              className={`${
                inView ? "animate__animated animate__flipInX animate__slow" : ""
              }`}
            >
              <fieldset className="border-4 border-mainBgBlue">
                <legend className="ml-8 text-xl bg-mainText1 p-2 rounded-xl text-white">
                  {title}
                </legend>
                <h2 className="p-3 text-4xl font-bold">{head}</h2>
                <p className="my-2 p-3 leading-8">{pargh}</p>
                <div className="flex">
                  {img && (
                    <div className={`${img2 ? "flex" : "block"}`}>
                      <img
                        src={img}
                        alt="image1"
                        className={`${
                          img2 ? "w-1/2" : "w-full"
                        } p-2 rounded-xl`}
                      />
                      {img2 && (
                        <img
                          src={img2}
                          alt="part1"
                          className={`${
                            img2 ? "w-1/2" : "w-full"
                          } p-2 rounded-xl`}
                        />
                      )}
                    </div>
                  )}
                </div>
                {btn1 && (
                  <button
                    className={`m-3 bg-transparent p-3 border-2 border-mainText1 rounded hover:shadow-xl scalem ease-in-out ${
                      inView
                        ? "animate__animated animate__flipInX animate__slower animate__delay-1s"
                        : ""
                    }`}
                  >
                    {btn1}
                  </button>
                )}
              </fieldset>
            </form>
          </div>
          <div className="relative col-span-1 text-center max-sm:hidden">
            <div className="h-[860px] w-2 mx-auto bg-mainBgBlue rounded-xl text-6xl font-bold text-gray-900">
              <div className="">
                {icon1}
                <span
                  className={`after:content-['👈'] absolute top-14 left-4 text-3xl text-mainText1 ${
                    inView
                      ? "animate__animated animate__lightSpeedInRight animate__delay-2s"
                      : ""
                  } `}
                ></span>
              </div>
              <div>
                {icon2}
                <span
                  className={`after:content-['👉'] absolute top-1/2 right-4 after:text-red-500 block text-3xl font-bold ${
                    inView
                      ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                      : ""
                  }`}
                ></span>
              </div>
            </div>
          </div>
          <div
            className={`col-span-3 mt-44 ${
              inView ? "animate__animated animate__flipInY animate__slow" : ""
            }`}
          >
            <form action="" className=" ">
              <fieldset className="border-4 border-mainBgBlue">
                <legend className="ml-8 text-xl bg-mainText1 p-2 rounded-xl text-white">
                  {title2}
                </legend>
                <h2 className="p-3 text-4xl font-bold">{head2}</h2>
                <p className="my-5 p-3 leading-8">{pargh2}</p>
                {(img2 || img3) && (
                  <div className={`${img2 && img3 ? "flex" : "block"}`}>
                    {img2 && (
                      <img
                        src={img2}
                        alt="image2"
                        className={`${
                          img3 ? "w-1/2" : "w-full"
                        } p-2 rounded-xl`}
                      />
                    )}
                    {img3 && (
                      <img
                        src={img3}
                        alt="image3"
                        className={`${
                          img2 ? "w-1/2" : "w-full"
                        } p-2 rounded-xl`}
                      />
                    )}
                  </div>
                )}

                {/*  
                  {img && (
                    <div className={`${img2 ? 'flex' : 'block'}`}>
                      <img src={img} alt="image1" className={`${img2 ? 'w-1/2' : 'w-full'} p-2 rounded-xl`} />
                      {img2 && <img src={img2} alt="part1" className={`${img2 ? 'w-1/2' : 'w-full'} p-2 rounded-xl`} />}
                    </div>
                  )} */}
                {btn2 && (
                  <button
                    className={`m-3 bg-transparent p-3 border-2 border-mainText1 rounded hover:shadow-xl scalem ease-in-out ${
                      inView
                        ? "animate__animated animate__flipInX animate__slower animate__delay-1s"
                        : ""
                    }`}
                  >
                    {btn2}
                  </button>
                )}
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryAb;
