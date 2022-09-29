
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import imgFavContext from './imgFavContext';
import { Pages } from './Pages/Pages';
import { getSearchImages } from "./helpers/getSearchImages";
import './components/grid.css'
export const App = () => {


  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newimages = await getSearchImages();
    const filteredImgs = newimages.map((e) => ({
      id: e.id,
      src: e.src.medium,
      desc: e.alt,
      favourite: false,
    }))
    setImages(filteredImgs);
    console.log(filteredImgs);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    
    <imgFavContext.Provider value={{images, setImages}}>
    <BrowserRouter>
      <NavBar/>
      <Pages/>
    </BrowserRouter>
    </imgFavContext.Provider>
  )
}

