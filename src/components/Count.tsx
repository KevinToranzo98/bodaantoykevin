import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  day: string;
}

const Count: React.FC<CountdownProps> = ({ day }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(day));

  function calculateTimeLeft(day: string): TimeLeft {
    const difference = new Date(day).getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(day));
    }, 1000);

    return () => clearInterval(timer);
  }, [day]);

  return (
    <div className="w-full h-full bg-[#656c64] flex flex-col items-center justify-center gap-5 py-16 md:py-28 md:h-24 md:flex-row">
      <div className="flex flex-col items-start gap-5 md:flex-row md:items-start">
        <div className="w-[11rem] flex flex-row justify-start items-center gap-5 md:flex-col">
          <div className="w-[4rem] h-[4rem] text-3xl text-[#656c64] shadow-md bg-white flex items-center justify-center rounded-lg md:w-24 md:h-24">
            {timeLeft?.days}
          </div>
          <p className="text-white text-xl">Días</p>
        </div>
        <p className="text-white text-xl font-bold px-8 transform rotate-90 md:pt-8 md:rotate-0 md:px-0">
          :
        </p>
      </div>

      <div className="flex flex-col items-start gap-5 md:flex-row md:items-start">
        <div className="w-[11rem] flex flex-row justify-start items-center gap-5 md:flex-col">
          <div className="w-[4rem] h-[4rem] text-3xl text-[#656c64] shadow-md bg-white flex items-center justify-center rounded-lg md:w-24 md:h-24">
            {timeLeft?.hours}
          </div>
          <p className="text-white text-xl">Horas</p>
        </div>
        <p className="text-white text-xl font-bold px-8 transform rotate-90 md:pt-8 md:rotate-0 md:px-0">
          :
        </p>
      </div>

      <div className="flex flex-col items-start gap-5 md:flex-row md:items-start">
        <div className="w-[11rem] flex flex-row justify-start items-center gap-5 md:flex-col">
          <div className="w-[4rem] h-[4rem] text-3xl text-[#656c64] shadow-md bg-white flex items-center justify-center rounded-lg md:w-24 md:h-24">
            {timeLeft?.minutes}
          </div>
          <p className="text-white text-xl">Minutos</p>
        </div>
        <p className="text-white text-xl font-bold px-8 transform rotate-90 md:pt-8 md:rotate-0 md:px-0">
          :
        </p>
      </div>

      <div className="flex flex-col items-start gap-5 md:flex-row md:items-start">
        <div className="w-[11rem] flex flex-row justify-start items-center gap-5 md:flex-col">
          <div className="w-[4rem] h-[4rem] text-3xl text-[#656c64] shadow-md bg-white flex items-center justify-center rounded-lg md:w-24 md:h-24">
            {timeLeft.seconds}
          </div>
          <p className="text-white text-xl">Segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
