import { useParams, Link } from "react-router-dom";
import { BLOG_POST_DETAILS } from "../data/constants";

function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POST_DETAILS[slug];

  if (!post) {
    return (
      <section className="text-center py-20">
        <h1 className="text-4xl font-extrabold text-purple-500">
          Artículo no encontrado
        </h1>
        <p className="mt-4 text-gray-400">
          El artículo que buscas no existe.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
        >
          ← Volver al Blog
        </Link>
      </section>
    );
  }

  return (
    <article className="max-w-3xl mx-auto mb-16">
      <header className="mb-10">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {post.fecha}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
          {post.titulo}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
          {post.subtitulo}
        </p>
        <img
          src={post.imagen}
          alt={post.titulo}
          className="w-full rounded-xl mt-8"
        />
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {post.contenido.map((bloque, idx) => {
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
          to="/blog"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
        >
          ← Volver al Blog
        </Link>
      </div>
    </article>
  );
}

export default BlogPost;
