import { createContext, useEffect, useState, useReducer } from "react";

export const CalculatorContext=createContext({
    num1:"",
    num2:"",
    operation:"",
    prev:"",
    result:"",
    theme:"theme1"
});

const INITIAL_STATE={
    num1:"",
    num2:"",
    operation:"",
    prev:"",
    result:"",
}
const caclulatorReducer=function(state,action){
    const {type,payload}=action;
    switch(type){
        case "RESET":
            return payload;
        case "CALCULATOR_MODIFICATION":
            return{
                ...state,
                ...payload
            }
        default:
            return{
                state
            }
    }
}

export function CalculatorProvider({children}){
    const [{num1,num2,operation,prev,result},dispatch]=useReducer(caclulatorReducer,INITIAL_STATE);
    const [theme,setTheme]=useState("theme1");

    function changeTheme(evt){
        const newTheme=evt.target.id;
        localStorage.setItem("theme",newTheme)
        setTheme(newTheme);
    }
    function setNum(evt,keyNumber){
        const num=keyNumber || evt.target.dataset.id;
        if(num==="." && result.includes("."))
            return null;
        if(result[0]==="0" && result.length===1 && num==="0")
            return null;
        const newValue=result+num;
        const number=operation===""?{num1:newValue}:{num2:newValue}
        dispatch({type:"CALCULATOR_MODIFICATION",payload:{...number,result:newValue}});
    }
    function changeOperation(evt,keyOperation){
        if(keyOperation)
            keyOperation=keyOperation==="*"?"x":keyOperation;
        const operation=keyOperation ||evt.target.dataset.id ;
        let resultValue=""
        if(num1==="")
            return null;
        if(num2!=="")
            resultValue=calculating();
        const number1=resultValue===""?num1:resultValue;
        dispatch({type:"CALCULATOR_MODIFICATION",payload:{
            operation,
            result:"",
            num1:number1,
            prev:`${number1} ${operation}`,
            num2:""
        }});
        
    }
    function calculating(){
        const number1=parseFloat(num1);
        const number2=parseFloat(num2);
        switch(operation){
            case "+":
                return number1+number2;
            case "-":
                return number1-number2;
            case "x":
                return number1*number2;
            case "/":
                return number1/number2;
            default:
                throw new Error("Error !")
        }
    }
    function getResult(){
        if(num1!=="" && num2!==""){
            const resultValue=calculating();
            dispatch({type:"CALCULATOR_MODIFICATION",payload:{
                prev:`${num1} ${operation} ${num2}`,
                operation:"",
                result:resultValue,
                num1:resultValue,
                num2:""
            }});
        }
    }
    function reset(){
        dispatch({type:"RESET",payload:INITIAL_STATE});
    }
    function deleteNum(){
        const check=prev[prev.length-1]*1;
        if(prev.includes(" ") && check===check)
            return reset();
        const value=result.slice(0,result.length-1);
        const obj=operation===""?{num1:value}:{num2:value};
        dispatch({type:"CALCULATOR_MODIFICATION",payload:{...obj,result:value}})
    }
    useEffect(function(){
        const localTheme=localStorage.getItem("theme")?localStorage.getItem("theme"):"theme1";
        localStorage.setItem("theme",localTheme);
        setTheme(localTheme);
    },[]);

    const value={theme,prev,result,changeTheme,setNum,reset,deleteNum,getResult,changeOperation};
    return(
        <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>
    );
}