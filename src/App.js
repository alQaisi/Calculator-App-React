import React from 'react';
import ButtonsContainer from './components/buttonsContainer/buttonsContainer.component';
import ResultBox from './components/resultBox/resultBox.component';
import Header from './components/header/Header.component';
import './App.css';
import { CalculatorContext } from './context/calculator.context';
import { useContext } from 'react';

function App() {
  const {theme}=useContext(CalculatorContext);
  return (
    <div className={"App "+theme}>
      <main >
        <Header/>
        <ResultBox/>
        <ButtonsContainer/>
      </main>
    </div>
  );
}

export default App;
