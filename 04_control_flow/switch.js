//Syntax:
    /*
        switch (key) {
        case value:
            
            break;

        default:
            break;
        }
    */

let day = 6;

switch (day) {
    case 1:
        console.log("Monday");        
        break;
    case 2:
        console.log("Tuesday");        
        break;
    case 4:
        console.log("Thursday");        
        break;
    case 6:
        console.log("Saturday");        
        break;
    case 7:
        console.log("Sunday");        
        break;

    default:
        console.log("Either Wednesday or Friday");        
        break;
}