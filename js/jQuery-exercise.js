'use strict';
window.onload
    // $("h1").css('border', '1px solid #F00');
    // $('#h1ID').css('color','green');
    // $('.colorYellow').css('background-color', 'yellow');
    // $('li').css('background-color', 'orange');
    // $('#firstLiId').css('font-size','50px');
    // $('li').eq(1).css('color', 'blue');
$('h1').click(
    function() {
        $(this).css('background-color', 'yellow');
    }
);
$('p').dblclick(function() {
    $(this).css('font-size','18px');
});
$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);
//up:38 left:37 right:39 down:40 a:65 b:66 enter:13

$(function konami() {
    let input = "";
    let codes = "38373940656613";
    $('#konamiBox').keydown(function(e) {
        input += e.keyCode;
        if (input.indexOf(codes) !== -1) {
            input = "";
            alert("30")
        }
    });
})

// $(function konami() {
//     let input = [];
//     let codes = [38,37,39,40,65,66,13];
//     let count = 0;
//     $('#konamiBox').keydown(function(e) {
//         input =input.push(e.keyCode);
//         count++
//         for(let i=0;i<codes.length;i++){
//             for(let j=0;j<input.length;j++){
//                 if(codes[i]===input[i] && i===j){
//                 alert('30');
//             }}
//
//         }
//     });
// })














