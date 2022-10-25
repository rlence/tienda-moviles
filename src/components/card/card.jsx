import "./card.scss";

function Card({product}){
    console.log(product)
    return(
        <div className="card" key={product.id} id={product.id}>
            <div className="content-img">
                <img src={product.imgUrl} className="card-img-top" alt={product.brand} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.brand}</h5>
                <p className="card-text">{product.model}</p>
                <p className="card-text">{product.price}</p>
            </div>
        </div>
    )
}

export default Card