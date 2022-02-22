import styled from 'styled-components'

// InfoContainer, InfoWrapper, InfoRow, Coloumn1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Button

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg? '#f9f9f9': '#232A34')}
    @media screen and (max-width:768px){
        padding: 100px 0;
    }
`
export const InfoWrapper = styled.div`
    display: grid;
    z-index: -1;
    // height: 600px;
    width: 100%;
    max-width: 1800px;
    margin-right: auto;
    padding: 0 20px;
    // justify-content: center;
    @media screen and (max-width:768px){
        justify-content: center;
    }
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1rf);
    align-items: center;
    grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'` : `'col1 col2'` )};
    @media screen and (max-width:768px){
        display: flex;
        flex-direction: column;
    }
`
export const Coloumn1 = styled.div`
    margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col1;
`
export const Coloumn2 = styled.div`
    margin-bottom: 15px;
    padding: 15px;
    grid-area: col2;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin: 16px 0px 16px 0px;

`
export const Heading = styled.h1`
    margin-bottom :24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    // color: ${({lightText})=>(lightText ? '#f7f8fa' : '#010606' )};
    @media screen and (max-width:768px){
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darktext})=>(darktext ? '#f7f8fa' : '#010606' )};
`
export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap = styled.div`
    max-width: 400px;
    height: 50%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`





