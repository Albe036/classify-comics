import React, { useState, useEffect } from 'react';
import Title from './Title';
import Picture from './Picture';
import Classification from './Classification';
import "../styles/app.css";
import axios from 'axios';
import Math from 'math';


const App = () =>{

    const [datas, setDatas] = useState({})
    const [num, setnum] = useState(Math.floor((Math.random() * (614 - 1 + 1)) + 1))

    const generateNum = () =>{
        setnum(Math.floor((Math.random() * (614 - 1 + 1)) + 1))
    }

    useEffect(async () => {
        const datas = await axios({
                        method: "get",
                        url: `http://xkcd.com/${num}/info.0.json`});
        setDatas(datas.data)


    }, [num])
    
    return(
        <div>
            <Title title = {datas.title}/>
            <Picture image = {datas.img} alt={datas.alt}/>
            <Classification generate = {generateNum}/>
        </div>
    )
}

export default App;