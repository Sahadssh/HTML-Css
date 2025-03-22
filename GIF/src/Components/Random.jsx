import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinners';
import './Random.css';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {
  const [gif, SetGif] = useState('');
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const { data } = await axios.get(Url);
      const ImageSource = data.data.images.original.url;
      SetGif(ImageSource);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function ClickHandler() {
    fetchData();
  }

  return (
    <div className="card">
      <h1>Random GIF</h1>
      {loading ? <Spinner /> : <img src={gif} width={200} />}  
      <button onClick={ClickHandler}>Generate</button>
    </div>
);

};

export default Random;






