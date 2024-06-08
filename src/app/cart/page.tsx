import { IoTrashOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GoXCircle } from "react-icons/go";
import Link from 'next/link'
import Image from "next/image";
const page = () => {
    const cartCount = 1
    return (
        <div className='m-5 px-20'>
            {cartCount > 0 ? (
                <>
                    <h2 className='text-4xl font-semibold'>Cart Items: {cartCount}</h2>
                    <button className='text-orange-400 mt-2 font-bold hover:text-red-600 hover:cursor-pointer'>
                        Clear all <IoTrashOutline  className='inline-block w-6 h-6' />
                    </button>
                </>
            ) : (
                <>
                    <h2 className='text-4xl font-semibold'>Your shopping cart is empty !</h2>
                    <Link href='/products' className='text-xl mt-1 text-orange-500 underline'>Shop here</Link>
                </>
            )}

            {
                cartCount > 0 && (
                    <div>
                        <div className='flex justify-between border rounded-md p-4 my-2 bg-white hover:shadow-lg'>
                            <Link href="/product/p1" className='flex items-center'>
                            <Image src="/images/1.jpeg" className='w-20 h-auto ' alt="product" width={200} height={200} />

                                <p className='font-semibold text-xl ml-2'>School bag</p>
                            </Link>
                            <div className='flex items-center gap-5'>
                                <div className='flex items-center gap-3'>
                                    <button className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'>
                                        <FaMinus className='w-6 h-6' />
                                    </button>
                                    <p className='font-semibold text-xl'>0</p>
                                    <button className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'>
                                        < FaPlus className='w-6 h-6' />
                                    </button>
                                </div>
                                <p>x <span className='text-xl font-semibold'>999</span></p>
                                <button className='text-orange-500 hover:text-red-600'>
                                    <GoXCircle  className='w-6 h-6' />
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col items-end border-t py-4 mt-8'>
                            <p className='text-xl'>
                                Total <span className='font-bold text-green-500'>5000</span>
                            </p>
                            <button className='mt-4 py-2 px-6 bg-green-500 text-orange-700 hover:text-orange-500 hover:bg-green-700 rounded-md font-bold duration-300'>
                                Checkout
                            </button>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default page