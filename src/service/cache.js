import { getAllProducts } from "./products";

const KEY = "products"
const HOUR = 3600 * 1000;

export const allProduct = async () => {
    try{
        const listProducts = localStorage.getItem(KEY)
        if(!listProducts){
            const products = await getAllProducts();
            localStorage.setItem(KEY, JSON.stringify(products));
    
            setTimeout(() => {
                localStorage.removeItem(KEY)
            }, HOUR);
            return products;
        }
        return JSON.parse(listProducts)

    }catch(err){
        throw err;
    }
}