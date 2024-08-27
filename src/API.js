import axios from "axios";

const fetchImages = async (query, page) => {
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
