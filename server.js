const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/views/public"));
app.use(express.static(__dirname + "/app/controllers"));

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/linkedIn', function(req,res){
    res.sendFile(__dirname + "/public/linkedIn.html");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.  Press Ctrl + C to exit.`);
} )
