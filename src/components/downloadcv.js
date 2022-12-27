import { BsFileEarmarkText } from "react-icons/bs";
export default function DownloadCV() {
  return (
    <div className="bg-primary ">
      <a href="" class="btn btn-lg mt-20 mb-32 transform transition duration-300 hover:scale-125">
        Descargar CV
        <span className="text-xl ml-2">
          <BsFileEarmarkText />
        </span>
      </a>
    </div>
  );
}
