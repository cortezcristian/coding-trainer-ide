var gui = require('nw.gui');
var win = gui.Window.get();
var stdin = process.stdin,
    keypress = require('keypress'),
    Handlebars = require('handlebars'),
    pty = require('pty.js');

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

function exception() {
  console.log('This is an error process');
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
