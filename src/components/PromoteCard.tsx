
/*
'use client'
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";

export default function PromoteCard() {
    const [playing, setPlaying] = useState(true);
    console.log(playing);
    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
            <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing}></VideoPlayer>
            <div className="m-5">
                <div className="m-5 bg-black">Get your vaccine today</div>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                    onClick = {() => setPlaying(!playing)} >
                    {playing? 'Pause':'Play'}
                </button>
            </div>
        </div>
    )
}
*/

///*
'use client'
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";
import useWindowListener from "../hooks/useWindowListener";

export default function PromoteCard() {
    const [playing, setPlaying] = useState(true);

    // Use the custom hook to prevent the context menu from showing on right-click
    useWindowListener("contextmenu", (event) => {
        event.preventDefault(); // Prevent the context menu from appearing
    });

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
            <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing}></VideoPlayer>
            <div className="m-5">
                <div className="m-5">Get your vaccine today</div>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                    onClick={() => setPlaying(!playing)}>
                    {playing ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>
    );
}
//*/
