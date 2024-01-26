const fs = require("fs");

const http = require("http");

const server = http.createServer((req, res) => {
  let date = new Date().toISOString();
  fs.writeFileSync("Datetime/time.txt", `${date}`, "utf8");
  let data = fs.readFileSync("Datetime/time.txt", "utf-8");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data);
});

server.listen(2000);
