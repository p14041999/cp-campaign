import AboutYourProject from "@/components/AboutYourProject";
import Submited from "@/components/Submited";
import YourBudget from "@/components/YourBudget";
import YourEmail from "@/components/YourEmail";
import YourName from "@/components/YourName";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [budget, setBudget] = useState(0);

  const [next, setNext] = useState("name");

  return (
    <>
      <div className=" w-full min-h-screen h-full flex flex-col lg:flex-row ">
        {/* Left DIV */}
        <div className="w-full lg:w-5/12 h-full px-6 sm:flex justify-center py-10 sm:py-14">
          <div className=" sm:w-9/12 md:w-10/12 ">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="w-56 mb-8 sm:mb-14 lg:mb-10"
            />
            <h1 className=" text-2xl sm:text-3xl xl:text-4xl font-bold text-justify leading-10">
              Next Big Web3.0 Project from you?
            </h1>
            <div className=" py-8 xl:py-10">
              <p className="text-justify text-sm ">
                Web3.0 is the newest craze ever NFT marketplace, DeFi and
                Multiverse is making craze now. Less than 2% centralized
                businesses moved from centralized to decentralized. That means
                98% of centralized businesses can be converted to web3.
              </p>
              <p className="text-justify text-sm  py-4">
                I know are that person who going is building one of the
                innovative solution ever.
              </p>
              <p className="text-justify text-sm ">
                Even if you don’t know where to start with we are here to guide
                just give us a chance to call you.
              </p>
            </div>
            <div>
              <div className=" flex flex-col xl:flex-row justify-between gap-4">
                <button className="border w-full xl:w-72 h-12 rounded-full flex justify-center items-center btn-gradient-1">
                  <h1 className="gradLink font-semibold text-sm mr-2">
                    Secure Software{" "}
                  </h1>
                  🔐
                </button>
                <button className="border w-full xl:w-72 h-12 rounded-full flex justify-center items-center btn-gradient-1">
                  <h1 className="gradLink font-semibold text-sm mr-2">
                    Best Performer{" "}
                  </h1>
                  🏆
                </button>
              </div>
              <div className="mt-4 2xl:mt-6 flex justify-center">
                <button className="border w-full xl:w-60 h-12 rounded-full flex justify-center items-center btn-gradient-1">
                  <h1 className="gradLink font-semibold text-sm mr-2">
                    Customer Support{" "}
                  </h1>
                  🙋🏻‍♀️
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right DIV */}
        <div className="w-full min-h-screen sm:max-h-full lg:w-7/12 px-4 sm:px-8 py-10 sm:py-20 xl:py-24 xl:px-16 bg-background bg-cover bg-no-repeat flex justify-center items-center">
          {next === "name" && (
            <YourName name={name} setName={setName} setNext={setNext} />
          )}
          {next === "email" && (
            <YourEmail email={email} setEmail={setEmail} setNext={setNext} />
          )}
          {next === "about" && (
            <AboutYourProject about={about} setAbout={setAbout} setNext={setNext} />
          )}
          {next === "budget" && (
            <YourBudget budget={budget} setBudget={setBudget} setNext={setNext} />
          )}
          {next === "submited" && (
            <Submited />
          )}
        </div>
      </div>
    </>
  );
}
