import Image from "next/image";
import Link from "next/link";
export default function detail() {
    return (
        <>
        <div className=" py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-100 shadow-xl rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h2 className="text-4xl font-bold text-gray-800">
                                Allo la terre
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Site Api Meteo .
                                Donne la météo de differentes ville du monde en Direct .
                            </p>
                        </div>
                        <div className="w-full">
                            <Image
                                className="object-cover object-center  p-3"
                                src="/img/terre.png"
                                width={300} height={100} 
                                alt="allo la terre"
                            />
                        </div>
                        <div className="px-6 py-4">
                            <h3 className="text-xl font-bold text-gray-800">
                                Détails
                            </h3>
                            <ul className="mt-4  text-sm text-gray-600">
                                <li> Type: Devoir Classe </li>
                                <li>Date: Mars 2023</li>
                                <li>Client: Vincent Kpaclo</li>
                                <li>
                                    Technologies utilisées: HTML CSS JAVASCRIPT
                                    API
                                </li>
                            </ul>
                        </div>
                        <div className="px-6 py-4 flex justify-start">
                            <a
                                href='https://weatherappterre.netlify.app/'
                                className="text-sm text-blue-500 hover:text-green-700"
                            >
                               Voir le site
                            </a>
                        </div>
                        <div className="px-6 py-4 flex justify-end">
                            <Link
                                href="/projet"
                                className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Retour
                            </Link>
                        </div>
                    </div>
                </div>
            </div>;
        </>
    );
}
