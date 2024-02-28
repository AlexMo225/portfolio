import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/components/provider'
import Image from "next/image";
import Link from "next/link";



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Page Accueil',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr-FR">
      <body className={inter.className} p-5>
        <div className="flex justify-between items-center w-full h-35 px-4 text-white bg-black ">
          <div className="logo">
            
            <Link href="/"> <Image className="avatar" src="/img/Group30.png" width={200} height={200} alt="Alex Morel"/></Link>
          </div>
            <ul className="hidden md:flex">
              <li><Link href="/projet" className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-green-500">Projets</Link></li>

              <li><a href="#Expériences" className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-green-500">Expériences</a></li>
              <li><a href="#Diplomes" className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-green-500">Diplomes</a></li>
              <li>
              <a href="assets/cv.pdf" target="_blank"  className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-green-500">Voir Cv</a>
              </li>
            </ul>
        </div>
      <Provider>{children}</Provider>
      </body>
    </html>
  )
}
