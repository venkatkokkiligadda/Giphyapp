import React from 'react';

const GifItem = (image) => {
    return (
        <div className="col-sm-6 col-sm-6 col-md-3">
            <div className="gif-item">
                <img src={image.gif.images.downsized.url} alt="" />
            </div>
        </div>
    )
};

export default GifItem;
