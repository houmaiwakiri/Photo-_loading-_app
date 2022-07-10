import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //APIURL
    const endpointURL =
      `https://pixabay.com/api/?key=28546074-3584f9c03c8aa7e28bcca3922&q= ${ref.current.value} &image_type=photo`;
    //APIをたたく（データフェッチング）
    fetch(endpointURL)
     .then((res) => {
      return res.json();
     })
     .then((data) =>{
      setFetchData(data.hits);
     });
  };

  return (
    <div className="container">
      <h2>MY Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref ={ref}/>
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
