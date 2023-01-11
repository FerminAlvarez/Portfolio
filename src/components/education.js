import { IoMdCheckmark } from "react-icons/io";

export default function Education() {
  return (
    <div className="flex flex-col text-black">
      <h1 className="text-4xl sm:text-6xl font-bold title-hero  mt-10">
        Educación
      </h1>
      <div className="flex mx-auto mt-10 ">
        <div className="hidden md:flex md:flex-col items-center md:mr-4">
          <div>
            <div className="flex items-center justify-center w-10 h-10 border rounded-full border-black"></div>
          </div>
          <div className="w-px h-full bg-black" />
        </div>
        <div className="pt-1 pb-8 md:w-[28rem]">
          <p className="mb-2 text-lg font-bold">
            Ingeniería en Sistemas de Información
          </p>
          <p className="">Universidad Nacional del Sur</p>
          <p className="">Bahía Blanca, Buenos Aires, Argentina</p>
          <p className="">(2019 - Actualidad)</p>
        </div>
      </div>
      <div className="flex mx-auto">
        <div className="hidden md:flex md:flex-col items-center md:mr-4">
          <div>
            <div className="flex items-center justify-center w-10 h-10 border rounded-full border-black ">
              <IoMdCheckmark size={25} />
            </div>
          </div>
        </div>
        <div className="pt-1 pb-8 md:w-[28rem] ">
          <p className="mb-2 text-lg font-bold">
            Técnico en Informática Profesional y Personal
          </p>
          <p className="">
            Escuela de Educación Secundaria Técnica N°1 "Fray Luis Beltrán"
          </p>
          <p className="">Salliqueló, Buenos Aires, Argentina</p>
          <p className="">(2012 - 2018)</p>
        </div>
      </div>
    </div>
  );
}
