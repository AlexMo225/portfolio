import Image from "next/image";
import Link from "next/link";
export default function details() {
    return (
        <>
            <div className="py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-100  shadow-xl rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h2 className="text-4xl font-bold text-gray-800">
                                SPICE BLOOM
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Site e-commerce pour la vente d epices de tout genre. 
                            </p>
                        </div>
                        <div className="w-full">
                            <Image
                                className="object-cover object-center  p-3"
                                src="/img/SP.png"
                                width={300} height={100} 
                                alt="allo la terre"
                            />
                        </div>
                        <div className="px-6 py-4">
                            <h3 className="text-xl font-bold text-gray-800">
                                Détails
                            </h3>
                            <ul className="mt-4  text-sm text-gray-600">
                                <li>Type:Projet fin d année </li>
                                <li>Date: Juin 2023</li>
                                <li>Client: Webstart</li>
                                <li>
                                    Technologies utilisées: HTML CSS JAVASCRIPT PHP
                                    
                                </li>
                            </ul>
                        </div>
                        <div className="px-6 py-4 flex justify-start">
                            <a
                                href='https://mjm03.fr/dv22sahie/public/'
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
            </div>
            ;
        </>
    );
}
