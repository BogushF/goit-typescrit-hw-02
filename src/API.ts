import axios from "axios";
import { Card } from "./App";

interface FetchDataResponse {
  results: Card[];
  totalPages: number;
}

const fetchImages = async (
  query: string,
  page: number
): Promise<FetchDataResponse> => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    params: {
      client_id: "W_qmqKjMt52ZJUEo7dgE74bgxWqR94UEUab8Ja4Qm7Q",
      query: query,
      per_page: 12,
      page,
    },
  });
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
};

export default fetchImages;
