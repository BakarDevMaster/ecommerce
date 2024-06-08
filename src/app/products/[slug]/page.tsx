import { FaRegCircleCheck } from "react-icons/fa6";
import AddToCart from "@/app/components/AddToCart";
import Image from 'next/image'
import ShareBtn from '@/app/components/ShareBtn'
import { getProductbyId } from "@/services/productService";
import Link from "next/link";


const Product1 = async ({params}:{params:{slug:string}}) => {
            const product = await getProductbyId(params.slug)
            
            if (!product) {
                // handle the case when product is null
                return <div>Product not found</div>;
            }
    return (
        <div className='m-2 px-20'>
            <div className='flex justify-around items-center flex-wrap'>
                <div className='w-80 h-80'>
                    <Image
                        priority
                        src={product.images[0]}
                        className='w-full h-auto rounded-lg'
                        alt='product'
                        width={250}
                        height={250}
                    />
                </div>
                <div className='flex-1 max-w-md border rounded-md shadow-lg p-6 bg-white'>
                    <h2 className='text-3xl font-semibold'>{product.name}</h2>
                    <div className='flex pt-2 gap-2'>
                        <FaRegCircleCheck className='text-orange-500 w-5 h-5' />
                        <span className='font-semibold'>In stock</span> |
                        <ShareBtn/>
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <p className='text-gray-500'>Price:</p>
                        <p className='text-xl font-semibold'>
                       {product.default_price ? `$${(product.default_price as any).unit_amount}` : 'Price not available'}
                       </p>


                    </div>
                    <AddToCart />
                </div>
            </div>
            <p className='mt-8 text-2xl'>
                {product.description}
            </p>
            <Link href={"/products"} >
            <div className=" text-center ">
             <h1 className="text-orange-500 font-bold text-2xl sm:text-3xl hover:underline hover:text-red-600  ">
               View all {">>"}
            </h1></div>
            </Link>
        </div>
    )
}

export default Product1
