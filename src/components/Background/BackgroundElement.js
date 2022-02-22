import styled from 'styled-components'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {Link} from 'react-router-dom'
export const VideoContainer = styled.div`
    background: cyan;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    :before{
        content:'';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.6) 100%,
            ),
            linear-gradient(180deg,
                rgba(0,0,0,0.2) 0%,
                transparent 100%,
                );
        z-index: 2;
    }
`
export const VideoBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoEle = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const VideoTextContent = styled.div`
    max-width: 600px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
`

export const VideoTextBig = styled.h1`
    color: #01bf71;
    font-size: 48px;
    @media screen and (max-width: 768px) {
        font-size: 32p;
    }

    @media screen and (max-width: 480px) {
        font-size: 32p;
    }
`
export const VideoTextSmall = styled.p`
    color: #fff;
    font-size: 18px;
    @media screen and (max-width: 768px) {
        font-size: 24p;
    }

    @media screen and (max-width: 480px) {
        font-size: 15p;
    }
`
export const VideoBtnWrap = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ArrowForward = styled(AiOutlineArrowLeft)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight= styled(AiOutlineArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
export const Button2 = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=>(primary?'#01BF71': '#010606')};
    white-space: nowrap;
    padding: ${({big})=>(big?'14px 48px': '12px 30px')};
    color: ${({dark})=>(dark?'#010606': '#fff')};
    font-size: ${({fontBig})=>(fontBig?'20px': '16px')};
    outline: none;border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;
    &:hover{
        transition: all 0.2 ease-in-out;
        background: ${({primary})=>(primary? '#fff':'##01Bf71')}
    }
`