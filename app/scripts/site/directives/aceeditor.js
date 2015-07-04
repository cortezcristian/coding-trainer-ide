'use strict';

/**
 * @ngdoc directive
 * @name anyandgoApp.directive:metismenu
 * @description
 * # aceeditor
 */
var editor;

$(document).ready(function(){
    $('.ide-toggle-editor').on('click', function(e){
      e.preventDefault();
      e.stopPropagation()
      var myLayout = $("body").layout();
      if($('.ace_content:visible').size()===0){
          myLayout.sizePane("east", 4500);
      }
      
      myLayout.toggle('east');
      editor.renderer.onResize();
      editor.renderer.updateFull();
    });
});


angular.module('anyandgoApp')
  .directive('aceeditor', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        //$(element).metisMenu(scope.$eval(attrs.toolbarTip));
        editor = ace.edit(attrs.id);
        editor.setTheme("ace/theme/twilight");
        editor.setFontSize(16);
        editor.getSession().setMode("ace/mode/javascript");
      }
    };
  });
