## Description

Two servers.  
Server_a receives data from the client and sends it to server_b.  
Server_b processes the data and returns to server_a.  
Server_a returns the processed data to the client.  
Communication between server_a and server_b via http protocol.

Stack: Fastify, Swagger, TypeScript, Zod.

## Running the app

```bash

# In the new terminal go to the server_a directory.
$ cd server_a

# Install dependencies.
$ npm install

# Start server server_a:
$ npm run dev

# In the new terminal go to the server_b directory.
$ cd server_b

# Install dependencies.
$ npm install

# Start server server_b:.
$ npm run dev

```

## Test

Documentation (Swagger UI) is available at: [link] http://localhost:3000/api/

node v16.14.2
