import Image from "next/image";
import Navbar from "@/app/Navbar";
import Me from "@/public/images/me.jpg";
import Bow from "@/public/images/bow.png";
import Leaves from "@/public/images/leaves.png";

const Home = () => {
  return (
    <div className="bg-[#E0A299] w-screen min-h-screen">
      <Navbar />
      <div className="flex justify-between">
        <div className="relative w-1/3 h-auto px-4 pt-4 pb-20 self-start bg-[#ebeee8] ml-20 mt-25">
          <Image src='https://aakanksha-public-files.s3.us-east-2.amazonaws.com/me.jpg' width= {10} height={10} alt="Me" className="w-full m-0" />
          <p className="absolute text-black right-1/3 text-2xl ">
            Open to work
          </p>
        </div>
        <div className="text-black mt-20">
          <p className="text-3xl ml-10 mb-8">HELLO I'M</p>
          <p className="text-7xl ml-20 mb-8">AAKANKSHA</p>
          <p className="text-7xl relative left-[300px] z-10">RANGDAL</p>
          <div className=" mt-10">
            <p className="ml-68 text-xl">I am a frontend developer</p>
            <p className="ml-68 text-xl">who loves being creative</p>
          </div>
          <Image src={Leaves} alt="leaves" className="w-85 ml-50" />
          <button className="bg-[#63434030] w-35 text-white px-4 py-2 rounded-md ml-75 mt-5 ">
            Resume
          </button>
        </div>
        <div className="w-1/3 mr-20">
          <Image src={Bow} alt="Bow" className="mt-15" />
        </div>
      </div>
    </div>
  );
};

export default Home;
