var gui = require('nw.gui');
var win = gui.Window.get();
var fs = require('fs');
var path = require('path');
var stdin = process.stdin,
    //keypress = require('keypress'),
    //Handlebars = require('handlebars'),
    pty = require('pty.js');
var end, start = new Date(), milestones = [];
var recStatus = 'stopped';
var Q = require('q');




// on any data into stdin
process.stdin.on('keypress', function( ch, key ){
  console.log("pressed>>>>", key);
});

// Record
var log = function(data, cb){
  fs.appendFile('./logs.txt', data, cb);
}

var logAction = function(data, cb){
  fs.appendFile('./actions.txt', data, cb);
}

var createMilestone = function(data, target, cb){
  var session, content;
  if(typeof data.session !== 'undefined') {
    session = data.session;
  } else {
    content = data.replace(/\\/g, '\\\\').replace(/\"/g,'\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r')
  }

  end = new Date();
  milestones.push({
    target: '',
    time: (end - start),
    session: session,
    content: content
  });
  if(cb) { cb(); }
}

// Terminal
var localterm = pty.spawn('bash', [], {
  name: 'xterm-color',
  cols: 90,
  rows: 30,
  stdio: [ 'pipe', 'pipe', 'pipe'],
  cwd: process.env.HOME,
  //cwd: process.cwd(),
  env: process.env
});

localterm.on('data', function(data) {
  //log('c-out: '+data+'\r', function (err) {
  log(data, function (err) {
    if(recStatus==='recording'){
    createMilestone(data, 'terminal', function(){
        term.write(data);
    });
    } else {
        term.write(data);
    }
  });
});

$(document).ready(function(){
  term.on('key', function (key, ev) {
      var ch = (!ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey);
      localterm.write( key );
      /*
      if ( ch === '\u0003' ) {
          //console.log(milestones);
          // save envents
          //createTemplate(function(){
              //process.exit();
          //});
        } else {

          if (false && typeof ch !== 'undefined' ) {
            localterm.write( ch );
          } else {
            localterm.write( key );
          }
        }
      */
  });

  document.onkeydown = function (e) {

    if(recStatus==='recording'){
    if($(document.activeElement).attr("class").match(/ace/)) {
      console.log("Editor in use", e.keyCode);
      var sessionData = sessionToJSON(editor.session);
      createMilestone({ event: e, session: sessionData }, 'editor', function(){
        console.log('Session saved');
      });
    }
    }
    /*
    if (e.ctrlKey === true && e.keyCode === 70) {
        e.preventDefault();

        console.log('Ctrl + f was hit...');
    }
    */
  }

  // ACE SESSION
  // http://stackoverflow.com/questions/28257566/ace-editor-save-send-session-on-server-via-post
  // http://stackoverflow.com/questions/20395991/is-it-possible-to-serialize-an-ace-session-object
  var filterHistory = function(deltas){
      return deltas.filter(function (d) {
          return d.group != "fold";
      });
  }

  sessionToJSON = function(session) {
      return {
          selection: session.selection.toJSON(),
          value: session.getValue(),
          history: {
              undo: session.$undoManager.$undoStack.map(filterHistory),
              redo: session.$undoManager.$redoStack.map(filterHistory)
          },
          scrollTop: session.getScrollTop(),
          scrollLeft: session.getScrollLeft(),
          options: session.getOptions()
      }
  }

  sessionFromJSON = function(data) {
      var session = ace.createEditSession(data.value);
      session.$undoManager.$doc = session; // workaround for a bug in ace
      session.setOptions(data.options);
      session.$undoManager.$undoStack = data.history.undo;
      session.$undoManager.$redoStack = data.history.redo;
      session.selection.fromJSON(data.selection);
      session.setScrollTop(data.scrollTop);
      session.setScrollLeft(data.scrollLeft);
      return session;
  };

  /* Usage
  // Save it
  var session = editor.session;
  var sessionData = sessionToJSON(session);
  // Restore it
  var session = sessionFromJSON(sessionData);
  editor.setSession(session);
  */

});

// Show app
win.show();





// Menus
var menu1 = new gui.Menu({ type: 'menubar' });
var submenu = new gui.Menu();
submenu.append(new gui.MenuItem({ label: 'box1' }));
submenu.append(new gui.MenuItem({ label: 'box2' }));
submenu.append(new gui.MenuItem({ label: 'box3' }));
submenu.append(new gui.MenuItem({ label: 'box4' }));
menu1.append(new gui.MenuItem({ icon: 'imgs/disk.png', label: 'File', submenu: submenu }));
//menu1.createMacBuiltin("Coding-Trainer App");
//gui.Window.get().menu = menu1;


gui.App.setCrashDumpDir('./');

// Errors
win.on('error', error);
process.on('uncaughtException',exception);

function error() {
  console.log('This is an error of windows');
  return false;
}

function exception(e) {
  console.log('This is an error process', e);
  return false;
}

// Controls
$(document).ready(function(){
  $('.close-nw-app').click(function(){
    console.log("closing...")
    gui.App.quit();
  });

  $('.maximize-nw-app').click(function(){
    win.show();
    win.maximize();
    $('.maximize-nw-app').hide();
    $('.restore-nw-app').show();
  });

  $('.restore-nw-app').click(function(){
    win.show();
    win.restore();
    $('.restore-nw-app').hide();
    $('.maximize-nw-app').show();
  });


  $('.ide-start-recording').click(function(){
    recStatus = 'recording';
  });

  $('.ide-stop-recording').click(function(){
    recStatus = 'stopped';
  });

  $('.ide-play-recorded').click(function(){
    loadMarkers();
    recStatus = 'playing';
    t.play();
  });

  $('.ide-pause-recorded').click(function(){
    recStatus = 'paused';
    t.pause();
  });

});

function loadMarkers() {
  //milestones = [];
  var timeTotal = 97867+10;

  t = window.t = new Timeline({length: timeTotal, frequency:10 });

for(var i=0; i<milestones.length; i++) {
    if(milestones[i]['session']){
    console.log("Session marker!", milestones[i]['session'])
    m1 = {
        time: milestones[i]['time'],
        session: milestones[i]['session'],
        forward: function(){
          console.log("1 do action Time: "+this.time, this, "ooozzzz");
          var session = sessionFromJSON(this.session);
          editor.setSession(session);
        },
        backward: function(){
           console.log("2 do action Time: "+this.time, this, "aaasss");
          var session = sessionFromJSON(this.session);
          editor.setSession(session);
        }
    }
    t.markers.push(m1);

   } else if(milestones[i]['content']) {
     console.log("Term marker!", milestones[i]['content'])
     m1 = {
        time: milestones[i]['time'],
        content: milestones[i]['content'],
        forward: function(){
          console.log("do action Time: "+this.time);
          term.write(this.content);
          terminalText += this.content;
        },
        backward: function(){
          console.log("Undo action Time: "+this.time);
          c = this.content.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          regexRollback = new RegExp(c+'$');
          terminalText = terminalText.replace(regexRollback,'');
          term.reset();
          term.write(terminalText);
        }
    }

    t.markers.push(m1);
   } else {
    console.log("Session / Content undef")
   }
}


}

/*
// GIT
var open = require("nodegit").Repository.open;
var path = require('path');
var async = require('async');
var git     = require('nodegit');
// Convert back from decimal to octal strings.
function toOctal(mode) {
  var fileMode = git.TreeEntry.FILEMODE;
  switch (mode) {
    case fileMode.NEW:        return '000000';
    case fileMode.TREE:       return '040000';
    case fileMode.BLOB:       return '100644';
    case fileMode.EXECUTABLE: return '100755';
    case fileMode.LINK:       return '120000';
    case fileMode.COMMIT:     return '160000';
    default: throw new Error('Unknown mode: ' + mode);
  }
}


var getTree = function(cb) {
 open(path.resolve(__dirname, './repos/express4crud'))
        .then(function(repo) {
      // Use a known commit sha from this repository.
      var sha = "83ab2e5f7f8197d655497ea676b0017606095be3";

      // Look up this known commit.
      repo.getCommit(sha).then(function(commit) {
        // Look up a specific file within that commit.
        commit.getTree().then(function(tree) {
            var entries = tree.entries();
            //console.log(tree, entries, entries[0].path());

            function entryType(ent) {
              var mode = ent.filemode();
              return ent.isTree() ? 'tree'
                   : ent.isBlob() ? 'blob'
                   : (mode === git.TreeEntry.FileMode.Commit) ? 'commit'
                   : (mode === git.TreeEntry.FileMode.Link)   ? 'link'
                   : (mode === git.TreeEntry.FileMode.New)    ? 'new'
                   : cb(new Error('Unknown tree entry type, with mode: ' + mode));
            }

            function entryToJSON(ent, cb) {
              ent.filemode = function(){
                return git.Tree.entryFilemode(this);
              }
              //console.log("aaa", ent, ent.sha(), "<---");
              var jent = { path : ent.path()
                         , mode : toOctal(ent.filemode())
                         , type : entryType(ent)
                         , icon : (ent.isFile()) ? 'f': ((ent.isDirectory())?'d':'-')
                         , sha  : ent.sha() };
              if (!ent.isBlob()) {
                cb(null, jent);
              } else {
                var odb = repo.odb(function(err, odb){
                    // odb no parece tener read
                    odb.read(jent.sha, function (err, obj) {
                      if (err) { cb(err); }
                      jent.size = obj.size();
                      cb(null, jent);
                    });
                });
                //cb(null, jent);
              }
            }


            async.map(entries, entryToJSON, function(err, result){
                console.log('>',err, result);
                var tree = [];
                var item;
                result.forEach(function(v,i){
                    console.log(v.icon, v.path, '<--');
                    item = {title:v.path, key:v.path};
                    if(v.icon === "d"){
                        item.children = [];
                        item.folder = true;
                        item.lazy = true;
                    }
                    tree.push(item)
                });

                cb(tree);

            });
        });
      });
    });
}

var getSubFolder = function(foldername, cb){
 //console.log(path.resolve(__dirname, 'repos/express4crud'));
    open(path.resolve(__dirname, './repos/express4crud'))
        .then(function(repo) {
      // Use a known commit sha from this repository.
      var sha = "83ab2e5f7f8197d655497ea676b0017606095be3";

      // Look up this known commit.
      repo.getCommit(sha).then(function(commit) {
        // Look up a specific file within that commit.
        console.log("dir>", foldername, req.body);
        commit.getEntry(""+foldername).then(function(folder){
            console.log("fofolder>>", folder);
            folder.getTree().then(function(tree) {
            var entries = tree.entries();
            //console.log(tree, entries, entries[0].path());

            function entryType(ent) {
              var mode = ent.filemode();
              return ent.isTree() ? 'tree'
                   : ent.isBlob() ? 'blob'
                   : (mode === git.TreeEntry.FileMode.Commit) ? 'commit'
                   : (mode === git.TreeEntry.FileMode.Link)   ? 'link'
                   : (mode === git.TreeEntry.FileMode.New)    ? 'new'
                   : cb(new Error('Unknown tree entry type, with mode: ' + mode));
            }

            function entryToJSON(ent, cb) {
              ent.filemode = function(){
                return git.Tree.entryFilemode(this);
              }
              //console.log("aaa", ent, ent.sha(), "<---");
              var jent = { path : ent.path()
                         , mode : toOctal(ent.filemode())
                         , type : entryType(ent)
                         , icon : (ent.isFile()) ? 'f': ((ent.isDirectory())?'d':'-')
                         , sha  : ent.sha() };
              if (!ent.isBlob()) {
                cb(null, jent);
              } else {
                var odb = repo.odb(function(err, odb){
                    // odb no parece tener read
                    odb.read(jent.sha, function (err, obj) {
                      if (err) { cb(err); }
                      jent.size = obj.size();
                      cb(null, jent);
                    });
                });
                //cb(null, jent);
              }
            }


            async.map(entries, entryToJSON, function(err, result){
                //console.log('>',err, result);
                var tree = [];
                var item;
                result.forEach(function(v,i){
                    console.log(v.icon, v.path, '<--');
                    var path = v.path.split('/');
                    var title = path[path.length-1];
                    item = {title:title, key:title};
                    if(v.icon === "d"){
                        item.children = [];
                        item.folder = true;
                        item.lazy = true;
                    }
                    tree.push(item)
                });
                //return result;
                cb(tree);
            });
        });
      });
      });
    });
}

var getFile = function(filefullpath, cb){
  open(path.resolve(__dirname, './repos/express4crud'))
        .then(function(repo) {
      // Use a known commit sha from this repository.
      var sha = "83ab2e5f7f8197d655497ea676b0017606095be3";

      // Look up this known commit.
      repo.getCommit(sha).then(function(commit) {
        // Look up a specific file within that commit.
        commit.getEntry(filefullpath).then(function(entry) {
          // Get the blob contents from the file.
          entry.getBlob().then(function(blob) {
            // Show the name, sha, and filesize in byes.
            console.log(entry.filename(), entry.sha(), blob.rawsize());

            // Show a spacer.
            console.log(Array(72).join("=") + "\n\n");

            // Show the entire file.
            cb(String(blob));
          });
        });
      });
    });
}

*/
// Stupid nodegit and nan, not supporting nw.js 0.12.0



console.log(">>>>>>>>>>", process.env.PWD+"/*");

var getTree = function(folder, cb){
  if(typeof folder === 'function') {
    cb = folder;
    folder = process.env.PWD;
  } else {
    folder = process.env.PWD+'/'+folder;
  }

  console.log("-->", folder);

  fs.readdir(folder, function (err, files) {
    //console.log("-->", files);
    var tree = [];
    var item;
    files.forEach(function(v,i){
      console.log(v);
      item = {title:v, key:v};
      if(!fs.statSync(folder+'/'+v).isFile()){
          item.children = [];
          item.folder = true;
          item.lazy = true;
      }
      tree.push(item);
    });
    cb(tree);
  });
}

var getTreePromise = function(folder){
  var deferred = jQuery.Deferred();
  if(typeof folder === 'function') {
    cb = folder;
    folder = process.env.PWD;
  } else {
    folder = process.env.PWD+'/'+folder;
  }

  console.log("-->", folder);

  fs.readdir(folder, function (err, files) {
    //console.log("-->", files);
    if(err){
      deferred.reject(err);
    }

    var tree = [];
    var item;
    files.forEach(function(v,i){
      console.log(v);
      item = {title:v, key:v};
      if(!fs.statSync(folder+'/'+v).isFile()){
          item.children = [];
          item.folder = true;
          item.lazy = true;
      }
      tree.push(item);
    });
    console.log("ARBOL", tree);
    deferred.resolve(tree);
  });

  return deferred.promise();
}


var getFile = function(filefullpath, cb){
  console.log("FILE", filefullpath);
  fs.readFile(process.env.PWD+'/'+filefullpath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    cb(data);
  });
}


$(document).ready(function(){
  getTree(function(data){
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
    $('.treeview-con').fancytree({
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
          getFile( fpath, function(data){
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
          var path = node.getKeyPath();
          var fdir = path.replace(/^\//, '').split("/");
          fdir.shift(); // remove hash
          var fpath = fdir.join('/').replace(/^\//, '');
          console.log("ask>>>", fpath);
          /*
          data.result = $.ajax({
            type: 'POST',
            url: '/tree',
            data: {
              folder: fpath
            },
            dataType: 'json'
          });
          */
          data.result = getTreePromise(fpath).then(function(d){
            return d;
          });

        }
    });
    console.log(treeData);
  });
});
