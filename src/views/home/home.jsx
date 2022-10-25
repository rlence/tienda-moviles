import { useEffect, useState } from "react";

import { getAllProducts } from "../../service/products";
import Card from "../../components/card/card";

import "./home.scss";


function Home(){

    const [listProducts, setListProduts] = useState([]);

    const loadAllProducts = () => {
        getAllProducts()
        .then(data => setListProduts(data))
        .catch(err => console.log(err))
    }

    useEffect(loadAllProducts, [])

    return(
        <div className="container-home">
            <div className="search">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
            </div>
            <div className="products-list">
                {listProducts.map( product => <Card product={product} /> )}
            </div>
        </div>
    )
}

export default Home;