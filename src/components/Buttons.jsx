import {useState} from "react";
const Buttons = ({indexCounter, setIndexCounter}) => {

    const handlePrevClick = () => {
        if(indexCounter <= 0) {
            setIndexCounter(99);
            
            //alert("This is the first meme, there is no previous one")
        } else {
            setIndexCounter(indexCounter - 1);
        }
    }
    const handleNextClick = () => {
        if(indexCounter >= 99) {
            setIndexCounter(0);
            //alert("This is the last meme, there is no next one")
        } else {
            setIndexCounter(indexCounter + 1);
        }
    }

    console.log(indexCounter);

    return (
        <div>
            <button type="button" onClick={handlePrevClick}>Prev</button>
            <button type="button" onClick={handleNextClick}>Next</button>

        </div>
    )
}

export default Buttons;