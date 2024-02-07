import Image from "next/image";
import Link from "next/link";
export default function projet() {
    return (<> 
<div className=" flex flex-wrap justify-between">
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-64 m-2 rounded-xl">
        <div class="items-center justify-center flex m-2 rounded-xl">
            <Image src="/img/terre.png" width={300} height={200} />
        </div>
        <p className="text-center text-black font-Jost-ExtraBold">Allo la Terre</p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-64 m-2 rounded-xl">
        <div class="items-center justify-center flex m-2 rounded-xl">
            <Image src="/img/SP.png" width={300} height={200} />
        </div>
        <p className="text-center text-black font-Jost-ExtraBold">
            Spice Bloom
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-64 m-2 rounded-xl">
        <div class="items-center justify-center flex m-2 rounded-xl">
            <Image src="/img/film.png" width={300} height={200} />
        </div>
        <p className="text-center text-black font-Jost-ExtraBold">API Film </p>
    </div>
</div>;
</>
    );
    }