const http = require("http");
const express = require("express");
const RED = require("node-red");

const app = express();

app.get("/", (req, res) => {
  res.send("Node-RED is running 🎉");
});

const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/red",
  httpNodeRoot: "/",
  userDir: "./data",
  functionGlobalContext: {},
  flowFile: "flows.json",
  port: process.env.PORT || 3000
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(settings.port, () => {
  console.log(`Node-RED running on port ${settings.port}`);
});

RED.start();
