import React from "react";
import summer from "/src/assets/SUMMER.webp";
import ig from "./assets/ig.svg";
import world from "./assets/world.svg";
import Countdown from "react-countdown";
export const App = () => {
  const endDate = new Date("2024-11-07T20:00:00");

  // Función personalizada para renderizar el countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Muestra un mensaje o realiza alguna acción cuando el tiempo se agote
      return <span>¡El tiempo se ha agotado!</span>;
    } else {
      // Renderiza el countdown
      return (
        <div style={{ background: "transparent" }}>
          <p className="timer">
            <span className="number">{days} </span>
            <span style={{ color: "#fff", background: "transparent" }}>
              días ,{" "}
            </span>
            <span className="number">{hours} </span>
            <span style={{ color: "#fff", background: "transparent" }}>
              horas ,
            </span>{" "}
            <span className="number">{minutes} </span>
            <span style={{ color: "#fff", background: "transparent" }}>
              minutos ,{" "}
            </span>
            <span className="number">{seconds} </span>
            <span style={{ color: "#fff", background: "transparent" }}>
              segundos
            </span>
          </p>
        </div>
      );
    }
  };

  return (
    <>
      <div>
        <div className="title">
          <img src={summer} alt="title" />
        </div>
        <div id="cuenta">
          <Countdown date={endDate} renderer={renderer} />
        </div>
        <div style={{ background: "transparent" }} className="comunidad">
          <h3 className="comunidadTitle">
            Forma parte de la mejor comunidad de{" "}
            <span className="span">San Juan</span>
          </h3>

          <button>ACCESO ANTICIPADO</button>
        </div>
      </div>
      <div className="social">
        <h3 className="comunidadTitle footerTitle">SUMMER TROPIC</h3>
        <div className="iconContainer">
          <a href="https://www.instagram.com/mitos_ar/" target="blank">
            <img src={ig} alt="instagram" className="socialImage" />
          </a>
          <a href="https://mitoscompany.com/" target="blank">
            {" "}
            <img
              src={world}
              alt="world"
              style={{ width: "40px" }}
              className="socialImage"
            />
          </a>
        </div>
        <p className="socialp">ORIGINAL MITOS COMPANY</p>
      </div>
    </>
  );
};
