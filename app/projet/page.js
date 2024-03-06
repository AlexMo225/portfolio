import Image from "next/image";
import Link from "next/link";
export default function projet() {
    return (
        <>
        <div className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 p-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <Link href="/detail"> 
    <div class="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <Image  width={250}  height={150} className="h-64 w-full object-cover object-center" src="/img/terre.png" alt="Projet 1"/>
        <div className="px-6 py-4">
          <h3 className="text-xl font-bold text-gray-800">Nom Projet 1</h3>
          <p className="mt-2 text-sm text-gray-600">Description du projet 1</p>
        </div>
        <div className="px-6 py-4">
          <Link href="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Voir détails</Link>
        </div>
      </div>
      </Link>  

      <Link href="/details">
      <div class="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <Image width={100} height={100} className="h-64 w-full object-cover object-center" src="/img/SP.png" alt="Projet 2"/>
        <div className="px-6 py-4">
          <h3 className="text-xl font-bold text-gray-800">Nom Projet 2</h3>
          <p className="mt-2 text-sm text-gray-600">Description du projet 2</p>
        </div>
        <div className="px-6 py-4">
          <Link href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Voir détails</Link>
        </div>
      </div>
      </Link> 

      <Link href="/film">
      <div class="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <Image width={250} height={150} className="h-64 w-full object-cover object-center" src="/img/film.png" alt="Projet 3"/>
        <div className="px-6 py-4">
          <h3 className="text-xl font-bold text-gray-800">Nom Projet 3</h3>
          <p className="mt-2 text-sm text-gray-600">Description du projet 3</p>
        </div>
        <div className="px-6 py-4">
          <Link href="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Voir détails</Link>
        </div>
      </div>
      </Link>
      
      <Link href="/film">
      <div class="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <Image width={250} height={150} className="h-64 w-full object-cover object-center" src="/img/film.png" alt="Projet 3"/>
        <div className="px-6 py-4">
          <h3 className="text-xl font-bold text-gray-800">Nom Projet 3</h3>
          <p className="mt-2 text-sm text-gray-600">Description du projet 3</p>
        </div>
        <div className="px-6 py-4">
          <Link href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Voir détails</Link>
        </div>
      </div>
      </Link>
      
      <Link href="/film">
      <div class="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <Image width={250} height={150} className="h-64 w-full object-cover object-center" src="/img/film.png" alt="Projet 3"/>
        <div className="px-6 py-4">
          <h3 className="text-xl font-bold text-gray-800">Nom Projet 3</h3>
          <p className="mt-2 text-sm text-gray-600">Description du projet 3</p>
        </div>
        <div className="px-6 py-4">
          <Link href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Voir détails</Link>
        </div>
      </div>
      </Link>
      
      <Link href="/film">
      <div class="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <Image width={250} height={150} className="h-64 w-full object-cover object-center" src="/img/film.png" alt="Projet 3"/>
        <div className="px-6 py-4">
          <h3 className="text-xl font-bold text-gray-800">Nom Projet 3</h3>
          <p className="mt-2 text-sm text-gray-600">Description du projet 3</p>
        </div>
        <div className="px-6 py-4">
          <Link href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Voir détails</Link>
        </div>
      </div>
      </Link>
      



    </div>
  </div>
</div>
            ;
        </>
    );
}
