import feathers from "feathers";
import socketio from "feathers-socketio";
import auth from "feathers-authentication-client";
import io from "socket.io-client";

const socket = io("http://localhost:3030", { transports: ["websocket"] });

const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }));

export default ({ app, router, Vue }) => {
  Vue.prototype.$feathers = feathersClient;
};

export { feathersClient };
