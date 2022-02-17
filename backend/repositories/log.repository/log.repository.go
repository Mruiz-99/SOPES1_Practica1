package log_repository

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"test/commons"
	datbase "test/database"
	m "test/models"

	"go.mongodb.org/mongo-driver/bson"
)

var collection = datbase.GetCollection("logs")
var ctx = context.Background()

func Create(writer http.ResponseWriter, request *http.Request) {
	var log m.Log
	error := json.NewDecoder(request.Body).Decode(&log)
	fmt.Println(log)

	if error != nil {
		commons.SendError(writer, http.StatusBadRequest)
		return
	}

	_, err := collection.InsertOne(ctx, log)

	if err != nil {
		commons.SendError(writer, http.StatusInternalServerError)
		return
	}

	json, _ := json.Marshal(log)
	commons.SendReponse(writer, http.StatusCreated, json)
}

func Read(writer http.ResponseWriter, request *http.Request) {

	var logs m.Logs
	filter := bson.D{}

	cur, _ := collection.Find(ctx, filter)

	for cur.Next(ctx) {
		var log m.Log
		_ = cur.Decode(&log)

		logs = append(logs, &log)
	}
	json, _ := json.Marshal(logs)
	commons.SendReponse(writer, http.StatusOK, json)
}
