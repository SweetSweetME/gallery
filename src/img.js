import React from 'react';
import { Images } from './config';

export class Img extends React.Component {
    render() {
        return (
            <div className="gallery-img">
                <div className="cube">
                    {LO.map(Images, (image, key) => <div className={`img_${key}`} key={key}><img src={image} /></div>)}
                </div>
            </div>
        );
    }
}