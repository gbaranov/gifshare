import React from 'react';

const GifItem = (image) => {
    return (
        <div className="card gif-card">
            <img className="card-img-top" src={image.gif.images.downsized.url} alt={image.gif.title}></img>
        </div>
    );
};

export default GifItem;
