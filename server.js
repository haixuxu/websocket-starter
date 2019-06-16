const express = require("express");
const path = require("path");
const app = express();

var expressWs = require("express-ws")(app);

app.ws("/echo", function(ws, req) {
  console.log("socket connection...");
  ws.on("message", function(msg) {
    console.log("message..." + msg);
    ws.send(`服务端接受到的信息：[${msg}]`);
  });
});

app.use(express.static(path.resolve(__dirname, "static")));

app.listen(3000);
