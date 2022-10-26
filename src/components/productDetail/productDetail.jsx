import "./productDetail.scss";

import Select from "../select/select";

function ProductDetail({product}){
    return(
        <div className="product-content">
            <div className="content-img">
                <img src={product.imgUrl}></img>
            </div>
            <div className="content-info">
                <div className="card">
                    <h2>{product.brand}</h2>
                    <p>{product.model}</p>
                    <hr></hr>
                    <p>price: <span>{product.price}</span>€</p>
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
                        <Select option={product.options.colors} />
                    </div>
                    <div className="section-card">
                        <p>Almacenamiento:</p>
                        <Select option={product.options.storages} />
                    </div>
                </div>
                <button type="button" class="btn btn-primary">Añadir al carro</button>
            </div>
        </div>
    )
}

export default ProductDetail;