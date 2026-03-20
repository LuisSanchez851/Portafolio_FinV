import {
  WORK_EXPERIENCE,
  CERTIFICATIONS,
  TECHNOLOGIES,
} from "../data/constants";

function Portafolio() {
  return (
    <>
      {/* Hero */}
      <section className="text-center">
        <img
          src="/assets/img/Me.jpg"
          alt="Luis Sánchez"
          className="w-24 h-24 rounded-full object-cover mx-auto"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6">
          Mi Portafolio <br />y{" "}
          <span className="text-purple-500">Experiencia</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          Soy Luis Sanchez, Desarrollador Fullstack y entusiasta de la
          tecnología. Me especializo en crear aplicaciones modernas, bases de
          datos robustas y experiencias digitales escalables.
        </p>
      </section>

      {/* Experiencia */}
      <section className="mt-20">
        <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-8 text-center">
          Experiencia Laboral
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition relative flex flex-col items-center text-center"
            >
              <img
                src={exp.logo}
                alt={exp.empresa}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <div>
                <p className="font-semibold">{exp.empresa}</p>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  {exp.cargo}
                </p>
                <p className="text-sm text-gray-500 dark:text-white/50">
                  {exp.periodo}
                </p>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-4">
                <p className="text-sm text-gray-600 dark:text-white/80">
                  {exp.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificaciones */}
      <section className="mt-20">
        <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-8 text-center">
          Títulos y Certificaciones
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition relative flex flex-col items-center text-center"
            >
              <img
                src={cert.logo}
                alt={cert.proveedor}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <div>
                <p className="font-semibold">{cert.proveedor}</p>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  {cert.fecha}
                </p>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-4">
                <p className="font-semibold">{cert.titulo}</p>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  {cert.proveedor} - {cert.fecha}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tecnologías */}
      <section className="mt-20">
        <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-8 text-center">
          Tecnologías Usadas
        </h3>
        <div className="flex flex-wrap justify-center gap-6 bg-white dark:bg-neutral-900 p-6 rounded-xl">
          {TECHNOLOGIES.map((tech) => (
            <img
              key={tech.name}
              src={tech.icon}
              alt={tech.name}
              className="w-10 h-10"
            />
          ))}
        </div>
      </section>

      {/* Botón Descargar CV */}
      <div className="mt-10 mb-10 flex justify-center">
        <a
          href="/assets/document/Luis Sanchez CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition"
        >
          Descargar CV ↓
        </a>
      </div>
    </>
  );
}

export default Portafolio;
