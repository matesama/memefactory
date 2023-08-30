import {useState, useEffect} from "react";
import axios from "axios";
import Buttons from "./Buttons";
import TopTextInput from "./TopTextInput";
import BottomTextInput from "./BottomTextInput";

const GetMemes = () => {
    const [meme, setMeme] = useState([]);
    const [indexCounter, setIndexCounter] = useState(0);
    

    const fetchMeme = async () => {
        
        try {
            const getMeme = await axios.get("https://api.imgflip.com/get_memes");
            
         //In axios not needed: if(!getMeme) throw new Error()

            const response = getMeme.data.data.memes;
            setMeme(response);
            console.log(meme);
            console.log(response);
            

        } catch {
            console.log(error.message);
        }
    }
    useEffect(() => {
        fetchMeme();
    }, []);
    
    

    return (
        <div>
            <article className="article">
                <TopTextInput />
                {meme.length > 0 ? <img src={meme[indexCounter].url} alt="Drake Hotline Bling" className="image" s /> : null}
                <BottomTextInput />
            </article>
            <Buttons setIndexCounter={setIndexCounter} indexCounter={indexCounter} />
        </div>
    )
}

export default GetMemes;