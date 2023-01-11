import { DiJava } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiPhp } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
export default function BackendCard() {
  return (
    <div className="bg-secondary text-primary-content rounded-xl px-16 py-6 whitespace-nowrap my-10 drop-shadow-2xl max-width-fill">
      <h1 className="text-3xl font-bold text-white my-10 justify-center">
        Backend Developer
      </h1>
      <ul className="menu p-2">
        <li>
          <div className="text-xl flex fill-white">
            <DiJava size={30} />
            <p>Java</p>
          </div>
        </li>
        <li>
          <div className="text-xl flex fill-white">
            <IoLogoJavascript size={30} />
            <p>JavaScript</p>
          </div>
        </li>
        <li>
          <div className="text-xl flex space-x-1 fill-white">
            <SiPhp size={30} />
            <p>PHP</p>
          </div>
        </li>
        <li>
          <div className="text-xl flex space-x-1 fill-white">
            <SiSpring size={30} />
            <p>Spring Framework</p>
          </div>
        </li>
        <li>
          <div className="text-xl flex space-x-1 fill-white">
            <FaLaravel size={30} />
            <p>Laravel</p>
          </div>
        </li>
        <li>
          <div className="text-xl flex space-x-1 fill-white">
            <SiExpress size={30} />
            <p>Express JS</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
