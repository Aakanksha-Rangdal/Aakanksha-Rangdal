import WorkCard from "./workCard";
import workData from "../components/workData.json";


const page = () => {
  return (
    <div className="bg-[#E0A299] w-screen min-h-screen flex flex-col items-center gap-6 p-8">
      {workData.map((job, index) => (
        <WorkCard key={index} {...job} />
      ))}
    </div>
  );
}

export default page;