'use strict';

/**
 * @ngdoc directive
 * @name anyandgoApp.directive:metismenu
 * @description
 * # terminal
 */

$(document).ready(function(){
    $('.ide-toggle-terminal').on('click', function(e){
      e.preventDefault();
      e.stopPropagation()
      var myLayout = $("#sub-panel").layout();
      myLayout.toggle('south');
    });
});

var term;

angular.module('anyandgoApp')
  .directive('terminal', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          term = $(element).terminal(function(command, term) {
              if (command !== '') {
                  try {
                      var params = command.split(' ');
                      /*
                      switch(params[0]){
                          case "ace-open": 
                              if(params.length!=2){
                                  term.error("ace-open: Two arguments were expected");
                              }else{
                                  socket.emit("readFile", params[1]);
                              }
                          break;
                          default:
                              socket.emit("sendCmd", command);
                          break;
                      }
                      */
                      
                      // Eval JS
                      /*
                      var result = window.eval(command);
                      if (result !== undefined) {
                          term.echo(new String(result));
                      }
                      */
                  } catch(e) {
                      term.error(new String(e));
                  }
              } else {
                 term.echo('');
              }
          }, {
              greetings: 'Welcome to Coding-Trainer!',
              name: 'js_demo',
              //height: 200,
              prompt: 'cris@coding-trainer: ~$ '
          });
      }
    };
  });
