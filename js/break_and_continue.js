// let typedNum = prompt("please enter your NUmber");
// console.log("Number to skip is : "+ typedNum);
// for(let num = 1;num<=50;num++){
//     if(num === Number(typedNum)){
//         console.log("Yikes! Skipping number: " + typedNum);
//         continue;
//     }else if(num%2 === 1){
//         console.log("Here is an odd number: " + num);
//     }
// }
//


function oddNumberDisplay() {
    let userInput = parseFloat(prompt("enter odd number between 1 and 50"))

    if(userInput % 2 !== 0 && userInput < 50 && userInput > 1) {
        console.log(`Number to skip is: ${userInput}`);
    }
    for (let i = 1; i <= 50; i++) {

        if (userInput % 2 === 0 || userInput > 50 || userInput < 1) {
            oddNumberDisplay();
            break;
        }
        if (userInput === i) {
            console.log("Yikes! Skipping number: " + userInput);
            continue;
        }
        if (i % 2 !== 0) {
            console.log(`Here is an odd number ${i}`);

        }
    }
}

oddNumberDisplay();