// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
function showMultiplicationTable(inputNum){
    num = 1
    while (num <= 10){
        console.log(inputNum+ " * " + num + "= "+(inputNum * num));
        num++
    }
}
console.log(showMultiplicationTable(7))

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

function randomNum(){
    return Math.floor(Math.random() * (Math.floor(200) - Math.ceil(20)) + Math.ceil(20));
}

for(let i = 1; i<= 10; i++){
    if(randomNum()%2 === 0){
        console.log(randomNum() + " is even");
        continue;
    }console.log(randomNum() + " is odd");
}

// Create a for loop that uses console.log to create the output shown below.

//1

for(let i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}

//2

for(let i = 1; i <+ 9; i++){
    let show = '^';
    for(let j = 1; j <= i; j++){
        show = show + i;
        console.log("j "+j)
    }
    console.log(show + "--->");
}

// Create a for loop that uses console.log to create the output shown below.
for (let i=100; i>=5; i-=5){
    console.log(i);
}








