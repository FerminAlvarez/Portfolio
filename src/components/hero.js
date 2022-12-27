import profile_image from "../assets/profile_image.png";
import SocialMedia from "./socialmedia";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="flex items-center justify-center flex-col xl:flex-row-reverse xl:space-x-72 xl:space-x-reverse">
        <div className="xl:mr-5">
          <img
            src={profile_image}
            className="profile_image rounded-full my-5"
            alt="Fermin Alvarez"
          />
        </div>
        <div className="my-5 max-w-2xl">
          <h1 className="text-8xl sm:text-9xl font-bold title-hero text-black dark:text-white">
            Fermin <br /> Alvarez
            <label class="swap swap-flip text-7xl">
              <input type="checkbox" />

              <div class="swap-on">🎉</div>
              <div class="swap-off">🖐</div>
            </label>
          </h1>
          <p className="text-2xl font-light mx-4">
            Soy estudiante de{" "}
            <span className="font-bold">
              Ingeniería en Sistemas de Información
            </span>{" "}
            y<span className="font-bold"> Programador Fullstack</span>, con una
            constante motivación por aprender y mejorar mis habilidades en el
            desarrollo de Aplicaciones Web. Me encanta la idea de poder
            compartir proyectos, hacer que otras personas me conozcan y espero
            poder hacerlo a través de mi portafolio.
          </p>
        </div>

        <SocialMedia />
      </div>
    </div>
  );
}
