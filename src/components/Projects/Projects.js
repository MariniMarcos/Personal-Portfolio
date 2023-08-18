import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Diseño1 from "../../Assets/Projects/Diseño1.png";
import Diseño2 from "../../Assets/Projects/Diseño2.png";
import Diseño3 from "../../Assets/Projects/Diseño3.png";
import Diseño4 from "../../Assets/Projects/Diseño4.png";
import Diseño5 from "../../Assets/Projects/Diseño5.png";
import Diseño6 from "../../Assets/Projects/Diseño6.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Mis proyectos</strong> Recientes
        </h1>
        <p style={{ color: "white" }}>
          Les dejo algunos proyectos personales en los que he trabajado.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diseño2}
              isBlog={false}
              title="Gestionalo"
              description="Gestionalo es un gestor de stock que nace de la necesidad de digitalizar el proceso de ingreso de piezas y productos. El proyecto cuenta con login, movimiento de stock, listado con filtros, y sistema de tickets con impresión en Pdf o Excel. Esta diseñado con React js, librerías de Javascript y Bootstrap."
              ghLink="https://github.com/MariniMarcos/Gestionalo"
              demoLink="https://gestionalo.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diseño1}
              isBlog={false}
              title="CryptoArg"
              description="CryptoArg es una aplicación web que nace con el objetivo de mostrarle a las personas de Argentina la cotización de las 100 Cryptomonedas mas importantes y a su vez la cotización del dolar paralelo ya que es muy importante para sus vidas. La app esta diseñada en React js, librerías de Javascript, Api Coingecko, Api Dolar y Bootstrap."
              ghLink="https://github.com/MariniMarcos/Cryptocurrencies-list"
              demoLink="https://cryptocurrencies-list.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diseño3}
              isBlog={false}
              title="SkinPro"
              description="SkinPro nace con la finalidad de construir un E-commerce funcional con carrito de compra, lista de productos y filtros de navegación como entrega final de la carrera de Desarrollo Fronted en Coderhouse, El proyecto esta realizado en React Js, librerías de Javascript y Bootstrap."
              ghLink="https://github.com/MariniMarcos/proyectofinal_react_marinimarcos"
              demoLink="https://proyectofinal-react-marinimarcos.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diseño4}
              isBlog={false}
              title="Iphone Calculator"
              description="Iphone Calculator nace con la idea de imitar la calculadora de iphone, su único objetivo fue mejorar las prácticas y lágicas de Javascript es por eso que esta diseñada enteramente en Javascript vanilla, Html y Css"
              ghLink="https://github.com/MariniMarcos/Iphone-Calculator-Proyect"
              demoLink="https://marinimarcos.github.io/Iphone-Calculator-Proyect/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diseño5}
              isBlog={false}
              title="Simulador consumo Eléctrico"
              description="El simulador de consumo eléctrico nace con la idea de imitar el simulador de edenor la empresa que brinda energia eléctrica, la idea principal es que el usuario coloque que que eléctrodomesticos de su casa tiene, cuantos de estos posee, y que cantidad de horas usa los mismos.Con estos datos el simulador arrojaré un consumo estimado."
              ghLink="https://github.com/MariniMarcos/Simulador-Consumo-Electrico---Entrega-final-JS--Marini-Marcos"
              demoLink="https://melodious-lolly-b984d5.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diseño6}
              isBlog={false}
              title="Nbl Corte laser"
              description="Nbl Corte laser nace con la idea de digitalizar una empresa de corte laser, es un a página web con 6 secciones en donde se recorre la historia de la misma, los servicios, el contacto, una sección de Faqs, entre otras. Modelada enteramente con Html y Css busca lograr un diseño actractivo y simple"
              ghLink="https://github.com/MariniMarcos/nbl_cortelaser_marini"
              demoLink="https://marinimarcos.github.io/nbl_cortelaser_marini/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
