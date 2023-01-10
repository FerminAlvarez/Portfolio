import { HashLink as Link } from "react-router-hash-link";
export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 bg-secondary">
      <div className="lg:hidden navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white rounded-box w-52"
          >
            <li>
            <Link smooth to="/#inicio" className="hover:bg-primary hover:text-black hover:font-semibold"> Inicio</Link>
          </li>
          <li>
            <Link smooth to="/#cv" className="hover:bg-primary hover:text-black hover:font-semibold"> CV</Link>
          </li>
          <li>
            <Link smooth to="/#habilidades" className="hover:bg-primary hover:text-black hover:font-semibold"> Habilidades</Link>
          </li>
          <li>
            <Link smooth to="/#formacion" className="hover:bg-primary hover:text-black hover:font-semibold"> Educación - Experiencia</Link>
          </li>
          <li>
            <Link smooth to="/#proyectos" className="hover:bg-primary hover:text-black hover:font-semibold"> Proyectos</Link>
          </li>
          <li>
            <Link smooth to="/#contacto" className="hover:bg-primary hover:text-black hover:font-semibold"> Contacto</Link>
          </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <Link smooth to="/#inicio" className="hover:bg-primary hover:text-black hover:font-semibold"> Inicio</Link>
          </li>
          <li>
            <Link smooth to="/#cv" className="hover:bg-primary hover:text-black hover:font-semibold"> CV</Link>
          </li>
          <li>
            <Link smooth to="/#habilidades" className="hover:bg-primary hover:text-black hover:font-semibold"> Habilidades</Link>
          </li>
          <li>
            <Link smooth to="/#formacion" className="hover:bg-primary hover:text-black hover:font-semibold"> Educación - Experiencia</Link>
          </li>
          <li>
            <Link smooth to="/#proyectos" className="hover:bg-primary hover:text-black hover:font-semibold"> Proyectos</Link>
          </li>
          <li>
            <Link smooth to="/#contacto" className="hover:bg-primary hover:text-black hover:font-semibold"> Contacto</Link>
          </li>
        </ul>
      </div>
        <div className="h-px w-full bg-teal-500 absolute bottom-0 left-0" />
    </div>
  );
}
