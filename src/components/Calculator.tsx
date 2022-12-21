import React, { useState } from "react"
import st from './Calculator.module.css'
import { Button } from 'antd';


const Calculator = () => {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const operators = ['*', '/', '+', '-', '.']
    const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '00']

    const updateCalc = (value: string) => {
        if (calc.length > 28) {
            return
        }
        if (operators.includes('-') && calc === '') {
            setCalc(calc + value);
        }
        if (operators.includes(value) && calc === '' ||
            operators.includes(value) && operators.includes(calc.slice(-1))) {
            return
        }
        setCalc(calc + value);
        if (!operators.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString())
    }

    const deleteLast = () => {
        if (calc === '') {
            return
        }
        const lastValue = calc.slice(0, -1);
        setCalc(lastValue)
    }

    const deleteAll = () => {
        setCalc('');
        setResult('')
    }

    return (
        <div className={st.calculator}>
            <div className={st.title}>Calculator</div>
            <div className={st.input_number}>
                <div className={st.display}>
                    {result ? <span className={st.result}>({result})</span> : ''}
                    {calc || '0'}
                </div>
            </div>
            <div className={st.calculator_tablo}>
                <div className={st.numbers}>
                    {numbers.map((num: string) => <Button key={num} onClick={() => updateCalc(`${num}`)}>{num}</Button>)}
                    <Button onClick={() => updateCalc('.')} >.</Button>

                </div>
                <div className={st.operators}>
                    <Button type="primary" onClick={() => deleteAll()}>AC</Button>
                    <Button type="primary" onClick={() => deleteLast()}>C</Button>
                    <Button type="primary" onClick={() => updateCalc('*')}>X</Button>
                    <Button type="primary" onClick={() => updateCalc('/')}>:</Button>
                    <Button type="primary" onClick={() => updateCalc('+')}>+</Button>
                    <Button type="primary" onClick={() => updateCalc('-')}>-</Button>
                    <Button type="primary" className={st.equals} onClick={() => calculate()}>=</Button>
                </div>
            </div>

        </div>
    )
}

export default Calculator;