import Image from "next/image";
import IMG1 from "@/public/landing-page.png";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      
      <main className="flex flex-col md:grid md:grid-cols-2 items-center justify-center flex-1 px-4 md:px-20 text-center">
        <div className="px-6">
          <h1 className="text-2xl md:text-6xl font-bold mt-10 md:mt-0">
            Welcome to the <br/><span className="text-blue-600">SB School Management System</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl">
            Your one-stop solution for managing your school needs.
          </p>
        </div>
        
        <div className="mt-8 md:mt-12 px-6">
          <Image
            src={IMG1}
            className="h-96 w-full object-fit md:rounded-lg"
            alt="Landing page image"
            placeholder="blur" // Optional: you can use a low-res version of your image here
          />
        </div>
      
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center text-sm md:text-base text-gray-500 hover:text-gray-800"
          href="https://yourschool.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Your School
        </a>
      </footer>
    </div>
  );
}
