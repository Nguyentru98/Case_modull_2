import { Song } from "../Entity/Song";
import { User } from "../Entity/User";
let input= require('readline-sync')

const DELETE_SONG = 1;
const CANCEL = 2;
export class ManageSong{
    listSong: Song[]=[];
   
    add(owner: User) {
        let nameSong = input.question('Nhap ten bai hat: ');
        while (true) {
            const song = this.listSong.find(item => item.nameSong === nameSong && item.owner.nameUser === owner.nameUser);
            if (nameSong !== "" && !song) {
                break;
            }
            console.log("Ten bai hat da ton tai hoac trong!");
            nameSong= input.question('Nhap lai ten bai hat: ')
        }
        this.listSong.push(new Song(nameSong, owner))
    }
    edit(nameSong: string, user: User) {
        let currentSong = this.listSong.find(item=>item.nameSong === nameSong && item.owner.nameUser === user.nameUser)
        if (!currentSong) {
            console.log("Khong tim thay bai hat");
            return;
        }
        for (let i = 0; i < this.listSong.length; i++) { // duyệt mảng ban đầu 
            if (this.listSong[i].nameSong === nameSong && this.listSong[i].owner.nameUser === user.nameUser) { // tìm tên album truyền vào
                console.table([this.listSong[i]]) // log ra tên album tìm đc
                let newNameSong = input.question('Nhap ten bai hat moi: ')
                while (true) {
                    let song = this.listSong.find(item=>item.nameSong === newNameSong && item.owner.nameUser === user.nameUser) // kiểm tra album có tên mới đã tồn tại chưa
                    if (!song) { 
                        break;
                    }
                    console.log("Ten bai hat da ton tai!");
                    newNameSong = input.question('Nhap lai ten bai hat moi: ')
                }
                
                while (true) {
                    if (newNameSong !== "") { // kiểm tra tên mới khác rỗng thì cho qua 
                        break;
                    }
                    console.log("Ten bai hat khong duoc de trong!");
                    newNameSong = input.question('Nhap lai ten bai hat moi: ')
                }

                this.listSong[i].nameSong = newNameSong; // gán tên mới thay cho tên cũ
                console.log("Sua ten bai hat thanh cong!");
                break;
            }
        }
    }

    delete(nameSong: string, user: User) {
        const songs = this.listSong.filter(item => item.nameSong !== nameSong && item.owner.nameUser === user.nameUser)
        if (songs.length <= 0) {
            console.log('Khong tim thay bai hat de xoa');
            return;
        } else {
            let choice = -1;
            while (true) {
                console.log('\n 1.Xoa bai hat'+
                    '\n 2.Khong xoa'
                )
                choice = input.question('Xac nhan xoa: ')
                        
                if(choice == DELETE_SONG) {
                    this.listSong = songs;
                    console.log('Xoa bai hat thanh cong!');
                    break;
                }

                if(choice == CANCEL) {
                    break;
                }
            }
        }
    }

    showDetail(nameSong: string, user: User) {
       const song = this.listSong.filter(item=>item.nameSong === nameSong && item.owner.nameUser === user.nameUser);
       console.log(song);
       
    }

    showAll(user: User){
        const songs = this.listSong.filter(item => item.owner.nameUser === user.nameUser)
        console.table(songs)
    }
}
