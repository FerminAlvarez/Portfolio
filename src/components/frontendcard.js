import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
export default function FrontEndCard() {
  return (
    <div className="bg-secondary text-primary-content rounded-xl px-16 py-6 whitespace-nowrap my-10 drop-shadow-2xl max-width-fill">
      <h1 className="text-3xl font-bold  text-white my-10 justify-center">
        Frontend Developer
      </h1>
      <ul className="menu p-2">
        <li>
          <div className=" text-xl flex fill-white">
            <AiFillHtml5 size={30} />
            <p>HTML</p>
          </div>
        </li>
        <li>
          <div className=" text-xl flex fill-white">
            <DiCss3 size={30} />
            <p>CSS</p>
          </div>
        </li>
        <li>
          <div className=" text-xl flex space-x-1 fill-white">
            <IoLogoJavascript size={30}/>
            <p>JavaScript</p>
          </div>
        </li>
        <li>
          <div className=" text-xl flex space-x-1 fill-white">
            <BsFillBootstrapFill size={30}/>
            <p>Bootstrap</p>
          </div>
        </li>
        <li>
          <div className=" text-xl flex space-x-1 fill-white">
            <SiTailwindcss size={30}/>
            <p>Tailwind CSS</p>
          </div>
        </li>
        <li>
          <div className=" text-xl flex space-x-1 fill-white">
            <FaReact size={30}/>
            <p>React JS</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
