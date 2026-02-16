import pagedata from "@/app/components/pageData.json";
import Navbar from "../Navbar";
import Image from "next/image";
import elephant from "@/app/assets/Elephant.png";
const page = () => {
  return (
    <div className="bg-[#e0a299] w-screen min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <h2 className="text-4xl mt-6 font-bold text-center text-black">
          {pagedata.about.title}
        </h2>
        <div className="bg-[#E0A299] w-2/3 flex justify-center items-center gap-6 ">
          <div className="w-1/2">
            <Image
              src={elephant}
              alt="Profile Image"
              width={400}
              height={400}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            {pagedata.about.description.map((paragraph, index) => (
              <p key={index} className="text-xl text-black  text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 p-4">
        <div className="text-center text-[#b0a09f] hover:text-[#564c4b] cursor-pointer text-3xl rounded-2xl p-3 w-1/2 m-auto bg-[#a1726c]">
          View My Art
        </div>
        <div className="text-center text-[#b0a09f] hover:text-[#564c4b] cursor-pointer text-3xl rounded-2xl p-3 w-1/2 m-auto bg-[#a1726c]">
          View My Designs
        </div>
        <div className="text-center text-[#b0a09f] hover:text-[#564c4b] cursor-pointer text-3xl rounded-2xl p-3 w-1/2 m-auto bg-[#a1726c]">
          View My Photography
        </div>
        <div className="text-center text-[#b0a09f] hover:text-[#564c4b] cursor-pointer text-3xl rounded-2xl p-3 w-1/2 m-auto bg-[#a1726c]">
          View My Styles
        </div>
      </div>
    </div>
  );
};

export default page;
