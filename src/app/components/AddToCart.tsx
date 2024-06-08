"use client"
import toast, { Toaster } from 'react-hot-toast';

const AddToCart = () => {
    const handleCartAdd = ()=>{
      toast.success("Item added to cart")
    }
  return (
    <div>
        <button onClick={handleCartAdd} className='w-full mt-4 py-2 text-lg px-6 bg-green-500 text-orange-600 hover:bg-green-600 rounded-md font-bold hover:text-red-600 duration-300'>
            Add To Cart
        </button>
        <Toaster />
    </div>
  )
}

export default AddToCart