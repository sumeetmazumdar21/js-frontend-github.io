class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}567` // this appends 567 at the end of whatever password is set and returns the new password, which may be a part of abstraction
    }

    set password(value){
        this._password = value;
    }
}

const userOne = new User("johndoe@example.com", "securePass");
console.log(userOne.password); // securePass567
console.log(userOne.email); // JOHNDOE@EXAMPLE.COM
