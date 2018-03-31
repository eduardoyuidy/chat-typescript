import * as http from "http"
import * as SocketIO from "socket.io"; 
import * as colors from "colors"; 
import {UserConnection} from "./../model";
import {UserDetails} from "./../model";

var users : UserConnection[] = [];
let httpServer = http.createServer();
let ioServer = SocketIO(httpServer);
httpServer.listen(3000, function () {
    console.log(colors.rainbow('Bem vindo ao bate papo Coffee&Code JOI!'));
});
ioServer.on('connect',  (socket : SocketIO.Socket) => {
    var newUser = new UserConnection(socket);
    users.push(newUser);
    socket.on('register', function (user : UserDetails) {
        newUser.user = user;
        console.log(colors.bgGreen(user.username + ' entrou no bate-papo'));
    });

    socket.on('message', function (message) {
        ioServer.emit('broadcast', newUser.user, message);
    });
});
