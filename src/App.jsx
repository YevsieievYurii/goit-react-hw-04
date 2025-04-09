import "./App.css";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSearch = (searchTerm) => {
    console.log("Пошук:", searchTerm);

    // Тимчасово: мокані зображення
    const mockImages = [
      {
        id: 1,
        webformatURL: "https://via.placeholder.com/300x200",
        tags: "Example image 1",
      },
      {
        id: 2,
        webformatURL: "https://via.placeholder.com/300x200",
        tags: "Example image 2",
      },
    ];

    setImages(mockImages);

    // Тут замість mockImages можна буде зробити запит до API
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
