package routes

import (
	log_repository "test/repositories/log.repository"

	"github.com/gorilla/mux"
)

func SetLogRoutes(router *mux.Router) {
	subRoute := router.PathPrefix("/logs").Subrouter()
	subRoute.HandleFunc("/get", log_repository.Read).Methods("GET")
	subRoute.HandleFunc("/insert_log", log_repository.Create).Methods("POST")
}
