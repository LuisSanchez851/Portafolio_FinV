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
    <article className="max-w-3xl mx-auto mb-16">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 text-center">
          {proyecto.titulo}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 text-center">
          {proyecto.subtitulo}
        </p>
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="w-full rounded-xl mt-8"
        />
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none text-center">
        {proyecto.contenido.map((bloque, idx) => {
          switch (bloque.tipo) {
            case "titulo":
              return <h2 key={idx}>{bloque.texto}</h2>;
            case "parrafo":
              return <p key={idx}>{bloque.texto}</p>;
            case "lista":
              return (
                <ul key={idx}>
                  {bloque.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            case "cita":
              return <blockquote key={idx}>{bloque.texto}</blockquote>;
            default:
              return null;
          }
        })}
      </div>

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
