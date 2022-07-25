 $(document).ready(function(){
     
    let achord = document.getElementById("achordsound");
    let bchord = document.getElementById("bchordsound");
    let cchord = document.getElementById("cchordsound");
    let dchord = document.getElementById("dchordsound");
    let echord = document.getElementById("echordsound");
    let fchord = document.getElementById("fchordsound");
    let gchord = document.getElementById("gchordsound");
    let amchord = document.getElementById("amchordsound");
    let bmchord = document.getElementById("bmchordsound");
    let cmchord = document.getElementById("cmchordsound");
    let dmchord = document.getElementById("dmchordsound");
    let emchord = document.getElementById("emchordsound");
    let fmchord = document.getElementById("fmchordsound");
    let gmchord = document.getElementById("gmchordsound");
     
    $("#abutton").click(function(){
        $("#chords").attr("src", "Assets/achord.png");
        if (achordsound.paused) {
            $(achordsound).prop("currentTime", 0);
            $(achordsound).trigger("play");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(achordsound).prop("currentTime", 0);
            $(achordsound).trigger("play");
      }
    });
    
    $("#bbutton").click(function(){
        $("#chords").attr("src", "Assets/bchord.png");
        if (bchordsound.paused) {
            $(bchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("play");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(bchordsound).prop("currentTime", 0);
            $(bchordsound).trigger("play");
      }
    });
        
    $("#cbutton").click(function(){
        $("#chords").attr("src", "Assets/cchord.png");
        if (cchordsound.paused) {
            $(cchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("play");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(cchordsound).prop("currentTime", 0);
            $(cchordsound).trigger("play");
      }
    });
     
     
    $("#dbutton").click(function(){
        $("#chords").attr("src", "Assets/dchord.png");
        if (dchordsound.paused) {
            $(dchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("play");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
           $(dchordsound).prop("currentTime", 0);
           $(dchordsound).trigger("play");
      } 
    });
     
    $("#ebutton").click(function(){
        $("#chords").attr("src", "Assets/echord.png");
        if (echordsound.paused) {
            $(echordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("play");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(echordsound).prop("currentTime", 0);
            $(echordsound).trigger("play");
      }
    });
     
    $("#fbutton").click(function(){
        $("#chords").attr("src", "Assets/fchord.png");
        if (fchordsound.paused) {
            $(fchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("play");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(fchordsound).prop("currentTime", 0);
            $(fchordsound).trigger("play");
      }
    });  
     
    $("#gbutton").click(function(){
        $("#chords").attr("src", "Assets/gchord.png");
        if (gchordsound.paused) {
            $(gchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("play");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(gchordsound).prop("currentTime", 0);
            $(gchordsound).trigger("play");
      }
    });
    
    $("#ambutton").click(function(){
        $("#chords").attr("src", "Assets/amchord.png");
        if (amchordsound.paused) {
            $(amchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("play");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(amchordsound).prop("currentTime", 0);
            $(amchordsound).trigger("play");
      }
    });
    
    $("#bmbutton").click(function(){
        $("#chords").attr("src", "Assets/bmchord.png");
        if (bmchordsound.paused) {
            $(bmchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("play");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(bmchordsound).prop("currentTime", 0);
            $(bmchordsound).trigger("play");
      }
    });
     
    $("#cmbutton").click(function(){
        $("#chords").attr("src", "Assets/cmchord.png");
        if (cmchordsound.paused) {
            $(cmchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("play");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(cmchordsound).prop("currentTime", 0);
            $(cmchordsound).trigger("play");
      }
    });
     
    $("#dmbutton").click(function(){
        $("#chords").attr("src", "Assets/dmchord.png");
        if (dmchordsound.paused) {
            $(dmchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("play");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(dmchordsound).prop("currentTime", 0);
            $(dmchordsound).trigger("play");
      }
    });
     
    $("#embutton").click(function(){
        $("#chords").attr("src", "Assets/emchord.png");
        if (emchordsound.paused) {
            $(emchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("play");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(emchordsound).prop("currentTime", 0);
            $(emchordsound).trigger("play");
      }
    });
     
    $("#fmbutton").click(function(){
        $("#chords").attr("src", "Assets/fmchord.png");
        if (fmchordsound.paused) {
            $(fmchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("play");
            $(gmchordsound).trigger("pause");
      } else {
            $(fmchordsound).prop("currentTime", 0);
            $(fmchordsound).trigger("play");
      }
    });  
    $("#gmbutton").click(function(){
        $("#chords").attr("src", "Assets/gmchord.png");
        if (gmchordsound.paused) {
            $(gmchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("play");
      } else {
            $(gmchordsound).prop("currentTime", 0);
            $(gmchordsound).trigger("play");
      }
    });
     
     
    
 });