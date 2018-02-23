import * as http from "http"
import * as socketIO from "socket.io"; 
import * as colors from "colors"; 
import {UserConnection} from "./../model";
import {UserDetails} from "./../model";

var users : UserConnection[] = [];
let httpServer = http.createServer();
let ioServer = socketIO(httpServer);
httpServer.listen(3000, function () {
    console.log(colors.rainbow('Bem vindo ao bate papo Coffee&Code JOI!'));
});
//ioServer.serveClient(true);
//ioServer.attach(httpServer);
ioServer.on('connect',  (socket : SocketIO.Socket) => {
    var newUser = new UserConnection(socket);
    users.push(newUser);
//    console.log( 'User ' + socket.id + ' connected' );    
    socket.on('register', function (user : UserDetails) {
        newUser.user = user;
        console.log(colors.bgGreen(user.username + ' entrou no bate-papo'));
    });

    socket.on('message', function (message) {
        ioServer.emit('broadcast', newUser.user, message);
    });

});
