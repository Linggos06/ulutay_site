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


app.listen(3000, () => console.log("Server started on port 3000"));



