import React from 'react';
import LazyLoad from 'react-lazyload'
import {Subheader} from 'material-ui';

import ImageCard from './ImageCard';

function ImageList() {
    const imageCount = 200;
    const imageIDs = Array.apply(null, {length: imageCount}).map(Function.call, Number);

    const images = [];
    for (let id = imageIDs.length; id > 1; id -= 2) {
        images.push(
            <LazyLoad key={id} height={300} unmountIfInvisible={true}>
                <div className="row">
                    <div className="one-half column" style={{paddingBottom: 34}}><ImageCard imageID={id}/></div>
                    <div className="one-half column" style={{paddingBottom: 34}}><ImageCard imageID={id-1}/></div>
                </div>
            </LazyLoad>
        );
    }

    return (
        <div className="list container">
            <Subheader>Kindheitshelden</Subheader>
            {images}
            <div>Scroll to see more</div>
        </div>
    );
}

export default ImageList;
