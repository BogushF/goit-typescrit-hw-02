import s from "./ImageCard.module.css";
import { Card } from "../../App";

interface ImageCardProps {
  card: Card;
  onImgClick: (card: Card) => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ card, onImgClick }) => {
  return (
    <div onClick={() => onImgClick(card)}>
      <img className={s.img} src={card.urls.small} alt={card.alt_description} />
    </div>
  );
};

export default ImageCard;
