import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'

export const ButtonScroll = styled(LinkScroll)`
    border-radius: 50px;
    border-style: solid;
    border-color: #000000;
    border-width: 2px;
    background: ${({primary})=>(primary?'#007FF5': '#010606')};
    white-space: nowrap;
    padding: ${({big})=>(big?'14px 48px': '12px 30px')};
    color: ${({dark})=>(dark?'#010606': '#fff')};
    font-size: ${({fontBig})=>(fontBig?'20px': '16px')};
    outline: none;
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
export const ButtonRouter = styled(LinkRouter)`
    border-radius: 50px;
    border-style: solid;
    border-color: #000000;
    border-width: 2px;
    background: ${({primary})=>(primary?'#007FF5': '#010606')};
    white-space: nowrap;
    padding: ${({big})=>(big?'14px 48px': '12px 30px')};
    color: ${({dark})=>(dark?'#010606': '#fff')};
    font-size: ${({fontBig})=>(fontBig?'20px': '16px')};
    outline: none;
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