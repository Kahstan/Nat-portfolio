import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gray-100 text-gray-900">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00df9a]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Nat, nice to meet you!</p>
          </div>
          <div>
            <p>
              I am a ex-cabin crew passionate about building excellent software
              that can impact the lives of those around me. I am a naturally
              curious individual who likes to explore interesting codes, and I
              have strong communication skills and great management skills. My
              goal is to bring innovative solutions to my stakeholders to
              develop collaboratively for successful results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
