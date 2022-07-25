/* script ana*/

$(document).ready(function(){
    
let melody = document.getElementById("melody");
    
    $("#soundcontrol").click(function(){
        if (melody.paused) {
            $(melody).trigger("play");
            $("#soundcontrol").attr("src", "assets/bellswings.png");
        } else {
            $(melody).trigger("pause");
            $("soundcontrol").attr("src=", "assets/bellswings.png");
            
        }
    })
    
})