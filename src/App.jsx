import "./App.css";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // сторінка запиту
  const [searchTerm, setSearchTerm] = useState("");

  const fetchImages = async (query, currentPage) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query, page: currentPage, per_page: 12 },
          headers: {
            Authorization: `Client-ID C86uG7l__bnngaFQsz0TNcXzqhUn3uRbrxqWRqH66ms`,
          },
        }
      );

      const fetchedImages = response.data.results.map((img) => ({
        id: img.id,
        webformatURL: img.urls.small,
        tags: img.alt_description || "Unsplash image",
      }));

      // Якщо це не перша сторінка — додаємо нові до старих
      setImages((prev) => [...prev, ...fetchedImages]);
    } catch (err) {
      setError("Помилка при завантаженні зображень. Спробуйте ще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setImages([]);
    setPage(1);
    fetchImages(term, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(searchTerm, nextPage);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default App;
