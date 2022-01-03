const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { linkUpdater } = require('./controllers/linkUpdater');
const { addLink } = require('./controllers/addLink');
const { allUrls } = require('./controllers/allUrls');
const { visitLink } = require('./controllers/visitLink');
const initDB = require('./config');
const { deleteUrl } = require('./controllers/deleteUrl');
initDB();

app.get('/', (req, res) => res.send('Home page'));
app.post('/url/append', addLink);
app.get('/url/all', allUrls);
app.patch('/url/update/:slug', linkUpdater);
app.get('/:slug', visitLink);
app.delete('/:slug', deleteUrl)
app.listen(process.env.PORT, () => console.log(`UP and running on port ${process.env.PORT}`));