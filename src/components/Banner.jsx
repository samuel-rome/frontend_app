import React from "react";
import { HiComputerDesktop } from "react-icons/hi2";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import bannerImage from "../../public/images/banner.png"; // Ruta de la imagen
import "../components/Navbar.css";

const Banner = () => {
  return (
    <div className="relative">
      <img src={bannerImage} alt="Banner" className="w-full" />

      <h1 className="absolute top-neg-50 left-0 right-0 bottom-0 flex items-center justify-center banner-heading font-bold">
        Bienvenido a AsesorTech
      </h1>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center font-bold">
        <div className="icon-container">
          <HiComputerDesktop className="icon" />
          <span className="icon-text">Aula Virtual</span>
        </div>
        <div className="icon-container">
          <AiTwotoneCalendar className="icon" />
          <span className="icon-text">Planificacion</span>
        </div>
        <div className="icon-container">
          <BsBook className="icon" />
          <span className="icon-text">Cursos</span>
        </div>
        <div className="icon-container">
          <MdPayment className="icon" />
          <span className="icon-text">Pagos en Linea</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
