import React from 'react';
import styles from './GifItem.css';

const GifItem = (image) => {
    return (
        <div className="row">
            <div className="card gif-card col-centered">
                <img className="card-img-top" src={image.gif.images.downsized.url} alt={image.gif.title}></img>
            </div>
        </div>
    );
};

export default GifItem;
