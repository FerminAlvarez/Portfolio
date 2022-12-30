import mapIcons from "../data/mapIcons";

export default function Badge(props) {
  let color = mapIcons.get(props.tag);
  return (
    <div className="title-hero text-sm flex flex-col items-center fill-gray my-1 w-[70px]">
      {color}
      <p>{props.tag}</p>
    </div>
  );
}
