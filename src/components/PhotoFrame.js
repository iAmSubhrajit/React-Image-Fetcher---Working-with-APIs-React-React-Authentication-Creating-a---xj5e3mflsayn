
import React, { useEffect } from 'react';

export const PhotoFrame = ({ url, title }) => {

    return (
        <div className='photoframe'>
            <img src={url}></img>
            <div className='caption'>{title}</div>
        </div>
    )
}