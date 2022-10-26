import { useContext } from "react";
import { Link } from "react-router-dom";
import ShopCar from "../../assets/img/shopCar.png"
import "./header.scss";

import { HeaderContext } from "../../context/headerContext";

function Header(){
    const {value} = useContext(HeaderContext);

    return(
        <header className="navbar bg-light">
            <div className="nav">
                <div className="nav-content">
                    <Link to="/" className="logo">BuyPhone</Link>
                    <p>|</p>
                    <nav> {value.breadcrumbs.map( breadcrumb => <span key={breadcrumb}>{breadcrumb}</span>)} </nav>
                </div>

                <div className="icon-shop-car">
                    <div>
                        <span>{value.cart}</span>
                    </div>
                    <img src={ShopCar} alt="shop car"></img>
                </div>
            </div>
        </header>
    )
}

export default Header;