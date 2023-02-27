const fs = require("fs");
const server = require("http").createServer((_, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  ); /* @dev First, read about security */
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Max-Age", 2592000);
});

server.on("request", (req, res) => {
  const src = fs.createReadStream("./big.file");
  src.pipe(res);
});

server.listen(8000);
