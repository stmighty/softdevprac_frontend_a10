'use client'
import { useRef } from "react";
import { useEffect } from "react";

interface VideoPlayerProps {
    vdoSrc: string,
    isPlaying: boolean
}




export default function VideoPlayer({vdoSrc, isPlaying} : VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect( () => {
        if(isPlaying) {
            videoRef.current?.play()
        }
        else {
            videoRef.current?.pause()
        }
    }, [isPlaying])
    return (
        <video className="w-[40%]" src={vdoSrc} ref={videoRef} controls loop muted></video>
    )
}



/* ไม่สามารถตั้ง isPlaying เป็น true ตั้งแต่แรก เพราะว่ามันยัง render ไม่เสร็จ video ก็จะไม่เล่น
export default function VideoPlayer({ vdoSrc, isPlaying }: VideoPlayerProps) {
    if (isPlaying) {
        // Trying to play the video here
        // This won't work because the DOM element isn't available yet
        document.querySelector('video')?.play();
    } else {
        // Trying to pause the video here
        document.querySelector('video')?.pause();
    }

    return <video className="w-[40%]" src={vdoSrc} controls loop muted></video>;
}
*/






