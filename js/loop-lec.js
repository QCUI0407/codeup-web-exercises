//While loop example
//let i = 0;


// while (i < 10){
//     console.log(i);
//     i++;
// }
// console.log("out of loop");

//do While example


//mini ex.

// let num = 0
// while(num < 100){
//     console.log(num);
//     num += 5 ;
// }
// console.log("out of loop");
//
// do{
//     console.log(num);
//     num+=5;
// }while(num < 100)

// for(let num = 0; num < 100; num += 5){
//     console.log(num);
// }

//
// let hello = "hello"
// for(let i = 0; i < hello.length; i++){
//     console.log(hello.charAt(i))
//     console.log(hello[i])
// }

// for(let i = 0; i < 10; i++){
//     if(i % 2 === 0){
//         console.log(i + "is even")
//         continue;
//     }
//     console.log(i +'is odd');
// }










//solution 2
// for(let i = 1; i < 10; i++){
//     // let str = 'p';
//     for(let j = 1; j <= i; j++){
//         // str += (i);
//     }
//     console.log();
// }
//--------------------------------------------

// 1
// 112
// 112123
// 1121231234
// 112123123412345
// 112123123412345123456

for(let i = 1; i <= 6; i++){
    let show = "";
    for(let j = 1; j <= i;j++){
        show = show + j
        for(let k = 1; k <= i; k++){
            let show2 = show + k;
            console.log(show2);
        }
    }
    console.log(show);
}
