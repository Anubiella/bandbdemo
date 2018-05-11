let express = require('express');
let app = express();
let compression = require('compression');

const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/eng/index', (req, res) => {
    res.render('eng/index');
});

app.get('/eng/residence', (req, res) => {
    res.render('eng/residence');
});

app.get('/eng/rooms', (req, res) => {
    res.render('eng/rooms');
});

app.get('/eng/contacts', (req, res) => {
    res.render('eng/contacts');
});

app.get('/eng/surroundings', (req, res) => {
    res.render('eng/surroundings');
});

app.get('/ita/index', (req, res) => {
    res.render('ita/index');
});

app.get('/ita/residence', (req, res) => {
    res.render('ita/residence');
});

app.get('/ita/rooms', (req, res) => {
    res.render('ita/rooms');
});

app.get('/ita/contacts', (req, res) => {
    res.render('ita/contacts');
});

app.get('/ita/surroundings', (req, res) => {
    res.render('ita/surroundings');
});

app.get('*', (req, res)=>{
    res.status(404).render('404');
});

app.listen(port, ()=>{
    console.log('Server is running!!!');
});
