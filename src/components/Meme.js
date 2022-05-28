import React from 'react';

export default function Meme() {

    React.useEffect(() => {
        // console.log("use effect")
        fetch("https://api.imgflip.com/get_memes")
            .then(data => data.json())
            .then(data => setAllMemes(data))

        return () => {
            // console.log("No cleaning up function");
        }
    }, [])

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImg: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemes, setAllMemes] = React.useState();

    function setText(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    function getMeme() {
        setMeme(prevMeme => {
            const menewMemes = allMemes.data.memes;
            const newMemeImg = menewMemes[getRandom(0, menewMemes.length - 1)].url;
            return {
                ...prevMeme,
                memeImg: newMemeImg
            }
        })
        // console.log(meme);
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={setText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={setText}
                />
                <button 
                    onClick={getMeme}
                    className="form--button"
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img 
                    src={meme.memeImg}
                    alt="Meme"
                    className="meme--image"
                />    
                <div className='meme--text top'>
                    {meme.topText}
                </div> 
                <div className='meme--text bottom'>
                    {meme.bottomText}
                </div> 
            </div>
        </main>
    )
}


function getRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

