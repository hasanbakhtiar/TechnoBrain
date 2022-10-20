import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js';
const jq = $.noConflict();
jq(function(){
    jq('button').click(function(){
        // jq('p').text(jq('input').val());
        // jq(this).attr('class',"green");
        jq(this).toggleClass('red');
    })
})