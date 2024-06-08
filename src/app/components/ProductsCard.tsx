// "use client"
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// type Asset = {
//   sys: {
//     id: string;
//   };
//   fields: {
//     file: {
//       url: string;
//     };
//   };
// };

// type Item = {
//   fields: {
//     img: {
//       sys: {
//         id: string;
//       };
//     };
//     heading: string;
//     description: {
//       content: [
//         {
//           content: [
//             {
//               value: string;
//             }
//           ];
//         }
//       ];
//     };
//     price: number;
//   };
// };

// type Data = {
//   items: Item[];
//   includes: {
//     Asset: Asset[];
//   };
// };

// async function getData(): Promise<Data> {
//   const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}&content_type=ecommerce`,{
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

// const ProductsCard = () => {
//   const [data, setData] = useState<Data | null>(null);
//   const [viewAll, setViewAll] = useState(false);

//   useEffect(() => {
//     getData().then(data => setData(data)).catch(err => console.error(err));
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//     <Link href={`/products/${data.items[0].fields.img.sys.id}`}>  
//       <div className="grid grid-cols-2  md:grid-cols-3  gap-4 mt-4">
//         {data.items.slice(0, viewAll ? data.items.length : 6).map((item, index) => {
//           const relatedImage = data.includes.Asset.find(asset => asset.sys.id === item.fields.img.sys.id);
//           return (
//             <div key={index} className="rounded overflow-hidden  p-4 bg-green-400 hover:cursor-pointer hover:shadow-xl">
//               <div  className='text-center  flex flex-col  items-center '>
//                 <div className='overflow-hidden h-[250px]'>
//                   <div > <Image className='rounded-md shadow-md hover:scale-125  duration-700 ' src={`https:${relatedImage?.fields.file.url}`} alt={item.fields.heading} width={250} height={250} /></div>
//                 </div> 
//                 <div className="px-6 py-4">
//                   <div className="font-bold text-xl mb-2 uppercase text-orange-500 hover:text-orange-700">{item.fields.heading}</div>
//                   <p className="text-gray-700 text-base line-clamp-1">{item.fields.description.content[0].content[0].value}</p>
//                 </div>
//                 <div className="px-6 pt-4 pb-2 ">
//                   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:shadow-xl">Price: {item.fields.price}</span>
//                 </div>
//               </div>
//             </div>
//           )
//         })}
        
//       </div>
//     </Link> 
//     {!viewAll && (
//         <button onClick={() => setViewAll(true)} className="font-bold hover:underline mt-4 text-orange-500 hover:text-orange-700 text-2xl sm:text-3xl w-full text-center">
//           View All Products {">>"}
//         </button>
//       )}

// {viewAll && (
//         <button onClick={() => setViewAll(false)} className="font-bold hover:underline mt-4 text-orange-500 hover:text-orange-700 text-2xl sm:text-3xl w-full text-center">
//           Show less Products {">>"}
//         </button>
//       )} 

//     </div>
//   )
// }

// export default ProductsCard;


import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({item,index}:{item?:any,index?:any}) => {
    return (
        <Link href={`/products/${item.id}` }>
            <div className='  '>

           <div className='bg-green-500  p-4  hover:shadow-lg  rounded-lg'>
             <div className='overflow-hidden h-[320px]'><Image priority = {index == 0} src={item.images[0]} className="rounded-lg w-[320px] hover:scale-125  duration-700 " alt='product' width={320} height={280}/></div>
           
                    <div className=' pt-4 flex justify-between '>  
                    <div className='text-start '><h1 className="font-bold text-2xl uppercase text-orange-600 hover:text-red-700">{item. name}</h1>
                    <p className="w-40 truncate text-slate-700">{item.description}</p></div>
                    <div className='  font-bold text-xl text-rose-600 hover:text-white/65 '><h2 className='bg-gray-800 rounded-3xl py-1 px-2 text-center duration-300'>${item.default_price.unit_amount}</h2></div>
                    </div>
            </div>
            
           
            </div>
        </Link>
    )
}

export default ProductCard