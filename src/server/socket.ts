import { Server, Socket } from "socket.io";

const socket = (server: Server): void => {
  server.on("connection", (socket: Socket) => {
    console.log(`Socket ${socket.id} connected`);

    socket.on("disconnect", () =>
      console.log(`Socket ${socket.id} disconnected`)
    );

    socket.on("ping", () => socket.emit("pong"));
  });
};

export default socket;
