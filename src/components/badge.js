import mapColors from "../data/mapColors";
export default function Badge(props){
    let color = mapColors.get(props.tag);
    console.log(color)
    return (
        <div className={`badge ${color ? color : "bg-zinc-500"} dark:text-white font-bold mx-2`} >
          {props.tag}
        </div>
      );
}