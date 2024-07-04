import "../index.css";
const Hero = () => {
  return (
    <>
      <main className="h-[calc(100vh-140px)] bg-[#2b2d42] grid lg:grid-cols-2 lg:px-[100px] box-border sm:grid-cols-1 sm:px-0">
        <div className="text-white flex flex-col justify-center lg:items-start italic gap-4 sm:w-fit sm:items-center">
          <h1 className="text-6xl font-mono text-start sm:text-3xl">
            GRIFIN KYLE C. <span>ASA</span>
          </h1>
          <h2 className="text-start sm:text-center">Aspiring web developer</h2>
          <p className="lg:text-justify lg:px-0 sm:px-3 sm:text-justify">
            Performance-driven strategic thinker who possesses excellent
            decision-making skills, initiative, and creativity. Eager to learn
            new technologies and techniques to provide solutions to improve
            customer experience.
          </p>
        </div>
        <div className="lg:flex justify-center text-center items-center sm:hidden">
          <img
            className="img-profile rounded-[50%] border-4 border-white h-[400px]"
            src="8R.JPG"
            alt="profile"
            width={400}
          />
        </div>
      </main>
    </>
  );
};

export default Hero;
