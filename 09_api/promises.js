    const promiseOne = new Promise(function(resolve, reject){
        // Complete an Async task
            // DB, cryptography, Network-related works
            setTimeout(function(){
                console.log("Async task completed");
                resolve(); 
            },1000);
                
    })

    promiseOne.then(function(){
        console.log("Promise Consumed");
        
    })

// promiseTwo
    new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)        
    }).then(function(){
        console.log("Promise 2 consumed");
    })

    const promiseThree = new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve({username: "johndoe123", email:"johndoe@example.com"})
        },1000);
    });

    promiseThree.then((user) => {
        console.log(user);
        
    })

    const promiseFour = new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if(!error){
                resolve({name: "Sam", lastName: "McCaulay"});
            } else{
                reject("Error: Something went worng");
            }
        },1000)
    });

    promiseFour
    .then((user) => {
        console.log(user);
        return user.lastName; // if resolved => { name: 'Sam', lastName: 'McCaulay' }
    })
    .then((lastName) => {
        console.log(lastName); // if resolved =>  McCaulay
    })
    .catch((err) => {
        console.log(err); // if rejected => Error: Something went worng        
    })
    .finally(() => console.log("Promise is either resolved or rejected"));
        
    const promiseFive = new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if(!error){
                resolve({city: "New Delhi", country: "India"});
            } else{
                reject("Error: Something went worng");
            }
        },1000)
    });

    async function consumePromiseFive() {
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        
    }

    consumePromiseFive();

    // fetch()

    async function  getUsers() {
        try {
             const response = await fetch('https://jsonplaceholder.typicode.com/users');
             
             const data = await response.json();
             console.log(data);
             
             
        } catch (error) {
            console.log("Error: ", error);           
        }
    }
    getUsers();

    // Above code usinf then and catch

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);            
        })
        .catch((err) => {
            console.log("Error: ", err);
            
        })