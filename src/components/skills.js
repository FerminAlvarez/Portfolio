import BackendCard from "./backendcard";
import ExtrasCard from "./extrascard";
import FrontEndCard from "./frontendcard";
export default function Skills() {
  return (
    <div>
      <h1 className="text-5xl sm:text-6xl font-bold title-hero text-base-content dark:text-white my-10">
        Mis habilidades
      </h1>
      <div className="flex items-center justify-center flex-col xl:flex-row xl:space-x-16">
        <FrontEndCard />
        <BackendCard />
      </div>
      <div className="flex items-center justify-center flex-col xl:flex-row xl:space-x-16 my-10">
        <ExtrasCard />
      </div>
    </div>
  );
}