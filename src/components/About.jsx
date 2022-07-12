import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0A192F] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 inline border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Nick! Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals to small businesses. I enjoy
              working on a team as well as independently. As technology
              progresses, it's important to me to keep learning about different
              tech languages and alternative ways to find solutions as well as
              collaborating on a team to achieve these solutions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
