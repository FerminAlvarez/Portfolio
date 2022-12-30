import { DiMysql, DiMongodb } from "react-icons/di";
import {
  SiPostgresql,
  SiSequelize,
  SiServerless,
  SiRabbitmq,
  SiSwagger,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { AiFillApi } from "react-icons/ai";
import { IoMdInfinite } from "react-icons/io";
import { BsCode } from "react-icons/bs";
export default function ExtrasCard() {
  return (
    <div className="bg-blue-800 text-primary-content rounded-xl px-16 py-6 whitespace-nowrap my-10 drop-shadow-2xl">
      <h1 className="text-3xl font-bold title-hero text-white my-10 justify-center">
        Extras
      </h1>
      <div className="columns-2">
        <ul className="menu p-2">
          <li>
            <div className="title-hero text-xl flex fill-white">
              <DiMysql size={30} />
              <p>MySQL</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex fill-white">
              <SiPostgresql size={30} />
              <p>PostgreSQL</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex space-x-1 fill-white">
              <DiMongodb size={30} />
              <p>NoSQL</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex space-x-1 fill-white">
              <GrGraphQl size={30} />
              <p>GraphQL</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex space-x-1 ">
              <TbApi size={30} />
              <p>API REST</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex space-x-1 ">
              <SiSequelize size={30} />
              <p>Sequelize - Eloquent - Hibernate</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex space-x-1 fill-white">
              <SiSwagger size={30} />
              <p>Swagger</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex space-x-1 fill-white">
              <BsCode size={30} />
              <p>Clean Code - Clean Architecture</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex space-x-1 fill-white">
              <AiFillApi size={30} />
              <p>Micro-Frontends</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex space-x-1">
              <svg
                stroke="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  d="M6,9 C7.65685425,9 9,7.65685425 9,6 C9,4.34314575 7.65685425,3 6,3 C4.34314575,3 3,4.34314575 3,6 C3,7.65685425 4.34314575,9 6,9 Z M6,3 L6,0 M6,12 L6,9 M0,6 L3,6 M9,6 L12,6 M2,2 L4,4 M8,8 L10,10 M10,2 L8,4 M4,8 L2,10 M18,12 C19.6568542,12 21,10.6568542 21,9 C21,7.34314575 19.6568542,6 18,6 C16.3431458,6 15,7.34314575 15,9 C15,10.6568542 16.3431458,12 18,12 Z M18,6 L18,3 M18,15 L18,12 M12,9 L15,9 M21,9 L24,9 M14,5 L16,7 M20,11 L22,13 M22,5 L20,7 M16,11 L14,13 M9,21 C10.6568542,21 12,19.6568542 12,18 C12,16.3431458 10.6568542,15 9,15 C7.34314575,15 6,16.3431458 6,18 C6,19.6568542 7.34314575,21 9,21 Z M9,15 L9,12 M9,24 L9,21 M3,18 L6,18 M12,18 L15,18 M5,14 L7,16 M11,20 L13,22 M13,14 L11,16 M7,20 L5,22"
                ></path>
              </svg>
              <p>Micro-Servicios</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex space-x-1 fill-white">
              <FaDocker size={30} />
              <p>Docker</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex space-x-1 fill-white">
              <SiRabbitmq size={30} />
              <p>RabbitMQ</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex space-x-1 fill-white">
              <SiServerless size={30} />
              <p>Serverless</p>
            </div>
          </li>
          <li>
            <div className="title-hero text-xl flex space-x-1 fill-white">
              <IoMdInfinite size={30} />
              <p>Entrega e Integración Continua</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
