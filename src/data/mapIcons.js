import React from "react";
import { AiFillHtml5, AiFillApi } from "react-icons/ai";
import { DiCss3, DiJava, DiMysql, DiMongodb, DiProlog } from "react-icons/di";
import { IoLogoJavascript, IoMdInfinite, IoLogoPython } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaReact, FaLaravel, FaDocker } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import {
  SiPostgresql,
  SiSequelize,
  SiServerless,
  SiRabbitmq,
  SiSwagger,
  SiTailwindcss,
  SiPhp,
  SiSpring,
  SiExpress,
  SiSelenium,
  SiAuth0,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { BsCode } from "react-icons/bs";
import MicroServiciosLogo from "../assets/micro-servicios";

let mapColors = new Map();
mapColors.set("JavaScript", <IoLogoJavascript size={30} />);
mapColors.set("React JS", <FaReact size={30} />);
mapColors.set("Tailwind CSS", <SiTailwindcss size={30} />);
mapColors.set("OAuth2.0", <SiAuth0 size={30} />);
mapColors.set("Express JS", <SiExpress size={30} />);
mapColors.set("Sequelize", <SiSequelize size={30} />);
mapColors.set("PostgreSQL", <SiPostgresql size={30} />);
mapColors.set("Swagger", <SiSwagger size={30} />);
mapColors.set("HTML", <AiFillHtml5 size={30} />);
mapColors.set("CSS", <DiCss3 size={30} />);
mapColors.set("MySQL", <DiMysql size={30} />);
mapColors.set("Bootstrap CSS", <BsFillBootstrapFill size={30} />);
mapColors.set("NoSQL", <DiMongodb size={30} />);
mapColors.set("Micro-Frontends", <AiFillApi size={30} />);
mapColors.set("Micro-Servicios", <MicroServiciosLogo />);
mapColors.set("MongoDB", <DiMongodb size={30} />);
mapColors.set("GraphQL", <GrGraphQl size={30} />);
mapColors.set("Docker", <FaDocker size={30} />);
mapColors.set("RabbitMQ", <SiRabbitmq size={30} />);
mapColors.set("Serverless", <SiServerless size={30} />);
mapColors.set("Entrega e Integración Continua", <IoMdInfinite size={30} />);
mapColors.set("Python", <IoLogoPython size={30} />);
mapColors.set("Java", <DiJava size={30} />);
mapColors.set("PHP", <SiPhp size={30} />);
mapColors.set("Laravel", <FaLaravel size={30} />);
mapColors.set("Eloquent", <BsCode size={30} />);
mapColors.set("Spring Framework", <SiSpring size={30} />);
mapColors.set("Prolog", <DiProlog size={30} />);
mapColors.set("Selenium", <SiSelenium size={30} />);

export default mapColors;
