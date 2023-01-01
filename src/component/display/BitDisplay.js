import './BitDisplay.css';
function BitDisplay(props){
    return(
        <div>
            <h2 className="bit-display__number">{props.showBits}</h2>
        </div>
    )
}

export default BitDisplay;