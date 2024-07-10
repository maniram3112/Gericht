import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../Constants';
import './Intro.css';

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = React.useRef();
    const handleVideo = () =>{
        setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    
        if(playVideo){
            vidRef.current.pause();
        }else{
            vidRef.current.play();
        }
    }
    return (
        <div className='app_video'>
            <video
            src={meal}
            ref={vidRef}
            type="video/mp4"
            loop
            controls={false}
            muted
            />
            <div className='app_video-overlay flex_center'>
                <div 
                    className='app_video-overlay_circle flex_center' 
                    onClick={handleVideo}
                >
                    {playVideo?(
                        <BsPauseFill color='#fff' fontSize={30}/>
                    ): <BsFillPlayFill color='#fff' fontSize={30}/>}
                </div>
            </div>
        </div>
    )
}

export default Intro
