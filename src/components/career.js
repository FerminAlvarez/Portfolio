import { IoMdCheckmark } from "react-icons/io";

export default function Career() {
  return (
    <div className="lg:py-6 lg:pr-16 flex flex-col">
      <h1 className="text-4xl sm:text-6xl font-bold title-hero text-base-content dark:text-white mt-10">
        Experiencia Laboral
      </h1>
      <div className="flex mx-auto my-10">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-10 h-10 border rounded-full">
              <IoMdCheckmark size={25} />
            </div>
          </div>
        </div>
        <div className="pt-1 pb-8">
          <p className="mb-2 text-lg font-bold">Anteojos Negros</p>
          <p className="">www.anteojosnegros.com</p>
          <p className="">Pasante - Frontend Trainee</p>
          <p className="">(2018)</p>
        </div>
      </div>
    </div>
  );
}
