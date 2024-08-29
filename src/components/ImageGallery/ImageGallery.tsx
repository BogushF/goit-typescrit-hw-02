import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Card } from "../../App";

interface ImageGalleryProps {
  cards: Card[];
  onImgClick: (card: Card) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ cards, onImgClick }) => {
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
