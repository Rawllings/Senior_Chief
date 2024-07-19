import { FaHtml5, FaReact, FaPython, FaSketch } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiRubyonrails,
  SiMysql,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCoreldraw,
} from "react-icons/si";
// import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFigma } from "react-icons/io5";

function Stacks() {
  return (
    <div className="min-h-full bg-black pb-4">
      <h1 className="md:text-center text-center py-2 md:text-lime-500 text-lime-500 md:text-6xl text-4xl md:font-bold font-semibold">
        Stacks
      </h1>
      <div
        className="text-white md:flex flex md:flex-row flex-col md:justify-around justify-around md:mt-8 md:gap-10 gap-4
       md:text-2xl md:font-bold font-semibold text-center md:ml-[100px]"
      >
        {/* FRONTEND STACKS  */}
        <div className="md:flex md:flex-col">
          <h1 className="text-lime-500 ">Frontend</h1>

          <div className="md:flex flex md:flex-col flex-row  flex-wrap justify-between md:gap-2 gap-2 md:mt-2 mt-2 mx-6">
            <h1 className="flex flex-col bg-black p-2 rounded-sm">
              <span className="md:text-5xl text-4xl text-red-700 ">
                <FaHtml5 />
              </span>
              <strong className="text-white md:text-sm text-xs">HTML</strong>
            </h1>

            <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-blue-700 ">
                <IoLogoCss3 />
              </span>
              <strong className="text-white md:text-sm text-xs">CSS</strong>
            </h1>

            <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-yellow-400 ">
                <SiJavascript />
              </span>
              <strong className="text-white md:text-sm text-xs">JS</strong>
            </h1>

            <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-blue-500 ">
                <FaReact />
              </span>
              <strong className="text-white md:text-sm text-xs">React</strong>
            </h1>

            {/* <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-green-700 ">
                <RiNextjsFill />
              </span>
              <strong className="text-lime-500 md:text-sm text-xs">
                Nextjs
              </strong>
            </h1> */}

            <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-blue-700 ">
                <SiTypescript />
              </span>
              <strong className="text-white md:text-sm text-xs">TScript</strong>
            </h1>
          </div>
        </div>

        {/* BACKEND STACKS  */}
        <div className="md:flex md:flex-col">
          <h1 className="text-lime-500">Backend</h1>

          <div className="md:flex flex md:flex-col flex-row  justify-between flex-wrap md:gap-2 gap-2 md:mt-2 mt-2 mx-6">
            <h1 className="flex flex-col bg-black p-2 rounded-sm">
              <span className="md:text-5xl text-4xl text-yellow-500 ">
                <FaPython />
              </span>
              <strong className="text-white md:text-sm text-xs">Python</strong>
            </h1>

            <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-green-900 ">
                <SiDjango />
              </span>
              <strong className="text-white md:text-sm text-xs">Django</strong>
            </h1>

            <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-red-700 ">
                <SiRubyonrails />
              </span>
              <strong className="text-white md:text-sm text-xs">Rails</strong>
            </h1>

            <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-blue-500 ">
                <BiLogoPostgresql />
              </span>
              <strong className="text-white md:text-sm text-xs">P-SQL</strong>
            </h1>

            <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-blue-500 ">
                <SiMysql />
              </span>
              <strong className="text-white md:text-sm text-xs">MySQL</strong>
            </h1>
          </div>
        </div>
        {/* <h1>Backend</h1>
        <div></div> */}

        <div className="md:flex md:flex-col">
          <h1 className="text-lime-500">UI/UX</h1>

          <div className="md:flex flex md:flex-col flex-row flex-wrap md:gap-2 gap-2 md:mt-2 mt-2 mx-6">
            <h1 className="flex flex-col bg-black p-2 rounded-sm">
              <span className="md:text-5xl text-4xl text-green-300 ">
                <IoLogoFigma />
              </span>
              <strong className="text-white md:text-sm text-xs">Figma</strong>
            </h1>

            <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-pink-500 ">
                <SiAdobexd />
              </span>
              <strong className="text-white md:text-sm text-xs">AdobeXD</strong>
            </h1>

            <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-white ">
                <FaSketch />
              </span>
              <strong className="text-white md:text-sm text-xs">Sketch</strong>
            </h1>
          </div>
        </div>
        {/* GRAPHICS DESIGN  */}
        <div className="md:flex md:flex-col">
          <h1 className="text-lime-500">Graphics Design</h1>

          <div className="md:flex flex md:flex-col flex-row flex-wrap md:gap-2 gap-2 md:mt-2 mt-2 mx-6">
            <h1 className="flex flex-col bg-black p-2 rounded-sm">
              <span className="md:text-5xl text-4xl text-blue-700 ">
                <SiAdobephotoshop />
              </span>
              <strong className="text-white md:text-sm text-xs">
                Photoshop
              </strong>
            </h1>

            <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-pink-800 ">
                <SiAdobeillustrator />
              </span>
              <strong className="text-white md:text-sm text-xs">
                Illustrator
              </strong>
            </h1>

            <h1 className="flex flex-col bg-black p-2 rounded-sm ">
              <span className="md:text-5xl text-4xl text-lime-500 ">
                <SiCoreldraw />
              </span>
              <strong className="text-white md:text-sm text-xs">
                Corel Draw
              </strong>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stacks;
