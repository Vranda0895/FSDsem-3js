let a=5;
let b=10;
if(a>b){
    console.log(a);
}
else{
    console.log(b);
}

let choice = 2;

switch(choice) {
    case 1:
        console.log("Frontend: HTML, CSS, JavaScript");
        break;
    case 2:
        console.log("Backend: Node.js, Express.js");
        break;
    case 3:
        console.log("Database: MongoDB, MySQL");
        break;
    default:
        console.log("Invalid choice! Please select 1-3.");
}
