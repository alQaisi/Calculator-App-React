import {Buttons,Container} from './buttonsContainer.styles';
import { useContext } from "react";
import { CalculatorContext } from "../../context/calculator.context";


function ButtonsContainer(){
    const {theme,setNum,reset,deleteNum,getResult,changeOperation}=useContext(CalculatorContext);
    const buttons=[
        {item:7,class:"number",callback:setNum},{item:8,class:"number",callback:setNum},{item:9,class:"number",callback:setNum},{item:"DEL",class:"controller",callback:deleteNum},
        {item:4,class:"number",callback:setNum},{item:5,class:"number",callback:setNum},{item:6,class:"number",callback:setNum},{item:"+",class:"operation",callback:changeOperation},
        {item:1,class:"number",callback:setNum},{item:2,class:"number",callback:setNum},{item:3,class:"number",callback:setNum},{item:"-",class:"operation",callback:changeOperation},
        {item:".",class:"number",callback:setNum},{item:0,class:"number",callback:setNum},{item:"/",class:"operation",callback:changeOperation},{item:"x",class:"operation",callback:changeOperation},
        {item:"RESET",class:"controller span2",callback:reset},{item:"=",class:"result-key span2",callback:getResult}
    ];
    const ButtonsItems=buttons.map((button,index)=><Buttons data-id={button.item} key={index} className={button.class} onClick={button.callback}>{button.item}</Buttons>);
    return(
        <Container className={theme}>
            {ButtonsItems}
        </Container>
    );
}
export default ButtonsContainer;