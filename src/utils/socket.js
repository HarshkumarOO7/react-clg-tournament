import { io } from "socket.io-client";

const socket = io("https://react-clg-tournament.onrender.com", {
  withCredentials: true
});

export default socket;