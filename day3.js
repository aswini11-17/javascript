/*let globalVar="I am Aswini";
function showGlobal(){
    console.log(globalVar);
}
showGlobal()
function say(){
    let name="javascript"
    console.log("hai global scope");
    console.log("within the function"+name);
}
say()*/
/*the block scope of a variable means that the variable is accessible within the block that is between the curly braces*/
/*function Voting(age){
    if(age>=18){
        const iscloudy=true;
        var israining=true;
        console.log("eligible")
        console.log(iscloudy);
    }
    console.log(israining);
}
Voting(18)*/
//block
// local scope (same as function or block scope depending on context )
//callback function
/*function text(){
    console.log("message");
}
function send(callback){
    console.log("message sended");
    setTimeout(callback,2000);
}
send(text);*/
let count=0;
let Interval=()=>{
    count++;
    console.log(count);
    if(count<5){
        Interval();
    }
}
