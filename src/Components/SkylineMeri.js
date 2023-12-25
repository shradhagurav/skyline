import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import finger from "../assets/finger.png";
import graph from "../assets/graph.png";
import timer from "../assets/timer.png";
import yoga from "../assets/yoga.png";
import clock from "../assets/clock.png";
import "./SkylineMeri.css"; 

const SkylineMeri = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [countdown, setCountdown] = useState(5 * 60); // 5 minutes in seconds
  const [exit, setExit] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(interval);
          setExit(true);
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (exit) {
      navigate("/");
    }
  }, [exit, navigate]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    const correctPassword = "shradha";

    if (!password.trim()) {
      Swal.fire({
        icon: "error",
        title: "Empty Password",
        text: "Please enter the password.",
      });
      setErrorMessage("Please enter the password.");
      return;
    }

    if (countdown > 0) {
      if (password === correctPassword) {
        setDoorsOpen(true);
        setTimeout(() => {
          navigate("/entry");
        }, 1000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Incorrect Password",
          text: "Please try again.",
        });
        setErrorMessage("Incorrect password. Please try again.");
        setPassword("");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Time Expired",
        text: "Please try again.",
      });
      setErrorMessage("Time has expired. Please try again.");
    }
  };

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div
      className={`bg-black h-screen flex justify-center items-center ${
        doorsOpen ? "doors-open" : ""
      }`}
    >
      <div className="relative w-full">
        {/* Doors */}
        <div className="flex justify-between flex-wrap">
          {/* Left door */}
          <div className="w-full md:w-1/2 lg:h-screen rounded-l-lg border-4 border-[#6cd0ce] flex justify-center items-center left-door">
            {/* Logo and icons on the left door */}
            <div className="  flex mb-48   md:p-0 md:mt-0 md:mb-0 md:flex-col  items-center mr-[336px]">
              <p className="text-white hidden md:block text-4xl font-bold absolute top-[41px] left-[55px]">
                Java
              </p>
              <div className=" hidden flex-none md:flex ml-[39px]">
                <li className="text-[#6cd0ce] mt-[32px] ml-[11px]">Labs</li>
                <li className="text-[#6cd0ce] mt-[32px] ml-[11px]">
                  Exercises
                </li>
                <li className="text-[#6cd0ce] mt-[32px] ml-[11px]">
                  Do it Yourself
                </li>
              </div>
              <div className="md:flex hidden items-center">
                <div className="relative">
                  <img
                    src={yoga}
                    alt="Yoga Icon"
                    className="w-[5rem] p-[7px] mt-12 border-[1px] border-[#6cd0ce]"
                  />
                </div>
                <div className="text-white hidden md:block ml-3 mt-12">
                  <p>EXERCISES</p>
                  <div className="text-6xl leading-8 font-light text-[#6cd0ce] mt-2">
                    9
                  </div>
                </div>
              </div>
              <div className="md:flex hidden items-center">
                <img
                  src={graph}
                  alt="Graph Icon"
                  className="w-[5rem] p-[7px] mt-12 mr-3 border-[1px] border-[#6cd0ce]"
                />
                <div className="text-white ml-3 mt-12">
                  <p>PROJECTS</p>
                  <div className="text-6xl leading-8 font-light text-[#6cd0ce] mt-2">
                    2
                  </div>
                </div>
              </div>
              <div className="md:flex hidden items-center">
                <img
                  src={timer}
                  alt="Timer Icon"
                  className="w-[5rem] p-[7px]  mt-12 border-[1px] border-[#6cd0ce]"
                />
                <div className="text-white ml-3 mt-12">
                  <p>TIME SPENT</p>
                  <div className="text-6xl leading-8 font-light text-[#6cd0ce] mt-2">
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right door */}
          <div className="bg-black  pt-[20rem]  md:pt-0 w-full md:w-1/2 lg:h-screen rounded-r-lg border-4 border-[#6cd0ce] flex flex-col items-center justify-center right-door">
            <div className=" items-center">
              <img
                src={clock}
                alt="Hour Icon"
                className="h-fit w-fit  md:w-[17rem] md:h-[18rem] md:ml-[18rem]"
              />
            </div>
            <p className="text-[#6cd0ce] text-2xl  md:ml-[270px]">
              {exit ? "0 min 0 sec left" : `${minutes} min ${seconds} sec left`}
            </p>
          </div>
        </div>

        {/* Circle */}
        <div
          className="absolute bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[23rem] h-[23rem] md:w-[26rem] md:h-[26rem] rounded-full flex flex-col items-center justify-center border-4 border-[#fcfcfc]"
          style={{ boxShadow: "0px 0px 20px 5px #6cd0ce" }}
        >
          {doorsOpen   ? (
            <>
              <div
                className="md:w-[26rem] md:h-[26rem] w-[23rem] h-[23rem] dashed rounded-full animate-spin
                    border-4 border-solid border-[#6cd0ce] border-t-transparent"
              >
              </div>
            </>
          ) : (
            <>
              <img
                src={finger}
                alt="Finger Icon"
                className="w-[5rem] p-[7px] mt-12 mb-[55px]"
              />
              <label htmlFor="password" className="text-white text-xs">
                ENTER YOUR PILEARNING PASSWORD
              </label>
              <form onSubmit={handlePasswordSubmit}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-4/5 h-10 px-2 py-2 mt-1 ml-[35px] border bg-black border-[#6cd0ce] mb-3 text-[#6cd0ce]"
                  placeholder="Password"
                  disabled={countdown === 0} 
                />
                <button
                  type="submit"
                  className="text-black md:text-lg p-[10px] font-bold ml-[135px] md:ml-[125px] bg-[#6cd0ce] md:px-8 md:py-3 mt-2 border border-[#6cd0ce] hover:bg-[#4db6ac]"
                  disabled={countdown === 0} 
                >
                  Enter Lab
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkylineMeri;
