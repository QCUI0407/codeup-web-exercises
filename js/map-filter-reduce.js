var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evens = [];
// for (var i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         evens.push(numbers[i]);
//     }
// }
// console.log(evens); // [2, 4, 6, 8, 10]
//
// evens = numbers.filter(function (num){
//     return num%2 === 0;
// })
//
// numbers.map(function (n){
//     console.log(n+" before")
//     return "a";
//     console.log(n);
// })

function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        // if (typeof wordCounts[word] === 'undefined') {
        //     // if the word is not yet present in our object, set it's value to 1
        //     wordCounts[word] = 1;
        // } else {
        //     // otherwise increment the existing count
        //     wordCounts[word] += 1;
        // }
        //{}
        // console.log(wordCounts)
        // return wordCounts;
        //[]
        // wordCounts.push(word)
        // return  wordCounts;

        //''
        return wordCounts += " "+word;
    }, ''); // start with an empty object
    return wordCountObject;
}

console.log(countWords('Mary had a little lamb little lamb little lamb'))
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}
//-----------------------------------------ex
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//filter
var languages = users.filter(function (user){
    return user.languages.length >= 3;
})
console.log(languages);
//map
var emails = users.map(function (user){
    return user.email;
})
console.log(emails);


//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const averageTotalYears = users.reduce((total,user)=>{
    total += user.yearsOfExperience
    return total;
},0)
console.log(averageTotalYears/users.length);

// Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((email,user)=>{
    return email.length > user.email.length ? email : user.email;
})
console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.





    const singleStr = users.reduce((str, user) => {
        return str += " "+user.name +",";
    }, ''); // start with an empty object

console.log(singleStr);









