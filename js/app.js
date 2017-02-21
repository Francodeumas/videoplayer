(function(){
  'use strict';
  
  
  var logics = {
  
    toggleVideo : function(){
      var video = document.getElementsByTagName('video');
          if(video[0].paused)
            video[0].play();
          else if(video[0].played)
            video[0].pause();
    },
    
    switchPlayButton : function(){
       var playIconDisplay = window.getComputedStyle(document.getElementById('play_icon'),null).getPropertyValue('display'),
           pauseIconDisplay = window.getComputedStyle(document.getElementById('pause_icon'),null).getPropertyValue('display');
          if(pauseIconDisplay === "none"){
            this.toggleVideo(); 
            document.getElementById('play_icon').style.display = "none";
            document.getElementById('pause_icon').style.display = "inline-block";
          }
         else {
           this.toggleVideo();
           document.getElementById('play_icon').style.display = "inline-block";
           document.getElementById('pause_icon').style.display = "none";
           
         }
    },
    
    toggleScreen : function(){
      var container = document.getElementById('video');
      if(container.requestFullScreen){
        container.requestFullScreen();
      }
      else if(container.webkitRequestFullScreen){
        container.webkitRequestFullScreen();
      }
      else if(container.mozRequestFullScreen){
        container.mozRequestFullScreen();
      }
      else if(container.msRequestFullscreen){
        container.msRequestFullscreen();
      }
    },
    
    toggleVolume : function(){
      var volumeDisplay = window.getComputedStyle(document.getElementById('volume_icon'),null).getPropertyValue('display'),
          muteDisplay  = window.getComputedStyle(document.getElementById('mute_icon'),null).getPropertyValue('display');
      
       if(volumeDisplay === "none"){
         document.getElementById('volume_icon').style.display = "inline-block";
         document.getElementById('mute_icon').style.display = "none";
         document.getElementsByTagName('video')[0].muted = false;
       }
      else{
        document.getElementById('volume_icon').style.display = "none";
        document.getElementById('mute_icon').style.display = "inline-block";
        document.getElementsByTagName('video')[0].muted = true;
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
           else if(event.target.id === "maximize_icon"){
              logics.toggleScreen();
           }
          else if(event.target.id === "volume_icon" || event.target.id === "mute_icon"){
              logics.toggleVolume();
          }
        })
      }
   }
   
   events.clickEvent();

})();