import { HashLink as Link } from "react-router-hash-link";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <Link className="hover:text-black dark:hover:text-white" smooth to="/#inicio"> Inicio</Link>
          </li>
          <li>
            <Link className="hover:text-black dark:hover:text-white" smooth to="/#cv"> CV</Link>
          </li>
          <li>
            <Link className="hover:text-black dark:hover:text-white" smooth to="/#habilidades"> Habilidades</Link>
          </li>
          <li>
            <Link className="hover:text-black dark:hover:text-white" smooth to="/#formacion"> Educación - Experiencia</Link>
          </li>
          <li>
            <Link className="hover:text-black dark:hover:text-white" smooth to="/#proyectos"> Proyectos</Link>
          </li>
          <li>
            <Link className="hover:text-black dark:hover:text-white" smooth to="/#contacto"> Contacto</Link>
          </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link className="hover:text-black dark:hover:text-white" smooth to="/#inicio"> Inicio</Link>
          </li>
          <li>
            <Link className="hover:text-black dark:hover:text-white" smooth to="/#cv"> CV</Link>
          </li>
          <li>
            <Link className="hover:text-black dark:hover:text-white" smooth to="/#habilidades"> Habilidades</Link>
          </li>
          <li>
            <Link className="hover:text-black dark:hover:text-white" smooth to="/#formacion"> Educación - Experiencia</Link>
          </li>
          <li>
            <Link className="hover:text-black dark:hover:text-white" smooth to="/#proyectos"> Proyectos</Link>
          </li>
          <li>
            <Link className="hover:text-black dark:hover:text-white" smooth to="/#contacto"> Contacto</Link>
          </li>
        </ul>
      </div>
        <div className="h-px w-full bg-teal-500 absolute bottom-0 left-0" />
    </div>
  );
}
