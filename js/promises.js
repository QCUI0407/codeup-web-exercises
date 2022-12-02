// fetch('https://animechan.vercel.app/api/random')
//     // .then(resp => console.log(resp))
//     .then(response =>
// response.json()
//     ).then(data=>data.quote)
//     .catch(err=>alert(err))
// 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
// function  makeReqest(username){
//     fetch(  `https://api.github.com/users/${username}/events/public`
// , {headers: {'Authorization': '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'}})
//         .then(resp =>resp.json().then(data=>{
//             console.log(data);
//         }))
// }
//
// makeReqest("baconator")

function makeRequestForLastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': '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'}}).then(resp => {
        resp.json().then(data => {
            let commit = data.filter(event => event.type === "PushEvent");
            console.log(commit);
            console.log(commit[0].created_at)
        })
    })
}

makeRequestForLastCommit('jordysolis96');

function wait(miliSec){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!isNaN(parseInt(miliSec))){
                resolve(`You\'ll see this after ${miliSec/1000} second(s).`)
            }else{
                reject(`${miliSec} is not a numeric input`)
            }
        }, miliSec)
    })
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'))

wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

wait("happy time").catch( () => console.log('this is not a number'))