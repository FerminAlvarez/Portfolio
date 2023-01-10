import mapIcons from "../data/mapIcons";

export default function Badge(props) {
  let color = mapIcons.get(props.tag);
  return (
    <div className="text-sm flex flex-col items-center fill-gray my-1 w-[70px]">
      {color}
      <p className="font-semibold">{props.tag}</p>
    </div>
  );
}
