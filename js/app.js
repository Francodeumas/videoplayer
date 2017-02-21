(function(){
  'use strict';
  
  
  var logics = {
  
    switchPlayButton : function(){
       var playIconDisplay = window.getComputedStyle(document.getElementById('play_icon'),null).getPropertyValue('display'),
           pauseIconDisplay = window.getComputedStyle(document.getElementById('pause_icon'),null).getPropertyValue('display');
          if(pauseIconDisplay === "none"){
            document.getElementById('play_icon').style.display = "none";
            document.getElementById('pause_icon').style.display = "inline-block";
          }
         else {
           document.getElementById('play_icon').style.display = "inline-block";
           document.getElementById('pause_icon').style.display = "none";
         }
    }
    
  }
  
   var events = {
   
      clickEvent : function(){
        var container = document.getElementById('container'); 
        container.addEventListener('click',function(event){
           if(event.target.id === "play_icon" || event.target.id === "pause_icon"){
              logics.switchPlayButton();
           }
        })
      }
   }
   
   events.clickEvent();

})();