import { IoMdCheckmark } from "react-icons/io";

export default function Education() {
  return (
    <div className="lg:py-6 lg:pr-16 flex flex-col">
      <h1 className="text-4xl sm:text-6xl font-bold title-hero text-base-content dark:text-white mt-10">
        Educación
      </h1>
      <div className="flex mx-auto mt-10">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-10 h-10 border rounded-full"></div>
          </div>
          <div className="w-px h-full bg-gray-300" />
        </div>
        <div className="pt-1 pb-8 w-[28rem]">
          <p className="mb-2 text-lg font-bold">
            Ingeniería en Sistemas de Información
          </p>
          <p className="">Universidad Nacional del Sur</p>
          <p className="">Bahía Blanca, Buenos Aires, Argentina</p>
          <p className="">(2019 - Actualidad)</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-10 h-10 border rounded-full">
              <IoMdCheckmark size={25} />
            </div>
          </div>
        </div>
        <div className="pt-1 pb-8 w-[28rem]">
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