all: stop run

run:
	cp .env frontend
	cp .env backend
	docker-compose up --build -d

stop:
	-docker container stop integrator_frontend_1
	-docker container stop integrator_backend_1
	-docker container stop integrator_database_1
