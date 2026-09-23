const student1={
    id : 1,
    name :  "JK"
};
const student2={
    id : 2,
    name : "hi"

};
function introduce(city){
    console.log("my name is ${name} and i live in ${city}");
}
introduce.call(student1 , "delhi");
introduce.apply(student1, ["delhi", 24]);