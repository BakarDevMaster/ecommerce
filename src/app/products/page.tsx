import React from 'react'
import ProductsCard from '../components/ProductsCard'
import Link from 'next/link'
import { getProducts } from '@/services/productService'
import ProductCard from '../components/ProductsCard'

const page =async() => {
  const products =await getProducts()
  return (
    <div className="m-4 flex flex-wrap gap-2">
            {products && products.data.map((item,index)=>  <ProductCard key={item.id} item={item} index={index} /> )}
    
           </div>
  )
}

export default page
