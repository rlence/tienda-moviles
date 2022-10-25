URL = process.env.REACT_APP_BACKEND_URL

export const getAllProducts = async () => {
    try{
        const url = `${URL}/product`;
        const res = await fetch(url);
        return await res.json()
    }catch(err){
        console.log(err);
    }
}

export const gatProduct = async (productId) => {
    try{
        const url = `${URL}/product/${productId}`;
        const res = await fetch(url);
        return await res.json()
    }catch(err){
        console.log(err)
    }
}
