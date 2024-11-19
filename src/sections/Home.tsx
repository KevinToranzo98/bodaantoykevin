function Home() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center p-4 relative md:p-10">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('/fondo6.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      />
      <div className="w-full h-full z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:justify-between xl:px-[5%]">
        {/* Images left */}
        <div className="h-full relative flex items-center justify-center md:justify-start">
          <div className="relative flex flex-col items-center md:ml-10">
            {/* Primera imagen */}
            <img
              id="image-1"
              className="w-[125px] h-[150px] rounded-lg transition-transform transform mb-5 md:mb-0 md:w-[230px] md:h-[200px] lg:w-[300px] lg:h-[400px]"
              src="/Foto1.HEIC"
              alt="Imagen 1"
            />
            {/* Segunda imagen */}
            <img
              id="image-2"
              className="w-[75px] h-[100px] top-[15%] left-[-50%] rounded-lg absolute animate-float md:w-[90px] md:h-[50%] md:top-[25%] md:left-[-40%] lg:left[-30%] xl:left-[-40%] lg:w-[150px] lg:h-[200px]"
              style={{
                transform: 'translateX(-50%) translateY(-10px)',
              }}
              src="/Foto5.JPEG"
              alt="Imagen 2"
            />
            {/* Tercera imagen */}
            <img
              id="image-3"
              className="w-[80px] h-[100px] top-[75%] left-[50%] rounded-lg absolute animate-float md:top-[90%] md:left-[30%] xl:h-[200px] xl:w-[150px] lg:w-[150px] lg:h-[200px]"
              style={{
                transform: 'translateX(-50%) translateY(10px)',
              }}
              src="/Foto2.HEIC"
              alt="Imagen 3"
            />
          </div>
        </div>

        {/* Text center */}
        <div className="h-full flex flex-col justify-center items-center gap-5 text-center">
          <h3 className="text-[#6d7561] text-2xl sm:text-3xl md:text-3xl font-medium">
            ¡Los invitamos a festejar nuestra boda!
          </h3>
          <h1 className="text-[#6d7561] text-3xl sm:text-4xl md:text-5xl font-bold">
            Anto & Kevin
          </h1>
          <a
            target="_blank"
            href="https://p02jvynd.forms.app/formularioinvitados"
            className="text-[#6d7561] text-xl sm:text-2xl underline hover:text-[#6d756190]"
          >{`Confirmar asistencia ${'>'}`}</a>
        </div>

        {/* Images right */}
        <div className="h-full relative flex items-center justify-center md:justify-end">
          <div className="relative flex flex-col items-center md:ml-10">
            <img
              className="w-[125px] h-[150px] rounded-lg transition-transform transform mb-5 md:mb-0 md:w-[230px] md:h-[200px] lg:w-[300px] lg:h-[400px]"
              src="/Foto3.JPEG"
              alt="Imagen 1"
            />
            <img
              width={150}
              height={150}
              className="w-[75px] h-[100px] top-[60%] right-[-50%] rounded-lg absolute animate-float md:w-[90px] md:h-[125px] md:top-[90%] md:right-[40%] lg:top-[95%] lg:right-[25%] lg:w-[150px] lg:h-[200px] xl:h-[200px] xl:w-[150px]"
              style={{
                transform: 'translateX(50%) translateY(-10px)',
              }}
              src="/Foto4.JPEG"
              alt="Imagen 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
