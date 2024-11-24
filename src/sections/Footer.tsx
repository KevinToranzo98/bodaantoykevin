function Footer() {
  return (
    <div className="w-full m-auto flex flex-col items-center justify-center gap-10 bg-[#656c64] px-4 py-28 md:px-0">
      <div className="flex gap-5">
        <a className="text-white text-lg" href="#chronology">
          Cronograma
        </a>
        <a className="text-white text-lg" href="#dress-code">
          Vestimenta
        </a>
        <a className="text-white text-lg" href="#details">
          Detalles
        </a>
      </div>
      <p className="text-white ">¡Te esperamos!</p>
    </div>
  );
}

export default Footer;
