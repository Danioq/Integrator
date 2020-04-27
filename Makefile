all: stop build run

build:
	npm --prefix frontend/ install frontend/
	npm --prefix backend/ install backend/
	npm run build --prefix frontend

run:
	docker-compose up --build -d

stop:
	docker container stop integrator_frontend_1
	docker container stop integrator_backend_1
