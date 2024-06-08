import { stripe } from "../utils/stripe";
import Stripe from 'stripe'; // import the Stripe namespace

export const getProducts = async (limit?: number): Promise<Stripe.ApiList<Stripe.Product> | null> => {
    let products: Stripe.ApiList<Stripe.Product> | null = null;
    try{
        products = await stripe.products.list({
        limit: limit || 8,
        expand: ['data.default_price']
    })
    }catch(err){
        console.log("ERROR FROM STRIPE:",err)
    }
 
    return products
}

export const getProductbyId = async (productId: string): Promise<Stripe.Product | null> => {
    let product: Stripe.Product | null = null;
    try {
        product = await stripe.products.retrieve(productId, {
            expand: ['default_price']
        })
    }catch(err){
        console.log("ERROR FROM STRIPE:",err)
    }
   
    return product
}



