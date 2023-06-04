"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(nameUser, password) {
        this._nameUser = nameUser;
        this._password = password;
    }
    get nameUser() {
        return this._nameUser;
    }
    set nameUser(value) {
        this._nameUser = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
}
exports.User = User;
