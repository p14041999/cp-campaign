import { TempMailDomainList } from "@/consts/TempEmailList";
import React, { useState } from "react";
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const YourEmail = ({ email, setEmail, setNext }) => {
  const [isError,setIsError] = useState(false);
  const [error,setError] = useState(false);
  const validateEmail = ()=>{
    if(email){
      if(email.match(validRegex)){
        let mailDomain = email.split("@")[1];
        if(mailDomain && !TempMailDomainList.includes(mailDomain)){
          handleNext()
        }else{
          setError("You can't use temp mail!");
          setIsError(true);
        }
      }else{
        setError("Invalid email address!");
        setIsError(true);
      }
    }else{
      setError("Email can't be empty!");
      setIsError(true);
    }
  }
  const handleNext = () => {
    setNext("about");
  };

  return (
    <>
      <div className=" w-full h-96 lg:h-full sm:w-9/12 md:w-10/12 bg-white/70 rounded-xl backdrop-blur-xl p-4 sm:p-8 flex flex-col justify-between">
        <h1 className=" text-3xl font-bold text-center">Let's Goo!</h1>
        <div>
          <h1 className="font-semibold mb-4">Your Email</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={isError?"w-full outline-none p-3 h-12 rounded-xl border border-red-600":"w-full outline-none p-3 h-12 rounded-xl"}
          />
          {isError && <p className="text-red-600"><small>{error}</small></p>}
        </div>
        <div className="w-full flex gap-4 justify-between">
          <button
            onClick={() => setNext("name")}
            className="w-44 h-12 btn-gradient-2"
          >
            Back
          </button>
          <button
            onClick={validateEmail}
            className=" bg-gradient-to-l from-primary-color to-secondary-color  w-44 h-12 text-white rounded-xl"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default YourEmail;
