import devPhoto from "../assets/dev.jpg";
function AboutMe() {
  return (
    <div className="min-h-screen p-4 bg-black">
      <h1 className="text-lime-500 font-bold text-6xl text-center my-4">
        About Me
      </h1>
      <div className="md:flex md:flex-auto  text-white">
        {/* IMAGE  */}
        <div>
          <img
            className="rounded-lg"
            src={devPhoto}
            alt="developer cartoon image"
          />
        </div>
        {/* DESCRIPTION  */}
        <div>
          <p>
            I am Rawllings Kiprop, a dedicated and versatile software developer
            with expertise in both front-end and back-end development. My
            passion for creating intuitive and engaging digital experiences
            drives me to deliver high-quality solutions for diverse projects.
            With a strong background in graphic design and UI/UX, I bring a
            unique blend of technical proficiency and creative flair to every
            project I undertake.
          </p>
          <h1>Welcome to the World of Rawllings Kiprop Hello! </h1>
          <p>
            I am Rawllings Kiprop,a passionate Software Engineer, Graphics
            Designer, and UI/UX Enthusiast. With a unique blend of technical
            prowess and artistic creativity, I bring digital dreams to life.
            Whether it is crafting seamless user experiences, designing stunning
            visuals, or building robust software solutions, my mission is to
            create impactful and intuitive digital products that resonate with
            users. Join me on a journey where technology meets design, and
            innovation is just the beginning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
