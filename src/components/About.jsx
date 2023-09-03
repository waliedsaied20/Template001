    import HeadComp from "./aboutPage0/HeadComp";
    import HistoryAb from "./aboutPage0/HistoryAb";
    import {MdLightbulbCircle , MdOutlineLocalConvenienceStore , MdOutlineGroupAdd , MdKeyboardCommandKey} from 'react-icons/md'
    import {GoWorkflow , GoThumbsup , GoTelescope , GoSun , GoPasskeyFill , GoPaste} from 'react-icons/go'
    import imagePart1 from '../images/aboutPage/about part 02.jpg';
    import imagePart01 from '../images/aboutPage/about part002.jpg';
    import imagePart02 from '../images/aboutPage/about part 03.jpg';
    import imagePart002 from '../images/aboutPage/about part 003.jpg';
    import imagePart03 from '../images/aboutPage/about part 05.jpg'
    import imagePart003 from '../images/aboutPage/about part 06.jpg'
    import imageExpanding from '../images//aboutPage/about part 07.jpg';
    import lastImage from '../images/aboutPage/about part 007.jpg';
    import coming from '../images/aboutPage/comming.jpg'
import TopHeaderAb from "./contactPage/TopHeaderAb";
import MapAb from "./contactPage/MapAb";
import UnderLoca from "./menu/UnderLoca";
import FooterLocation from "./menu/FotterLocation";
    // import MapAb from "./contactPage/MapAb";
    // import FooterLocation from './menu/FotterLocation'

    function About() {
        const boxes = [
            {
              title: "May 1999 ",
              head: "Avantage Founded",
              pargh: "1 Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service.",
              icon1: <MdLightbulbCircle className='p-3 bg-mainText1 text-white rounded-full absolute top-12 left-14' />,
              img: imagePart1,
              btn1: 'View Our Team ',
              title2: "June 1999",
              head2: 'London Office opened',
              pargh2: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing, holistically pontificate installed base portals.",
              icon2: <MdOutlineLocalConvenienceStore className={`p-3 bg-mainText1 text-white rounded-full absolute top-1/2 left-14 `} />,
              img2: imagePart01,
              img3: imagePart03,
              img4: imagePart003,
            },
            {
              title: "August 1999", 
              head: 'Team Starts Growing',
              pargh: 'Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce service.',
              img: imagePart02,
              btn1: 'View Our Team',
              icon1: <MdOutlineGroupAdd className="p-3 bg-mainText1 text-white rounded-full absolute top-12 left-14 " />,
              title2: 'June 2001',
              head2:'First Large Client',
              pargh2: 'Dynamically reinvent market-driven opportunities and ubiquitous interfaces. Energistically fabricate an expanded array of niche markets.',
              img2: imagePart002,
              btn2: 'Find Out More',
              icon2: <GoThumbsup className={` p-3 bg-mainText1 text-white rounded-full absolute top-1/2 left-14`} />
            },
            {
              title:'February 2008',
              head: 'Expanding to Asia Market',
              pargh : 'Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures. Interactively productize premium technologies whereas interdependent quality vector enterprise experiences.',
              img: imageExpanding,
              icon1: <GoTelescope className="p-3 bg-mainText1 text-white rounded-full absolute top-12 left-14"/>,
              title2: "September 2008",
              head2: 'Tokyo Office Opened',
              pargh2: "Phosfluorescently expedite impactful supply chains via focused results. Holistically generate open-source applications through bleeding-edge sources. Compellingly supply just in time catalysts for change potentialities.",
              img2: "",
              icon2: <GoPasskeyFill className="p-3 bg-mainText1 text-white rounded-full absolute top-1/2 left-14"/>,
            },
            {
              title: 'April 2014',
              head: 'Exansion to North America',
              pargh: 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate robust ideas.',
              btn1: 'More About Avantage',
              img: imagePart03,
              icon1: <GoSun className="p-3 bg-mainText1 text-white rounded-full absolute top-12 left-14"/>,
              title2: 'October 2014',
              head2: 'Number of Clients growing',
              pargh2: 'Proactively envisioned multimedia based expertise and cross-media growth strategies superior collaboration and idea-sharing.',
              btn2: 'View Our Clients',
              img2: imagePart003,
              icon2: <GoPaste className="p-3 bg-mainText1 text-white rounded-full absolute top-1/2 left-14"/>,
            },
            {
              title: 'May 2019',
              head: '01 Voted as one of the most successful Consulting Companies in 2019',
              pargh: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
              img : lastImage,
              icon1: <GoWorkflow className="p-3 bg-mainText1 text-white rounded-full absolute top-12 left-14 "/>,
              img02: 'more img',
              title2:'Comming Soon',
              head2:'Comming Soon',
              img3: coming,
              icon2: <MdKeyboardCommandKey className="p-3 bg-mainText1 text-white rounded-full absolute top-1/2 left-14 "/>,
            }
            
          ];
    return (
        <div className="">
        <HeadComp />
        {boxes.map((box , index) => {
            return(
                <HistoryAb key={index} box1={box} box2={box}  box={box} />
            )
        })}
        <TopHeaderAb />
        <UnderLoca/>
        <MapAb />
        <FooterLocation />
        </div>
    );
    }

    export default About;
