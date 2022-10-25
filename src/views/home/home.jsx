import { useEffect } from "react";

import { getAllProducts } from "../../service/products";

function Home(){

    useEffect(() => {
        getAllProducts();
    })

    return(
        <div>ESTOY EN EL HOME</div>
    )
}

export default Home;