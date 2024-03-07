import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl ">
          Diving into Fullstack Development with a keen eye on the MERN stack,
          my journey began in May 2023 through Guvi-IITM. Since then, I've
          turned the world of web development into my playground. Now, I'm
          actively seeking exciting projects—innovative web apps and
          cutting-edge tech. Let's collaborate and breathe life into ideas!
        </p>

        <br />

        <p className="text-xl">
          I firmly believe in the power of teamwork and am eager to contribute
          my skills to collaborative ventures. I seek assistance in deepening my
          understanding of backend development, with a particular focus on
          honing my skills in Node.js and Express.Any guidance or resources in
          this area would be highly appreciated.
        </p>
      </div>
    </div>
  );
};

export default About;
