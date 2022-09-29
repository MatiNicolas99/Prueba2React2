import { useContext } from "react";
import imgFavContext from "../imgFavContext";


export const Fav = () => {
  
  const {images, setImages} = useContext(imgFavContext);

  const deleteFavourite = (id) => {
      const photoIndex = images.findIndex((e) => e.id === id);
      images[photoIndex].favourite = !images[photoIndex].favourite;
      setImages([...images]);

  };

  return (
    <div className="fav">
    <h1 className="title"> Natural Pictures</h1>
    <ul className="grid">
        {images.filter((img) => img.favourite).map((img, index) => (
            <li key={index}> 
            <div onClick = {() => deleteFavourite(img.id)} className="photo" style= {{backgroundImage: `url(${img.src})`}} >
      
            </div>
            </li>
        ))}
    </ul>

</div>
  )
}
