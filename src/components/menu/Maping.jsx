import { useInView } from "react-intersection-observer";
function Maping() {
  const [refLocation, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <>
      <section className="overflow-hidden" ref={refLocation}>
        <iframe
          title="Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.258536338884!2d31.286132125084407!3d29.971999122000643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839613b4f5aaf%3A0xb272318268f67c6c!2sBarq%20Systems!5e0!3m2!1sar!2seg!4v1691583571766!5m2!1sar!2seg"
          className={`w-full h-96 overflow-hidden ${inView ? `animate__animated animate__rubberBand animate__slower ` : ""}`}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}

export default Maping;
