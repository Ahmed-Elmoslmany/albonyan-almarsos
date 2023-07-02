const http = require("http");

const serverRoutes = require("./routes");
console.log("Heelo");
const server = http.createServer(serverRoutes.runningServer);

server.listen(3000);
