import { IoMdCheckmark } from "react-icons/io";
import Career from "./career";
import Education from "./education";

export default function Qualification() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-row justify-center space-x-52 ">
        <Education />
        <Career />
      </div>    
    </div>
  );
}
