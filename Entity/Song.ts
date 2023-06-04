import { User } from "./User";

export class Song{
    private _nameSong: string;
    private _owner: User
    
  constructor( nameSong: string, owner: User) {
    this._nameSong = nameSong
    this._owner = owner
  }

    get nameSong(): string {
        return this._nameSong;
    }

    set nameSong(value: string) {
        this._nameSong = value;
    }

    get owner(): User {
        return this._owner;
    }

    set owner(value: User) {
        this._owner = value;
    }
}