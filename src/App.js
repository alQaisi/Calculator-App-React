import React from 'react';
import ButtonsContainer from './components/buttonsContainer/buttonsContainer.component';
import ResultBox from './components/resultBox/resultBox.component';
import Header from './components/header/Header.component';
import './App.css';
import { CalculatorContext } from './context/calculator.context';
import { useContext } from 'react';

function App() {
  
  const {theme,setNum,deleteNum,getResult,changeOperation}=useContext(CalculatorContext);
  
  function handleKeyboardEvents(evt){

    const numbers=".0123456789";
    const operations="-+*/";
    const resultKeys="Enter="
    const {key}=evt;

    switch(true){
      case numbers.includes(key):
        return setNum(null,key);
      case operations.includes(key):
        return changeOperation(null,key);
      case key==="Backspace":
        return deleteNum();
      case resultKeys.includes(key):
        return getResult();
      default:
        return null;
    }

  }

  return (
    <div className={"App "+theme} tabIndex={0} onKeyDown={handleKeyboardEvents}>
      <main >
        <Header/>
        <ResultBox/>
        <ButtonsContainer/>
      </main>
    </div>
  );
}

export default App;
