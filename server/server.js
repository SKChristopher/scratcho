const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

const counterController = require('./../server/controllers/counter.js');

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'build/index.html')));
app.get('/getCounter', counterController.get);
app.put('/add', counterController.add);

app.listen(PORT, console.log('listening on...', PORT));
