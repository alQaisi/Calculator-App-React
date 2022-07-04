import styled from "styled-components";

export const RadioContainer=styled.label`
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    & input{
        height: 20px;
        width: 20px;
        background-color: #eee;
        border-radius: 50%;
        opacity:0;
        &:checked+span{
            opacity: 1;
        }
        &+span{
            position: absolute;
            left:5px;
            top: 4px;
            border-radius: 5px;
	        width: 20px;
	        height: 20px;
	        border-radius: 50%;
            opacity: 0;
	        background: hsl(6, 63%, 50%);
            &:hover{
                filter: brightness(150%);
                opacity: 70%;
            }
        }
    }
`;
export const ThemeController=styled.div`
    background-color: hsl(223, 31%, 20%);
    padding: 1px 2px 0px 1px;
    border-radius: 50px;
    position: relative;
`;
export const CalcHeader=styled.div`
    box-sizing: border-box;
    padding:15px 0;
    margin-bottom:15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
    font-size: 1.25rem;
    margin-block: 0;
    color: white;
    }
    h1+span{
    font-size: .4rem;
    margin-right: 25px;
    letter-spacing: 1px;
    margin-left: auto;
    margin-top: 5px;
    color: white;
    }
    & .themeNumber{
        position: absolute;
        font-size: .4rem;
        color: white;
        top:-15px;
        &.num1{
            left: 10px;
        }
        &.num2{
            left: 40px; 
        }
        &.num3{
            left: 70px;
        }
    }
    &.theme2 *{
        color: hsl(60, 10%, 19%);
    }
    &.theme3 *{
        color: hsl(52, 100%, 62%);
    }
    &.theme2 ${ThemeController}{
        background-color: hsl(0, 5%, 81%);
    }
    &.theme3 ${ThemeController}{
        background-color: hsl(268, 71%, 12%);
    }
    &.theme2 input+span{
        background-color: hsl(25, 98%, 40%);
    }
    &.theme3 input+span{
        background-color: hsl(176, 100%, 44%);
    }
`;

