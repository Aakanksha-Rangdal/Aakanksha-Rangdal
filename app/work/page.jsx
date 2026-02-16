import WorkCard from "./workCard";
import workData from "../components/workData.json";
import Navbar from "../Navbar";


const page = () => {
  return (
    <div className="bg-[#E0A299] w-screen min-h-screen">

    <Navbar />
    <div className="bg-[#E0A299] w-screen min-h-screen flex flex-col items-center gap-6 p-8">

      <h2 className="text-3xl font-bold text-black">Career</h2>
      {workData.map((job, index) => (
        <WorkCard key={index} {...job} />
      ))}
    </div>
      </div>
  );
}

export default page;