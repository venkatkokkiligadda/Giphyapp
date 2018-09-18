import React from 'react';
import GifItem from './GifItem';

const GifList = (props) => {
    const gifItems = props.gifs.map((image) => {
        return <GifItem key={image.id} gif={image} />
    });

    return (
        <div className="container-fluid">
            <div className="row" id="flex-container">
                {gifItems}
            </div>
        </div>
    );
};

export default GifList;
