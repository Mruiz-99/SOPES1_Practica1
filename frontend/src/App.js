import React, { Component } from 'react';
import Calculadora from "./components/CalculadoraComponent";
import Logs from "./components/LogsComponent";
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero1: 0,
            numero2: 0,
            resultado: 0,
            logs:[]
        };

        this.setN1 = this.setN1.bind(this)
        this.setN2 = this.setN2.bind(this)
        this.setResultado = this.setResultado.bind(this)

    }
    setN1 = (n) => {
        this.state.numero1=n;
    }
    setN2 = (n) => {
      this.state.numero2=n;
    }
    setResultado = (n) => {
      this.state.resultado=n;
    }
    setLogs = (n) => {
      this.state.logs=n;
    }

    render(){
    return (
      <div id = "pantalla">
            <BrowserRouter>
            <Routes>
                <Route path="/calculadora" element={<Calculadora numero1={this.state.numero1} setN1={this.setN1} numero2={this.state.numero2} setN2={this.setN2} resultado={this.state.resultado} setResultado={this.setResultado} logs={this.state.logs} setLogs={this.setLogs}/>} />
                <Route exact path="/logs" element={<Logs />} />
                <Route path="/" element={<Navigate replace to="/calculadora" />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
}
}export default App;
