import { personalProjects, universityProjects } from "../data/projects";
import RowProjects from "./rowprojects";
export default function Projects() {
  return (
    <div className="bg-secondary py-20 " id="proyectos">
      <div className="py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl mx-auto ">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12 ">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold title-hero text-white">
              Mis proyectos
            </h1>
          </div>
          <p className="text-white md:text-lg">
            Estos son los proyectos más relevantes en los que he estado
            trabajando a lo largo de mi formación como desarrollador.
          </p>
        </div>
        <div>
          <div className="pb-5">
            <h2 className="text-3xl sm:text-4xl font-semibold title-hero text-white">
              Proyectos Personales
            </h2>
            <RowProjects data={personalProjects} />
          </div>
          <div className="pb-5">
            <h2 className="text-3xl sm:text-4xl font-semibold title-hero text-white">
              Proyectos Universitarios
            </h2>
            <RowProjects data={universityProjects} />
          </div>
        </div>
      </div>
    </div>
  );
}
