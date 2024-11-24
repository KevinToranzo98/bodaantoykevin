import CalendarIcon from '../assets/icons/CalendarIcon';
import ClockIcon from '../assets/icons/ClockIcon';
import { LocationIcon } from '../assets/icons/LocationIcon';

function Details() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 bg-[#656c64] py-16 px-4 md:py-28">
      {/* Título */}
      <h2 className="text-white text-2xl md:text-4xl font-semibold text-center">
        DETALLES DE LA BODA
      </h2>

      {/* Contenedor de detalles */}
      <div className="w-full flex flex-col justify-center items-center gap-16 md:flex-row md:gap-8 lg:gap-16">
        {/* Sección: Fecha */}
        <div className="flex flex-col items-center gap-4 text-center md:w-[20%] lg:w-[15%] md:h-48">
          <div className="flex items-center justify-center rounded-full w-16 md:w-20 lg:w-24">
            <CalendarIcon size="50" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-primary text-lg md:text-xl font-medium">Fecha</p>
            <p className="text-white text-sm md:text-base lg:text-lg">
              Sábado 12 de Abril 2025
            </p>
          </div>
        </div>

        {/* Sección: Horario */}
        <div className="flex flex-col items-center gap-4 text-center md:w-[20%] lg:w-[15%] md:h-48">
          <div className="flex items-center justify-center rounded-full w-16 md:w-20 lg:w-24">
            <ClockIcon size="50" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-primary text-lg md:text-xl font-medium">
              Horario
            </p>
            <p className="text-white text-sm md:text-base lg:text-lg">
              Comienza: 20:30
            </p>
            <p className="w-full text-center text-white text-sm md:text-base lg:text-lg">
              Finaliza: 05:00
            </p>
          </div>
        </div>

        {/* Sección: Ubicación */}
        <div className="flex flex-col items-center gap-4 text-center md:w-[20%] lg:w-[15%] md:h-48">
          <div className="flex items-center justify-center rounded-full w-16 md:w-20 lg:w-24">
            <LocationIcon size="60" />
          </div>
          <div className="w-9/12 flex flex-col items-center gap-1 md:w-full">
            <p className="text-primary text-lg md:text-xl font-medium">
              Ubicación
            </p>
            <a
              href="https://www.google.com/maps/place/La+Quinta+Casona,+Celso+Barrios+3490,+X5014+C%C3%B3rdoba"
              className="text-primary text-lg md:text-xl hover:text-primary/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-white underline text-sm md:text-base lg:text-lg">
                Salón "La Quinta Casona"
              </p>
              <p className="text-white underline text-sm md:text-base lg:text-lg">
                Celso Barrios 3490, X5014. Córdoba Capital
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
