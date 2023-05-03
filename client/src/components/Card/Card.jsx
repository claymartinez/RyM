import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
   return (
      <div className={style.container}>
         <button className={style.closeButton} onClick={() => onClose(id)}>X</button>
         <Link to={`/Detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <img src={image} alt='image' />
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}
export default Card