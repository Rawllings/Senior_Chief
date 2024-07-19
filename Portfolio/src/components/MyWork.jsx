import amazon from "../assets/Amazon.png";
import croeng from "../assets/Croeng.png";
import epicTours from "../assets/Epic Tours.png";
import sakakeja from "../assets/Sakakeja.png";

function MyWork() {
  return (
    <div className="min-h-screen bg-black">
      <h1 className="text-lime-500 md:font-bold font-medium md:text-6xl text-4xl text-center md:mb-10 mb-4">
        My Work
      </h1>
      <div className="md:flex flex md:flex-row flex-col md:gap-2 gap-2 md:flex-wrap md:mb-10 pb-4">
        <div className="border-2 border-lime-500 md:w-[500px] w-[300px] md:mx-8 mx-auto max-w-sm rounded overflow-hidden shadow-lg">
          <img src={amazon} alt="" />
          <h1 className="text-white p-4 font-extrabold">Amazon clone app</h1>
        </div>

        <div className="border-2 border-lime-500 md:w-[500px] w-[300px] md:mx-8 mx-auto max-w-sm rounded overflow-hidden shadow-lg">
          <img src={croeng} alt="" />
          <h1 className="text-white p-4 font-extrabold">Amazon clone app</h1>
        </div>

        <div className="border-2 border-lime-500 md:w-[500px] w-[300px] md:mx-8 mx-auto max-w-sm rounded overflow-hidden shadow-lg">
          <img src={epicTours} alt="" />
          <h1 className="text-white p-4 font-extrabold">Amazon clone app</h1>
        </div>

        <div className="border-2 border-lime-500 md:w-[500px] w-[300px] md:mx-8 mx-auto max-w-sm rounded overflow-hidden shadow-lg">
          <img src={sakakeja} alt="" />
          <h1 className="text-white p-4 font-extrabold">Amazon clone app</h1>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
