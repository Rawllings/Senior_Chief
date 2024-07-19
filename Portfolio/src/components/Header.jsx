import Image from "../assets/Rawllingss.png";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import ResumeDownload from "./ResumeDownload.jsx";

function Header() {
  return (
    //
    <div className="min-h-full md:text-white text-white md:bg-black bg-black">
      <div className="md:p-8">
        <div className="md:fading-border text-center md:text-left md:border-4 md:rounded-lg md:border-lime-500 border-black fading-border md:pt-10">
          <div className="md:text-5xl text-4xl md:font-black font-bold md:p-4 p-2 md:flex md:flex-row flex-col gap-96 md:justify-center pt-4">
            <h1 className="md:text-lime-500 text-lime-500 ">RK</h1>
            <h1 className="md:mt-0 mt-8">+254 727 37 11 99</h1>
          </div>
          <hr className="opacity-30 md:mb-0 mb-8" />

          {/* TYPEWRITER AND IMAGE  */}
          <div className="md:flex md:flex-row flex-col md:w-auto md:mx-10 md:my-4 md:gap-[100px]">
            {/* TYPING  */}
            <div>
              <h1
                className="md:font-black font-bold md:text-4xl text-2xl md:text-white text-white md:text-left text-center
               mb-[50px] pl-2 md:mt-[50px] md:pr-2"
              >
                <span className="">Welcome! I am Rawllings Kiprop,</span>
                <span className="text-lime-500 md:text-4xl md:font-bold text-2xl font-bold md:text-wrap text-center pb-2 pl-2 md:mt-8 ">
                  <Typewriter
                    options={{
                      strings: [
                        "a Software Engineer, ",
                        "Graphics Designer,",
                        "and UI/UX Enthusiast.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              {/* BUTTON  */}
              <div className="md:mt-[100px] md:flex flex md:flex-auto flex-auto justify-center md:gap-8 mt-8">
                <ResumeDownload />

                {/* SOCIAL MEDIA ICONS  */}
                <div className="md:pl-[200px] pl-[100px] md:flex flex md:flex-row flex-row md:gap-8 gap-4 mt-2">
                  <a
                    href="https://www.linkedin.com/in/rawllings-kiprop-a23b5b258/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="text-white  hover:md:text-blue-700 hover:text-blue-700 md:text-white md:text-4xl text-2xl">
                      <FaLinkedinIn />
                    </h1>
                  </a>

                  <a
                    href="https://twitter.com/Senior_chieff"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="text-white  hover:md:text-blue-700 hover:text-blue-700 md:text-white md:text-4xl text-2xl">
                      <BsTwitterX />
                    </h1>
                  </a>

                  <a
                    href="https://github.com/Rawllings"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="text-white  hover:md:text-blue-700 hover:text-blue-700 md:text-white md:text-4xl text-2xl">
                      <FaGithub />
                    </h1>
                  </a>

                  {/* <span className="md:text-blue-700 md:text-6xl">
                    <FaLinkedinIn />
                  </span> */}
                </div>
              </div>
            </div>
            {/* IMAGE  */}

            <div className="">
              <img
                className="mt-8 md:w-auto w-auto md:h-auto h-auto
                 rounded-lg pt-2 inline-block animate-bounce bg-lime-500"
                src={Image}
                alt=""
              />
            </div>
          </div>
          {/* <h1
          className="text-xl text-gray-500 pt-2 md:pl-[50px] text-center mx-auto"
          // style={{ paddingLeft: "50px" }}
        >
          © {new Date().getFullYear()} Dev Rawllings All rights reserved
        </h1> */}
        </div>
      </div>
      {/* <div>
        <TypeAnimation
          sequence={[
            `Welcome to my website!\nI'm a Developer\nand a Designer.`,
            1000,
            "",
          ]}
          speed={50}
          style={{ whiteSpace: "pre-line", fontSize: "2em" }}
          repeat={Infinity}
        />
      </div> */}
    </div>
  );
}

export default Header;
