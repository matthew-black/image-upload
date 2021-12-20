import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ImageList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_IMAGES'
    })
  }, [])

  const images = useSelector(store => store.images);

  return (
    <div className="container">
      {images.map((image) => {
        return (
          <div key={image.id} style={ {maxWidth: '25%', padding: '2em'} }>
            <p>{image.description}</p>
            <img src={image.image_path}/>
          </div>
        )
      })}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ImageList;
