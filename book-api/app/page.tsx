import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

async function getBooks() {
  const res = await fetch("https://simple-books-api.glitch.me/books")

  if (!res.ok) {
    throw new Error("failed to retrive")
  }

  return res.json()
}
interface Booktype {
  id: number;
  name: string;
  type: string;
  available: boolean;

}
export default async function Home() {
  const bookData = await getBooks()


  return (
    <main >
      <ul className=' flex flex-col sm:flex-row gap-5 flex-wrap'>
        {bookData.map((book: Booktype) =>
          <div key={bookData.id} className="py-2 px-4 mx-auto my-5  max-w-sm justify-between bg-emerald-400 rounded-xl shadow-lg space-y-5 ">
            <div className='py-10 px-5 flex flex-col justify-center items-center w-60 md:w-80'>
              <li className='text-gray-800 font-semibold text-lg'>{book.name}</li>

              <Link key={bookData.id} href={`/${book.id}`} > <li className='text-gray-600 py-6'>(View details) </li></Link>
            </div>

          </div>

        )}
      </ul>
    </main>
  )
}
