import devPhoto from "../assets/dev.jpg";
function AboutMe() {
  return (
    <div className="min-h-full p-4 bg-black ">
      {/* <hr className="md:pb-10 rounded-xl" /> */}
      <div className="md:border-y-2 border-y-2 md:border-white border-white md:rounded-xl rounded-md md:p-1 p-[10px]">
        <h1 className="text-lime-500 md:font-bold font-medium md:text-6xl text-4xl text-center md:my-4 my-2">
          About Me
        </h1>

        <div className=" aboutme md:flex md:flex-auto text-white md:gap-10 md:p-4">
          {/* IMAGE  */}
          <div className="mb-8 md:mt-8">
            <img
              className="rounded-lg aboutme"
              src={devPhoto}
              alt="developer cartoon image"
            />
          </div>
          {/* DESCRIPTION  */}
          <div className="md:bg-white bg-white md:text-black text-black rounded-md md:w-[800px] md:p-4 p-2 ease-in-out duration-300 md:shadow-lime-500 md:mb-10">
            <h1 className="md:text-3xl text-lg md:font-bold font-medium md:pb-4 pb-2">
              Welcome to the World of Rawllings Kiprop!{" "}
            </h1>
            <p className="md:leading-8 md:text-justify text-justify	">
              Hello! I am Rawllings Kiprop, a passionate Software Engineer,
              Graphics Designer, and UI/UX Enthusiast. With a unique blend of
              technical prowess and artistic creativity, I bring digital dreams
              to life. Whether it is crafting seamless user experiences,
              designing stunning visuals, or building robust software solutions,
              my mission is to create impactful and intuitive digital products
              that resonate with users. Join me on a journey where technology
              meets design, and innovation is just the beginning. I am a
              dedicated and versatile software developer with expertise in both
              front-end and back-end development. My passion for creating
              intuitive and engaging digital experiences drives me to deliver
              high-quality solutions for diverse projects. With a strong
              background in graphic design and UI/UX, I bring a unique blend of
              technical proficiency and creative flair to every project I
              undertake.
            </p>
          </div>
        </div>
      </div>

      {/* <hr className="md:pt-10 " /> */}
    </div>
  );
}

export default AboutMe;
