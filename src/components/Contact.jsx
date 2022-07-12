import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0A192F] w-full h-screen flex justify-center items-center p-4 "
    >
      <form
        method="POST"
        action="https://getform.io/f/d5f64003-603b-43f1-be26-8b7755d98dec"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or send me an email -
            nsananikone1134@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          rows="10"
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:border-pink-600 hover:bg-pink-600 px-4 py-3 mx-auto my-4 flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};
