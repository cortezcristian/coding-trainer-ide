'use strict';

/**
 * @ngdoc directive
 * @name anyandgoApp.directive:metismenu
 * @description
 * # metismenu
 */
angular.module('anyandgoApp')
  .directive('panelslayout', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        //$(element).metisMenu(scope.$eval(attrs.toolbarTip));
        $(element).layout({
            /* applyDemoStyles: true, */
            north__minSize: 50,
            east__size: 450,
            west__size: 402,
            center__size: 50,
            east: {
                initClosed: true,
                togglerLength_open: 450,
                maxSize: 0
            },
            east__onresize: function() {
            }
        });
      }
    };
  });
