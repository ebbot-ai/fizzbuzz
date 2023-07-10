import Express, { Request, Response } from 'express';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import socket from './socket'

const port = process.env.PORT ?? 3000

const app = Express();
const server = createServer(app);

app.use(Express.static(__dirname + './../../dist_client'));

app.use((_: Request, res: Response): void => {
  res.sendStatus(404)
})

const socketServer = new SocketServer(server, {
  path: '/chat',
  transports: ['websocket']
});

socket(socketServer)

server.listen(port, () => console.log('fizzbuzz is listening on', port))