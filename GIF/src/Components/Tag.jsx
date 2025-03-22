import React, { useState,  } from 'react';
import axios from 'axios';
import Spinner from './Spinners'
import './Tag.css';




const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Tag = () => {
  const [gif, setGif] = useState('');
  const [tag, setTag] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    if (!tag.trim()) return; 
    setLoading(true);
    const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(Url);
    const ImageSource = data.data.images.original.url;
    setGif(ImageSource);
    setLoading(false);
  }

  return (
    <div className="card">
      <h1>Search GIF</h1>
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Enter a tag" />
      <button onClick={fetchData}> Generate </button>
      {loading ? <Spinner /> : <img src={gif} width={200} />}  
    </div>
);

};

export default Tag;
