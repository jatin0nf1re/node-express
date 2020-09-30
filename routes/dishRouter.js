const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next) => {
    res.end("Send all the dishes data");
})
.post((req,res,next) => {
    res.end("Post the dish with name = " + req.body.name + " and the description " + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end("PUT operation are not supported by /dishes");
})
.delete((req,res,next) => {
    res.end("Deleting all the dishes");
});


dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next) => {
    res.end("The data of dish of dishId = " + req.params.dishId + " is sent to you");
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end("POST operation are not supported by /dishes/" + req.params.dishId);
})
.put((req,res,next) => {
    res.end("Updating the dish no " + req.params.dishId + " to name = " + req.body.name + " and the description " + req.body.description);
})
.delete((req,res,next) => {
    res.end("Deleting the dish");
});


module.exports = dishRouter;

