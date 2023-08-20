import axios from "axios"

async function getproductapi() {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=8deb23b1a6eb429e3b4609014bd47340')
    const getProduct = await response.data.results;
    
    return getProduct
}


export default getproductapi;
