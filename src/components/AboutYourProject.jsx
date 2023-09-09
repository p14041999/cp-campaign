import React, { useState } from "react";

const AboutYourProject = ({ about, setAbout, setNext }) => {
  const [isError,setIsError] = useState(false);

  const handleNext = () => {
    if(about){
      setNext("budget");
    }else{
      setIsError(true)
    }
  };

  return (
    <>
      <div className=" w-full h-96 lg:h-full sm:w-9/12 md:w-10/12 bg-white/70 rounded-xl backdrop-blur-xl p-4 sm:p-8 flex flex-col justify-between">
        <h1 className=" text-3xl font-bold text-center">Let's Goo!</h1>
        <div>
          <h1 className="font-semibold mb-4">Tell us a bit about project</h1>
          <textarea value={about} onChange={(e) => setAbout(e.target.value)} className={isError?"w-full outline-none p-3 h-12 rounded-xl border border-red-600":"w-full outline-none p-3 h-12 rounded-xl"}/>
          {isError && <p className="text-red-600"><small>Can't be empty</small></p>}
        </div>
        <div className="w-full flex gap-4 justify-between">
          <button
            onClick={() => setNext("email")}
            className="w-44 h-12 btn-gradient-2"
          >
            Back
          </button>
          <button onClick={handleNext} className=" bg-gradient-to-l from-primary-color to-secondary-color  w-44 h-12 text-white rounded-xl">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutYourProject;
