import { useEffect, useState } from "react";
import fetchImages from "./API";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

type Card = {
  id: string;
  url: {
    regular: string;
    small: string;
  };
  alt: string;
};

export const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState<Card[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState<Card | string>("");

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, totalPages } = await fetchImages(query, page);
        setCards((prevCards) => {
          return [...prevCards, ...results];
        });
        setTotalPages(totalPages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, query]);

  const handleSearch = async (query: string) => {
    setQuery(query);
    setPage(1);
    setCards([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImgClick = (card: Card) => {
    setModalImage(card);
    setIsOpen(true);
  };

  function closeModal() {
    setModalImage("");
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {cards.length > 0 && !isError && (
        <ImageGallery cards={cards} onImgClick={handleImgClick} />
      )}
      {isLoading && !isError && <Loader />}
      {!isLoading && cards.length > 0 && !isError && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalIsOpen && typeof modalImage !== "string" && modalImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          imageUrl={modalImage.url.regular}
          imageAlt={modalImage.alt}
        />
      )}
    </>
  );
};

export default App;
