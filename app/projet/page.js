import Image from "next/image";
import Link from "next/link";
export default function projet() {
    return (
        <>
            <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen p-20 ">
                <Link href="/detail">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
                        <p className="shadow-md shadow-gray-400 rounded-lg">
                            <div className="rounded-md duration-200 hover:scale-105">
                                <Image
                                    src="/img/terre.png"
                                    width={250}
                                    height={150}
                                    alt="terre"
                                />
                            </div>
                            Allo la Terre
                        </p>
                    </div>
                </Link>
                <Link href="/details">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 p-5 ">
                        <p className="shadow-md shadow-gray-400 rounded-lg">
                            <div className="rounded-md duration-200 hover:scale-105">
                                <Image
                                    src="/img/SP.png"
                                    width={250}
                                    height={150}
                                    alt="terre"
                                />
                            </div>
                            Spice Bloom
                        </p>
                    </div>
                </Link>
                <Link href="/film">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 p-5 ">
                        <p className="shadow-md shadow-gray-400 rounded-lg">
                            <div className="rounded-md duration-200 hover:scale-105">
                                <Image
                                    src="/img/film.png"
                                    width={250}
                                    height={150}
                                    alt="terre"
                                />
                            </div>
                            Moovies
                        </p>
                    </div>
                </Link>
            </div>
            ;
        </>
    );
}
