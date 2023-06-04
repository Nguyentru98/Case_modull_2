export class User {
    private _nameUser: string;
    private _password: string;

  constructor(nameUser: string, password: string) {
    this._nameUser = nameUser
    this._password = password
  }

    get nameUser(): string {
        return this._nameUser;
    }

    set nameUser(value: string) {
        this._nameUser = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}