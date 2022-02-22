import React, { useState } from 'react';
import {
    VideoContainer,
    VideoBg,
    VideoEle,
    VideoTextContent,
    VideoTextBig,
    VideoTextSmall,
    VideoBtnWrap,
    ArrowForward,
    ArrowRight,
} from './BackgroundElement';
import { ButtonScroll } from '../Button/ButtonElement'


const Index = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
    return (
        <VideoContainer>
            {/* <Video/> */}
            <VideoBg>
                <VideoEle autoplay loop  src='{bg-video/Videos}' type='video/mp4' />
            </VideoBg>
            <VideoTextContent>
                <VideoTextBig>
                    Manish Yadav
                </VideoTextBig>
                <VideoTextSmall>
                    <p>An imminent change-maker having basic media and technical skills. Recognized for the ability to handle tackle problems and handle social media platforms.
                    </p>
                </VideoTextSmall>
                <VideoBtnWrap>
                    <ButtonScroll
                        to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}>
                        Get Started
                        {hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonScroll>
                </VideoBtnWrap>
            </VideoTextContent>
        </VideoContainer>

    );
};

export default Index;
