import axios from "axios";
import { useEffect, useState } from "react";

 function SingleProduct() {
    
    useEffect( (() => {
        const getSingleProduct = async () => {
            const productData = await axios.get('https://api.unsplash.com/photos/?client_id=C1q1Faz-iF3N2EufnZ6XCP41WdUPV9Uqa8PJiiDHads')
            const product = await productData.data
            console.log(product)
            
        }
    }),[])
    return(
        <>
        <section>
            <h1>Single Product</h1>
            
        </section>
        </>
    )
}

export default SingleProduct;