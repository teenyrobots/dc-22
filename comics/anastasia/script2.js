/* script ana*/

$(document).ready(function(){
    
let themesong = document.getElementById("themesong");
    
    $("#soundcontrol").click(function(){
        if (themesong.paused) {
            $(themesong).trigger("play");
            $("#soundcontrol").attr("src", "assets/bellswings.png");
        } else {
            $(themesong).trigger("pause");
            $("soundcontrol").attr("src=", "assets/bellswings.png");
            
        }
    })
    
})