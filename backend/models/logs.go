package models

type Log struct {
	Numero_1  string `json:"numero_1"`
	Numero_2  string `json:"numero_2"`
	Operacion string `json:"operacion"`
	Resultado string `json:"resultado"`
	Fecha     string `json:"fecha"`
}

type Logs []*Log
