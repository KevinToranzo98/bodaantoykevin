import { useEffect, useState } from 'react';

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/fondo6.jpg';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Fondo de baja calidad */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          imageLoaded ? 'opacity-0' : 'opacity-40'
        }`}
        style={{
          backgroundImage: "url('/fondo6_lazy.jpg')",
        }}
      />

      {/* Fondo de alta calidad */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          imageLoaded ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          backgroundImage: "url('/fondo6.jpg')",
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col gap-10 justify-around items-center px-4 md:px-10 lg:flex-row lg:gap-20 w-full h-full">
        {/* Sección izquierda (imágenes) */}

        <div className="relative flex flex-col items-center">
          {/* Imagen principal */}
          <img
            className="rounded-lg w-[160px] h-[210px] md:w-[200px] md:h-[250px] lg:w-[300px] lg:h-[400px]"
            src="/Foto1.HEIC"
            alt="Imagen 1"
          />

          {/* Imagen secundaria arriba a la izquierda */}
          <img
            className="absolute rounded-lg w-[70px] h-[85px] top-[30px] left-[-50px] md:w-[80px] md:h-[100px] lg:w-[125px] lg:h-[150px] xl:w-[150px] xl:h-[200px] xl:left-[-100px]  animate-float"
            src="/Foto5.JPEG"
            alt="Imagen 2"
          />

          {/* Imagen secundaria abajo a la derecha */}
          <img
            className="absolute rounded-lg w-[70px] h-[85px] bottom-[-20px] right-[-55px] md:w-[80px] md:h-[100px] lg:w-[125px] lg:h-[150px] xl:w-[150px] xl:h-[200px] animate-float"
            src="/Foto2.HEIC"
            alt="Imagen 3"
          />
        </div>

        {/* Sección central (texto) */}
        <div className="text-center flex flex-col items-center justify-center gap-4">
          <h3 className="text-[#6d7561] text-xl md:text-2xl lg:text-3xl font-medium">
            ¡Te invitamos a festejar nuestra boda!
          </h3>
          <h1 className="text-[#6d7561] text-2xl md:text-4xl lg:text-5xl font-bold">
            Anto & Kevin
          </h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://p02jvynd.forms.app/formularioinvitados"
            className="text-[#6d7561] text-lg md:text-xl underline hover:text-[#6d756190]"
          >
            Confirmar tu asistencia
          </a>
        </div>

        {/* Sección derecha (imágenes) */}
        <div className="relative flex flex-col items-center gap-5 lg:gap-10">
          {/* Imagen principal */}
          <img
            className="rounded-lg w-[160px] h-[210px] md:w-[200px] md:h-[250px] lg:w-[300px] lg:h-[400px]"
            src="/Foto3.JPEG"
            alt="Imagen principal"
          />

          {/* Imagen secundaria derecha abajo */}
          <img
            className="absolute rounded-lg w-[75px] h-[100px] top-[-10%] left-[80%] translate-x-[50%] md:w-[80px] md:h-[100px] md:top-[50%] md:left-[95%] lg:w-[125px] lg:h-[150px] lg:top-[90%] lg:left-[30%] xl:w-[150px] xl:h-[200px] animate-float"
            src="/Foto4.JPEG"
            alt="Imagen secundaria"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
