import React from 'react';

const Picture = (props) =>{

    const { image, alt } = props;
    return(
        <div className="picture">
            <img className="animate__headShake" src={image} alt={alt}/>
        </div>
    )
}

export default Picture;