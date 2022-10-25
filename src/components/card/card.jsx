import { Link } from "react-router-dom";

import "./card.scss";

function Card({product}){
    return(
        <Link to={product.id} className="card" key={product.id} id={product.id}>
            <div className="content-img">
                <img src={product.imgUrl} className="card-img-top" alt={product.brand} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.brand}</h5>
                <p className="card-text">{product.model}</p>
                <p className="card-text">{product.price}</p>
            </div>
        </Link>
    )
}

export default Card