import { Link } from "react-router-dom";
import ShopCar from "../../assets/img/shopCar.png"
import "./header.scss";

function Header(){
    return(
        <header className="navbar bg-light">
            <div className="nav">
                <Link to="/" className="logo">BuyPhone</Link>
                <nav> aqui la nav </nav>
                <div className="icon-shop-car">
                    <img src={ShopCar} alt="shop car"></img>
                </div>
            </div>
        </header>
    )
}

export default Header;