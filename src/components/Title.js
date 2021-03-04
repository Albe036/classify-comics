import React from 'react';

const Title = (props) =>{

    const { title } = props 
    return(
        <div className="title">
            <h1 className="animate__animated animate__bounce">{ title }</h1>
        </div>
    )
}

export default Title;