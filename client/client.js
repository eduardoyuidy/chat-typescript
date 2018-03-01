"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socketIO = require("socket.io-client");
var colors = require("colors");
var readline = require("readline");
var uuid = require("uuid/v1");
var model_1 = require("./../model");
var socket = socketIO('http://localhost:3000');
var readlineStream = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var currUser = new model_1.UserDetails('', '', uuid());
socket.on('connect', function () {
    readlineStream.question(colors.bgRed('Informe seu nome de usuário: '), function (name) {
        currUser.username = name || 'anônimo';
        socket.emit('register', currUser);
    });
    readlineStream.on('line', function (input) {
        if (input.length > 0) {
            socket.emit('message', input);
        }
    });
});
socket.on('broadcast', function (user, message) {
    if (user.id !== currUser.id) {
        console.log((user.username + ': ' + message));
    }
});
