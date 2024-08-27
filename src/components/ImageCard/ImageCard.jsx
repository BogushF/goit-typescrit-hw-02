import s from "./ImageCard.module.css";

const ImageCard = ({ card, onImgClick }) => {
  return (
    <div onClick={() => onImgClick(card.urls.regular, card.alt_description)}>
      <img className={s.img} src={card.urls.small} alt={card.altDescription} />
    </div>
  );
};

export default ImageCard;
