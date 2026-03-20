import { ALL_PROJECTS } from "../data/constants";

function Proyectos() {
  return (
    <>
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Mis Proyectos <br />
          y <span className="text-purple-500"> Experimentos</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Aquí te muestro algunos de los proyectos en los que he trabajado,
          desde desarrollos freelance, colaboraciones hasta proyectos propios
          donde aplico nuevas tecnologías y metodologías.
        </p>
      </section>

      {/* Grid de proyectos */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ALL_PROJECTS.map((proyecto, index) => (
          <a
            href={proyecto.enlace}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.nombre}
              className="w-full h-48 object-cover group-hover:brightness-110 group-hover:scale-105 transition"
            />
            <div className="p-5">
              <h4 className="text-xl font-bold mb-2 group-hover:text-purple-500">
                {proyecto.nombre}
              </h4>
              <p className="text-sm text-gray-600 dark:text-white/70 mb-4">
                {proyecto.descripcion}
              </p>
              <div className="flex gap-2 flex-wrap">
                {proyecto.tecnologias.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 dark:bg-purple-900 text-purple-500 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </section>

      {/* CTA */}
      <div className="text-center mt-16 mb-10">
        <a
          href="/portafolio"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Ver más en mi portafolio →
        </a>
      </div>
    </>
  );
}

export default Proyectos;
