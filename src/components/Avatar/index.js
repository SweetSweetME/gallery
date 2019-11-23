import React from 'react';

const Avatar = (props) => {
    return (
        <div>
            <img src={props.imgUrl} />
            <p>{props.text}</p>
        </div>
    )
}

export default Avatar;