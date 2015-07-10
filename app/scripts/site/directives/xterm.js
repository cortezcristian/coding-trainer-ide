'use strict';

/**
 * @ngdoc directive
 * @name anyandgoApp.directive:metismenu
 * @description
 * # xterm
 */

$(document).ready(function(){
  /*
    $('.ide-toggle-editor').on('click', function(e){
      e.preventDefault();
      e.stopPropagation()
      var myLayout = $("body").layout();
      if($('.ace_content:visible').size()===0){
          myLayout.sizePane("east", 4500);
      }

      myLayout.toggle('east');
    });

    $('#terminal').draggable();

    $('.ide-toggle-xterm').on('click', function(e){
      e.preventDefault();
      e.stopPropagation()
      var myLayout = $("#sub-panel").layout();
      myLayout.toggle('south');
    });
    */
});

var term;

angular.module('anyandgoApp')
  .directive('xterm', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          //$(element).jxterm({his:xterm.his, index:xterm.i});
          term = new Terminal({
              cols: 90,
              rows: 30,
              screenKeys: true
          });

        /*
          term.on('data', function(data) {
              //socket.emit('data', data);
              console.log("typed data:", data);
              term.write(data);
          });
        */

          term.on('key', function (key, ev) {
            var printable = (!ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey);

            if (ev.keyCode == 13) {
              //term.prompt();
            } else if (ev.keyCode == 8) {
              /*
               * Do not delete the prompt
               */
              if (term.x > 2) {
                term.write('\b \b');
              }
            } else if (printable) {
              term.write(key);
            }
          });

          term.on('title', function(title) {
              $('span.title-term').text(title);
          });


          term.open($(element)[0]);

      }
    };
  });
