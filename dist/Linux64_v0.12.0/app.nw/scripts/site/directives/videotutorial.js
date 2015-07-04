
/**
 * @ngdoc directive
 * @name anyandgoApp.directive:metismenu
 * @description
 * # videotutorial
 */
var player;

function onPlayerStateChange(event) {
  console.log(event);
  var newState = event.data;
  switch(newState){
      case 0:
          /*
          if(NW.playListIndex<NW.playList.length){
              NW.playListIndex++;
              console.log("next>>", NW.playListIndex);
              NW.tutorial.player.ctime = 0;
              NW.tutorial.player.ctask = 0;
              NW.tutorial.player.cvideo = NW.playList[NW.playListIndex];
              event.target.loadVideoById(NW.playList[NW.playListIndex]);
              //$('#videoPlaylist li a').eq(NW.playListIndex).click();
          }
          */
      break;
      case 1:
          /*
          if(!NW.tutorial.started){
              //first video
              NW.tutorial.player.cvideo = (event.target.getVideoData())['video_id'];
              NW.tutorial.started = true;
          }
          */
      break;
      default:
      break;
  }
}

function stopVideo() {
  player.stopVideo();
}

// Process
function updatePlayerInfo(o){
  if(o && o.getDuration) {
      var ct = o.getCurrentTime();
      var advPercentage = Math.round(o.getCurrentTime()/o.getDuration()* 100) / 100;
      NProgress.set(advPercentage);
      /*
      if(ct!=NW.tutorial.player.ctime){
          console.log(ct);
          NW.tutorial.player.ctime = ct;
          NW.callNextAction(ct);
      }
      $("#videoDuration").html(o.getDuration());
      $("#videoCurrentTime").html(o.getCurrentTime());
      $("#bytesTotal").html(o.getVideoBytesTotal());
      $("#startBytes").html(o.getVideoStartBytes());
      $("#bytesLoaded").html(o.getVideoBytesLoaded());
      */
  }
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '300',
    width: '400',
    videoId: 'rUwdlEjo4ag',
    events: {
      'onReady': function onPlayerReady(event) {
        console.log(event);
        //Progress Bar
        NProgress.configure({ showSpinner: false });
        //NProgress.start();
        NProgress.set(0);
        event.target.playVideo();
      },
      'onStateChange': onPlayerStateChange
    }
  });

  
  //keep Moving
  (function(){
      updatePlayerInfo(player);
      setTimeout(arguments.callee, '500');
  })();
}

$(document).ready(function(){
    // Video
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    $('.ide-toggle-video').on('click', function(e){
      e.preventDefault();
      e.stopPropagation()
      var myLayout = $("body").layout();
      myLayout.toggle('west');
    });

    $('.ide-play-video').on('click', function(e){
      e.preventDefault();
      e.stopPropagation()
      player.playVideo();
    });

    $('.ide-pause-video').on('click', function(e){
      e.preventDefault();
      e.stopPropagation()
      player.pauseVideo();
    });
});

angular.module('anyandgoApp')
  .directive('videotutorial', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        //$(element).metisMenu(scope.$eval(attrs.toolbarTip));
      }
    };
  });
