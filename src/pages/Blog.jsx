import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/constants";

function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          <span className="text-purple-500">Blog</span> de desarrollo y más.
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Publicaciones sobre desarrollo, programación, experiencias, recursos,
          reflexiones y mucho más del mundo tech.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {BLOG_POSTS.map((post, index) => (
          <Link
            to={`/blog/${post.slug}`}
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={post.imagen}
              alt={post.titulo}
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm text-white/70 group-hover:text-white">
                  {post.fecha}
                </p>
                <h4 className="text-2xl font-extrabold text-white group-hover:text-purple-500">
                  {post.titulo}
                </h4>
                <p className="text-sm text-white/90 mt-2">
                  {post.descripcion}
                </p>
              </div>
              <div className="flex justify-end">
                <span className="text-purple-500 text-sm hover:underline mt-4 flex items-center gap-1 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Leer más <span className="text-xl">↗</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

export default Blog;
