import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js';
$(function(){
    $('button').click(function(){
        $('p').load('../data/letter.txt p')
    })
})