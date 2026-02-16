import Image from "next/image";

const WorkCard = ({ company, role, time, description, logo }) => {
  return (
    <div className="bg-[#634340]/40 w-3/4 h-auto p-6 shadow-lg rounded-lg">
      <div className="flex gap-5 items-center">
      <Image src={logo} alt={`${company} logo`} width={128} height={128} className="w-1/6 object-contain" />
        <div className="">
          <div className="text-[#eed9d6] text-2xl font-bold">{company}</div>
          <div className="flex gap-10 text-[#eed9d6] text-xl font-semibold">
            <div className="">{role}</div>
            <div className="">{`(${time})`}</div>
          </div>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
