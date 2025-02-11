import { CreditCard } from "lucide-react";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 bg-[#faf7f5] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center bg-no-repeat opacity-10"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <CreditCard className="text-primary w-12 h-12 mx-auto mb-4" />
          <h2 className="text-primary text-4xl font-dancing mb-4">
            Información de las tarjetas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-[#fdf5e0] p-6">
              <h3 className="text-primary text-2xl font-dancing text-center">
                Tarjeta adulto
              </h3>
              <p className="text-center text-sm text-gray-600">
                (a partir de los 12 años)
              </p>
            </div>
            <div className="p-8 text-center">
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  $78.000
                </span>
                <span className="text-gray-600">/persona</span>
              </div>
              <p className="text-gray-500">
                El valor puede variar según informe el salón. Si ya abonaste tu
                tarjeta, el precio se congelará y no tendrás que pagar la
                diferencia y si aún no abonaste tendrás que hacerlo con el
                precio actualizado.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-[#fdf5e0] p-6">
              <h3 className="text-primary text-2xl font-dancing text-center">
                Tarjeta menor
              </h3>
              <p className="text-center text-sm text-gray-600">
                (a partir de los 3 años)
              </p>
            </div>
            <div className="p-8 text-center">
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  $39.000
                </span>
                <span className="text-gray-600">/niño</span>
              </div>
              <p className="text-gray-500">
                El valor puede variar según informe el salón. Si ya abonaste tu
                tarjeta, el precio se congelará y no tendrás que pagar la
                diferencia y si aún no abonaste tendrás que hacerlo con el
                precio actualizado.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">Niños menores de 3 años no pagan</p>
        </div>
      </div>
    </section>
  );
}
