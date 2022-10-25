import "./header.scss";
import ShopCar from "../../assets/img/shopCar.png"

function Header(){
    return(
        <header className="navbar bg-light">
            <div className="nav">
                <h1 className="logo">BuyPhone</h1>
                <nav> aqui la nav </nav>
                <div className="icon-shop-car">
                    <img src={ShopCar} alt="shop car"></img>
                </div>
            </div>
        </header>
    )
}

export default Header;