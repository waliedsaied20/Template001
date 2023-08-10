import MapSetting from '../../images/google-maps.png'
import SendMessage from '../../images/send.png'
import smallLocation from '../../images/small_location.png';
import CallDollor from '../../images/callDollor.png'
import { useInView } from 'react-intersection-observer';

function UnderLoca() {
  const [refLocation , inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })
  const createLocation = [
    {
      id: 1,
      icon: `${smallLocation}`,
      name: "London Office",
      addr1: "Bloomsbury Square, ",
      addr2: "London WC1B 4EA",
    },
    {
      id: 2,
      icon: `${MapSetting}`,
      name: "Ontario Office ",
      addr1: "Bloomsbury Square,",
      addr2: "London Wc1B 4EA",
    },
    {
      id: 3,
      icon: `${SendMessage}`,
      name: "Email us",
      addr1: "info@avantage.co.uk",
      addr2: "office@avantage.co.uk",
    },
    {
      id: 4,
      icon: `${CallDollor}`,
      name: "Call us",
      addr1: "020 7946 020",
      addr2: "020 7996 223",
    },
  ];
  const renderLocation = createLocation.map((location) => {
    return (
      <div key={location.id} className="flex justify-between max-sm:justify-center ">
        <div>
          <img className='w-10' src={location.icon} alt={location.name} />
        </div>
        <div>
          <h2 className='text-3xl text-blue-500 font-bold max-sm:text-xl'> {location.name} </h2>
          <p  className='text-medium font-slab text-black'>{location.addr1}</p>
          <p className='text-medium font-slab text-black'>{location.addr2}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <section className='py-12 bg-mainBgBlue h-96 flex  justify-around items-center' ref={refLocation}>
        <div className={`grid grid-cols-4 max-sm:grid-cols-2 ${inView ? `animate__animated animate__jackInTheBox animate__slow` : ''}`}>
            {renderLocation}
        </div>
      </section>
    </>
  );
}

export default UnderLoca;
