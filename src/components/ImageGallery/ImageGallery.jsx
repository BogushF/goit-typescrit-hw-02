import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ cards, onImgClick }) => {
  return (
    <ul className={s.list}>
      {cards.map((card) => (
        <li key={card.id}>
          <ImageCard card={card} onImgClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
