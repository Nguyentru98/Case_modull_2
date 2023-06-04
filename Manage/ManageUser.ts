import { User } from "../Entity/User";
let input= require('readline-sync')

export class ManageUser{
    listUser: User[]=[];

    register(){
        let username= input.question('nhap ten dang ki: ')
        let password= input.question('nhap mat khau dang ki: ')
        this.listUser.push(new User(username,password))
        console.table(this.listUser)
    }

    login(usn: string, pass:string){
        let userLogin;
        for(let i=0; i < this.listUser.length; i++){
            console.log(this.listUser[i])
            if(usn==this.listUser[i].nameUser && pass == this.listUser[i].password ){
                userLogin = this.listUser[i];
            }
        }
       return userLogin; 
    } 
}

