import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to the <span className="text-blue-600">School Management System</span>
        </h1>

        <p className="mt-3 text-2xl">
          Your one-stop solution for managing academic and student needs.
        </p>

        <div className="mt-6 space-x-4">
          <Link href="/academics/terms" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">

              Academics
            
          </Link>
          <Link href="/students" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">

              Students
            
          </Link>
          
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
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
