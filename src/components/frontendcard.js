import { GrValidate } from "react-icons/gr";
export default function FrontEndCard() {
  return (
    <div className="bg-primary text-primary-content rounded-xl px-16 py-6 whitespace-nowrap my-10 drop-shadow-2xl">
      <h1 className="text-3xl font-bold title-hero text-white my-10 justify-center">
        Frontend Developer
      </h1>
      <div className="stats flex bg-primary text-primary-content">
        <div className="stat flex-col justify-center align-middle space-y-4">
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>HTML</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>CSS</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>JavaScript</p>
          </div>
        </div>

        <div className="stat flex-col justify-center align-middle space-y-4">
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>Bootstrap</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>Tailwind CSS</p>
          </div>
          <div className="title-hero text-xl flex space-x-1">
            <GrValidate fill="white" />
            <p>React JS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
