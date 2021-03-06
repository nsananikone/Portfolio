import React from "react";
import workImg from "../assets/workImg.jpeg";
import nicknotes from "../assets/nicknotes.png";
import newsletter from "../assets/newsletter.png";
import weatherapp from "../assets/weatherapp.png";
import SAASpage from "../assets/SAASpage.png";

export const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0A192F] text-gray-300">
      {/*Container*/}

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work.</p>
        </div>

        {/* Grid Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card Item */}

          <div
            style={{ backgroundImage: `url(${nicknotes})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover*/}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Nick Notes
                <br />
                React JS App
              </span>
              <div className="pt-8 text-center">
                <a href="https://warm-inlet-81148.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/nsananikone/nicknotes">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card Item */}

          <div
            style={{ backgroundImage: `url(${newsletter})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover*/}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Newsletter Sign-up
              </span>
              <div className="pt-8 text-center">
                <a href="https://vast-shore-11270.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/nsananikone/Newsletter">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card Item */}

          <div
            style={{ backgroundImage: `url(${weatherapp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover*/}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather App
                <br />
                React JS App
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-weather-brown.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/nsananikone/WeatherApp">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card Item */}

          <div
            style={{ backgroundImage: `url(${SAASpage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover*/}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                SAAS Page <br />
                (Responsive)
              </span>
              <div className="pt-8 text-center">
                <a href="https://saas-project-two.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/nsananikone/SAASProject">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
