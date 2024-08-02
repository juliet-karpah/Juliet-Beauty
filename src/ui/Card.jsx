import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Card(props) {
  return (
    <div className="">
      <Link className="group block overflow-hidden" to={`/product/${props.item}`}>
        <img className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]" src={props.src} alt={props.alt} />
      </Link>
      <div className="text-xl font-bold flex justify-between">
        <h3> {props.title}
        </h3><p> {props.price} </p>
      </div>
      <Rating avgRating={props.avgRating} ratingsCount={props.ratingsCount}/>
    </div>
  );
}
