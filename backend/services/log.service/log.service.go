package log_service

import (
	m "test/models"
	log_repository "test/repositories/log.repository"
)

func Create(log m.Log) error {

	err := log_repository.Create(log)

	if err != nil {
		return err
	}

	return nil
}

func Read() (m.Logs, error) {

	logs, err := log_repository.Read()

	if err != nil {
		return nil, err
	}

	return logs, nil
}
