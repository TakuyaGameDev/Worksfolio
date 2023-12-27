down:
	docker compose down
up:
	docker compose up -d
build:
	docker compose build
refresh:
	docker compose restart
ps:
	docker compose ps
build-be:
	docker compose exec backend sh -c 'npm run dev'
db:
	docker compose exec postgres bash -c 'psql -U user postgres'