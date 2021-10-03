const express = require('express');
const http = require('http');
const cors = require('cors');
const PORT = process.env.PORT ?? 4000;
const router = require('./src/routers/superheroRouter');
const path = require('path');
const app = express();

app.use(cors())
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'src/public/images')))
app.use(router);

const server = http.createServer(app)
server.listen(PORT, '127.0.0.1', () => {
  console.log('-------------------------------------')
  console.log(`Server is running on port: ${PORT}...`)
  console.log('-------------------------------------')
});
