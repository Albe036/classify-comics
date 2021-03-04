import React from 'react';


const Description = (props) =>{

    const { transcript } = props

    return(
        <div className="description">
            <h4>{transcript}</h4>
        </div>
    )
}

export default Description;