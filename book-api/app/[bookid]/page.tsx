import React from 'react'
import Link from 'next/link';
import Wrapper from '../Wrapper/page'
async function getbook(id: number) {
    const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error("Failed to retrive")
    }
    return res.json()
}


export default async function page({ params }: any) {
    const bookDetails = await getbook(params.bookid)
    return (
        <Wrapper>
            <div className='py-2 px-4 mx-auto my-5  max-w-sm justify-between bg-emerald-400 rounded-xl shadow-lg space-y-5 '>
                <div className='py-10 px-2 flex flex-col justify-center items-start  w-70 md:w-80'>
                    <div className='text-lg font-semibold'> {bookDetails.name} </div>
                    <div className='text-gray-800'> Author of Book:  {bookDetails.author} </div>
                    <div className='text-gray-700'> Current in Stock: {bookDetails["current-stock"]} </div>
                    <div className='text-black text-lg font-bold'> Price: ${bookDetails.price} </div>
                    <div className=' flex  items-center justify-around gap-14'>
                        <Link href={`/`}>    <button className='bg-sky-600 px-2 py-2 mt-5  sm:px-2 rounded-md text-white'> Add to cart</button></Link>
                        <div className='text-white mt-3 border-b-4 border-double '> {bookDetails.available ? "Available" : "Not in stock"} </div>
                    </div>
                </div>
            </div>
        </Wrapper>


    )
}
