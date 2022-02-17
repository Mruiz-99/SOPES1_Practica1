import React, { Component } from 'react';
import Navbar from './NavComponent';
import axios from 'axios';

import { Table, TableCell, TableHead, TableRow } from '@material-ui/core';

class Logs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: []
        };

    }

    Consultar_log = async () => {
        await axios.get("http://localhost:9000/logs/get").then(response => {
            this.setState({
                logs: response.data
            });
        }).catch(() => {
            alert("Error en la consulta")
        })
    }

    render() {
        return (
            <div className="App2">
                <div className="App">
                    <Navbar />
                </div>
                <div className="App">
                    <div className="operators">
                        <button onClick={this.Consultar_log}>Consultar</button>
                        
                    </div>
                    <div className="App">
                            <Table>
                                <TableHead><TableRow><TableCell>Numero 1</TableCell><TableCell>Numero 2</TableCell><TableCell>Operacion</TableCell><TableCell>Resultado</TableCell><TableCell>Fecha de operacion</TableCell></TableRow></TableHead>
                                {this.state.logs.map((l) => {
                                    return [<TableRow><TableCell>{l.numero_1}</TableCell><TableCell>{l.numero_2}</TableCell><TableCell>{l.operacion}</TableCell><TableCell>{l.resultado}</TableCell><TableCell>{l.fecha}</TableCell></TableRow>]
                                })}
                            </Table>
                        </div>
                </div>
            </div>
        );
    }
} export default Logs;
