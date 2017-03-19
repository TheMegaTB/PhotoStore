import React from 'react';

import ImageCard from './ImageCard';
import LazyLoad from 'react-lazyload'

function ImageList() {
    const imageCount = 200;
    const imageIDs = Array.apply(null, {length: imageCount}).map(Function.call, Number);
    const images = imageIDs.map((id) => {
        return (<LazyLoad key={id + "-lazy"} height={200}>
            <ImageCard imageID={id}/>
        </LazyLoad>)
    });
    console.log("Images", images);
    return (
        <div className="list">
            {images}
        </div>
    );
}

export default ImageList;
