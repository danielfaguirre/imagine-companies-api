"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel = /** @class */ (function () {
    function UserModel(email, password, name, role) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.role = role;
    }
    return UserModel;
}());
exports.default = UserModel;
