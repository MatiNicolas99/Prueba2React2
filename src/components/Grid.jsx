
import { useContext } from 'react';
import imgFavContext from '../imgFavContext';
import { Heart } from './Heart';


export const Grid = () => {

    const {images, setImages} = useContext(imgFavContext);

    const setFavourite = (id) => {
        const photoIndex = images.findIndex((img) => img.id === id);
        images[photoIndex].favourite = !images[photoIndex].favourite;
        setImages([...images]);

    };

  return (

    <>
    <h1 className="title"> Natural Pictures</h1>
        <ul className="grid">
    {
        images.map( (img, index) => {
            return (
     
                    <li key={index}>
                        <div className="photo" onClick = {() => setFavourite(img.id)} style= {{backgroundImage: `url(${img.src})`}}>
                        <Heart selected={img.favourite} /> 
                        </div>
                    </li>
              
            )
        })
    }
    </ul>
    </> 
    )
}
