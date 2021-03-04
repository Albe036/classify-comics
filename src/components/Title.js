import React from 'react';

const Title = (props) =>{

    const { title, num, day, month, year } = props 
    return(
        <div className="title">
            <h1 className="animate__animated animate__bounce">{ num }. { title }</h1>
            <h4>Release date {day}/{month}/{year}</h4>
        </div>
    )
}

export default Title;