import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gatProduct } from "../../service/products";

import Spinner from "../../components/spinner/spinner";
import ProductDetail from "../../components/productDetail/productDetail";

import "./detail.scss"

const initalState = {
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

    const [params] = useState(useParams());

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(initalState)

    const getInfoProduct = () => {
        gatProduct(params.id)
        .then( product => {
            setProduct(product)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    useEffect(getInfoProduct,[])

    console.log(product)
    return(
        <section className="container-detail">
            { loading ? <Spinner /> : <ProductDetail product={product} /> }
        </section>
    )
}

export default Detail;