import React from "react"
import memeData from "../data"

export default function Meme() {
    return (
        <main>
            <form className="form">
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
                    onClick={myfunction}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}

function myfunction(event) {
    {event.preventDefault()};
     console.log(memeData.data.memes[getRandom(0, 99)].url);
}

function getRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

