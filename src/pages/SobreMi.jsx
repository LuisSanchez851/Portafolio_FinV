import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  SOCIAL_LINKS,
  GALLERY_IMAGES,
  TIMELINE,
  VALUES,
} from "../data/constants";

function SobreMi() {
  return (
    <>
      {/* Hero - Bio */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Columna izquierda - texto */}
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8">
            Soy
            <span className="text-purple-500"> Luis Sánchez</span>, <br />
            Vivo en Bogotá, <br />
            donde me desarrollo para el futuro.
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Desde los 15 años empecé a interesarme por la tecnología mientras estudiaba un técnico en mecatrónica, donde tuve mi primer contacto con la programación trabajando con microcontroladores como Arduino, sensores y sistemas automatizados. Esa experiencia despertó en mí el interés por entender no solo cómo funcionan los sistemas físicos, sino también cómo el software puede potenciarlos.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            A partir de ahí decidí enfocarme en la Ingeniería de Software, formándome de manera constante y desarrollando proyectos donde combino lógica, diseño y resolución de problemas.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Me interesa crear herramientas y soluciones que tengan un impacto real, especialmente en el desarrollo web, el backend y la gestión de datos, buscando siempre que sean eficientes, escalables y útiles en contextos reales.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Actualmente sigo fortaleciendo mis habilidades como desarrollador fullstack, explorando tecnologías modernas y profundizando en áreas como arquitectura de software y desarrollo de aplicaciones.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            Fuera del ámbito técnico, me interesa aprender sobre innovación, tecnología y nuevas tendencias, además de disfrutar los videojuegos y el aprendizaje continuo.
          </p>
        </div>

        {/* Columna derecha - imagen y redes */}
        <div className="flex flex-col items-center gap-6">
          <img
            src="/assets/img/Me.jpg"
            alt="Luis Sánchez"
            className="w-64 h-64 rounded-2xl object-cover"
          />

          <div className="space-y-3 w-full">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-purple-500 transition-colors"
            >
              <FaGithub /> <span>Follow on GitHub</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-purple-500 transition-colors"
            >
              <FaLinkedin /> <span>Follow on LinkedIn</span>
            </a>
          </div>

          <div className="border-t border-gray-700 w-full pt-4">
            <a
              href={SOCIAL_LINKS.email}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-purple-500 transition-colors"
            >
              <FaEnvelope /> <span>jrcas027@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Galería horizontal */}
      <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] mt-16">
        <div className="flex gap-4 overflow-x-auto px-4 py-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Galería ${idx}`}
              className="h-80 w-60 rounded-3xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </section>

      {/* Sobre mí */}
      <section className="mt-16 justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-6 text-center">
          Sobre mí
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <p>🚀 Soy alguien que disfruta aprender y experimentar.</p>
            <p>✈️ Amante de los viajes y la naturaleza.</p>
            <p>💡 Me encanta compartir conocimiento.</p>
            <p>🎯 Siempre estoy buscando nuevos retos.</p>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-purple-500">
              Intereses personales
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Inteligencia Artificial y Machine Learning</li>
              <li>Desarrollo Web & Backend</li>
              <li>Automatización y DevOps</li>
              <li>Cine, fotografía y exploración</li>
              <li>Viajar y conocer otras culturas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-6 text-center">
          Mis valores y filosofía
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {VALUES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6"
            >
              <h4 className="text-xl font-bold mb-2 text-purple-500">
                {item.titulo}
              </h4>
              <p className="text-sm text-gray-600 dark:text-white/70">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="mt-16 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-10 text-center">
          Mi trayectoria
        </h2>
        <div className="relative border-l-4 border-purple-500 ml-6 justify-center">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="mb-8 ml-4">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2.5 border border-white dark:border-black" />
              <p className="text-sm text-gray-500 dark:text-white/70">
                {item.fecha}
              </p>
              <h4 className="text-lg font-semibold">{item.evento}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default SobreMi;
