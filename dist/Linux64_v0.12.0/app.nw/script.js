var gui = require('nw.gui');
var win = gui.Window.get();
var fs = require('fs');
var path = require('path');
var stdin = process.stdin,
    //keypress = require('keypress'),
    Handlebars = require('handlebars'),
    pty = require('pty.js');
var end, start = new Date(), milestones = [];


// Record
var log = function(data, cb){
  fs.appendFile('./logs.txt', data, cb);
}

var logAction = function(data, cb){
  fs.appendFile('./actions.txt', data, cb);
}

var createMilestone = function(data, cb){
  end = new Date();
  milestones.push({
    time: (end - start),
    content: data.replace(/\\/g, '\\\\').replace(/\"/g,'\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r')
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
    //createMilestone(data, function(){
        term.write(data);
    //});
  });
});

$(document).ready(function(){
  term.on('key', function (key, ev) {
      var ch = (!ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey);
      if ( ch === '\u0003' ) {
          //console.log(milestones);
          // save envents
          createTemplate(function(){
              process.exit();
          });
        } else {

          if (false && typeof ch !== 'undefined' ) {
            localterm.write( ch );
          } else {
            localterm.write( key );
          }
        }
  });
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

});
