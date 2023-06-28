import React from "react";
import "../../public/images/image 13.png"; // Ruta de la imagen

const features = [
  {
    name: "Aprendizaje Personalisado",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat consequat efficitur. Fusce congue mi vel lectus malesuada auctor.",
  },
  {
    name: "Contenido de Confianza",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  {
    name: "Herramientas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat consequat efficitur. Fusce congue mi vel lectus malesuada auctor.",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Quienes Somos?
          </h2>
          <p className="mt-4 text-gray-500">
            AsesorTech es una plataforma en línea que ofrece apoyo académico
            personalizado y asequible a través de tutores virtuales. Nuestro
            objetivo es fomentar un aprendizaje interactivo y dinámico,
            brindando oportunidades educativas accesibles para estudiantes de
            todas las edades.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="../../public/images/image 14.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="../../public/images/image 13.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="../../public/images/image 15.png"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          
        </div>
      </div>
    </div>
  );
}
