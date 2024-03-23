import Image from "next/image";
import Link from "next/link";
export default function contact () {
  return (
    <div className="p-8 bg-black min-h-screen" >
        <div className="p-8 bg-black grid grid-cols-2 gap-8 m-20">
      <div className="space-y-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nom:
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            className="w-full border-gray-300 rounded-lg p-2"
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-500">
            Envoyer message
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Adresse:
          </label>
          <p className="text-gray-500">
            8 Residence Bel Air<br />
            91160 LONGJUMEAU
          </p>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone:
          </label>
          <p className="text-gray-500">0766167789</p>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            E-Mail:
          </label>
          <p className="text-gray-500">alexmorel1999@gmail.com</p>
        </div>
      </div>
    </div>
    </div>
    
  );
}

