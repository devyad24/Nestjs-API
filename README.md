## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

##Database Setup
Create a .local.env file in root directory and then put your database configuration.
```bash
B_HOST=YOUR_DB_HOSTNAME
DB_PORT=YOUR_DB_PORT
DB_USERNAME=YOUR_DB_USERNAME
DB_PASSWORD=YOUR_DB_PASSWORD
DB_DATABASE= YOUR_DB_NAME
DB_SYNC=true
SECRET= YOUR_SECRET
```
##ROUTES
You can use curl or postman for testing routes.
```bash
#Get all todos
curl http://localhost:3000/todo
#Get todo by id
curl http://localhost:3000/todo/{id}
#Create todo
curl -X POST -H "Content-Type: application/json" -d '{"title":"Title 1", "description":"Desc 1"}' http://localhost:3000/todo
#Update todo
curl -X PATCH -H "Content-Type: application/json" -d '{"title":"Title New", "description":"Desc New"}' http://localhost:3000/todo
#Delete todo
curl -X DELETE http://localhost:3000/todo/{id}


