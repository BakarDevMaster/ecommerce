import Link from "next/link";
import { getProducts } from "@/services/productService";
import ProductCard from "./components/ProductsCard";




export default async function Home() {
  const products =await getProducts(8)
  console.log(JSON.stringify(products))
  return (
<div>

  {/* Banner */}
  <div className="bg-gray-800 h-72 flex items-center justify-center p-4 md:p-0 flex-wrap">
    <h1 className="sm:text-4xl text-3xl tracking-tight sm:tracking-normal text-white font-bold w-fit">
      Pakistan&apos;s most loved <span className="text-orange-500">fashion</span> platform for <span className="text-rose-500">Coders!</span>
    </h1>
  </div>

  {/* CARDS */}
  <div className="m-4 grid grid-cols-4 gap-2">
            {products && products.data.map((item,index)=>  <ProductCard key={item.id} item={item} index={index} /> )}
    
           </div>

  <Link href={"/products"} >
  <div className=" text-center mt-10 mb-20 ">
     <h1 className="text-orange-500 font-bold text-2xl sm:text-3xl hover:underline hover:text-red-600  ">
      View all {">>"}
     </h1></div>
  </Link>


  
</div>
)
}


