import Customer1 from '../../images/Customer/Customer 01.png'
import Customer2 from '../../images/Customer/Customer 02.png'
import Customer3 from '../../images/Customer/Customer 03.png'
import Customer4 from '../../images/Customer/Customer 04.png'
import Customer5 from '../../images/Customer/Customer 05.png'
import Customer6 from '../../images/Customer/Customer 06.png'
import Customer7 from '../../images/Customer/Customer 07.png'
import Customer8 from '../../images/Customer/Customer 08.png'
import CornarPage from '../../images/Cornar 2.png';

import { useInView } from 'react-intersection-observer'
// T
function SectionSix({textColor}) {
 const [refLocation , inView] = useInView({
    triggerOnce: false,
    threshold: 0.4
 })
    const MainCustomer = [
        {id:'Cus1' , title: "Customer 1", image: Customer1 , animate: 'animate__rotateInDownLeft'},
        {id:'Cus2' , title: "Customer 2", image: Customer2 , animate: 'animate__rotateInDownLeft' },
        {id:'Cus3' , title: "Customer 3", image: Customer3 , animate: 'animate__rotateInDownRight'},
        {id:'Cus4' , title: "Customer 4", image: Customer4 , animate: 'animate__rotateInDownRight'},
        {id:'Cus5' , title: "Customer 5", image: Customer5 , animate: 'animate__rotateInDownLeft'},
        {id:'Cus6' , title: "Customer 6", image: Customer6 , animate: 'animate__rotateInDownLeft'},
        {id:'Cus7' , title: "Customer 7", image: Customer7 , animate: 'animate__rotateInDownRight'},
        {id:'Cus8' , title: "Customer 8", image: Customer8 , animate: 'animate__rotateInDownRight'},
    ]
 const renderCustomer = MainCustomer.map((customer) => {
    return (
        <div ref={refLocation} key={customer.id} className={`w-1/4 max-md:w-1/2 max-sm:w-full ${inView ? `animate__animated animate__slower ${customer.animate}`  : ''} `}>
               <div  id={customer.id}>

                <img src={customer.image} alt={customer.title} title={customer.title}/>
               </div>
        </div>
    )
 })
 const handleBg  = {
    backgroundImage: `url('${CornarPage}')`,
    backgroundSize: '40%',
    backgroundPosition: 'right bottom',
    backgroundRepeat: 'no-repeat'

 }
//  console.log(handleBg.backgroundImage)
    return (
        <>
        <section className='mt-10 py-6' style={handleBg}>
            <div className="flex flex-wrap max-sm:block">
                {renderCustomer}

            </div>
        </section>

        </>
    )
}

export default SectionSix;