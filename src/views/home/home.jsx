import { useEffect, useState } from "react";

import { allProduct } from "../../service/cache";
import Card from "../../components/card/card";

import "./home.scss";


function Home(){

    const [listProducts, setListProduts] = useState([]);

    const loadAllProducts = () => {
        allProduct()
        .then(products => setListProduts(products))
        .catch( err => console.log(err));
    }

    useEffect(() => loadAllProducts(), [])

    const search = ({target}) => {
        const searchValue = target.value.toLowerCase()
        const newListProduct = listProducts.filter( product => {
            const model = product.model.toLowerCase()
            const brand = product.brand.toLowerCase()
            if (model.indexOf(searchValue) >= 0 || brand.indexOf(searchValue) >= 0){
                return product
            }
        });
        searchValue.length === 0 ? loadAllProducts() : setListProduts(newListProduct)
    }

    return(
        <div className="container-home">
            <div className="search">
                <input onChange={search} class="form-control" type="search" placeholder="Search" aria-label="Search" />
            </div>
            <div className="products-list">
                {listProducts.map( product => <Card product={product} /> )}
            </div>
        </div>
    )
}

export default Home;