import React from 'react';
import { ReactDOM } from 'react-dom';
import Header from './Header';
import MortgageCalculator from './MortgageCalculator'


class App extends React.Component{
    render() {
        return (
            <div>
                <Header title="React Mortgage Calculator"/>
                <MortgageCalculator principal="200000" years="30" rate="5"/>
                {/* questo e' lo stato iniziale di tutto, le props di mortgage le importa dallo stato iniziale di mortgage */}
            </div>
        );
    }
};

ReactDOM.render(<App/>,  document.getElementById("app"))