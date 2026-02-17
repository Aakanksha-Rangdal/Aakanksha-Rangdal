"use client";
import Image from "next/image";
import Navbar from "@/app/Navbar";
import Me from "@/public/images/me.avif";
import Bow from "@/public/images/bow.png";
import Leaves from "@/public/images/leaves.png";
import TypeIt from "typeit-react";
const Home = () => {
  const roles = ["an UI/UX Designer", "a Frontend Engineer", "an Artist"];
  return (
    <div className="bg-[#E0A299] w-screen min-h-screen">
      <Navbar />
      <div className="flex justify-between p-5 my-20">
        <div className="relative w-1/3 h-auto px-4 pt-4 pb-20 self-start bg-[#ebeee8] ">
          <Image
            src={Me}
            width={200}
            height={200}
            alt="Me"
            className="w-full m-0"
          />
          <p className="absolute text-black bottom-10 left-1/4 text-3xl ">
            Open To Work
          </p>
        </div>
        <div className="text-black flex flex-col justify-end ">
          <p className="font-tenor text-3xl ml-10 mb-8">HELLO I'M</p>
          <p className="font-tenor text-7xl ml-20 mb-8">AAKANKSHA</p>
          <p className="font-tenor text-7xl relative left-75 z-10">RANGDAL</p>
          <div className="my-10">
            <div className="font-press-start text-xl ml-20">
              <div className="">
                I am{" "}
                <TypeIt
                  options={{
                    speed: 50,
                    loop: true,
                    waitUntilVisible: true,
                    deleteSpeed: 50,
                  }}
                  getBeforeInit={(instance) => {
                    roles.forEach((role, index) => {
                      instance.type(role).pause(1500).delete(role.length);
                      // Prevent extra delete on last loop cycle
                      if (index === roles.length - 1) {
                        instance.pause(300);
                      }
                    });
                    return instance;
                  }}
                />
              </div>
            </div>
            <Image src={Leaves} alt="leaves" className="w-85 ml-50" />
            <button className="bg-[#63434030] w-35 text-white px-4 py-2 rounded-md ml-75 mt-5 ">
              Resume
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <Image src={Bow} alt="Bow" className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
