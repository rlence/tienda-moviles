import "./productDetail.scss";

import Select from "../select/select";
import { useState } from "react";

import ButtonLoading from "../buttonLoading/buttonLoading";

function ProductDetail({product, addShoppingCart, loadingCart}){

    const [color, setColor] = useState("");
    const [storage, setStorage] = useState("");

    return(
        <div className="product-content">
            <div className="content-img">
                <img src={product.imgUrl} alt="img phone"></img>
            </div>
            <div className="content-info">
                <div className="card">
                    <div className="header-card">
                        <span>
                            <h2>{product.brand}</h2>
                            <p>{product.model}</p>
                        </span>
                        <p className="price"><span>{product.price}</span>€</p>
                    </div>
                    <hr></hr>
                    <p>cpu: <span>{product.cpu}</span></p>
                    <p>ram: <span>{product.ram}</span></p>
                    <p>sistema operativo:<span>{product.os}</span></p>
                    <p>resolución de pantalla:<span>{product.displayResolution}</span></p>
                    <p>bateria: <span>{product.battery}</span></p>
                    <p>camara delantera: <span>{product.primaryCamera.map( camera => camera)}</span></p>
                    <p>camara trasera: <span>{product.secondaryCmera}</span></p>
                    <p>dimenciones: <span>{product.dimentions}</span></p>
                    <p>peso: <span>{product.weight}g</span></p>
                </div>
                <div className="card card-option">
                    <div className="section-card">
                        <p>Colores:</p>
                        <Select option={product.options.colors} setOption={setColor} />
                    </div>
                    <div className="section-card">
                        <p>Almacenamiento:</p>
                        <Select option={product.options.storages} setOption={setStorage} />
                    </div>
                </div>
                {loadingCart ? 
                    <ButtonLoading /> : 
                    <button onClick={() => addShoppingCart({id: product.id, colorCode: color, storageCode: storage })} type="button" className="btn btn-primary">Añadir al carro</button>
                }
            </div>
        </div>
    )
}

export default ProductDetail;