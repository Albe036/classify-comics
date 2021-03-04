import React, { useReducer } from 'react';
import Star from '../static/star.svg'

const reducerStyle = (state, action) =>{
    let newState = {...state}
    switch(action.type){
        case "primero":{
            newState.select = "ction1"
            break;
        }
        case "segundo":{
            newState.select = "ction2"
            break;
        }
        case "tercero":{
            newState.select = "ction3"
            break;
        }
        case "cuarto":{
            newState.select = "ction4"
            break;
        }
        case "quinto":{
            newState.select = "ction5"
            break;
        }
        case "salir":{
            newState.select = "ction"
            break;
        }
        default:{
            break
        }
    }
    return newState
}

const Classification = (props) =>{

    const [style, dispatchStyle] = useReducer(reducerStyle, {
        select: "ction"
    })

    const { generate } = props;

    return(
        <div className={style.select} onMouseLeave={(e)=>dispatchStyle({type: "salir"})}>
                <img src={Star} className="img" id="img1" onClick={generate} onMouseEnter={(e) =>dispatchStyle({type: "primero"})}/>
                <img src={Star} className="img" id="img2" onClick={generate} onMouseEnter={(e)=>dispatchStyle({type: "segundo"})}/>
                <img src={Star} className="img" id="img3" onClick={generate} onMouseEnter={(e)=>dispatchStyle({type: "tercero"})}/>
                <img src={Star} className="img" id="img4" onClick={generate} onMouseEnter={(e)=>dispatchStyle({type: "cuarto"})}/>
                <img src={Star} className="img" id="img5" onClick={generate} onMouseEnter={(e)=>dispatchStyle({type: "quinto"})}/>
        </div>
    )
}




export default Classification;