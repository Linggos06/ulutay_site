const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'))



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/contacts', (req, res) => {
    res.sendFile(__dirname + '/views/contacts.html');
}); 

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/views/services.html');
});

app.get('/references', (req, res) => {
    res.sendFile(__dirname + '/views/references.html');
});

app.get('/info', (req, res) => {
    res.sendFile(__dirname + '/views/info.html');
});


app.listen(3000, () => console.log("Server started on port 3000"));



