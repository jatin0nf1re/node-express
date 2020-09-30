const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next) => {
    res.end("Send all the promotions data");
})
.post((req,res,next) => {
    res.end("Post the promotion with name = " + req.body.name + " and the description " + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end("PUT operation are not supported by /promotions");
})
.delete((req,res,next) => {
    res.end("Deleting all the promotions");
});


promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next) => {
    res.end("The data of promotion of promoId = " + req.params.promoId + " is sent to you");
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end("POST operation are not supported by /promotions/" + req.params.promoId);
})
.put((req,res,next) => {
    res.end("Updating the promotion no " + req.params.promoId + " to name = " + req.body.name + " and the description " + req.body.description);
})
.delete((req,res,next) => {
    res.end("Deleting the promotion");
});


module.exports = promoRouter;