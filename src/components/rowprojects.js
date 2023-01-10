import { useRef } from "react";
import CardProject from "./cardproject";

function RowProjects(props) {
  const containerRef = useRef();

  async function scrollRow(scrollOffset) {
    containerRef.current.scrollLeft += scrollOffset;
  }

  return (
    <div className="relative flex items-center mx-auto pb-2 w-full">
      <button
        className="btn btn-circle"
        onClick={() => scrollRow(-containerRef.current.offsetWidth)}
      >
        ❮
      </button>
      <div
        className="carousel carousel-center rounded px-1 py-3 mx-5 transition-height duration-500 snap-none w-full"
        id="id-1"
        ref={containerRef}
      >
        {props.data.map((project, index) => {
          return <CardProject data={project} key={index} />;
        })}
      </div>
      <button
        className="btn btn-circle"
        onClick={() => scrollRow(containerRef.current.offsetWidth)}
      >
        ❯
      </button>
    </div>
  );
}

export default RowProjects;
