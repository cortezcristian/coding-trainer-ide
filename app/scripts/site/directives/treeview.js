'use strict';

var treeData = [
    {title: "item1 with key and tooltip", tooltip: "Look, a tool tip!" },
    {title: "item2: selected on init", selected: true },
    {title: "Folder", folder: true, key: "id3",
        children: [
            {title: "Sub-item 3.1",
                children: [
                    {title: "Sub-item 3.1.1", key: "id3.1.1" },
                    {title: "Sub-item 3.1.2", key: "id3.1.2" }
                ]
            },
            {title: "Sub-item 3.2",
                children: [
                    {title: "Sub-item 3.2.1", key: "id3.2.1" },
                    {title: "Sub-item 3.2.2", key: "id3.2.2" }
                ]
            }
        ]
    }];

$(document).ready(function(){
    $('.ide-toggle-treeview').on('click', function(e){
      e.preventDefault();
      e.stopPropagation()
      var myLayout = $("#sub-panel").layout();
      myLayout.toggle('west');
    });
});

/**
 * @ngdoc directive
 * @name anyandgoApp.directive:treeview
 * @description
 * # treeview
 * .
 * ├── app.js
 * ├── bin
 * ├── bower.json
 * ├── Gruntfile.js
 * ├── LICENSE
 * ├── node_modules
 * ├── package.json
 * ├── public
 * ├── README.md
 * ├── routes
 * └── views
 */
angular.module('anyandgoApp')
  .directive('treeview', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        $.getJSON('/tree', function(data){
            treeData = [ 
              {
                title: "Tutorial", 
                folder: true, 
                key: "hashid",
                expanded: true,
                children: data
              }
            ];
            // http://wwwendt.de/tech/fancytree/demo/sample-configurator.html
            $(element).fancytree({
                source: treeData,
                minExpandLevel: 1,
                activate: function(event, data){
                  // A node was activated: display its title:
                  var node = data.node;
                  var path = node.getKeyPath();
                  var fdir = path.replace(/^\//, '').split("/");
                  fdir.shift(); // remove hash
                  var fpath = fdir.join('/').replace(/^\//, '');
                  $("#active-file span").text(fpath);
                  $.post('/file', {fullpath: fpath}, function(data){
                    editor.setValue(data);
                    editor.gotoLine(1);
                  });
                },
                beforeSelect: function(event, data){
                  // A node is about to be selected: prevent this, for folder-nodes:
                  if( data.node.isFolder() ){
                    return false;
                  }
                },
                lazyLoad: function(event, data) {
                  // http://wwwendt.de/tech/fancytree/demo/#sample-load-errors.html
                  var node = data.node;
                  var node = data.node;
                  var path = node.getKeyPath();
                  var fdir = path.replace(/^\//, '').split("/");
                  fdir.shift(); // remove hash
                  var fpath = fdir.join('/').replace(/^\//, '');
                  console.log("ask>>>", fpath);
                  data.result = $.ajax({
                    type: 'POST',
                    url: '/tree',
                    data: {
                      folder: fpath
                    },
                    dataType: 'json'
                  });
                  /*
                  // Issue an ajax request to load child nodes
                  data.result = {
                    url: "/getBranchData",
                    data: {key: node.key}
                  }
                  */
                }
            }); 
            console.log(treeData);
        });    
      }
    };
  });
