import CardProject from "./cardproject";
import { projectsData } from "../data/projects";
export default function Projects() {
  return (
    <div className="bg-blue-800 py-20" id="proyectos">
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12 ">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold title-hero text-white">
              Mis proyectos
            </h1>
          </div>
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="white"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              ></rect>
            </svg>
          </span>
          <p className="text-white md:text-lg">
            Estos son los proyectos más relevantes en los que he estado
            trabajando a lo largo de mi formación como desarrollador. Están
            ordenados según la fecha en la que se dió por finalizado.
          </p>
        </div>
        <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full content-center">
          {projectsData.map((project, index) => {
            return <CardProject data={project} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
