import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import productList from "../data/productList";
import "./Home.css";

function Home() {
  const images = [
    "https://avatars.mds.yandex.net/i?id=c50b592fb88ec517a6f90f20f5dae40b32c84fb7-5499599-images-thumbs&n=13", 
    "https://avatars.mds.yandex.net/i?id=266e7ebad8c7a0abdd0dabe6cda297f718f19b51-5875850-images-thumbs&n=13"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
     
      <div className="rotating-image-container">
        <img
          src={images[currentIndex]}
          alt="Rotating"
          className="rotating-image"
        />
      </div>

      
      <div className="product-grid-wrapper">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
