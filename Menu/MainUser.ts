import { ManageAlbum } from "../Manage/ManageAlbum";
import { ManageSong } from "../Manage/ManageSong";
import { ManageUser } from "../Manage/ManageUser";

let input = require('readline-sync')
let mU = new ManageUser();
let mA= new ManageAlbum();
let mS= new ManageSong();


// main
const REGISTER = 1;
const LOGIN = 2;
const EXIT = 0;


// menu manager album & song
const MANAGER_ALBUM = 1;
const MANAGER_SONG = 2;
const LOGOUT = 0;

// manager album
const ADD_ALBUM = 1;
const DELETE_ALBUM = 2;
const SHOW_DETAIL_ALBUM = 3;
const EDIT_ALBUM = 4;
const SHOW_ALL_ALBUM = 5;

// manager song
const ADD_SONG = 1;
const DELETE_SONG = 2;
const SHOW_DETAIL_SONG = 3;
const EDIT_SONG = 4;
const SHOW_ALL_SONG = 5;

// common
const BACK_MENU_MANAGER = 6;

let choice = -1;
while(true){
    console.log('menu'+
    '\n 1. register '+
    '\n 2. login'+
    '\n 0. Exit'
    ) 
    choice= input.question('select menu : ')

    if (choice == EXIT) {
        break;
    }
    if(choice == REGISTER){
        mU.register()
    }
    if(choice == LOGIN){
        console.log('Đăng nhập')
        let usn  = input.question('username: ')
        let pass  = input.question('password: ')
        let userLogin= mU.login(usn,pass)

        if(userLogin !== undefined){
            let choice1= -1
            while(true){
                console.log('==Login Menu=='+
                '\n1. ManageAlbum'+
                '\n2. ManageSong'+
                '\n0. logout')
                choice1 = input.question('Select menu : ')
                if(choice1 == LOGOUT){
                    break;
                }  
                
                if(choice1 == MANAGER_ALBUM){
                    let choice2= -1;
                    while(true){
                        console.log('==Album Menu=='+
                        '\n 1.Add Album'+
                        '\n 2.Delete Album'+
                        '\n 3.Show detail album'+
                        '\n 4.Edit album'+
                        '\n 5.show All' +
                        '\n 6.Quay lai')
                        choice2 = input.question('Select menu : ')
                       
                        if(choice2 == ADD_ALBUM) {
                            mA.add(userLogin)
                        }
                        if(choice2 == DELETE_ALBUM) {
                            let nameAlbum = input.question('Nhap ten album can xoa: ')
                            mA.delete(nameAlbum, userLogin)
                        }
                        if(choice2 == SHOW_DETAIL_ALBUM) {
                            let nameAlbum=input.question('Nhap ten album can tim: ')
                            mA.showDetail(nameAlbum, userLogin, mS)
                        }
                        if(choice2 == EDIT_ALBUM) {
                            let nameAlbum=input.question('Nhap ten album can sua: ')
                            mA.editAlbum(nameAlbum, userLogin)
                        }
                        if(choice2 == SHOW_ALL_ALBUM) {
                            mA.showAll(userLogin)
                        }
                        if (choice2 == BACK_MENU_MANAGER) {
                            break;
                        }
                    }
                }

                if(choice == MANAGER_SONG){
                    let choice3= -1;
                    while(true) {
                        console.log('==Album Menu=='+
                        '\n 1.Add song'+
                        '\n 2.Delete song'+
                        '\n 3.Show detail song'+
                        '\n 4.Edit song'+
                        '\n 5.show all song' +
                        '\n 6.Quay lai')
                        choice3 = input.question('Select menu : ')
                       
                        if(choice3 == ADD_SONG) {
                            mS.add(userLogin)
                        }

                        if(choice3 == EDIT_SONG) {
                            let nameSong = input.question('Nhap ten bai hat can sua: ')
                            mS.edit(nameSong, userLogin)
                        }

                        if(choice3 == DELETE_SONG) {
                            let nameSong = input.question('Nhap ten bai hat can xoa: ')
                            mS.delete(nameSong, userLogin)
                        }

                        if(choice3 == SHOW_DETAIL_SONG) {
                            let nameSong = input.question('Nhap ten bai hat can xem: ')
                            mS.showDetail(nameSong, userLogin)
                        }

                        if(choice3 == SHOW_ALL_SONG) {
                            mS.showAll(userLogin)
                        }

                        if (choice3 == BACK_MENU_MANAGER) {
                            break;
                        }
                    }
                }
            }
        }else{
            console.log('tên đăng nhập không đúng')
        }
    }

    
    
}