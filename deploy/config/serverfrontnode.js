// serveur node pour le front
const express = require('express');
const path = require('path');
const https = require('https')
const fs = require('fs')
const compression = require('compression')
const helmet = require('helmet')

// const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT


const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    // don't compress responses if this request header is present
    return false;
  }

  // fallback to standard compression
  return compression.filter(req, res);
};
// Peut être amélioré en sécurité :
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(compression({
  // filter decides if the response should be compressed or not,
  // based on the `shouldCompress` function above
  filter: shouldCompress,
  // threshold is the byte threshold for the response body size
  // before compression is considered, the default is 1kb
  threshold: 0
}));


app.use(express.static(path.join(__dirname, 'buildfront')));


app.get('/', function (req, res) {
  console.log('ping front');
  res.sendFile(path.join(__dirname, 'buildfront', 'index.html'));
});

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.resolve(__dirname, '..', 'cert', 'private.key')),
    cert: fs.readFileSync(path.resolve(__dirname, '..', 'cert', 'certificate.crt')),
  },
  app
)

sslServer.listen(PORT, console.log('Secure server front en écoute sur le port ' + PORT));


// Redirection des tocards en http sur le port 5000 :
const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(5000);