import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { gatProduct, addProductToShoppingCart } from "../../service/products";

import Spinner from "../../components/spinner/spinner";
import ProductDetail from "../../components/productDetail/productDetail";

import { HeaderContext } from "../../context/headerContext";

import "./detail.scss"

const initialState = {
    id: "",
    brand: "",
    model: "",
    price: "",
    imgUrl: "",
    dimentions: "",
    weight: "",
    displayResolution: "",
    os: "",
    cpu: "",
    ram: "",
    battery:"",
    primaryCamera: [],
    secondaryCmera: [],
    options:{
        colors:[],
        storages:[],
    }
}

function Detail(){

    const { value, setValue } = useContext(HeaderContext);

    const [params] = useState(useParams());

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(initialState);
    const [loadingCart, setLoadingCart] = useState(false);

    const getInfoProduct = () => {
        gatProduct(params.id)
        .then( product => {
            setProduct(product)
            setValue({breadcrumbs: [...value.breadcrumbs, product.brand], cart: value.cart});
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => getInfoProduct(),[])

    const addShoppingCart = async (productSelected) => {
        setLoadingCart(true)
        const cartElements = await addProductToShoppingCart(productSelected);
        setValue({breadcrumbs: value.breadcrumbs, cart: value.cart + cartElements.count});
        setLoadingCart(false)
    }

    return(
        <section className="container-detail">
            { loading ? <Spinner /> : <ProductDetail product={product} addShoppingCart={addShoppingCart} loadingCart={loadingCart} /> }
        </section>
    )
}

export default Detail;