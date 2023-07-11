# fizz buzz

This repository contains the following:

- A dummy Node.js/TypeScript server that listens for Socket.IO connections on `/chat`.
- React/TypeScript client boilerplate.

In order to start the project, make sure you have Node.js and npm installed, then run:

```bash
npm i
npm run dev
```

This will launch a webpack server on port 3000 and the backend service on port 3001. They can be run separately using `npm run dev:client` and `npm run dev:server` respectively. The webpack server proxies any WS request made to the port 3000 to port 3001.

# Task

Use this repository for creating a chat based [fizz buzz](https://en.wikipedia.org/wiki/Fizz_buzz) game. This can be divided into two parts:

## Client

The client should consist of a chat window/bubble of your own design, perhaps using the included MUI component library. The client should connect to the server using Socket.IO, send any message the user enters and display any message the server responds with.

## Server

The server should act as player of the fizz buzz game against the user that's using the client. For example, when the user starts the game by sending the message "1", the server should respond with "2". Since the user is the only actor that can lose this game (hopefully), the server should notify the player that he/she has lost. It should be possible to restart the game from the beginning.
