import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Portafolio from "./pages/Portafolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ProyectoDetalle from "./pages/ProyectoDetalle";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}

export default App;
