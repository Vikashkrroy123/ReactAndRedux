import style from "./service.module.css";
import Image from "next/image";
import img from "@/public/download.jpeg";
export const metadata = {
  title: "Service Desk",
  icons: {
    icon: "/globe.svg",
  },
  description: "Service Page is there you can check all related services",
  authors: [{name: "Vikash Kumar Ray", url: "https://www.vikashkumar.com"}, {name: "Beauty Kumari", url: "https://www.beautykumari.com"}],
  //VVI:-keywords is used to describe the page content in a way that is easy for search engines to understand.
  keywords: ["Service", "Service Desk", "Service Page", "Service Page is there you can check all related services"],
};

const Service = () => {

  return(
    <div className="flex flex-col h-screen w-full bg-lime-950 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-4">

          <div className="flex flex-col items-center gap-2 bg-amber-50 p-6 rounded-lg w-full">
          <div className="flex items-center justify-center rounded-full h-25 w-25 bg-black text-white">
          <Image src="/srk.jpg" alt="Vikash Kumar Ray" width={100} height={100} className="rounded-full h-full w-full" />
          </div>
          <h3 className="font-semibold text-lg text-black!">Vikash Kumar Ray</h3>
          <p className="text-sm text-gray-600">Frontend Developer</p>
          <p className="text-sm text-gray-600">React And Typescript</p>
        </div>


        <div className="flex flex-col items-center gap-2 bg-amber-50 p-6 rounded-lg w-full">
          <div className="flex items-center justify-center rounded-full h-25 w-25 bg-black text-white">
          <Image src={img} alt="Beauty Kumari" width={100} height={100} className="rounded-full h-full w-full" placeholder="blur" blurDataURL={img.blurDataURL}/>
          </div>
          <h3 className="font-semibold text-lg text-black!">Beauty Kumari</h3>
          <p className="text-sm text-gray-600">Teacher</p>
          <p className="text-sm text-gray-600">B.com</p>
        </div>

        <div className="flex flex-col items-center gap-2 bg-amber-50 p-6 rounded-lg w-full">
          <div className="flex items-center justify-center rounded-full h-25 w-25 bg-black text-white">
          <Image src="/srk.jpg" alt="Vikash Kumar Ray" width={100} height={100} className="rounded-full h-full w-full" />
          </div>
          <h3 className="font-semibold text-lg text-black!">Vikash Kumar Ray</h3>
          <p className="text-sm text-gray-600">Frontend Developer</p>
          <p className="text-sm text-gray-600">React And Typescript</p>
        </div>

        <div className="flex flex-col items-center gap-2 bg-amber-50 p-6 rounded-lg w-full">
          <div className="flex items-center justify-center rounded-full h-25 w-25 bg-black text-white">
          <Image src="/download.jpeg" alt="Vikash Kumar Ray" width={100} height={100} className="rounded-full h-full w-full" />
          </div>
          <h3 className="font-semibold text-lg text-black!">Vikash Kumar Ray</h3>
          <p className="text-sm text-gray-600">Frontend Developer</p>
          <p className="text-sm text-gray-600">React And Typescript</p>
        </div>

        <div className="flex flex-col items-center gap-2 bg-amber-50 p-6 rounded-lg w-full">
          <div className="flex items-center justify-center rounded-full h-25 w-25 bg-black text-white">
          <Image src="/srk.jpg" alt="Vikash Kumar Ray" width={100} height={100} className="rounded-full h-full w-full" />
          </div>
          <h3 className="font-semibold text-lg text-black!">Vikash Kumar Ray</h3>
          <p className="text-sm text-gray-600">Frontend Developer</p>
          <p className="text-sm text-gray-600">React And Typescript</p>
        </div>

        <div className="flex flex-col items-center gap-2 bg-amber-50 p-6 rounded-lg w-full">
          <div className="flex items-center justify-center rounded-full h-25 w-25 bg-black text-white">
          <Image src="/srk.jpg" alt="Vikash Kumar Ray" width={100} height={100} className="rounded-full h-full w-full" />
          </div>
          <h3 className="font-semibold text-lg text-black!">Vikash Kumar Ray</h3>
          <p className="text-sm text-gray-600">Frontend Developer</p>
          <p className="text-sm text-gray-600">React And Typescript</p>
        </div>

        <div className="flex  relative flex-col items-center gap-2 bg-amber-50 p-6 rounded-lg w-full">
          <div className="flex items-center justify-center rounded-full h-25 w-25 bg-black text-white">
          <Image src={img} alt="Vikash Kumar Ray" fill={true} quality={500} priority={false} placeholder="blur" blurDataURL=''/>
          </div>
        </div>
        
  
      </div>

    </div>
  )
};

export default Service;