//The users array
let users = []


class user{
    constructor(name, password){
        this._name= name;
        this._password= password;
    }
}

function check(Username, Password){
    //maybe will be replaced by a .includes method in the future
    users.forEach(e => {
        if(e._name === Username && e._password === Password){
           console.log("True!!!!")
            return true;
        }else{
           
        }
    });
}


const start = ()=>{
const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

let newUser = new user(username, password);
//check(username, password) maybe to check if the account already exists?
users.push(newUser);

}
