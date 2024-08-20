/*
    for...in
        The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
*/

const myObj = {
    Hindi: "India",
    Malay: "Singapore",
    English: "Britain",
    Arabic: "Saudi Arabia",
    Hebrew: "Israel"
}

//Printing Keys using "key"
for (const key in myObj) {
    // console.log(key);
    /**
            Hindi
            Malay
            English
            Arabic
            Hebrew
     */
}

// Printing Values only using myObj[key]
for (const key in myObj) {
    // console.log(myObj[key]);
    /*
        India
        Singapore
        Britain
        Saudi Arabia
        Israel
    */
}

// Printing both key and value
for (const key in myObj) {
    // console.log(`${key} is the official language of ${myObj[key]}`);
     /*
        Hindi is the official language of India
        Malay is the official language of Singapore
        English is the official language of Britain
        Arabic is the official language of Saudi Arabia
        Hebrew is the official language of Israel
     */
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for...in in arrays

let languages = ["hindi", "english", "bangla", "telugu", "kannada"];

for (const key in languages) {
    // console.log(key);
        /*
            0
            1
            2
            3
            4
         */

    // console.log(languages[key]);
     /*
        hindi
        english
        bangla
        telugu
        kannada
     */
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for....in in Map()

// const map = new Map();
//     map.set("IN", "India");
//     map.set("UK", "United Kingdom");
//     map.set("SL", "Sri Lanka");
    
//     for (const key in map) {
//         console.log(key); // map is not iterable
        
//     }