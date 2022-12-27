import { GrValidate } from "react-icons/gr";
export default function FrontEndCard() {
  return (
    <div className="bg-blue-800 text-primary-content rounded-xl px-16 py-6 whitespace-nowrap my-10 drop-shadow-2xl">
      <h1 className="text-3xl font-bold title-hero text-white my-10 justify-center">
        Frontend Developer
      </h1>
      <div className="stats flex bg-blue-800 text-primary-content">
        <div className="stat flex-col justify-center align-middle space-y-4">
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>HTML</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>CSS</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>JavaScript</p>
          </div>
        </div>

        <div className="stat flex-col justify-center align-middle space-y-4">
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Bootstrap</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Tailwind CSS</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>React JS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
