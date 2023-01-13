import { IoMdCheckmark } from "react-icons/io";

export default function Career() {
  return (
    <div className="flex flex-col text-black">
      <h1 className="text-4xl sm:text-6xl font-bold title-hero  mt-10">
        Experiencia Laboral
      </h1>
      <div className="flex mx-auto mt-10 ">
        <div className="hidden md:flex md:flex-col items-center md:mr-4">
          <div>
            <div className="flex items-center justify-center w-10 h-10 border rounded-full border-black">
              <IoMdCheckmark size={25} />
            </div>
          </div>
          <div className="w-px h-full bg-black" />
        </div>
        <div className="pt-1 pb-8 md:w-[28rem] ">
          <p className="mb-2 text-lg font-bold">ICEL Cursos y Capacitaciones</p>
          <p className="">www.icel.com.ar</p>
          <p className="">Autónomo - Integrador de Aplicaciones</p>
          <p className="">(2022)</p>
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
        <div className="pt-1 pb-8 md:w-[28rem]">
          <p className="mb-2 text-lg font-bold">Anteojos Negros</p>
          <p className="">www.anteojosnegros.com</p>
          <p className="">Pasante - Frontend Trainee</p>
          <p className="">(2018)</p>
        </div>
      </div>
    </div>
  );
}
