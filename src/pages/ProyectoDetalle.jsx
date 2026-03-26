import { useParams, Link } from "react-router-dom";
import { PROJECT_DETAILS } from "../data/constants";

function ProyectoDetalle() {
  const { slug } = useParams();
  const proyecto = PROJECT_DETAILS[slug];

  if (!proyecto) {
    return (
      <section className="text-center py-20">
        <h1 className="text-4xl font-extrabold text-purple-500">
          Proyecto no encontrado
        </h1>
        <p className="mt-4 text-gray-400">
          El proyecto que buscas no existe.
        </p>
        <Link
          to="/proyectos"
          className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
        >
          ← Volver a Proyectos
        </Link>
      </section>
    );
  }

  return (
    <article className="max-w-3xl mx-auto mb-16 px-4">
      {/* HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
          {proyecto.titulo}
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
          {proyecto.subtitulo}
        </p>

        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="w-full rounded-xl mt-8"
        />
      </header>

      {/* CONTENIDO DINÁMICO */}
      {/* RESUMEN */}
      <p className="text-lg text-gray-300 mt-6">
        {proyecto.resumen}
      </p>

      {/* INFO */}
      <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-400">
        <span>👨‍💻 {proyecto.rol}</span>
        <span>🏢 {proyecto.empresa}</span>
      </div>

      {/* STACK */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-3">Tecnologías</h3>
        <div className="flex flex-wrap gap-2">
          {proyecto.stack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* PROCESO */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-3">Proceso</h3>
        <ul className="list-disc ml-5">
          {proyecto.proceso.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* RETOS */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-3">Retos</h3>
        <ul className="list-disc ml-5">
          {proyecto.retos.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* SOLUCIÓN */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-3">Solución</h3>
        <ul className="list-disc ml-5">
          {proyecto.solucion.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* IMPACTO */}
      <div className="mt-10 bg-purple-600/10 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-purple-400 mb-3">
          Impacto
        </h3>
        <ul>
          {proyecto.impacto.map((item, i) => (
            <li key={i}>🚀 {item}</li>
          ))}
        </ul>
      </div>

      {/* BOTÓN */}
      <div className="text-center mt-10">
        <Link
          to="/proyectos"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
        >
          ← Volver a Proyectos
        </Link>
      </div>
    </article>
  );
}

export default ProyectoDetalle;