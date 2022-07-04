import {PrevOperation,Result,ResultContainer} from './resultBox.styles';
import { useContext } from "react";
import { CalculatorContext } from "../../context/calculator.context";

function ResultBox(){
    const {theme,prev,result}=useContext(CalculatorContext);
    return(
        <ResultContainer className={theme}>
            <PrevOperation>{prev}</PrevOperation>
            <Result aria-label='result' type="text" name="result" value={result} readOnly/>
        </ResultContainer>
    );
}
export default ResultBox;