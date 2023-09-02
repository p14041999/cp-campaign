import React from "react";

const Submited = ({ email }) => {
  console.log(email);
  return (
    <>
      <div className=" w-full h-96 lg:h-full sm:w-9/12 md:w-10/12 bg-white/70 rounded-xl backdrop-blur-xl p-4 sm:p-8 flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center">
          <img src="/images/green.png" alt="logo" className="w-24" />
          <h1 className="font-bold mt-6 sm:mt-12 text-xl">Congratulations</h1>
          <div className=" sm:w-80 text-sm py-8 lg:py-14">
            <p className=" text-center">
              Your query have been received. One of our executive will reach out
              to you through mail.
            </p>
          </div>
        <div className="w-full flex justify-center">
          <button className=" bg-gradient-to-l from-primary-color to-secondary-color  w-64 h-12 text-white rounded-xl">
            Check our website
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Submited;
