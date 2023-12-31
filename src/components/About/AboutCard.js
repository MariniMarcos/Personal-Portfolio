import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, mi nombre es <span className="purple">Marcos Marini </span>
            actualmente vivo en  <span className="purple"> Buenos Aires, Argentina.</span>
            <br /> Soy Licenciado en Administración de empresas egresado de la Universidad Nacional de San Martín.
            <br />
            Adicionalmente, comencé mis estudios y mi carrera como desarrollador frontend en el 2022, 
            consiguiendo la certificación en <span className="purple">Coderhouse.</span>
            <br />
            <br />
            Además de trabajar y seguir aprendiendo código todos los dias, disfruto de 
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

          <p style={{ color: "rgb(0, 191, 99)" }}>
            "Ningún mar en calma hizo experto a un marinero!"{" "}
          </p>
          <footer className="blockquote-footer">Anónimo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
