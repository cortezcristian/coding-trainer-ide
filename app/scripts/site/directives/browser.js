'use strict';

/**
 * @ngdoc directive
 * @name anyandgoApp.directive:metismenu
 * @description
 * # browser
 */

$(document).ready(function(){
    /*
    $('.ide-toggle-browser').on('click', function(e){
      e.preventDefault();
      e.stopPropagation()
      var myLayout = $("#sub-panel").layout();
      myLayout.toggle('south');
    });
    */
});

var browser = {};
browser.his = [];
browser.i = 0;
browser.iframeRef = function(frameRef){
  return frameRef.contentWindow ? frameRef.contentWindow.document : frameRef.contentDocument
};
browser.sendClick = function(p){
  var inside = browser.iframeRef(document.getElementById('navone'));
  $(inside).find(p || '.navigate-right').click();
};

angular.module('anyandgoApp')
  .directive('browser', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          $(element).jbrowser({his:browser.his, index:browser.i});
      }
    };
  });
