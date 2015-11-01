//Timeline
var timeTotal = 97867+10;

var t = window.t = new Timeline({length: timeTotal, frequency:10 });

var stdouts = [
    { time: 0, content: '  terminal-recorder by @cortezcristian\r\n'}
    , { time: 97867, content: "[m [31m1[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~/crudtest$ [m"}
];

var terminalText = "";

//Markers
var m1, c = "", regexRollback;

/*
for(var i=0; i<stdouts.length; i++) {
    m1 = {
        time: stdouts[i]['time'],
        content: stdouts[i]['content'],
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
}

*/

//t.play();
