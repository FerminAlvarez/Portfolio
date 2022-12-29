import Career from "./career";
import Education from "./education";

export default function Qualification() {
  return (
    <div className="my-32">
      <div className="flex flex-row justify-center space-x-52 ">
        <Education />
        <Career />
      </div>    
    </div>
  );
}
