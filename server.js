const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

var expressWs = require("express-ws")(app);

app.ws("/echo", function(ws, req) {
  console.log("socket connection...");
  ws.on("message", function(msg) {
    console.log("message..." + msg);
    ws.send(`服务端接受到的信息：[${msg}]`);
  });
});

app.use(express.static(path.resolve(__dirname, "static")));

app.listen(port);

console.log("http/websocket server listen on http://127.0.0.1:" + port);
