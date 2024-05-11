.PHONY: dev build lint preview

start-front:
    cd client && npm run dev

build:
    cd client && npm run build

lint:
    cd client && npm run lint

preview:
    cd client && npm run preview

.PHONY: start watch test

start:
    cd server && npm start

watch:
    cd server && npm run watch

test:
    cd server && npm test
