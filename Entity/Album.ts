import { Song } from "./Song";
import { User } from "./User";
let input=require('readline-sync')
export class Album{
    private _nameAlbum: string;
    private _listSong: Song[];
    private _owner: User

    get nameAlbum(): string {
        return this._nameAlbum;
    }

    set nameAlbum(value: string) {
        this._nameAlbum = value;
    }

    set addSongToAlbum(value: Song) {
        this._listSong.push(value)
    }

    set removeSongToAlbum(value: Song) {
        this._listSong.push(value)
    }

    get listSong(): Song[] {
        return this._listSong;
    }

    set listSong(value: Song[]) {
        this._listSong = value;
    }

    get owner(): User {
        return this._owner;
    }

    set owner(value: User) {
        this._owner = value;
    }

    constructor(nameAlbum: string, owner: User) {
    this._nameAlbum = nameAlbum
    this._listSong = []
    this._owner = owner
  }
//  addSongToAlbum(){
//   let namesong= input.question('nhập tên bài hát')
//   let singer = input.question('nhập tên ca sỹ')
//   this._listSong.push(namesong,singer)
//  }    

 deleteSong(nameSong:string){
    this._listSong = this._listSong.filter(item=>item.nameSong !== nameSong)
 }
 show(){
  console.table(this._listSong)
 }
}
