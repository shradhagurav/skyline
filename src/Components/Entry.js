import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Entry = () => {
  const [countdown, setCountdown] = useState(5 * 60); // Countdown in seconds
  const [exit, setExit] = useState(false);            // for exit to home page
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {      // setcountdown is a callback functon its take pervcountdown as value
        if (prevCountdown === 0) {             // when the countdown reaches 0 
          clearInterval(interval);            // its clear the interval
          setExit(true);                      // and when setexist true  its shows time expire
        }
        return prevCountdown - 1;               // countdown is -1 for 10 , 9 , 8...
      });
    }, 1000);

    return () => clearInterval(interval);       //when we enter the correct password timer is stop clear interval
  }, []);

  useEffect(() => {
    if (exit) {
      navigate('/');                                 // Automatically redirect to home page 
    }
  }, [exit, navigate]);

  const handleExit = () => {
    // Handle exit logic here
    console.log('Exiting...');  //exit button is clicked before the countdown timer reaches 0
    setExit(true); // Set exit to true manually in case the button is clicked before the countdown ends
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-[#6cd0ce]">
      <div className="relative">
        <div
          className="w-[18rem] h-[18rem] border-4 border-white border-solid rounded-full flex items-center justify-center"  
          style={{
            boxShadow: '0px 0px 20px 5px #6cd0ce',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="text-4xl">
            {Math.floor(countdown / 60)} Min : {countdown % 60} Sec
          </div>
        </div>
        {!exit && (
          <button
            onClick={handleExit}
            className="bg-[#6cd0ce] text-black px-4 py-2 mt-[172px] text-lg font-bold"
            style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translateX(-50%)' }}
          >
            Exit
          </button>
        )}
      </div>
    </div>
  );
};

export default Entry;
