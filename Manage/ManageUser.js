"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageUser = void 0;
const User_1 = require("../Entity/User");
let input = require('readline-sync');
class ManageUser {
    constructor() {
        this.listUser = [];
    }
    register() {
        let username = input.question('nhap ten dang ki: ');
        let password = input.question('nhap mat khau dang ki: ');
        this.listUser.push(new User_1.User(username, password));
        console.table(this.listUser);
    }
    login(usn, pass) {
        let userLogin;
        for (let i = 0; i < this.listUser.length; i++) {
            console.log(this.listUser[i]);
            if (usn == this.listUser[i].nameUser && pass == this.listUser[i].password) {
                userLogin = this.listUser[i];
            }
        }
        return userLogin;
    }
}
exports.ManageUser = ManageUser;
