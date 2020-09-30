const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next) => {
    res.end("Send all the leaders data");
})
.post((req,res,next) => {
    res.end("Post the leader with name = " + req.body.name + " and the description " + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end("PUT operation are not supported by /leaders");
})
.delete((req,res,next) => {
    res.end("Deleting all the leaders");
});


leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next) => {
    res.end("The data of leader of leaderId = " + req.params.leaderId + " is sent to you");
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end("POST operation are not supported by /leaders/" + req.params.leaderId);
})
.put((req,res,next) => {
    res.end("Updating the leader no " + req.params.leaderId + " to name = " + req.body.name + " and the description " + req.body.description);
})
.delete((req,res,next) => {
    res.end("Deleting the leader");
});


module.exports = leaderRouter;