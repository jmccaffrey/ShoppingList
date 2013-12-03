$(document).ready(function () {

//     // var winW = 630, winH = 460;
//     // if (document.body && document.body.offsetWidth) {
//     //      winW = document.body.offsetWidth;
//     //      winH = document.body.offsetHeight;
//     // }
//     // if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
//     //  winW = document.documentElement.offsetWidth;
//     //  winH = document.documentElement.offsetHeight;
//     // }
//     // if (window.innerWidth && window.innerHeight) {
//     //     winW = window.innerWidth;
//     //     winH = window.innerHeight;
//     // }654454

//     // // alert(winW+" "+winH)

//     // $('div').width(winW);
//     // $('div').height(winH);
    var item;

    var verify = function(entry) {
        if (String(entry) === "")
            return false;
        else if (String(entry).length > 20)
            return String(entry).substring(0,20);
        else if (String(entry).match(/^[\s+]$/))
            return false;
        else
            return String(entry).trim();
    }

    $('ul').on('click', '.delete', function(){
        $(this).parent().fadeOut();
    });

    $('ul').on('click', '.check', function(){
        $(this).parent().toggleClass('inactive');
    });

    $('#input').keydown(function(event){
       console.log("hey: " + event.keyCode)
        if (event.keyCode == 13){
           event.preventDefault();
            
            item = verify($('#input').val());
            if (item) 
                 $('ul').append('<li class="active">'+ item +'<div class="delete"><span class = "icon">x</span></div><div class = "check"><span class = "icon">v/</span></div></li>');
            $('#input').val("");
        };
    });

});


