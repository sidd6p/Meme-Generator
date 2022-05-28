import React from "react"
import memeData from "../data"


export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImg: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemes, setAllMemes] = React.useState(memeData);

    function getMeme() {
        setMeme(prevMeme => {
            const menewMemes = allMemes.data.memes;
            const newMemeImg = menewMemes[getRandom(0, menewMemes.length - 1)].url;
            return {
                ...prevMeme,
                memeImg: newMemeImg
            }
        })
        console.log(meme);
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    onClick={getMeme}
                    className="form--button"
                >
                    Get a new meme image
                </button>
            </div>
            <img 
                src={meme.memeImg}
                alt="Meme"
                className="meme--image"
            />
        </main>
    )
}


function getRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

