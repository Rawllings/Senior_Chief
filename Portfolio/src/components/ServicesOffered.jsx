import { BsCodeSlash } from "react-icons/bs";
import { SiPeakdesign } from "react-icons/si";
import { MdOutlineDesktopWindows } from "react-icons/md";

function ServicesOffered() {
  return (
    <div className="min-h-full bg-black">
      <div className="py-2">
        <div className="md:border-y-2 border-y-2 md:border-white border-white md:rounded-xl rounded-md md:p-4 md:mx-2 mx-2 p-[10px] md:py-[50px] ">
          <h1 className="text-lime-500 md:font-bold font-medium md:text-6xl text-4xl text-center md:mb-10 mb-4">
            Services
          </h1>

          <div className="md:flex flex md:flex-row flex-col gap-4 justify-evenly">
            <div className="bg-white text-black md:w-[300px] w-[300px] rounded-md justify-center md:flex md:flex-row mx-auto hover:-translate-y-2 transition duration-300">
              <div className="text-justify p-4">
                <h1 className="text-lime-500 pl-[120px] pb-2 text-2xl">
                  {" "}
                  <BsCodeSlash />
                </h1>
                <h1 className="text-center font-bold pb-2">Web Development</h1>
                <p className="text-left">
                  I create the layout and design of a full website. I use design
                  programs to create visual elements. I build a site that is
                  intuitive and easy for visitors to navigate.
                </p>
              </div>
            </div>

            <div className="bg-white text-black md:w-[300px] w-[300px] rounded-md justify-center md:flex md:flex-row mx-auto hover:-translate-y-2 transition duration-300">
              <div className="text-justify p-4">
                <h1 className="text-lime-500 pl-[120px] pb-2 text-2xl ">
                  <SiPeakdesign />
                </h1>
                <h1 className="text-center font-bold pb-2">UI/UX Design</h1>
                <p className="text-left">
                  I create user-friendly interfaces that enable users to
                  understand how to use complex technical products.
                </p>
              </div>
            </div>

            <div className="bg-white text-black md:w-[300px] w-[300px] rounded-md justify-center md:flex md:flex-row mx-auto hover:-translate-y-2 transition duration-300">
              <div className="text-justify p-4">
                <h1 className="text-lime-500 pl-[120px] pb-2 text-2xl">
                  <MdOutlineDesktopWindows />
                </h1>
                <h1 className="text-center font-bold pb-2">Graphics Design</h1>
                <p className="text-left">
                  Transforming ideas into captivating visuals through innovative
                  design techniques that captivate audiences and enhance brand
                  identities with striking creativity and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOffered;
