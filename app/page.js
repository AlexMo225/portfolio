import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return (<>   
    
      <main className=" p-20">
        <section className="hero-section py-1">
          <div className="container mx-auto flex items-center justify-between">
            <div className="content max-w-md">
              <p className="text-4xl text-gray-500 mb-2">- JE ME NOMME</p>
              <h1 className="text-7xl font-bold mb-4 text-black">Alex Morel<span className="text-green-500 font-bold text-7xl "> SAHIE.</span></h1>
              <p className="text-gray-600 py-4 max-w-md">Je suis étudiant en développement web Full Stack. Étudiant enthousiaste, je suis actuellement plongé dans le monde fascinant de l informatique à Webstart Paris. Mon parcours académique est une aventure stimulante où je découvre et apprends constamment de nouvelles technologies.</p>
              <ul className="social-icons mt-4">
                <li><Link href="#" className=" text-black"><i className="fab fa-github"></i></Link></li>
                <li><Link href="#" className=" text-black"><i className="fab fa-linkedin"></i></Link></li>
              </ul>
            </div>
            <div className="image pdp rounded-2xl ">
              <Image className="avatar" src="/img/mo.png" width={500} height={300} alt="Alex Morel"/>
            </div>
          </div>
        </section>
        
      </main>

    </>
    );
    }
