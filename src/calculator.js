import React from 'react';
import './app.css';
import Operator from './components/operator';
import Number from './components/number';

const operators = ['+', '-', '*', '/', 'CE'];

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
            value: 0,
        };
    }

    resetInput(){
        this.setState({
            input: 0,
            value: 0,
        })
    }

    handleOperator(o) {
        const {input} = this.state;

        if (o === operators[4]) {
            this.resetInput();
        } else {
            this.setState({
                input: operators.indexOf(input[input.length - 1]) >= 0 ? input : input + o,
            });
        }
    }

    handleNumber(n) {
        const newInput = this.state.input.toString() === "0"
            ? n.toString()
            : this.state.input + n;

        const newValue = newInput !== "0"
            ? eval(this.state.input + n)
            : "0";

        this.setState({
            input: newInput,
            value: newValue,
        });
    }

    render() {
        const {input, value} = this.state;
        return (
            <div className="App">
                <div className="input">{input}</div>
                <div className="response">{value}</div>
                <table>
                    <tr>
                        <td>
                            <Operator operator={operators[0]} handleOperator={() => {
                                this.handleOperator(operators[0])
                            }}/>
                        </td>
                        <td>
                            <Number number={1} handleNumber={() => {
                                this.handleNumber(1)
                            }}/>
                        </td>
                        <td>
                            <Number number={2} handleNumber={() => {
                                this.handleNumber(2)
                            }}/>
                        </td>
                        <td>
                            <Number number={3} handleNumber={() => {
                                this.handleNumber(3)
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Operator operator={operators[1]} handleOperator={() => {
                                this.handleOperator(operators[1])
                            }}/>
                        </td>
                        <td>
                            <Number number={4} handleNumber={() => {
                                this.handleNumber(4)
                            }}/>
                        </td>
                        <td>
                            <Number number={5} handleNumber={() => {
                                this.handleNumber(5)
                            }}/>
                        </td>
                        <td>
                            <Number number={6} handleNumber={() => {
                                this.handleNumber(6)
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Operator operator={operators[2]} handleOperator={() => {
                                this.handleOperator(operators[2])
                            }}/>
                        </td>
                        <td>
                            <Number number={7} handleNumber={() => {
                                this.handleNumber(7)
                            }}/>
                        </td>
                        <td>
                            <Number number={8} handleNumber={() => {
                                this.handleNumber(8)
                            }}/>
                        </td>
                        <td>
                            <Number number={9} handleNumber={() => {
                                this.handleNumber(9)
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Operator operator={operators[3]} handleOperator={() => {
                                this.handleOperator(operators[3])
                            }}/>
                        </td>
                        <td>
                        </td>
                        <td>
                            <Number number={0} handleNumber={() => {
                                this.handleNumber(0)
                            }}/>
                        </td>
                        <td>
                            <Operator operator={operators[4]} handleOperator={() => {
                                this.handleOperator(operators[4])
                            }}/>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Calculator;
