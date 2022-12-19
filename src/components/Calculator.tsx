import React from "react"
import { InputNumber } from 'antd';
import st from './Calculator.module.css'


const onChange = (value: number | null) => {
    console.log('changed', value);
};

const Calculator = () => {
    return (
        <div>
            <InputNumber onChange={onChange} controls={false} />
            <div className={st.operators}>

            </div>
        </div>
    )
}

export default Calculator;