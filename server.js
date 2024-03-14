const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/assets/")) {
    const assetPath = path.join(__dirname, req.url);
    fs.readFile(assetPath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end("Asset not found");
        return;
      }

      const ext = path.extname(assetPath);
      let contentType = "text/plain";
      if (ext === ".css") {
        contentType = "text/css";
      } else if (ext === ".js") {
        contentType = "application/javascript";
      } else if (ext === ".png") {
        contentType = "image/png";
      } else if (ext === ".jpg" || ext === ".jpeg") {
        contentType = "image/jpeg";
      }

      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    });
  } else if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else if (req.url === "/styles.css") {
    fs.readFile(path.join(__dirname, "styles.css"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(content);
    });
  } else if (req.url === "/script.js") {
    fs.readFile(path.join(__dirname, "script.js"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.end(content);
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
