import { Calendar } from 'lucide-react';
import { PhotoGroup } from './PhotoGroup';

export function HeroSection() {
  const leftGroupPhotos = {
    main: '../src/assets/Foto1.HEIC',
    floating: [
      {
        src: '../src/assets/Foto5.JPEG',
        position: '-top-10 -left-10',
        delay: '0s',
      },
      {
        src: '../src/assets/Foto2.HEIC',
        position: '-bottom-10 -right-10',
        delay: '1s',
      },
    ],
  };

  const rightGroupPhotos = {
    main: '../src/assets/Foto3.JPEG',
    floating: [
      {
        src: '../src/assets/Foto4.JPEG',
        position: '-bottom-10 -left-10',
        delay: '0.5s',
      },
    ],
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('../src/assets/fondo6.jpg')",
          opacity: 0.3,
        }}
      >
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-16 items-center justify-center text-center">
          <PhotoGroup
            mainImage={leftGroupPhotos.main}
            floatingImages={leftGroupPhotos.floating}
            className="transform md:translate-x-4"
          />

          <div className="text-center">
            <h1 className="!text-primary font-dancing text-5xl md:text-7xl mb-4">
              Anto & Kevin
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              ¡Te invitamos a festejar nuestra boda!
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <Calendar className="w-6 h-6" />
              <p className="text-xl">12/04/2025</p>
            </div>
          </div>

          <PhotoGroup
            mainImage={rightGroupPhotos.main}
            floatingImages={rightGroupPhotos.floating}
            className="transform md:-translate-x-4"
          />
        </div>
      </div>
    </section>
  );
}
