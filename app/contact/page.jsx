import Navbar from "../Navbar";
import pagedata from "@/app/components/pageData.json";

const page = () => {
  return (
    <div className="bg-[#e0a299] w-screen min-h-screen">
      <Navbar />

      <div className="bg-[#E0A299] w-2/3 m-auto flex flex-col items-center gap-6 p-8">
        <h2 className="text-3xl font-bold text-black">
          {pagedata.contact.title}
        </h2>
        {pagedata.contact.description.map((paragraph, index) => (
          <p key={index} className="text-xl text-black  text-justify">
            {paragraph}
          </p>
        ))}
        <div className="w-full max-w-md mx-auto flex flex-col gap-4 mt-8">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 text-lg border-2 border-gray-500 rounded text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 text-lg border-2 border-gray-500 rounded text-black"
          />
          <textarea
            rows={5}
            placeholder="Context"
            className="px-4 py-2 text-lg border-2 border-gray-500 rounded text-black"
          />
          <button className="px-6 py-2 bg-black text-white rounded font-semibold hover:bg-gray-800">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
