import { useRouter } from "next/router";
import React, { useState } from "react";

const YourBudget = ({ budget, setBudget, setNext,handleSubmit }) => {
  const router = useRouter();
  const [error,setError] = useState("");
  const [isError,setIsError] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if(Number(budget)){
      console.log(Number(budget)?"true":"false")
      if(Number(budget) >= 100){
        handleSubmit().then(()=>{
          router.push('/done');
          // setNext("submited");
        }).catch((err)=>{
          // toast
        })
      }else{
        setError("Budget must be atleast 100 USD");
        setIsError(true);
      }
    }else{
      setError("Must be number eg. 1000, 2000");
      setIsError(true)
    }
  };

  return (
    <>
      <div className=" w-full h-96 lg:h-full sm:w-9/12 md:w-10/12 bg-white/70 rounded-xl backdrop-blur-xl p-4 sm:p-8 flex flex-col justify-between">
        <h1 className=" text-3xl font-bold text-center">Let's Goo!</h1>
        <div>
          
          <h1 className="font-semibold mb-4">Your budget (USD)</h1>
          <input
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={isError?"w-full outline-none p-3 h-12 rounded-xl border border-red-600":"w-full outline-none p-3 h-12 rounded-xl"}
          />
          {isError && <p className="text-red-600"><small>{error}</small></p>}
        </div>
        <div className="w-full flex gap-4 justify-between">

          <button
            onClick={() => setNext("about")}
            className="w-44 h-12 btn-gradient-2"
          >
            Back
          </button>
          <form action="https://api.codepartner.in" method="get" onSubmit={handleNext}>
          <button
            // onClick={handleNext}
            type="submit"
            className=" bg-gradient-to-l from-primary-color to-secondary-color  w-44 h-12 text-white rounded-xl"
          >
            Next
          </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default YourBudget;
