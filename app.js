let express = require('express');
let app = express();
let compression = require('compression');

const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');


let activePage = "";


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/eng/index', (req, res) => {
    res.render('eng/index', {activePage: "home"});
});

app.get('/eng/residence', (req, res) => {
    res.render('eng/residence', {activePage: "residence"});
});

app.get('/eng/rooms', (req, res) => {
    res.render('eng/rooms', {activePage: "rooms"});
});

app.get('/eng/contacts', (req, res) => {
    res.render('eng/contacts', {activePage: "contacts"});
});

app.get('/eng/surroundings', (req, res) => {
    res.render('eng/surroundings', {activePage: "surroundings"});
});

app.get('/ita/index', (req, res) => {
    res.render('ita/index', {activePage: "home"});
});

app.get('/ita/residence', (req, res) => {
    res.render('ita/residence', {activePage: "residence"});
});

app.get('/ita/rooms', (req, res) => {
    res.render('ita/rooms', {activePage: "rooms"});
});

app.get('/ita/contacts', (req, res) => {
    res.render('ita/contacts', {activePage: "contacts"});
});

app.get('/ita/surroundings', (req, res) => {
    res.render('ita/surroundings', {activePage: "surroundings"});
});

app.get('*', (req, res)=>{
    res.status(404).render('404');
});

app.listen(port, ()=>{
    console.log('Server is running!!!');
});
