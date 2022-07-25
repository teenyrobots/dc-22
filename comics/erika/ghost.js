/*script for ghoul'd brew*/

$(document).ready(function(){
    
    let creepymusic = document.getElementById("creepymusic");
    
    $("#soundcontrol").click(function(){
        if (creepymusic.paused) {
            $(creepymusic).trigger("play");   
            $("#soundcontrol").attr("src", "ON.png");
            console.log("the sound should be playing");
        } else {
            $(creepymusic).trigger("pause");
             $("#soundcontrol").attr("src", "OFF.png");
            }
         
    $(document).ready(function(){

    let cycling = 1;

    $("#light").click(function(){
        if (cycling < 4){
            cycling += 1;
            $(this).attr("src", "flashlight.png"+cycling+"1.jpg");
        } else {
            cycling = 1;
            $(this).attr("src", "1.jpg"+cycling+"4.jpg");
        }
        
    $("#darktrigger").click(function(){
        if (darktrigger.click) {
            $(darktrigger).attr("src", "5.jpg");
        }
        
      
});
    