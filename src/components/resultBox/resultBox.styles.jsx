import styled from "styled-components";

export const PrevOperation=styled.span`
    position: absolute;
    right:30px;
    top:10px;
    font-size: .55rem;
    letter-spacing: 1px;
    color: white;
` ;
export const Result=styled.input`
    width: 100%;
    box-sizing: border-box;
    padding:45px 30px;
    font-size:1.75rem;
    text-align: right;
    border-radius: 7px;
    border: none;
    outline: none;
    color: white;
    background-color: rgba(24,31,50,255);
    margin-bottom: 25px;
    @media screen and (max-width:500px){
        font-size: 1.5rem;
        padding:30px 20px;
    }
`
export const ResultContainer=styled.div`
    position: relative;
    &.theme2{
        ${Result},${PrevOperation}{
            background-color: white;
            color: hsl(60, 10%, 19%);
        }
    }
    &.theme3{
        ${Result},${PrevOperation}{
            background-color: hsl(268, 71%, 12%);
            color: hsl(52, 100%, 62%);
        }
    }
`
