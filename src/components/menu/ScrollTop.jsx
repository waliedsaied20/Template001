import { useState , useEffect } from "react"
import { useInView } from "react-intersection-observer"
function ScrollTop() {

    const [scrolltoTop , setScrollToTop] = useState(false)
    const [refLocation , inView] = useInView({
      triggerOnce: false,
      threshold: 0.3
    })
    const handleScrollTop = () => {
      window.scrollTo({top: 0 , behavior: 'smooth'})
    }
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setScrollToTop(true)
      } else {
        setScrollToTop(false)
      }
    }
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
  
      }
    },[])
    return (
        <>
         {scrolltoTop && 
      <button ref={refLocation} className={`fixed bottom-5 right-4  p-2 rounded-full text-4xl hover:bg-yellow-500 ${inView ? 'animate__animated  animate__flipInY animate__slow'  : ''} `} onClick={handleScrollTop}>☝️</button>}

        </>
    )
}

export default ScrollTop;