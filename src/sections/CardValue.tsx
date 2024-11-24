import CardIcon from "../assets/icons/CardIcon";

function CardValue() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#656c64] py-16 px-4 gap-16 md:flex-row md:gap-40 lg:gap-40">
      {/* Tarjeta adulto */}
      <div className="flex flex-col items-center gap-4 text-center h-full md:h-48 lg:h-48 xl:h-48">
        <div className="flex items-center justify-center rounded-full w-16 md:w-20 lg:w-24">
          <CardIcon size="60" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-medium">
            Valor tarjeta adulto
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg">
            (a partir de 12 años)
          </p>
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
            $70.000
          </p>
        </div>
      </div>

      {/* Tarjeta menor */}
      <div className="flex flex-col items-center gap-4 text-center h-full md:h-48 lg:h-48 xl:h-48">
        <div className="flex items-center justify-center rounded-full w-16 md:w-20 lg:w-24">
          <CardIcon size="60" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-medium">
            Valor tarjeta menor
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg">
            (a partir de 3 años)
          </p>
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
            $35.000
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardValue;
