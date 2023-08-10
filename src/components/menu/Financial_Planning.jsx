import {MdDataExploration} from 'react-icons/md';
import {RiHandCoinLine , RiBarChartFill}  from 'react-icons/ri';
import {IoPieChartSharp} from 'react-icons/io5';
import { useInView } from 'react-intersection-observer';

function FinancialPlanning () {
    // 💸
    const [refLocation, inView] = useInView({
        triggerOnce: false,
        threshold: 0.4,
    })
    const Planing = [
        {id:1, icon: IoPieChartSharp, animateDone: ' animate__slideInRight', title: "Financial Planning", des: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."},
        {id:2, icon: MdDataExploration, animateDone: 'animate__slideInLeft  ', title: "Steady Growth", des: "Podcasting operational change management inside of workflows to establish a framework."},
        {id:3, icon: RiHandCoinLine,  animateDone: ' animate__slideInRight', title: "Seeking Income", des: "Dynamically innovate resource-leveling customer service for state of the art customer service."},
        {id:4, icon: RiBarChartFill, animateDone: 'animate__slideInLeft',  title: "Wealth Nurturing", des: "Energistically myocardinate clicks-and-mortar testing procedures whereas next-generation products."},
    ]
    const renderPlaing = Planing.map((plan01) => {
        if(plan01.id === 4) {
            plan01.animateDone = ''
        }
        return (
            <div key={plan01.id} className={`flex ${inView ? `animate__animated  ${plan01.animateDone} animate__slow` : "" } `} ref={refLocation} >
                <div className='text-mainText1 text-7xl border h-fit rounded-full p-2 bg-mainBgBlue'>
                    {<plan01.icon />}
                </div>
                <div>
                    <h2 className='text-3xl text-blue-500 font-bold my-4'>{plan01.title}</h2>
                    <p className=' font-slab leading-8' >{plan01.des}</p>
                </div>

                    
            </div>
        )
    })
    return (
        <>
            <section className="Financial py-10 px-3">
                <div className="flex items-center justify-around p-4 mx-auto max-sm:block">
                    <div className=' w-2/3 justify-around items-center grid grid-cols-2 max-sm:grid-cols-1 max-sm:w-full gap-5'>
                        {renderPlaing}
                    </div>
                    <div className={`max-sm:text-center max-sm:my-6 ${inView ? 'animate__animated animate__jackInTheBox animate__slow' : ''}`}>
                        <button className="py-3 px-7 bg-transparent text-mainText1 border-mainText1 border-2 rounded-xl font-medium shadow-md shadow-mainText1 hover:bg-mainText1 hover:text-white ease-in-out">View All Service</button>
                    </div>
                </div>



            </section>

        </>
    )
}


export default FinancialPlanning;