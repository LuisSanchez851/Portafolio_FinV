import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  FEATURED_PROJECTS,
  TECHNOLOGIES,
  PORTFOLIO_ITEMS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  SOCIAL_LINKS,
} from "../data/constants";

function Home() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="text-center">
        <div className="flex justify-center">
          <img
            src="/assets/img/Me.jpg"
            alt="Luis Sanchez"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-6">
          <span className="text-purple-500">Software developer</span>,
          <br className="hidden md:block" />
          founder, and tech enthusiast.
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
          Soy Luis Sanchez, un desarrollador apasionado por crear soluciones
          digitales efectivas y escalables. Me enfoco en desarrollo fullstack,
          diseño de software y compartir conocimiento.
        </p>
      </section>

      {/* Redes sociales */}
      <section className="text-center py-10">
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href={SOCIAL_LINKS.email}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section id="projects" className="py-20">
        <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-10 text-center">
          Mis Proyectos
        </h3>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {FEATURED_PROJECTS.map((proyecto) => (
            <Link
              key={proyecto.slug}
              to={`/proyectos/${proyecto.slug}`}
              className="group relative min-w-[300px] md:min-w-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0"
            >
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105 group-hover:-rotate-2 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-white/70 group-hover:text-white">
                    {proyecto.anio}
                  </p>
                  <h4 className="text-2xl font-extrabold text-white group-hover:text-purple-500">
                    {proyecto.titulo}
                  </h4>
                  <p className="text-sm text-white/90 mt-2">
                    {proyecto.descripcion}
                  </p>
                </div>
                <div className="flex justify-end">
                  <span className="text-purple-500 text-sm hover:underline mt-4 flex items-center gap-1 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Más información... <span className="text-xl">↗</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tecnologías */}
        <div className="flex justify-center gap-4 mt-8 bg-white dark:bg-neutral-900 px-6 py-5 rounded-xl">
          {TECHNOLOGIES.map((tech) => (
            <img
              key={tech.name}
              src={tech.icon}
              alt={tech.name}
              className="w-9 h-9"
            />
          ))}
        </div>
      </section>

      {/* Portafolio / Experiencia */}
      <section id="portfolio" className="py-20">
        <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-10 text-center">
          Portafolio / Experiencia
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logros */}
          <div className="md:col-span-2 flex flex-col gap-8">
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl p-6 shadow-lg"
              >
                <p className="text-sm text-gray-600 dark:text-white/70 mb-1">
                  {item.fecha}
                </p>
                <h4 className="text-xl font-bold">{item.titulo}</h4>
                <p className="text-sm mt-2">{item.descripcion}</p>
                <a
                  href="#"
                  className="text-purple-500 text-sm hover:underline mt-2 flex items-center gap-1"
                >
                  Leer más <span>↗</span>
                </a>
              </div>
            ))}
          </div>

          {/* Experiencia Laboral */}
          <div className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl p-8 shadow-lg self-center max-w-[380px]">
            <h4 className="text-xl font-bold mb-4">Experiencia Laboral</h4>
            <div className="flex flex-col gap-6">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={exp.logo}
                      alt={exp.empresa}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold">{exp.empresa}</p>
                      <p className="text-sm text-gray-600 dark:text-white/70">
                        {exp.cargo}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-white/50">
                    {exp.periodo}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/assets/document/Luis Sanchez CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition block text-center"
            >
              Descargar CV ↓
            </a>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20">
        <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-10 text-center">
          Blog
        </h3>

        <div className="flex flex-col gap-8">
          {BLOG_POSTS.slice(0, 3).map((post, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl p-6 shadow-lg"
            >
              <p className="text-sm text-gray-600 dark:text-white/70 mb-1">
                {post.fecha}
              </p>
              <h4 className="text-xl font-bold">{post.titulo}</h4>
              <p className="text-sm mt-2">{post.descripcion}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-purple-500 text-sm hover:underline mt-3 flex items-center gap-1"
              >
                Leer artículo <span>↗</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-10">
        <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-10 text-center">
          Contacto
        </h3>
        <form
          action="https://formsubmit.co/jrcas027@gmail.com"
          method="POST"
          className="mt-6 space-y-4 max-w-xl mx-auto"
        >
          {/* Configuración adicional de FormSubmit */}
          <input type="hidden" name="_subject" value="Nuevo mensaje desde mi portafolio!" />
          <input type="hidden" name="_template" value="box" />

          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            required
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            required
            className="w-full p-2 rounded bg-gray-700 text-white h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
          />
          <button
            type="submit"
            className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700 transition w-full md:w-auto"
          >
            Enviar
          </button>
        </form>
      </section>
    </>
  );
}

export default Home;
