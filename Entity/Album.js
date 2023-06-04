"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
let input = require('readline-sync');
class Album {
    get nameAlbum() {
        return this._nameAlbum;
    }
    set nameAlbum(value) {
        this._nameAlbum = value;
    }
    set addSongToAlbum(value) {
        this._listSong.push(value);
    }
    set removeSongToAlbum(value) {
        this._listSong.push(value);
    }
    get listSong() {
        return this._listSong;
    }
    set listSong(value) {
        this._listSong = value;
    }
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
    constructor(nameAlbum, owner) {
        this._nameAlbum = nameAlbum;
        this._listSong = [];
        this._owner = owner;
    }
    //  addSongToAlbum(){
    //   let namesong= input.question('nhập tên bài hát')
    //   let singer = input.question('nhập tên ca sỹ')
    //   this._listSong.push(namesong,singer)
    //  }    
    deleteSong(nameSong) {
        this._listSong = this._listSong.filter(item => item.nameSong !== nameSong);
    }
    show() {
        console.table(this._listSong);
    }
}
exports.Album = Album;
