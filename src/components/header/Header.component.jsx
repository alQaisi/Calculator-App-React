import { CalcHeader,RadioContainer,ThemeController } from "./Header.style";
import { useContext } from "react";
import { CalculatorContext } from "../../context/calculator.context";
function Header(){
    const {theme,changeTheme}=useContext(CalculatorContext)
    const themeChecked={"theme1":false,"theme2":false,"theme3":false,...{[theme]:true}}
    return(
        <CalcHeader className={theme}>
            <h1>calc</h1>
            <span className="theme-title">THEME</span>
            <ThemeController>
                <span className="themeNumber num1">1</span>
                <RadioContainer>
                    <input aria-label="theme1" type={"radio"} name="radio" id="theme1" onChange={changeTheme} checked={themeChecked["theme1"]}/>
                    <span></span>
                </RadioContainer>
                <span className="themeNumber num2">2</span>
                <RadioContainer>
                    <input aria-label="theme2" type={"radio"}  name="radio" id="theme2" onChange={changeTheme} checked={themeChecked["theme2"]}/>
                    <span></span>
                </RadioContainer>
                <span className="themeNumber num3">3</span>
                <RadioContainer>
                    <input aria-label="theme3" type={"radio"}  name="radio" id="theme3" onChange={changeTheme} checked={themeChecked["theme3"]}/>
                    <span></span>
                </RadioContainer>
            </ThemeController>
        </CalcHeader>
    );
}
export default Header;