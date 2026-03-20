import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <ThemeToggle />
      <main className="pt-32 px-6 md:px-20 lg:px-40">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
