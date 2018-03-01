"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var socketIO = require("socket.io");
var colors = require("colors");
var model_1 = require("./../model");
var users = [];
var httpServer = http.createServer();
var ioServer = socketIO(httpServer);
httpServer.listen(3000, function () {
    console.log(colors.rainbow('Bem vindo ao bate papo Coffee&Code JOI!'));
});
//ioServer.serveClient(true);
//ioServer.attach(httpServer);
ioServer.on('connect', function (socket) {
    var newUser = new model_1.UserConnection(socket);
    users.push(newUser);
    //    console.log( 'User ' + socket.id + ' connected' );    
    socket.on('register', function (user) {
        newUser.user = user;
        console.log(colors.bgGreen(user.username + ' entrou no bate-papo'));
    });
    socket.on('message', function (message) {
        ioServer.emit('broadcast', newUser.user, message);
    });
});
