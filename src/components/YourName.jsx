import React, { useState } from "react";

const YourName = ({ name, setName, setNext }) => {

  const [isError,setIsError] = useState(false);


  return (
    <>
      <div className=" w-full h-96 lg:h-full sm:w-9/12 md:w-10/12 bg-white/70 rounded-xl backdrop-blur-xl p-4 sm:p-8 flex flex-col justify-between">
        <h1 className=" text-3xl font-bold text-center">Let's Goo!</h1>
        <div>
          <h1 className="font-semibold mb-4">Your Name</h1>
          <input
            value={name}
            className={isError?"w-full outline-none p-3 h-12 rounded-xl border border-orange-600":"w-full outline-none p-3 h-12 rounded-xl"}
            onChange={(e) => setName(e.target.value)}
          />
          {isError && <p className="text-red-600"><small>Can't be empty</small></p>}
        </div>
        <div className="w-full flex justify-end">
          <button
            onClick={() => {
              if(name){
                setNext("email")
              }else{
                setIsError(true)
              }
            }}
            className=" bg-gradient-to-l from-primary-color to-secondary-color  w-44 h-12 text-white rounded-xl"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default YourName;
