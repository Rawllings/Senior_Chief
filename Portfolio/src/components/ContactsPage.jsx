import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import ResumeDownload from "./ResumeDownload";

function ContactsPage() {
  return (
    <div className="min-h-full bg-black">
      <div className="md:border-y-2 border-y-2 md:border-white border-white md:rounded-xl rounded-md md:p-1 md:mx-2 p-[10px] md:pt-8 md:pb-2">
        <h1 className="text-lime-500 md:font-bold font-medium md:text-6xl text-4xl text-center">
          Contacts
        </h1>

        <div className="flex flex-col">
          <div className="md:mx-[500px] mx-auto mt-4">
            <ResumeDownload />
          </div>
          <div className="text-white flex flex-row md:gap-8 gap-4 justify-center mt-4 md:text-4xl text-2xl mb-4">
            <FaLinkedinIn />
            <FaGithub />
            <BsTwitterX />
          </div>
          <div className="text-white md:text-4xl text-xl  md:font-bold font-medium text-center">
            <h1>+2547 27 37 11 99</h1>
            <h1 className="md:py-4 py-2">rawllingskiprop@gmail.com</h1>
          </div>
        </div>

        <hr className="mx-4 border-slate-400" />

        <div className="text-center mt-2 md:mb-2 text-lime-500">
          © {new Date().getFullYear()} Dev Rawllings All rights reserved
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
