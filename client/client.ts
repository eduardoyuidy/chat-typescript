import * as http from "http"
import * as socketIO from "socket.io-client"; 
import * as colors from "colors"; 
import * as readline from "readline"; 
import * as uuid from "uuid/v1"; 
import {UserDetails} from "./../model";
const chalk = require('chalk');

let listaCores = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey'];

let socket = socketIO('http://localhost:3000');
let readlineStream = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let currUser = new UserDetails('', 
                               '',
                               uuid());

socket.on('connect', function () {
    readlineStream.question(colors.bgRed('Informe seu nome de usuário: '), (name) => 
    {
        currUser.username = name || 'anônimo';
        let randomNumber = Math.floor((Math.random() * (listaCores.length - 1)) + 1);        
        currUser.color = listaCores[randomNumber];
        listaCores.splice(randomNumber); //Elimina cor da lista.
        socket.emit('register', currUser);
    });

    readlineStream.on('line', (input) => 
    {
        if (input.length > 0) {
            socket.emit('message', input);
        }
    });
});

socket.on('broadcast', function (user : UserDetails, message: string) {
    if (user.id !== currUser.id) {
        console.log(chalk.keyword(user.color)(`${user.username} : ${message}`));
    }
});

