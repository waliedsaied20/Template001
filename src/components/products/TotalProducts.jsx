import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import SearchInput from "../store/Search/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store";
import ListProduct from "../cardSide/ListProduct";
import FotterLocation from "../menu/FotterLocation";

export function HeadProduct({title , child}) {

  const [refLocation, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <>
      <section
        className="head1 p-10 max-sm:p-4 bg-mainBgBlue overflow-hidden"
        ref={refLocation}
      >
        <div className="container px-6 mx-auto ">
          <div className="flex items-center ">
            <span
              className={`text-mainText1 text-2xl mr-3 ${
                inView
                  ? `animate__animated animate__bounceInLeft animate__slow`
                  : ""
              }`}
            >
              →→→
            </span>
            <span
              className={`text-2xl max-sm:text-xl font-slab font-medium ${
                inView
                  ? `animate__animated animate__swing animate__slow animate__delay-1s`
                  : ""
              }`}
            >
              <Link to="/" className>
                {title}
              </Link>
            </span>
          </div>
          <h2
            className={`my-3 text-7xl max-sm:text-4xl font-bold text-mainText1 ${
              inView
                ? " animate__animated animate__flipInX animate__delay-2s animate__slow"
                : ""
            }`}
          >
            {" "}
             {child}
          </h2>
        </div>
      </section>
    </>
  );
}

function MainProducts() {
  const [allData, setAllData] = useState([]);
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    // A think here the mistake
    return {
      name: state.ProductSlice1.name,
      cost: state.ProductSlice1.cost,
    };
    
  });
  console.log(`Name is : ${name} , Cost is :${cost}`)

  const handleAddProduct = (Title1, Cost1 , IdPr , img)=> {
    console.log(Title1, Cost1);
    //  dispatch(addProduct(Title1, Cost1));
    dispatch(addProduct({ name: Title1, cost: Cost1, id:IdPr , img}));
  };

  useEffect(() => {
    const getAllData = async () => {
      // const allData = await axios.get(
      //   "https://api.themoviedb.org/3/trending/movie/week?api_key=08388315ebd0760a503e518ea0883c32"
      // );
      // const startData = allData.data.results;
      const allData = await axios.get(
        "https://api.unsplash.com/photos/?client_id=C1q1Faz-iF3N2EufnZ6XCP41WdUPV9Uqa8PJiiDHads"
      );
      const startData = await allData.data;
      setAllData(startData);
      console.log(startData);
    };
    getAllData();
  }, [setAllData]);

  const [hoverImage, setHoverImage] = useState(null);

  const handleHover = (id) => {
    setHoverImage(id);
  };
  const leaveMouse = () => {
    setHoverImage(null);
  };
  // End Product to Right List

  const renderAllData = allData.map((data) => {
    // const img = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    return (
      <div
        key={data.id}
        className={`m-3 max-sm:m-5 rounded-xl shadow-xl hover:scale-105 duration-300 hover:bg-white hover:shadow-white `}
        onMouseLeave={leaveMouse}
      >
        <div className={`w-full`}>
          <Link to={`/service/${data.id}`} className="relative">
            {/* <img
              onMouseEnter={() => handleHover(data.id)}
              className="rounded-xl h-80 w-full"
              src={img}
              alt={`${data.title}`}
            /> */}
            <img
              className="rounded-xl h-72 w-full max-md:h-48"
              onMouseEnter={() => handleHover(data.id)}
              src={data.urls.small}
              alt={`${data.title}`}
            />
            {data.id === hoverImage && (
              <div
                className={`absolute top-0   h-full w-full opacity-60 rounded-xl bg-gray-300  animate__animated animate__jello animate__slow`}
              >
                <span
                  className={`absolute top-1/3 left-1/3 text-4xl animate__animated animate__bounceIn animate__infinite	infinite `}
                >
                  🔍
                </span>
              </div>
            )}
          </Link>
          <div
            className={`p-4 rounded-xl  ${() =>
              hoverImage(data.id) ? "bg-white" : "bg-gray-300"} `}
          >
            <h5 className="text-orange-400 text-2xl font-bold font-slab">
              ID : {data.id}
            </h5>
            <h2 className="text-2xl font-bold h-fit my-3">
              {data.title} This is Title Product
            </h2>
            <div>
              <span></span>
              <span className={`text-green-800 font-bold text-2xl m-3 `}>
                {/* Price: {data.genre_ids[0]}$ */}
                Price : {data.width} $
              </span>
            </div>
            {/* <button onClick={handleAddProduct(data.title, data.genre_ids[0])} className="p-3 rounded-2xl text-white font-slab bg-mainText1 hover:scale-90 duration-300">
              Add to Card
            </button> */}
            <button
              onClick={() =>
                handleAddProduct(data.alt_description, data.width ,data.id , data.urls.small_s3)
              }
              className="p-3 my-4 rounded-2xl text-white font-slab bg-mainText1 hover:scale-90 duration-300"
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section className="bg-gray-200">
        <div className="container mx-auto px-8">
          <main className="grid grid-cols-4 ">
            <header className={`grid col-span-3 max-sm:col-span-4   gap-6`}>
              <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2">
                {renderAllData}
              </div>
            </header>
            <article className={` max-sm:col-span-4`}>
              
              <SearchInput />
              <ListProduct />
            </article>
          </main>
          <FotterLocation />
        </div>
      </section>
    </>
  );
}

export default MainProducts;
