# todo-backend

[frontend](https://github.com/mjs001/todo-frontend)

## Steps for setting up this repo

**You will need Node and mySQL installed and you must know your credentials for mySQL.**

Links to download Node and mySQL:

- [Node](https://nodejs.org/en/download/prebuilt-installer)
- [mySQL](https://dev.mysql.com/downloads/installer/)

### Steps to get project running

1. First you will need to clone this repo. `git clone https://github.com/mjs001/todo-backend.git`.
2. Next `cd` into the directory.
3. Run `npm i`.

### You will now need to create a mySQL database called “todo_list_app” for the initialization of this project

1. Once you have installed mySQL you can open a terminal and type in `mysql -u <YOUR USERNAME> -p` or `mysql -u root -p` if you would rather use the root user.
2. Enter your password.
3. Type in: `CREATE DATABASE todo_list_app;` and press enter.
4. You will now need to create a .env file in the root folder of this project. Then you will type in a variable for the connection string: `DATABASE_URL="mysql://<YOUR SQL USERNAME OR ROOT>:<YOUR MYSQL PASSWORD>@localhost:3306/todo_list_app"`.
5. Optionally, you can create a variable in the .env file to specify the port you would like the server to run on. It would need to be named `PORT`. Ex: `PORT=5000`.
6. Type `exit` or open a new terminal.

### Next you will need to run a Prisma migration

1. Run `npx prisma migrate dev --name <whatever you want to name the migration>`.
2. Make sure the Prisma client is generated: `npx prisma generate`.
3. Then run the server: `npm start`.
