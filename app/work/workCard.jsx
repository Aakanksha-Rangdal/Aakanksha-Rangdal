import Image from "next/image";

const WorkCard = ({ company, role, time, description, logo }) => {
  return (
    <div className="bg-[#634340] bg-opacity-30 w-1/3 h-auto p-6 shadow-lg rounded-lg">
      <div className="flex justify-between items-center">
      <Image src={logo} alt={`${company} logo`} width={64} height={64} className="object-contain" />
        <div className="">
          <h1 className="">{company}</h1>
          <h2 className="">
            {role}
            {time}
          </h2>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
