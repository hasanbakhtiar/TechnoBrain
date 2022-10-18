$(function(){
    $('button').click(function(){
        // $('.box').toggle(1000);
        // if ($('button').text() === "hide") {
        // $('.box').hide(1000);
        // $('button').text('show');
        // }else{
        //     $('.box').show(1000);
        //     $('button').text('hide');
        // }
        // $('.box').fadeIn(1000);
        // $('.box').fadeOut(1000);
        // $('.box').fadeToggle(1000);
        // $('.box').fadeTo("slow", 0.5);
        // $('.box').slideDown(1000);
        // $('.box').slideUp(1000);
        // $('.box').slideToggle(1000);
        // $('.box').slideToggle(1000);
        // $('.box').animate({
        //     left: '250px',
        //     top:'100',
        //     opacity: '0.5',
        //     height: '+=150px',
        //     width: '150px'
        //   });

        // $('.box').css({'background-color':"green","height":"150px"});
        // $('.box').hide('1000',()=>{
            // alert('change success')
        // });

        // $('.box').css("background-color", "green").slideUp(2000).slideDown(2000);
        // alert($('p').html())
        // alert($('p').text())
        // alert($('.box').attr('id'));

        $('.box').attr('class','blue');
        // $('p').text("<b>new value</b>");
        $('p').html("<b>new value</b>");
        
    })
})