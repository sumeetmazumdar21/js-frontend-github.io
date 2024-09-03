function user(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })

    Object.defineProperty(this, "password", {
        get: function(){
            return `${this._password}8792221`; // appends 8792221 at the end of the password and returns it
        },
        set: function(value){
            this._password = value;
        }
    })
}

const userOne = new user("harish@example.com", "333876harry");
console.log(userOne.password);
