import styled from "styled-components";

export const Buttons=styled.button`
    font-size: 1rem;
    padding:17px 0 10px;
    border-radius:11px;
    border: none;
    outline: none;
    background-color: hsl(30, 25%, 89%);
    border-bottom:4px solid hsl(28, 16%, 65%);
    color: hsl(221, 14%, 31%);
    cursor: pointer;
    &:hover{
        filter:brightness(125%);
    }
    &.result-key{
        background-color: hsl(6, 63%, 50%);
        border-bottom:4px solid hsl(6, 70%, 34%);
        color: white;
    }
    &.controller{
        color: white;
        background-color: hsl(225, 21%, 49%);
        border-bottom:4px solid hsl(224, 28%, 35%);
        font-size: .9rem;
    }
    &.span2{
        grid-column: span 2;
    }
`

export const Container=styled.div`
    border-radius: 7px;
    width: 100%;
    padding: 25px 30px;
    background-color: hsl(223, 31%, 20%);
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4,1fr);
    gap:25px;
    &.theme2{
        background-color: hsl(0, 5%, 81%);
        ${Buttons}{
            color: hsl(60, 10%, 19%);
            background-color: hsl(45, 7%, 89%);
            border-bottom: 4px solid  hsl(35, 11%, 61%);
            &.controller{
                color: white;
                background-color: hsl(185, 42%, 37%);
                border-bottom:4px solid hsl(185, 58%, 25%);
            }
            &.result-key{
                color: white;
                background-color: hsl(25, 98%, 40%);
                border-bottom: 4px solid hsl(25, 99%, 27%)
            }
        }
    }
    &.theme3{
        background-color: hsl(268, 71%, 12%);
        ${Buttons}{
            color: hsl(52, 100%, 62%);
            background-color: hsl(268, 47%, 21%);
            border-bottom: 4px solid  hsl(290, 70%, 36%);
            &.controller{
                color: white;
                background-color: hsl(281, 89%, 26%);
                border-bottom:4px solid hsl(285, 91%, 52%);
            }
            &.result-key{
                color: hsl(198, 20%, 13%);
                background-color: hsl(176, 100%, 44%);
                border-bottom: 4px solid hsl(177, 92%, 70%);
            }
        }
    }
    @media screen and (max-width:500px) {
        padding:15px 20px;
        gap:15px 15px;
        ${Buttons}{
            border-radius:5px;
            font-size: .95rem;
            padding:20px 10px 15px;
            &.controller{
                font-size: .65rem;
            }
        }
    }
`;