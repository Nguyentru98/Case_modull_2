"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageAlbum = void 0;
const Album_1 = require("../Entity/Album");
let input = require('readline-sync');
const DELETE_ALBUM = 1;
const CANCEL = 2;
class ManageAlbum {
    constructor() {
        this.listAlbum = [];
    }
    add(owner) {
        let nameAlbum = input.question('Nhap ten album : ');
        while (true) {
            const album = this.listAlbum.find(item => item.nameAlbum === nameAlbum && item.owner.nameUser === owner.nameUser);
            if (nameAlbum !== "" && !album) {
                break;
            }
            console.log("Ten album da ton tai hoac trong");
            nameAlbum = input.question('Nhap lai ten album : ');
        }
        this.listAlbum.push(new Album_1.Album(nameAlbum, owner));
    }
    showDetail(nameAlbum, owner, managerSong) {
        let album = null;
        let albumIndex = 0;
        for (let i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].nameAlbum === nameAlbum && this.listAlbum[i].owner.nameUser === owner.nameUser) {
                album = this.listAlbum[i];
                albumIndex = i;
            }
        }
        if (!album) {
            console.table(['Khong tim thay album nao!']);
            return;
        }
        console.log("Thong tin album");
        console.table([album]);
        console.log("Cac bai hat thuoc album");
        console.table([album.listSong]);
        const songs = managerSong.listSong.filter(item => item.owner.nameUser == owner.nameUser);
        if (songs.length <= 0) {
            console.table(['Khong co bai hat nao!']);
            return;
        }
        console.log("Cac bai hat cua toi");
        console.table(songs);
        let choice = -1;
        while (true) {
            console.log('==Detail Album Menu==' +
                '\n 1.Add Song To Album' +
                '\n 2.Delete Song From Album' +
                '\n 3.Quay lai');
            choice = input.question('Select menu : ');
            if (choice == 1) {
                while (true) {
                    let nameSong = input.question('Nhap ten bai hat can them: ');
                    const song = managerSong.listSong.find(item => item.nameSong === nameSong && item.owner.nameUser === owner.nameUser);
                    if (!song) {
                        console.table(['ten bai hat khong dung!']);
                        return;
                    }
                    this.listAlbum[albumIndex].addSongToAlbum = song;
                    console.log('Them bai hat vao album thanh cong');
                    console.table(this.listAlbum[albumIndex].listSong);
                    break;
                }
            }
            if (choice == 2) {
                while (true) {
                    let nameSong = input.question('Nhap ten bai hat can xoa khoi album: ');
                    const listSong = this.listAlbum[albumIndex].listSong;
                    const song = listSong.find(item => item.nameSong === nameSong && item.owner.nameUser === owner.nameUser);
                    if (!song) {
                        console.table(['ten bai hat khong dung!']);
                        return;
                    }
                    const songs = listSong.filter(item => item.nameSong !== nameSong && item.owner.nameUser === owner.nameUser);
                    this.listAlbum[albumIndex].listSong = songs;
                    console.log('Xoa bai hat khoi album thanh cong');
                    console.table(this.listAlbum[albumIndex].listSong);
                    break;
                }
            }
            if (choice == 3) {
                break;
            }
        }
    }
    delete(nameAlbum, user) {
        const albums = this.listAlbum.filter(item => item.nameAlbum !== nameAlbum && item.owner.nameUser === user.nameUser);
        if (albums.length === this.listAlbum.length) {
            console.log('Khong tim thay album de xoa');
            return;
        }
        else {
            let choice = -1;
            while (true) {
                choice = input.question('Xac nhan xoa: ');
                console.log('\n 1.Xoa album' +
                    '\n 2.Khong xoa');
                if (choice == DELETE_ALBUM) {
                    this.listAlbum = albums;
                    console.log('Xoa album thanh cong!');
                    break;
                }
                if (choice == CANCEL) {
                    break;
                }
            }
        }
    }
    editAlbum(nameAlbum, user) {
        let currentAlbum = this.listAlbum.find(item => item.nameAlbum === nameAlbum && item.owner.nameUser === user.nameUser);
        if (!currentAlbum) {
            console.log("Khong tim thay album");
            return;
        }
        for (let i = 0; i < this.listAlbum.length; i++) { // duyệt mảng ban đầu 
            if (this.listAlbum[i].nameAlbum === nameAlbum && this.listAlbum[i].owner.nameUser === user.nameUser) { // tìm tên album truyền vào
                console.table([this.listAlbum[i]]); // log ra tên album tìm đc
                let newNameAlbum = input.question('Nhap ten album moi: ');
                while (true) {
                    let albums = this.listAlbum.filter(item => item.nameAlbum === newNameAlbum && item.owner.nameUser === user.nameUser); // kiểm tra album có tên mới đã tồn tại chưa
                    if (albums.length <= 0) {
                        break;
                    }
                    console.log("Ten album da ton tai!");
                    newNameAlbum = input.question('Nhap lai ten album moi: ');
                }
                while (true) {
                    if (newNameAlbum !== "") { // kiểm tra tên mới khác rỗng thì cho qua 
                        break;
                    }
                    console.log("Ten album khong duoc de trong!");
                    newNameAlbum = input.question('Nhap lai ten album moi: ');
                }
                this.listAlbum[i].nameAlbum = newNameAlbum; // gán tên mới thay cho tên cũ
                console.log("Sua ten album thanh cong!");
                break;
            }
        }
    }
    showAll(user) {
        const albums = this.listAlbum.filter(item => item.owner.nameUser === user.nameUser);
        console.table(albums);
    }
}
exports.ManageAlbum = ManageAlbum;
