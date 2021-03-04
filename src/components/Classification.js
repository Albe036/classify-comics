import React, { useState } from 'react';
import Star from '../static/star.svg'



const Classification = (props) =>{

    const [styles, setStyles] = useState("ction");
    const change1 = () => setStyles("ction1")
    const change2 = () => setStyles("ction2")
    const change3 = () => setStyles("ction3")
    const change4 = () => setStyles("ction4")
    const change5 = () => setStyles("ction5")
    const change0 = () => setStyles("ction")

    const { generate } = props;

    return(
        <div className={styles} onMouseLeave={change0}>
                <img src={Star} className="img" id="img1" onClick={generate} onMouseEnter={change1}/>
                <img src={Star} className="img" id="img2" onClick={generate} onMouseEnter={change2}/>
                <img src={Star} className="img" id="img3" onClick={generate} onMouseEnter={change3}/>
                <img src={Star} className="img" id="img4" onClick={generate} onMouseEnter={change4}/>
                <img src={Star} className="img" id="img5" onClick={generate} onMouseEnter={change5}/>
        </div>
    )
}




export default Classification;