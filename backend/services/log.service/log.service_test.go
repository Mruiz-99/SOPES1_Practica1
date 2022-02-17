package log_service_test

import (
	"testing"
	"time"

	log_service "test/services/log.service"

	m "test/models"
)

//direccion para conectarme desde mongodb compass
//mongodb://mynor:123456@localhost:27017/practica
func TestCreate(t *testing.T) {

	log := m.Log{
		Numero_1:  5,
		Numero_2:  3,
		Operacion: "suma",
		Resultado: 8,
		Fecha:     time.Now(),
	}

	err := log_service.Create(log)

	if err != nil {
		t.Error("La prueba de persistencia de datos ha fallato")
		t.Fail()
	} else {
		t.Log("La prueba finalizo con exito")
	}
}

func TestRead(t *testing.T) {
	logs, err := log_service.Read()

	if err != nil {
		t.Error("Se ha presentado un error en la consulta de usuarios")
		t.Fail()
	}

	if len(logs) == 0 {
		t.Error("La consulta NO retorno datos")
		t.Fail()
	} else {
		t.Log("La prueba de lectura finalizo con exito")
	}
}
