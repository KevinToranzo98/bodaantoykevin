import CardIcon from '../assets/icons/CardIcon';

function CardValue() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-32 bg-[#656c64] py-28 px-16">
      <div className="flex flex-col items-center gap-3">
        <CardIcon size="60" />
        <p className="text-center text-white text-2xl ">Valor adulto</p>
        <p className="text-center text-white text-2xl ">$70.000</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <CardIcon size="60" />
        <p className="text-center text-white text-2xl ">Valor menor</p>
        <p className="text-center text-white text-2xl ">$35.000</p>
      </div>
    </div>
  );
}

export default CardValue;
