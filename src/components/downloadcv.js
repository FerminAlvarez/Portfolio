import { BsFileEarmarkText } from "react-icons/bs";
export default function DownloadCV() {
  return (
    <div className="bg-secondary" >
      <a className="anchor invisible" id="cv"> </a>
      <a href="" className="btn btn-lg my-20 transform transition duration-300 hover:scale-125 hover:bg-primary bg-primary text-black border-0">
        Descargar CV
        <span className="text-xl ml-2">
          <BsFileEarmarkText />
        </span>
      </a>
    </div>
  );
}
