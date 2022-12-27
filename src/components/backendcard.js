import { GrValidate } from "react-icons/gr";
export default function BackendCard() {
  return (
    <div className="bg-primary text-primary-content rounded-xl px-16 py-6 whitespace-nowrap drop-shadow-2xl">
      <h1 className="text-3xl font-bold title-hero text-white my-10 justify-center">
        Backend Developer
      </h1>
      <div className="stats flex bg-primary text-primary-content">
        <div className="stat flex-col justify-center align-middle space-y-4">
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Java</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>JavaScript</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>PHP</p>
          </div>
        </div>

        <div className="stat flex-col justify-center align-middle space-y-4">
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Spring Framework</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Laravel</p>
          </div>
          <div className="title-hero text-xl flex space-x-1 fill-white">
            <GrValidate/>
            <p>Express JS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
