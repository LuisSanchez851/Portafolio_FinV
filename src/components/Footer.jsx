import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SOCIAL_LINKS } from "../data/constants";

function Footer() {
  return (
    <footer className="text-center py-8 flex flex-col items-center gap-3">
      <img
        src="/assets/img/Logo-LS.png"
        alt="Logo Luis Sánchez"
        className="w-14 h-14"
      />
      <div className="flex gap-6 text-2xl">
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
          className="hover:text-purple-400 transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © 2025 Luis Sánchez. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
