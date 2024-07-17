const ResumeDownload = () => {
  const resumeFile = "/Rawllings CV .pdf"; // Path to my resume file
  const openResume = () => {
    window.open(resumeFile, "_blank");
  };

  return (
    <div>
      {/* <Sidebar /> */}

      <div>
        <a
          className=" leading-normal whitespace-normal	md:pl-[60px]"
        //   href={resumeFile}
          download
        >
          <button
            onClick={openResume}
            className="md:bg-lime-500 bg-lime-500 p-2 rounded-sm
                 md:py-2 md:px-4 md:text-lg md:font-bold md:rounded-md ml-4 text-white md:hover:bg-lime-600"
          >
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default ResumeDownload;
