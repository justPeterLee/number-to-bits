import { useState } from 'react';
import './InputFourm.css';

function InputFourm(props){
    const [userNum, setUserNum] = useState('');

    const eventHandlerNumber = (event) => {
        setUserNum(event.target.value)
    }

    setTimeout(()=>{props.onConvert(userNum)}, 80)
    //useEffect(()=>{props.onConvert(userNum)}, [userNum])
    return(
        <form>
            <input className="input-fourm__input" placeholder="enter number" onChange={eventHandlerNumber}></input>
        </form>
    )
}

export default InputFourm;