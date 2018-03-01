"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserColors;
(function (UserColors) {
    UserColors["BLACK"] = "black";
    UserColors["RED"] = "red";
    UserColors["GREEN"] = "green";
    UserColors["YELLOW"] = "yellow";
    UserColors["BLUE"] = "blue";
    UserColors["MAGENTA"] = "magenta";
    UserColors["CYAN"] = "cyan";
    UserColors["WHITE"] = "white";
    UserColors["GRAY"] = "gray";
})(UserColors = exports.UserColors || (exports.UserColors = {}));
var UserConnection = /** @class */ (function () {
    function UserConnection(socket) {
        this.socket = socket;
    }
    return UserConnection;
}());
exports.UserConnection = UserConnection;
var UserDetails = /** @class */ (function () {
    function UserDetails(username, color, id) {
        if (color === void 0) { color = ''; }
        if (id === void 0) { id = ''; }
        this.username = username;
        this.color = color;
        this.id = id;
    }
    return UserDetails;
}());
exports.UserDetails = UserDetails;
