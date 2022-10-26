URL = process.env.REACT_APP_BACKEND_URL

export const getAllProducts = async () => {
    try{
        const url = `${URL}/product`;
        const res = await fetch(url);
        return await res.json()
    }catch(err){
        console.log(err);
        throw new Error("Error to load de list of products")
    }
}

export const gatProduct = async (productId) => {
    try{
        const url = `${URL}/product/${productId}`;
        const res = await fetch(url);
        return await res.json()
    }catch(err){
        console.log(err)
        throw new Error("Error to load de list of products")
    }
}

export const addProductToShoppingCart = async (product) => {
    try{
        const url = `${URL}/cart`;
        const res = await fetch(url,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        return await res.json()
    }catch(err){
        console.log(err)
        throw new Error("Error to save product to the car")
    }
}
