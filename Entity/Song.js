"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
class Song {
    constructor(nameSong, owner) {
        this._nameSong = nameSong;
        this._owner = owner;
    }
    get nameSong() {
        return this._nameSong;
    }
    set nameSong(value) {
        this._nameSong = value;
    }
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
}
exports.Song = Song;
