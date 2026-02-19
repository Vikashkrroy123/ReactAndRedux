import Link from "next/link";

const Navigation = () => {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-white p-2 sticky top-0 z-50 font-bold text-black w-full flex items-center justify-center">
          {/* <p className="w-full">Home Navigation</p> */}
        <ul className="flex justify-center items-center gap-2 w-full">
            <li className="hover:text-blue-500 hover:bg-gray-200 p-4 rounded-md group hover:animate-pulse"><Link href="/"><span className="text-2xl pr-4 opacity-0 hover:opacity-100 group-hover:opacity-100"> 🏠</span>Home</Link></li>
            <li className="hover:text-blue-500 hover:bg-gray-200 p-4 rounded-md group hover:animate-pulse"><Link href="/about"><span className="text-2xl pr-4 opacity-0 hover:opacity-100 group-hover:opacity-100"> 👤</span>About</Link></li>
            <li className="hover:text-blue-500 hover:bg-gray-200 p-4 rounded-md group hover:animate-pulse"><Link href="/contact"><span className="text-2xl pr-4 opacity-0 hover:opacity-100 group-hover:opacity-100"> 📞</span>Contact</Link></li>
            <li className="hover:text-blue-500 hover:bg-gray-200 p-4 rounded-md group hover:animate-pulse"><Link href="/service"><span className="text-2xl pr-4 opacity-0 hover:opacity-100 group-hover:opacity-100"> 💼</span>Service</Link></li>
            <li className="hover:text-blue-500 hover:bg-gray-200 p-4 rounded-md group hover:animate-pulse"><Link href="/serverSideComponent"><span className="text-2xl pr-4 opacity-0 hover:opacity-100 group-hover:opacity-100"> 💼</span>Server Component</Link></li>
            <li className="hover:text-blue-500 hover:bg-gray-200 p-4 rounded-md group hover:animate-pulse"><Link href="/clientComponent"><span className="text-2xl pr-4 opacity-0 hover:opacity-100 group-hover:opacity-100"> 💼</span>Client Component</Link></li>
        </ul>
    </div>
  )
};

export default Navigation;