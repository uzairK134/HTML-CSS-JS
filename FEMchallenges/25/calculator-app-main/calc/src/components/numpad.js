import React from 'react';
import '../styles.css';

function Numpad(){

    const [calc, setCalc] = React.useState("");

    const ops = ['/', '*', '-', '+', '.'];

    const updateCalc = value => {
        if((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1))) || (calc.length >= 14)){
            return;
        }
        setCalc(calc + value);
    }

    const calculate = () => {
        setCalc((eval(calc).toFixed(2)).toString())
    }

    const del = () => {
        if (calc == ''){
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);

    }

    const reset = () =>{
        setCalc('')
    }


    return(
        <div className='calc'>  
            <div className="display">
                {calc || "0"}
            </div>
            <div className="numpad">
                <div className="numkeys">
                    <button onClick={() => updateCalc('7')} className="numkey">7</button>
                    <button onClick={() => updateCalc('8')} className="numkey">8</button>
                    <button onClick={() => updateCalc('9')} className="numkey">9</button>
                    <button onClick={del}className="del">DEL</button>
                    <button onClick={() => updateCalc('4')}className="numkey">4</button>
                    <button onClick={() => updateCalc('5')}className="numkey">5</button>
                    <button onClick={() => updateCalc('6')}className="numkey">6</button>
                    <button onClick={() => updateCalc('+')} className="op add">+</button>
                    <button onClick={() => updateCalc('1')}className="numkey">1</button>
                    <button onClick={() => updateCalc('2')}className="numkey">2</button>
                    <button onClick={() => updateCalc('3')}className="numkey">3</button>
                    <button onClick={() => updateCalc('-')} className="op sub">-</button>
                    <button onClick={() => updateCalc('.')} className="op decimal">.</button>
                    <button onClick={() => updateCalc('0')} className="numkey">0</button>
                    <button onClick={() => updateCalc('/')} className="op divide">/</button>
                    <button onClick={() => updateCalc('*')} className="op multiply">x</button>
                    <button onClick={reset} className="reset">RESET</button>
                    <button onClick={calculate} className="equals">=</button>
                </div>
            </div>
        </div>
    );
}


export default Numpad