const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const hostname = "localhost";
const port = 3000;


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req, res,next) => {
    res.end("Send all the dishes data");
});

app.post('/dishes', (req,res,next) => {
    res.end("Post the dish with name = " + req.body.name + " and the description " + req.body.description);


});


app.put('/dishes', (req,res,next) => {
    res.statusCode = 403;
    res.end("PUT operation are not supported by /dishes");
});

app.delete('/dishes', (req,res,next) => {
    res.end("Deleting all the dishes");
});

//dishes/:dishId
// app.all('/dishes/:dishId', (req,res,next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// });

app.get('/dishes/:dishId', (req, res,next) => {
    res.end("The data of dish of dishId = " + req.params.dishId + " is sent to you");
});

app.post('/dishes/:dishId', (req,res,next) => {
    res.statusCode = 403;
    res.end("POST operation are not supported by /dishes/" + req.params.dishId);
});


app.put('/dishes/:dishId', (req,res,next) => {
    res.end("Updating the dish no " + req.params.dishId + " to name = " + req.body.name + " and the description " + req.body.description);
});

app.delete('/dishes/:dishId', (req,res,next) => {
    res.end("Deleting the dish");
});

app.use(express.static(__dirname + "/public"))

app.use((req,res,next) => {
    res.statusCode =200;
    res.setHeader("Content-Type", "text/html");
    res.end('<html><body>Hello World</body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
     console.log(`Server runnning on http://${hostname}:${port}`);
})