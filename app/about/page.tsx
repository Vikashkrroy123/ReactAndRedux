import Link from "next/link";

const About = () => {
  return (
    <div className="flex w-full! gap-10">
    <div className=" text-shadow-green-600 custom_class">About Page</div>
   <button className="bg-blue-500 text-white p-2 ounded-2 hover:bg-transparent"><Link href="/">Home</Link></button>
    </div>
  )
};

export default About;