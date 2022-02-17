package main

import (
	"log"
	"net/http"
	"test/routes"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	router := mux.NewRouter()
	routes.SetLogRoutes(router)

	handler := cors.Default().Handler(router)
	server := http.Server{
		Addr:    ":9000",
		Handler: handler,
	}

	log.Println("Servidor ejecutandose sobre el puerto 9000")
	log.Println(server.ListenAndServe())
}
