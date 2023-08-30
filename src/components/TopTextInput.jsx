import {useState} from "react";

const TopTextInput = () => {
    const[headText, setHeadText] = useState("");
    const[topText, setTopText] = useState({});

    const handleSubmit = (e) => {
        if (headText === "") {
            return alert("please type in your Text")
        } else { 
            e.preventDefault(); 
            setTopText({
                text: headText,
                });
            //setTextArray([...textArray, topText]); 
            setHeadText("");
        }
    }
        return (
            <div>
                <form onSubmit={handleSubmit}>
                <input type="text" value={headText} onChange={(e)=> setHeadText(e.target.value)} placeholder="Type in the Text for the header"/>
                <button type="submit">Add</button>
                </form>
            <h3 className="text">{topText.text}</h3>
            </div>
        )
}


export default TopTextInput;
