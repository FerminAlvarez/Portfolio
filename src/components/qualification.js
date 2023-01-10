import Career from "./career";
import Education from "./education";

export default function Qualification() {
  return (
    <div className="md:py-32 bg-white">
      <a className="anchor" id="formacion"> </a>
      <div className="flex flex-col xl:flex-row justify-center xl:space-x-52 ">
        <Education />
        <Career />
      </div>
    </div>
  );
}
