const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'))



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/ulutay_site/pages/contacts', (req, res) => {
    res.sendFile(__dirname + '/pages/contacts.html');
}); 

app.get('/ulutay_site/about', (req, res) => {
    res.sendFile(__dirname + '/pages/about.html');
});

app.get('/ulutay_site/services', (req, res) => {
    res.sendFile(__dirname + '/pages/services.html');
});

app.get('/ulutay_site/references', (req, res) => {
    res.sendFile(__dirname + '/pages/references.html');
});

app.get('/ulutay_site/info', (req, res) => {
    res.sendFile(__dirname + '/pages/info.html');
});


app.listen(3000, () => console.log("Server started on port 3000"));



