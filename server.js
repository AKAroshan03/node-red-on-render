const http = require("http");
const RED = require("node-red");

const settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/api",
    userDir: "./data",
    functionGlobalContext: {},
};

const server = http.createServer();
RED.init(server, settings);
server.listen(process.env.PORT || 1880);

RED.start();
