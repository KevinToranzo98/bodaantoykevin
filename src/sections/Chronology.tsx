import React from 'react';
import RingIcon from '../assets/icons/RingIcon';
import DrinkIcon from '../assets/icons/DrinkIcon';
import FoodIcon from '../assets/icons/FoodIcon';

function Chronology() {
  return (
    <div className="w-full h-full bg-white m-auto flex flex-col items-center justify-center gap-20 py-16 md:py-28 md:flex-row ">
      <div className="w-[13rem] h-full flex flex-col justify-start items-center gap-5">
        <div className="flex flex-col items-center gap-5 text-5xl font-semibold ">
          <RingIcon size="60" />
          <p className="text-[#656c64]">20:30</p>
        </div>
        <p className="text-primary text-2xl">Ceremonia</p>
      </div>
      <div className="w-[13rem] h-full flex flex-col justify-start items-center gap-5">
        <div className="flex flex-col items-center gap-5 text-5xl font-semibold text-[#656c64]">
          <DrinkIcon size="60" />
          <p className="text-[#656c64]">21:30</p>
        </div>
        <p className="text-primary text-2xl">Recepción</p>
      </div>
      <div className="w-[13rem] h-full flex flex-col justify-start items-center gap-5">
        <div className="flex flex-col items-center gap-5 text-5xl font-semibold text-[#656c64]">
          <FoodIcon size="60" />
          <p className="text-[#656c64]">21:45</p>
        </div>
        <p className="text-primary text-2xl">Cena</p>
      </div>
    </div>
  );
}

export default Chronology;
