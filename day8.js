let currenttime=new Date();
console.log(currenttime);
let local=currenttime.toString();
console.log(local);
let hours=currenttime.getHours();
console.log(hours);
let minutes=currenttime.getMinutes();
console.log(minutes);
let Day=currenttime.getDay();
console.log(Day);

class exam{
    constructor(personname){
        this.personname=personname;
        console.log(personname);

    }
}
let result=new exam("Aswini");

class bank{
    constructor(initialamount=0){
        this._balance=initialamount;
    }
    get balance(){
        return this._balance;
    }
    set balance(amountdeposite){
        if(amountdeposite>0){
            this._balance += amountdeposite;
            console.log(this._balance)
        }
    }
}
let add=new bank(10);
console.log(add);
add.balance=300;
console.log(add)
console.log(add.balance)

class Addition{
    static Math(a,b){
        return a+b
    }
}
console.log(Addition.Math(4,4))
//export allows you to make variable,function,or classes availableto other file
//import allows you to bring those into another file