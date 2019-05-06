import React from 'react';
import './App.css';
import Operator from './components/operator';
import Number from './components/number';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
            value: 0,
        };
    }

    handleOperator(o) {
        this.setState({
            input: this.state.input + o,
        });
    }

    handleNumber(n) {
        this.setState({
            input: this.state.input === 0 ? n.toString() : this.state.input + n,
            value: eval(eval(this.state.input + n)),
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
                            <Operator operator={'+'} handleOperator={() => {
                                this.handleOperator('+')
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
                            <Operator operator={'-'} handleOperator={() => {
                                this.handleOperator('-')
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
                            <Operator operator={'*'} handleOperator={() => {
                                this.handleOperator('*')
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
                            <Operator operator={'/'} handleOperator={() => {
                                this.handleOperator('/')
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
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Calculator;
