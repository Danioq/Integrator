#! bash
npm install frontend
npm install backend
npm run build --prefix frontend
docker-compose up --build -d