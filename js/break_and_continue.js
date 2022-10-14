let typedNum = prompt("please enter your NUmber");
console.log("Number to skip is : "+ typedNum);
for(let num = 1;num<=50;num++){
    if(num === Number(typedNum)){
        console.log("Yikes! Skipping number: " + typedNum);
        continue;
    }else if(num%2 === 1){
        console.log("Here is an odd number: " + num);
    }
}