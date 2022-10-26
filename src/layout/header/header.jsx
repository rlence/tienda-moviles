import { useContext } from "react";
import { Link } from "react-router-dom";
import ShopCar from "../../assets/img/shopCar.png"
import "./header.scss";

import { HeaderContext } from "../../context/headerContext";

function Header(){
    const {value} = useContext(HeaderContext);
    console.log(value, "CONTEXT")

    return(
        <header className="navbar bg-light">
            <div className="nav">
                <Link to="/" className="logo">BuyPhone</Link>
                <nav> {value.breadcrumbs.map( breadcrumb => breadcrumb)} </nav>
                <div className="icon-shop-car">
                    <p>{value.cart}</p>
                    <img src={ShopCar} alt="shop car"></img>
                </div>
            </div>
        </header>
    )
}

export default Header;