import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a tods, mi nombre es <span className="purple">Marcos Marini </span>
            actualmente vivo en  <span className="purple"> Buenos aires, Argentina.</span>
            <br /> Soy Licenciado en Administración de empresas egresado de la Universidad Nacional de San Martín.
            <br />
            Adicionalmente, comence mis estudios y mi carrera como desarrollador frontend en el 2022, 
            consiguiendo la certificación en <span className="purple">Coderhouse.</span>
            <br />
            <br />
            Ademas de trabajar y seguir aprendiendo codigo todos los dias, disfruto de 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Ver y jugar futbol
            </li>
            <li className="about-activity">
              <ImPointRight /> Pasar tiempo con familia y amigos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ningún mar en calma hizo experto a un marinero!"{" "}
          </p>
          <footer className="blockquote-footer">Anónimo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
