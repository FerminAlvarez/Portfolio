import mapIcons from "../data/mapIcons";

export default function Badge(props) {
  let color = mapIcons.get(props.tag);
  return (
    <div className="title-hero text-sm flex flex-col items-center fill-gray my-1">
      {color}
      <p className="max-w-[90px]">{props.tag}</p>
    </div>
  );
}
