import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css"
export default function Home() {
    return (<>   
    
      <main className=" bg-black p-20">
        <section className="hero-section py-1">
          <div className="container mx-auto flex items-center justify-between">
            <div className="content max-w-md">
              <h1 className="text-7xl font-bold mb-4 text-white-900">Alex Morel<span className="text-green-500 font-bold text-7xl "> SAHIE.</span></h1>
              <p className="text-gray-400 py-6 max-w-md">Je suis étudiant en développement web Full Stack. Étudiant enthousiaste, je suis actuellement plongé dans le monde fascinant de l informatique à Webstart Paris. Mon parcours académique est une aventure stimulante où je découvre et apprends constamment de nouvelles technologies.</p>
             
                <a href="https://github.com/AlexMo225" className="  hover:text-green-500 text-white px-2 text-2xl" target="_blank" ><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/alex-morel-sahie-1a73911b4/" target="_blank" className=" hover:text-green-500 text-white text-2xl"><i class="bi bi-linkedin"></i></a>
              
            </div>
            <div className="image pdp rounded-2xl ">
              <Image className="avatar" src="/img/mo.png" width={400} height={300} alt="Alex Morel"/>
            </div>
          </div>
        </section>
        
      </main>

    </>
    );
    }
