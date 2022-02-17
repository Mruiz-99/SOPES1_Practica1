import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './NavComponent';

class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operacion:"",
            n1: 54321,
            n2: 54321,
            numero: 0,
            resultado: 0
        };

        this.setNumero = this.setNumero.bind(this)
        this.suma = this.suma.bind(this)
    }
    suma = () => {
        this.state.n1 = this.state.numero;
        this.state.operacion = "suma";
        this.inputTitle.value = "";
    }
    resta = () => {
        this.state.n1 = this.state.numero;
        this.state.operacion = "resta";
        this.inputTitle.value = "";
    }
    multiplicacion = () => {
        this.state.n1 = this.state.numero;
        this.state.operacion = "multiplicacion";
        this.inputTitle.value = "";
    }
    division = () => {
        this.state.n1 = this.state.numero;
        this.state.operacion = "division";
        this.inputTitle.value = "";
    }
    setNumero = (c) => {
        this.setState(prevState => ({
            ...prevState,
            numero: c.target.value
        }))
    }
    igual = async () => {
        this.state.n2 = this.state.numero;
        if(this.state.operacion == "suma"){
            this.state.resultado = parseInt(this.state.n1) + parseInt(this.state.n2);
        }else if(this.state.operacion == "resta"){
            this.state.resultado = parseInt(this.state.n1) - parseInt(this.state.n2);
        }else if(this.state.operacion == "multiplicacion"){
            this.state.resultado = parseInt(this.state.n1) * parseInt(this.state.n2);
        }else if(this.state.operacion == "division"){
            this.state.resultado = parseInt(this.state.n1) / parseInt(this.state.n2);
        }
        var today = new Date()
        const log = {numero_1: this.state.n1.toString(), numero_2: this.state.n2.toString(),
             operacion: this.state.operacion.toString(), resultado: this.state.resultado.toString(), 
             fecha: today.getFullYear()+"-"+(parseInt(today.getMonth()+1))+"-"+today.getDate()+" " + today.getHours() + ":" + today.getMinutes()}
        
        await axios.post("http://localhost:9000/logs/insert_log", JSON.stringify(log)).then(response => {
            this.inputTitle.value = ""+this.state.resultado;    
            alert("La operacion se realizo exitosamente")
            
        }).catch(() => {
            alert("Error, no se pudo realizar la operacion")
            this.inputTitle.value = "";
        })        

    }
    render() {
        return (
            <div className="App2">
                <div className="App">
                    <Navbar/>
                </div>
                <div className="App">
                    <div className="calculator">
                        <div className="display">
                            <input ref={el => this.inputTitle = el} onChange={this.setNumero} type="number" className="display2" />
                        </div>
                        <div className="operators">
                            <button onClick={this.suma}>+</button>
                            <button onClick={this.resta}>-</button>
                            <button onClick={this.multiplicacion}>*</button>
                            <button onClick={this.division}>/</button>
                            <button onClick={this.igual}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} export default Calculadora;
