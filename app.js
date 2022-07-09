class Register{
    constructor(name, password){
        this._name= name;
        this._password= password;
    }
}
const start = ()=>{

const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

let newuser = new Register(username, password);

}