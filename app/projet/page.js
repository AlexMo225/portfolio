"use client";
import Image from "next/image";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
export default function projet() {
    return (
        <>
            <div className="bg-black py-8 min-h-screen">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <CldImage
                                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1717446005/portfolio/k2cbtaaipkbef0nccb0f.png`}
                                alt="Projet 1"
                                className="h-64 w-full object-cover object-center"
                                width="250"
                                height="150"
                                priority
                            />
                            <div className="px-6 py-4">
                                <h3 className="text-xl font-bold text-gray-800">
                                    Bienvenue sur la Terre
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Site Api Méteo
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <Link
                                    href="/detail"
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Voir détails
                                </Link>
                            </div>
                        </div>

                        <div class="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <CldImage
                                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1717446005/portfolio/dvdcdhwdo0rznrvdkpfk`}
                                alt="Projet 1"
                                className="h-64 w-full object-cover object-center"
                                width="250"
                                height="150"
                                priority
                            />
                            <div className="px-6 py-4">
                                <h3 className="text-xl font-bold text-gray-800">
                                    SPICE BLOOM
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Site E-commerce vente d'épices
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <Link
                                    href="/details"
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Voir détails
                                </Link>
                            </div>
                        </div>

                        <div class="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <CldImage
                                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1717446013/portfolio/pvs3e3fxudzmq7psrwuv.png`}
                                alt="Projet 1"
                                className="h-64 w-full object-cover object-center"
                                width="250"
                                height="150"
                                priority
                            />
                            <div className="px-6 py-4">
                                <h3 className="text-xl font-bold text-gray-800">
                                    Ciné
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Site Api Cinema
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <Link
                                    href="/film"
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Voir détails
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            ;
        </>
    );
}
