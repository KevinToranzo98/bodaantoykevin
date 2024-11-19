import CalendarIcon from '../assets/icons/CalendarIcon';
import ClockIcon from '../assets/icons/ClockIcon';
import { LocationIcon } from '../assets/icons/LocationIcon';

function Details() {
  return (
    <div className="w-full m-auto flex flex-col items-center justify-center gap-10 bg-[#656c64] py-16 md:py-28">
      <h2 className="text-white text-4xl">Detalles de la boda</h2>
      <div className="w-full h-full flex flex-col justify-center  items-center gap-32 md:flex-row md:h-[12rem]">
        <div className="w-[13rem] h-full flex flex-col items-center justify-between gap-5">
          <div className="h-[3.5rem]">
            <CalendarIcon size="50" />
          </div>
          <div className="h-full flex flex-col items-center gap-2">
            <p className="text-primary">Fecha</p>
            <p className="text-white">Sábado 12 de Abril 2025</p>
          </div>
        </div>

        <div className="w-[13rem] h-full flex flex-col items-center justify-between gap-5">
          <div className="h-[3.5rem]">
            <ClockIcon size="50" />
          </div>
          <div className="h-full flex flex-col items-center gap-2">
            <p className="text-primary">Horario</p>
            <p className="text-white">Comienza: 20:30</p>
            <p className="text-white">Finaliza: 05:00</p>
          </div>
        </div>

        <div className="w-[13rem] h-full flex flex-col items-center justify-between gap-5">
          <div className="h-[3.5rem]">
            <LocationIcon size="50" />
          </div>
          <div className="h-full flex flex-col items-center gap-2">
            <a
              href="https://www.google.com/maps/place/La+Quinta+Casona,+Celso+Barrios+3490,+X5014+C%C3%B3rdoba/data=!4m2!3m1!1s0x9432a32df996b257:0x49eea3e9a3acaacf?entry=gps&coh=192189&g_ep=CAESCjExLjEyNS4xMDIYACDXggMqUSw5NDI0MjUyMCw5NDIxMjQ5Niw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICQVI%3D"
              className="text-primary text-lg underline"
            >
              Ubicación
            </a>
            <p className="text-white text-center">
              Salón "La Quinta Casona" Celso Barrios 3490, X5014. Córdoba
              Capital
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
