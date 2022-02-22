import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Coloumn1, Coloumn2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoSectionElement';
import {ButtonScroll, ButtonRouter} from '../Button/ButtonElement';
const Index = (props) => {
  return (
    <>    
      <InfoContainer id={props.id} lightBg={props.lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={props.imgStart}>
            <Coloumn1>
              <TextWrapper>
                <TopLine>{props.topLine}</TopLine>
                <Heading lightText={props.lightText}>{props.headline}</Heading>
                <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
                <BtnWrap>
                  <ButtonRouter to={props.buttonDirect}>Photography</ButtonRouter>
                  {/* <ButtonScroll to={props.buttonDirect}>{props.buttonLabel}</ButtonScroll> */}
                  <ButtonScroll 
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary = {props.primary? 1: 0}
                    dark  = {props.dark?1:0}
                    dark2 = {props.dark2?1:0}
                    >{props.buttonLabel} 
                  </ButtonScroll>
                </BtnWrap>
              </TextWrapper>
            </Coloumn1>
            <Coloumn2>
              <ImgWrap>
                {/* <Img src={props.imageSrc} alt={props.altText}/> */}
                <Img src={props.svgSrc} alt={props.altText}/>              
              </ImgWrap>
            </Coloumn2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
};

export default Index;
