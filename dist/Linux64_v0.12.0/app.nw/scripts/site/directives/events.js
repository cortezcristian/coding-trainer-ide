//Timeline
var timeTotal = 97867+10;

var t = window.t = new Timeline({length: timeTotal, frequency:10 });

var stdouts = [
    { time: 0, content: '  terminal-recorder by @cortezcristian\r\n'}
    , { time: 2665, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 2669, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 3071, content: "[H[2J[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 7446, content: "m"}
    , { time: 7524, content: "k"}
    , { time: 7627, content: "d"}
    , { time: 7759, content: "i"}
    , { time: 7854, content: "r"}
    , { time: 7969, content: " "}
    , { time: 8409, content: "c"}
    , { time: 8651, content: "r"}
    , { time: 8769, content: "u"}
    , { time: 8903, content: "d"}
    , { time: 9207, content: "t"}
    , { time: 9300, content: "e"}
    , { time: 9370, content: "s"}
    , { time: 9488, content: "t"}
    , { time: 10005, content: " "}
    , { time: 11678, content: "&"}
    , { time: 11808, content: "&"}
    , { time: 12087, content: " "}
    , { time: 12333, content: "c"}
    , { time: 12609, content: "d"}
    , { time: 12734, content: " "}
    , { time: 12955, content: "c"}
    , { time: 13169, content: "r"}
    , { time: 13356, content: "u"}
    , { time: 13452, content: ""}
    , { time: 14007, content: "d"}
    , { time: 14226, content: ""}
    , { time: 14626, content: "t"}
    , { time: 14713, content: "e"}
    , { time: 14789, content: "s"}
    , { time: 14877, content: "t"}
    , { time: 15731, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  mkdir crudtest"}
    , { time: 15759, content: "]2;crisboot@crisboot-Aspire-S3-391  cd crudtest]2;crisboot@crisboot-Aspire-S3-391  crudtest/"}
    , { time: 15765, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~/crudtest$ [m"}
    , { time: 19975, content: "y"}
    , { time: 20062, content: "o"}
    , { time: 20205, content: " "}
    , { time: 20316, content: "e"}
    , { time: 20538, content: "x"}
    , { time: 20627, content: "p"}
    , { time: 20785, content: "r"}
    , { time: 20858, content: "e"}
    , { time: 21103, content: "s"}
    , { time: 21234, content: "s"}
    , { time: 21497, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  yo express"}
    , { time: 39882, content: "[[32m?[39m] Select a version to install: (Use arrow keys)\r\n[36m‣ Basic[39m \r\n  MVC "}
    , { time: 39882, content: "[?25l"}
    , { time: 42496, content: "[90D"}
    , { time: 42496, content: "[2K"}
    , { time: 42496, content: "[1A"}
    , { time: 42496, content: "[90D[2K[1A[90D[2K"}
    , { time: 42497, content: "[[32m?[39m] Select a version to install: \r\n  Basic \r\n[36m‣ MVC[39m "}
    , { time: 42908, content: "[90D"}
    , { time: 42908, content: "[2K[1A[90D"}
    , { time: 42908, content: "[2K[1A"}
    , { time: 42908, content: "[90D[2K[[32m?[39m] Select a version to install: \r\n[36m‣ Basic[39m \r\n  MVC "}
    , { time: 43752, content: "[2K[1A[90D[2K[1A"}
    , { time: 43753, content: "[90D"}
    , { time: 43753, content: "[90D[2K"}
    , { time: 43753, content: "[[32m?[39m] Select a version to install: [36mBasic[39m\r\n"}
    , { time: 43754, content: "[?25h[?25h"}
    , { time: 43760, content: "[[32m?[39m] Select a view engine to use: (Use arrow keys)\r\n[36m‣ Jade[39m \r\n  Swig \r\n  EJS "}
    , { time: 43760, content: "[?25l"}
    , { time: 46266, content: "[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a view engine to use: [36mJade[39m\r\n[?25h[?25h[[32m?[39m] Select a css preprocessor to use (Sass Requires Ruby): (Use arrow keys)\r\n[36m‣ None[39m \r\n  Node-Sass \r\n  Sass \r\n  less [?25l"}
    , { time: 49103, content: "[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a css preprocessor to use (Sass Requires Ruby): \r\n  None \r\n[36m‣ Node-Sass[39m \r\n  Sass \r\n  less "}
    , { time: 49339, content: "[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a css preprocessor to use (Sass Requires Ruby): \r\n  None \r\n  Node-Sass \r\n[36m‣ Sass[39m \r\n  less "}
    , { time: 49885, content: "[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a css preprocessor to use (Sass Requires Ruby): \r\n  None \r\n[36m‣ Node-Sass[39m \r\n  Sass \r\n  less "}
    , { time: 50061, content: "[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a css preprocessor to use (Sass Requires Ruby): \r\n[36m‣ None[39m \r\n  Node-Sass \r\n  Sass \r\n  less "}
    , { time: 51129, content: "[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a css preprocessor to use (Sass Requires Ruby): [36mNone[39m\r\n[?25h[?25h[[32m?[39m] Select a build tool to use: (Use arrow keys)\r\n[36m‣ Grunt[39m \r\n  Gulp [?25l"}
    , { time: 52647, content: "[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a build tool to use: [36mGrunt[39m\r\n[?25h[?25h"}
    , { time: 52980, content: "[32m   create[39m"}
    , { time: 52980, content: " "}
    , { time: 52980, content: ".bowerrc\r\n"}
    , { time: 52983, content: "[32m   create[39m "}
    , { time: 52983, content: ".gitignore\r\n"}
    , { time: 52985, content: "[32m   create[39m bower.json\r\n[32m   create[39m app.js\r\n[32m   create[39m"}
    , { time: 52985, content: " bin/www\r\n"}
    , { time: 52985, content: "[32m   create[39m package.json\r\n[32m   create[39m routes/index.js\r\n[32m   create[39m routes/user.js\r\n[32m   create[39m views/error.jade\r\n[32m   create[39m views/index.jade\r\n"}
    , { time: 52986, content: "[32m   create[39m "}
    , { time: 52986, content: "views/layout.jade\r\n"}
    , { time: 52986, content: "[32m   create[39m"}
    , { time: 52986, content: " public/css/style.css\r\n"}
    , { time: 52987, content: "[32m   create[39m"}
    , { time: 52987, content: " Gruntfile.js\r\n"}
    , { time: 52989, content: "\r\n\r\nI'm all done. Running [1m[33mbower install & npm install[39m[22m for you to install the required dependencies. If this fails, try running the command yourself.\r\n\r\n\r\n"}
    , { time: 64484, content: "[37m"}
    , { time: 64484, content: "[40m"}
    , { time: 64484, content: "npm"}
    , { time: 64484, content: "[0m"}
    , { time: 64484, content: " [0m"}
    , { time: 64484, content: "[32m[40mhttp[0m [0m"}
    , { time: 64484, content: "[35mGET[0m https://registry.npmjs.org/serve-favicon\r\n[0m"}
    , { time: 64537, content: "[37m"}
    , { time: 64537, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 64538, content: "http"}
    , { time: 64538, content: "[0m [0m"}
    , { time: 64538, content: "[35mGET"}
    , { time: 64538, content: "[0m https://registry.npmjs.org/grunt\r\n[0m"}
    , { time: 64544, content: "[37m"}
    , { time: 64544, content: "[40mnpm[0m [0m"}
    , { time: 64544, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 64544, content: "GET[0m https://registry.npmjs.org/jade\r\n"}
    , { time: 64544, content: "[0m"}
    , { time: 64547, content: "[37m"}
    , { time: 64547, content: "[40mnpm[0m [0m"}
    , { time: 64547, content: "[32m[40mhttp[0m [0m"}
    , { time: 64547, content: "[35mGET[0m https://registry.npmjs.org/grunt-develop\r\n[0m"}
    , { time: 64549, content: "[37m"}
    , { time: 64549, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 64549, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/cookie-parser\r\n"}
    , { time: 64549, content: "[0m"}
    , { time: 64747, content: "[37m"}
    , { time: 64747, content: "[40mnpm[0m"}
    , { time: 64748, content: " "}
    , { time: 64748, content: "[0m[32m"}
    , { time: 64748, content: "[40mhttp[0m [0m[35m"}
    , { time: 64748, content: "GET[0m https://registry.npmjs.org/grunt-contrib-watch\r\n[0m"}
    , { time: 64749, content: "[37m"}
    , { time: 64749, content: "[40mnpm[0m"}
    , { time: 64749, content: " [0m[32m[40mhttp"}
    , { time: 64749, content: "[0m [0m[35mGET[0m"}
    , { time: 64749, content: " https://registry.npmjs.org/time-grunt\r\n[0m"}
    , { time: 64750, content: "[37m"}
    , { time: 64750, content: "[40m"}
    , { time: 64751, content: "npm"}
    , { time: 64752, content: "[0m [0m"}
    , { time: 64752, content: "[32m"}
    , { time: 64752, content: "[40m"}
    , { time: 64752, content: "http[0m [0m"}
    , { time: 64752, content: "[35m"}
    , { time: 64753, content: "GET[0m https://registry.npmjs.org/load-grunt-tasks"}
    , { time: 64753, content: "\r\n[0m"}
    , { time: 64756, content: "[37m"}
    , { time: 64756, content: "[40mnpm[0m "}
    , { time: 64756, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 64756, content: "[35mGET[0m https://registry.npmjs.org/request\r\n[0m"}
    , { time: 64772, content: "[37m[40m"}
    , { time: 64772, content: "npm[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 64772, content: "[35mGET[0m"}
    , { time: 64772, content: " https://registry.npmjs.org/express\r\n[0m"}
    , { time: 64773, content: "[37m"}
    , { time: 64773, content: "[40mnpm[0m"}
    , { time: 64773, content: " [0m[32m"}
    , { time: 64773, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 64773, content: " https://registry.npmjs.org/morgan\r\n[0m"}
    , { time: 64776, content: "[37m"}
    , { time: 64776, content: "[40mnpm[0m [0m[32m[40mhttp[0m "}
    , { time: 64776, content: "[0m[35mGET[0m https://registry.npmjs.org/body-parser\r\n[0m"}
    , { time: 64809, content: "[37m"}
    , { time: 64809, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m"}
    , { time: 64809, content: "GET[0m https://registry.npmjs.org/debug\r\n[0m"}
    , { time: 65673, content: "[37m"}
    , { time: 65673, content: "[40mnpm"}
    , { time: 65674, content: "[0m "}
    , { time: 65674, content: "[0m[32m[40mhttp"}
    , { time: 65674, content: "[0m [0m[35m"}
    , { time: 65674, content: "200[0m https://registry.npmjs.org/serve-favicon\r\n[0m"}
    , { time: 65843, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/grunt-develop\r\n[0m"}
    , { time: 65971, content: "[37m[40m"}
    , { time: 65971, content: "npm[0m [0m"}
    , { time: 65971, content: "[32m[40mhttp"}
    , { time: 65971, content: "[0m [0m[35m200[0m https://registry.npmjs.org/cookie-parser\r\n"}
    , { time: 65971, content: "[0m"}
    , { time: 66175, content: "[37m"}
    , { time: 66175, content: "[40mnpm[0m [0m[32m"}
    , { time: 66176, content: "[40mhttp[0m [0m[35m"}
    , { time: 66176, content: "200[0m https://registry.npmjs.org/grunt\r\n[0m"}
    , { time: 66270, content: "[37m"}
    , { time: 66271, content: "[40mnpm[0m "}
    , { time: 66271, content: "[0m[32m[40mhttp[0m [0m[35m"}
    , { time: 66271, content: "200[0m https://registry.npmjs.org/grunt-contrib-watch\r\n[0m"}
    , { time: 66315, content: "[37m"}
    , { time: 66315, content: "[40mnpm[0m [0m"}
    , { time: 66315, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 66315, content: "200[0m https://registry.npmjs.org/jade\r\n[0m"}
    , { time: 66357, content: "[37m"}
    , { time: 66357, content: "[40m"}
    , { time: 66357, content: "npm[0m [0m[32m"}
    , { time: 66357, content: "[40mhttp[0m [0m"}
    , { time: 66357, content: "[35m200[0m https://registry.npmjs.org/time-grunt\r\n[0m"}
    , { time: 66375, content: "[37m[40m"}
    , { time: 66375, content: "npm[0m"}
    , { time: 66376, content: " "}
    , { time: 66376, content: "[0m"}
    , { time: 66376, content: "[32m[40mhttp[0m"}
    , { time: 66376, content: " [0m[35m304[0m"}
    , { time: 66376, content: " https://registry.npmjs.org/request\r\n[0m"}
    , { time: 66439, content: "[37m"}
    , { time: 66439, content: "[40mnpm[0m [0m"}
    , { time: 66439, content: "[32m[40m"}
    , { time: 66439, content: "http[0m [0m[35m200[0m https://registry.npmjs.org/load-grunt-tasks\r\n"}
    , { time: 66439, content: "[0m"}
    , { time: 66443, content: "[37m"}
    , { time: 66443, content: "[40mnpm[0m "}
    , { time: 66443, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 66443, content: "[35mGET[0m https://registry.npmjs.org/jade/-/jade-1.8.2.tgz\r\n"}
    , { time: 66443, content: "[0m"}
    , { time: 66446, content: "[37m"}
    , { time: 66446, content: "[40mnpm[0m [0m"}
    , { time: 66446, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 66446, content: "GET[0m https://registry.npmjs.org/time-grunt/-/time-grunt-1.0.0.tgz\r\n[0m"}
    , { time: 66484, content: "[37m"}
    , { time: 66484, content: "[40mnpm[0m [0m"}
    , { time: 66484, content: "[32m[40mhttp[0m [0m[35mGET"}
    , { time: 66484, content: "[0m https://registry.npmjs.org/load-grunt-tasks/-/load-grunt-tasks-1.0.0.tgz\r\n[0m"}
    , { time: 66658, content: "[37m[40m"}
    , { time: 66658, content: "npm[0m [0m[32m"}
    , { time: 66659, content: "[40m"}
    , { time: 66659, content: "http[0m [0m"}
    , { time: 66659, content: "[35m200[0m"}
    , { time: 66659, content: " https://registry.npmjs.org/morgan\r\n[0m"}
    , { time: 66665, content: "[37m"}
    , { time: 66665, content: "[40mnpm[0m "}
    , { time: 66665, content: "[0m[32m[40mhttp"}
    , { time: 66666, content: "[0m [0m"}
    , { time: 66666, content: "[35m304[0m https://registry.npmjs.org/debug\r\n[0m"}
    , { time: 66673, content: "[37m"}
    , { time: 66673, content: "[40mnpm[0m [0m[32m"}
    , { time: 66673, content: "[40mhttp"}
    , { time: 66673, content: "[0m [0m[35mGET"}
    , { time: 66673, content: "[0m https://registry.npmjs.org/morgan/-/morgan-1.5.0.tgz\r\n[0m"}
    , { time: 67164, content: "[37m"}
    , { time: 67164, content: "[40mnpm[0m [0m"}
    , { time: 67164, content: "[32m[40mhttp[0m"}
    , { time: 67164, content: " [0m[35m200[0m https://registry.npmjs.org/jade/-/jade-1.8.2.tgz\r\n[0m"}
    , { time: 67182, content: "[37m"}
    , { time: 67182, content: "[40mnpm[0m [0m"}
    , { time: 67183, content: "[32m[40mhttp[0m [0m[35m200[0m https://registry.npmjs.org/time-grunt/-/time-grunt-1.0.0.tgz\r\n"}
    , { time: 67183, content: "[0m"}
    , { time: 67318, content: "[37m[40m"}
    , { time: 67318, content: "npm[0m [0m[32m[40m"}
    , { time: 67318, content: "http[0m [0m[35m200[0m"}
    , { time: 67318, content: " https://registry.npmjs.org/load-grunt-tasks/-/load-grunt-tasks-1.0.0.tgz\r\n[0m"}
    , { time: 67423, content: "[37m"}
    , { time: 67425, content: "[40m"}
    , { time: 67425, content: "npm[0m"}
    , { time: 67425, content: " [0m"}
    , { time: 67425, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 67425, content: "200[0m https://registry.npmjs.org/morgan/-/morgan-1.5.0.tgz\r\n[0m"}
    , { time: 67985, content: "[37m"}
    , { time: 67985, content: "[40mnpm[0m [0m"}
    , { time: 67985, content: "[32m[40mhttp[0m "}
    , { time: 67985, content: "[0m[35m200[0m https://registry.npmjs.org/express\r\n[0m"}
    , { time: 68376, content: "[37m"}
    , { time: 68376, content: "[40mnpm"}
    , { time: 68377, content: "[0m [0m"}
    , { time: 68377, content: "[32m"}
    , { time: 68377, content: "[40mhttp[0m [0m"}
    , { time: 68377, content: "[35m200[0m https://registry.npmjs.org/body-parser\r\n[0m"}
    , { time: 68437, content: "[37m"}
    , { time: 68437, content: "[40mnpm[0m [0m"}
    , { time: 68437, content: "[32m[40mhttp[0m "}
    , { time: 68437, content: "[0m[35mGET"}
    , { time: 68437, content: "[0m https://registry.npmjs.org/body-parser/-/body-parser-1.10.0.tgz\r\n[0m"}
    , { time: 69163, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m200[0m https://registry.npmjs.org/body-parser/-/body-parser-1.10.0.tgz\r\n[0m"}
    , { time: 69696, content: "[37m"}
    , { time: 69696, content: "[40mnpm[0m"}
    , { time: 69696, content: " [0m[32m[40mhttp[0m"}
    , { time: 69696, content: " [0m[35mGET"}
    , { time: 69696, content: "[0m https://registry.npmjs.org/multimatch\r\n[0m"}
    , { time: 69746, content: "[37m"}
    , { time: 69746, content: "[40mnpm[0m"}
    , { time: 69747, content: " [0m[32m[40mhttp"}
    , { time: 69747, content: "[0m [0m[35m"}
    , { time: 69747, content: "GET[0m https://registry.npmjs.org/findup-sync\r\n[0m"}
    , { time: 69772, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/date-time\r\n[0m"}
    , { time: 69789, content: "[37m"}
    , { time: 69789, content: "[40mnpm[0m [0m[32m[40mhttp[0m "}
    , { time: 69789, content: "[0m[35mGET[0m https://registry.npmjs.org/chalk\r\n[0m"}
    , { time: 69808, content: "[37m"}
    , { time: 69808, content: "[40mnpm[0m [0m"}
    , { time: 69808, content: "[32m[40mhttp[0m [0m[35mGET"}
    , { time: 69808, content: "[0m https://registry.npmjs.org/figures\r\n[0m"}
    , { time: 69811, content: "[37m"}
    , { time: 69811, content: "[40mnpm[0m "}
    , { time: 69811, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 69811, content: "[35mGET[0m https://registry.npmjs.org/hooker\r\n[0m"}
    , { time: 69813, content: "[37m"}
    , { time: 69814, content: "[40mnpm[0m "}
    , { time: 69814, content: "[0m[32m[40mhttp[0m"}
    , { time: 69814, content: " [0m[35m"}
    , { time: 69814, content: "GET[0m https://registry.npmjs.org/text-table\r\n[0m"}
    , { time: 69819, content: "[37m"}
    , { time: 69819, content: "[40mnpm[0m"}
    , { time: 69819, content: " [0m[32m[40mhttp"}
    , { time: 69819, content: "[0m [0m"}
    , { time: 69820, content: "[35mGET[0m https://registry.npmjs.org/pretty-ms\r\n[0m"}
    , { time: 69999, content: "[37m"}
    , { time: 69999, content: "[40mnpm[0m [0m[32m"}
    , { time: 69999, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 69999, content: " https://registry.npmjs.org/ms/0.6.2\r\n[0m"}
    , { time: 70002, content: "[37m"}
    , { time: 70002, content: "[40mnpm[0m"}
    , { time: 70002, content: " [0m[32m[40mhttp[0m"}
    , { time: 70002, content: " [0m[35mGET[0m"}
    , { time: 70003, content: " https://registry.npmjs.org/fresh/0.2.4\r\n"}
    , { time: 70003, content: "[0m"}
    , { time: 70097, content: "[37m"}
    , { time: 70097, content: "[40mnpm[0m [0m[32m"}
    , { time: 70097, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 70097, content: " https://registry.npmjs.org/cookie-signature/1.0.5\r\n[0m"}
    , { time: 70099, content: "[37m"}
    , { time: 70099, content: "[40mnpm[0m"}
    , { time: 70099, content: " [0m[32m[40mhttp[0m"}
    , { time: 70099, content: " [0m[35mGET[0m https://registry.npmjs.org/etag\r\n"}
    , { time: 70099, content: "[0m"}
    , { time: 70101, content: "[37m"}
    , { time: 70101, content: "[40mnpm[0m "}
    , { time: 70101, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 70101, content: "[35mGET[0m https://registry.npmjs.org/basic-auth/1.0.0\r\n[0m"}
    , { time: 70109, content: "[37m"}
    , { time: 70109, content: "[40mnpm[0m [0m[32m"}
    , { time: 70109, content: "[40mhttp[0m"}
    , { time: 70109, content: " [0m[35mGET"}
    , { time: 70109, content: "[0m https://registry.npmjs.org/cookie/0.1.2\r\n[0m"}
    , { time: 70205, content: "[37m"}
    , { time: 70205, content: "[40mnpm[0m"}
    , { time: 70206, content: " "}
    , { time: 70206, content: "[0m[32m[40m"}
    , { time: 70206, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/on-finished/2.1.1\r\n"}
    , { time: 70206, content: "[0m"}
    , { time: 70579, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/figures\r\n[0m"}
    , { time: 70606, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/findup-sync\r\n[0m"}
    , { time: 70628, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/chalk\r\n[0m"}
    , { time: 70639, content: "[37m"}
    , { time: 70639, content: "[40mnpm"}
    , { time: 70639, content: "[0m "}
    , { time: 70640, content: "[0m"}
    , { time: 70640, content: "[32m"}
    , { time: 70640, content: "[40m"}
    , { time: 70640, content: "http[0m [0m[35m"}
    , { time: 70641, content: "304[0m https://registry.npmjs.org/multimatch\r\n"}
    , { time: 70641, content: "[0m"}
    , { time: 70654, content: "[37m"}
    , { time: 70654, content: "[40mnpm[0m [0m[32m"}
    , { time: 70654, content: "[40mhttp[0m"}
    , { time: 70654, content: " [0m[35mGET[0m https://registry.npmjs.org/depd\r\n[0m"}
    , { time: 70655, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/on-finished\r\n[0m"}
    , { time: 70655, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/bytes/1.0.0\r\n[0m"}
    , { time: 70656, content: "[37m"}
    , { time: 70656, content: "[40mnpm"}
    , { time: 70656, content: "[0m [0m"}
    , { time: 70656, content: "[32m[40mhttp[0m [0m[35mGET"}
    , { time: 70656, content: "[0m https://registry.npmjs.org/media-typer/0.3.0\r\n[0m"}
    , { time: 70657, content: "[37m"}
    , { time: 70657, content: "[40mnpm[0m"}
    , { time: 70657, content: " [0m[32m[40mhttp[0m "}
    , { time: 70657, content: "[0m[35mGET[0m https://registry.npmjs.org/iconv-lite/0.4.5\r\n"}
    , { time: 70657, content: "[0m"}
    , { time: 70696, content: "[37m"}
    , { time: 70696, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 70696, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/qs/2.3.3\r\n[0m"}
    , { time: 70699, content: "[37m"}
    , { time: 70699, content: "[40mnpm[0m"}
    , { time: 70699, content: " [0m[32m[40mhttp[0m [0m"}
    , { time: 70700, content: "[35mGET[0m https://registry.npmjs.org/raw-body/1.3.1\r\n[0m"}
    , { time: 70700, content: "[37m"}
    , { time: 70700, content: "[40mnpm[0m [0m[32m"}
    , { time: 70700, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/tiny-lr-fork/0.0.5\r\n[0m"}
    , { time: 70714, content: "[37m"}
    , { time: 70714, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 70714, content: "http[0m [0m[35mGET"}
    , { time: 70714, content: "[0m https://registry.npmjs.org/gaze\r\n[0m"}
    , { time: 70717, content: "[37m"}
    , { time: 70717, content: "[40mnpm[0m"}
    , { time: 70717, content: " [0m[32m[40mhttp[0m"}
    , { time: 70717, content: " [0m[35mGET[0m https://registry.npmjs.org/type-is\r\n[0m"}
    , { time: 70766, content: "[37m"}
    , { time: 70767, content: "[40mnpm[0m [0m[32m"}
    , { time: 70767, content: "[40mhttp[0m "}
    , { time: 70767, content: "[0m[35mGET[0m https://registry.npmjs.org/lodash\r\n[0m"}
    , { time: 70771, content: "[37m"}
    , { time: 70772, content: "[40mnpm[0m [0m"}
    , { time: 70772, content: "[32m[40mhttp[0m [0m"}
    , { time: 70772, content: "[35mGET[0m https://registry.npmjs.org/multimatch/-/multimatch-1.0.1.tgz\r\n[0m"}
    , { time: 70807, content: "[37m"}
    , { time: 70807, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 70807, content: "http[0m [0m[35m304[0m"}
    , { time: 70807, content: " https://registry.npmjs.org/text-table\r\n[0m"}
    , { time: 70826, content: "[37m"}
    , { time: 70826, content: "[40mnpm[0m"}
    , { time: 70826, content: " [0m[32m"}
    , { time: 70826, content: "[40mhttp[0m "}
    , { time: 70826, content: "[0m[35m304[0m https://registry.npmjs.org/hooker\r\n"}
    , { time: 70826, content: "[0m"}
    , { time: 70844, content: "[37m[40m"}
    , { time: 70844, content: "npm[0m [0m[32m[40mhttp"}
    , { time: 70844, content: "[0m [0m"}
    , { time: 70844, content: "[35mGET[0m https://registry.npmjs.org/async\r\n[0m"}
    , { time: 70870, content: "[37m"}
    , { time: 70870, content: "[40mnpm[0m "}
    , { time: 70870, content: "[0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/date-time\r\n[0m"}
    , { time: 70922, content: "[37m"}
    , { time: 70922, content: "[40mnpm"}
    , { time: 70923, content: "[0m"}
    , { time: 70923, content: " [0m[32m"}
    , { time: 70923, content: "[40mhttp"}
    , { time: 70923, content: "[0m [0m[35m304[0m"}
    , { time: 70923, content: " https://registry.npmjs.org/ms/0.6.2\r\n[0m"}
    , { time: 71005, content: "[37m"}
    , { time: 71005, content: "[40mnpm"}
    , { time: 71006, content: "[0m"}
    , { time: 71006, content: " [0m[32m[40m"}
    , { time: 71006, content: "http[0m "}
    , { time: 71006, content: "[0m[35m304[0m https://registry.npmjs.org/fresh/0.2.4\r\n"}
    , { time: 71006, content: "[0m"}
    , { time: 71114, content: "[37m"}
    , { time: 71114, content: "[40mnpm[0m "}
    , { time: 71114, content: "[0m[32m"}
    , { time: 71114, content: "[40mhttp[0m [0m"}
    , { time: 71114, content: "[35m304[0m"}
    , { time: 71114, content: " https://registry.npmjs.org/pretty-ms\r\n[0m"}
    , { time: 71122, content: "[37m"}
    , { time: 71122, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 71122, content: "http[0m [0m[35m"}
    , { time: 71122, content: "304[0m https://registry.npmjs.org/etag\r\n[0m"}
    , { time: 71136, content: "[37m"}
    , { time: 71136, content: "[40mnpm[0m [0m"}
    , { time: 71137, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 71137, content: "GET[0m https://registry.npmjs.org/colors\r\n[0m"}
    , { time: 71141, content: "[37m"}
    , { time: 71141, content: "[40mnpm[0m "}
    , { time: 71141, content: "[0m[32m[40mhttp[0m "}
    , { time: 71141, content: "[0m[35mGET[0m https://registry.npmjs.org/eventemitter2\r\n[0m"}
    , { time: 71143, content: "[37m"}
    , { time: 71143, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 71143, content: "[35mGET[0m https://registry.npmjs.org/dateformat/1.0.2-1.2.3\r\n[0m"}
    , { time: 71169, content: "[37m"}
    , { time: 71169, content: "[40mnpm[0m [0m[32m"}
    , { time: 71169, content: "[40m"}
    , { time: 71169, content: "http[0m "}
    , { time: 71169, content: "[0m[35mGET"}
    , { time: 71169, content: "[0m https://registry.npmjs.org/iconv-lite\r\n[0m"}
    , { time: 71170, content: "[37m"}
    , { time: 71170, content: "[40mnpm"}
    , { time: 71170, content: "[0m "}
    , { time: 71170, content: "[0m[32m[40mhttp[0m "}
    , { time: 71171, content: "[0m[35mGET[0m https://registry.npmjs.org/minimatch\r\n"}
    , { time: 71171, content: "[0m"}
    , { time: 71172, content: "[37m"}
    , { time: 71172, content: "[40mnpm[0m"}
    , { time: 71172, content: " [0m[32m[40mhttp[0m"}
    , { time: 71172, content: " [0m[35mGET[0m https://registry.npmjs.org/underscore.string"}
    , { time: 71172, content: "\r\n[0m"}
    , { time: 71174, content: "[37m"}
    , { time: 71174, content: "[40mnpm"}
    , { time: 71174, content: "[0m [0m[32m[40mhttp[0m"}
    , { time: 71174, content: " [0m[35mGET[0m"}
    , { time: 71174, content: " https://registry.npmjs.org/lodash\r\n[0m"}
    , { time: 71176, content: "[37m"}
    , { time: 71176, content: "[40m"}
    , { time: 71176, content: "npm[0m [0m"}
    , { time: 71176, content: "[32m[40m"}
    , { time: 71176, content: "http[0m [0m[35m"}
    , { time: 71176, content: "GET[0m https://registry.npmjs.org/nopt\r\n"}
    , { time: 71176, content: "[0m"}
    , { time: 71177, content: "[37m"}
    , { time: 71177, content: "[40m"}
    , { time: 71177, content: "npm[0m [0m"}
    , { time: 71177, content: "[32m[40mhttp"}
    , { time: 71177, content: "[0m [0m[35mGET"}
    , { time: 71177, content: "[0m https://registry.npmjs.org/getobject\r\n[0m"}
    , { time: 71179, content: "[37m"}
    , { time: 71179, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 71179, content: "[0m "}
    , { time: 71179, content: "[0m[35mGET[0m https://registry.npmjs.org/grunt-legacy-util\r\n[0m"}
    , { time: 71180, content: "[37m"}
    , { time: 71180, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 71180, content: "http[0m "}
    , { time: 71180, content: "[0m[35mGET[0m https://registry.npmjs.org/js-yaml\r\n[0m"}
    , { time: 71181, content: "[37m"}
    , { time: 71181, content: "[40mnpm[0m"}
    , { time: 71181, content: " [0m[32m[40m"}
    , { time: 71181, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/exit\r\n"}
    , { time: 71181, content: "[0m"}
    , { time: 71184, content: "[37m"}
    , { time: 71184, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 71184, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/async"}
    , { time: 71184, content: "\r\n[0m"}
    , { time: 71186, content: "[37m"}
    , { time: 71186, content: "[40mnpm[0m"}
    , { time: 71186, content: " [0m[32m[40mhttp[0m"}
    , { time: 71186, content: " [0m[35mGET[0m https://registry.npmjs.org/grunt-legacy-log"}
    , { time: 71186, content: "\r\n[0m"}
    , { time: 71187, content: "[37m"}
    , { time: 71187, content: "[40mnpm[0m"}
    , { time: 71187, content: " [0m[32m[40mhttp"}
    , { time: 71187, content: "[0m [0m[35m304[0m"}
    , { time: 71187, content: " https://registry.npmjs.org/basic-auth/1.0.0\r\n[0m"}
    , { time: 71188, content: "[37m"}
    , { time: 71188, content: "[40mnpm[0m"}
    , { time: 71188, content: " [0m[32m[40mhttp[0m"}
    , { time: 71188, content: " [0m[35mGET[0m"}
    , { time: 71188, content: " https://registry.npmjs.org/rimraf\r\n[0m"}
    , { time: 71189, content: "[37m"}
    , { time: 71189, content: "[40mnpm"}
    , { time: 71189, content: "[0m [0m[32m[40mhttp"}
    , { time: 71189, content: "[0m [0m[35mGET[0m"}
    , { time: 71189, content: " https://registry.npmjs.org/which\r\n[0m"}
    , { time: 71209, content: "[37m"}
    , { time: 71209, content: "[40mnpm[0m [0m[32m[40mhttp[0m"}
    , { time: 71209, content: " [0m[35m"}
    , { time: 71209, content: "GET[0m https://registry.npmjs.org/coffee-script\r\n[0m"}
    , { time: 71257, content: "[37m"}
    , { time: 71257, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 71257, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/date-time/-/date-time-1.0.0.tgz\r\n"}
    , { time: 71257, content: "[0m"}
    , { time: 71264, content: "[37m"}
    , { time: 71264, content: "[40mnpm[0m [0m[32m"}
    , { time: 71264, content: "[40mhttp[0m [0m[35m304"}
    , { time: 71264, content: "[0m https://registry.npmjs.org/cookie/0.1.2\r\n[0m"}
    , { time: 71314, content: "[37m"}
    , { time: 71314, content: "[40mnpm[0m [0m[32m"}
    , { time: 71314, content: "[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/cookie-signature/1.0.5"}
    , { time: 71314, content: "\r\n[0m"}
    , { time: 71355, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/glob\r\n[0m"}
    , { time: 71355, content: "[37m"}
    , { time: 71356, content: "[40mnpm"}
    , { time: 71356, content: "[0m [0m"}
    , { time: 71356, content: "[32m[40mhttp[0m [0m[35mGET"}
    , { time: 71356, content: "[0m https://registry.npmjs.org/pretty-ms/-/pretty-ms-1.0.0.tgz\r\n[0m"}
    , { time: 71371, content: "[37m"}
    , { time: 71371, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 71371, content: "http[0m [0m[35m200[0m https://registry.npmjs.org/on-finished/2.1.1"}
    , { time: 71371, content: "\r\n[0m"}
    , { time: 71372, content: "[37m"}
    , { time: 71372, content: "[40mnpm[0m"}
    , { time: 71372, content: " [0m[32m[40mhttp[0m "}
    , { time: 71372, content: "[0m[35m304[0m https://registry.npmjs.org/depd\r\n"}
    , { time: 71372, content: "[0m"}
    , { time: 71395, content: "[37m[40m"}
    , { time: 71395, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 71395, content: " [0m[35m"}
    , { time: 71395, content: "304[0m https://registry.npmjs.org/on-finished\r\n[0m"}
    , { time: 71467, content: "[37m"}
    , { time: 71467, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 71467, content: "[0m [0m[35m200[0m https://registry.npmjs.org/multimatch/-/multimatch-1.0.1.tgz\r\n[0m"}
    , { time: 71470, content: "[37m"}
    , { time: 71471, content: "[40mnpm[0m"}
    , { time: 71471, content: " [0m[32m[40mhttp[0m"}
    , { time: 71471, content: " [0m[35mGET[0m https://registry.npmjs.org/on-finished/-/on-finished-2.1.1.tgz\r\n"}
    , { time: 71471, content: "[0m"}
    , { time: 71562, content: "[37m"}
    , { time: 71562, content: "[40mnpm[0m"}
    , { time: 71563, content: " "}
    , { time: 71563, content: "[0m[32m"}
    , { time: 71563, content: "[40mhttp[0m"}
    , { time: 71563, content: " [0m[35m304[0m https://registry.npmjs.org/media-typer/0.3.0\r\n[0m"}
    , { time: 71609, content: "[37m"}
    , { time: 71609, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 71609, content: "[0m [0m[35m304[0m https://registry.npmjs.org/raw-body/1.3.1\r\n[0m"}
    , { time: 71642, content: "[37m"}
    , { time: 71642, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 71642, content: "[0m [0m[35m200[0m https://registry.npmjs.org/iconv-lite/0.4.5\r\n[0m"}
    , { time: 71728, content: "[37m"}
    , { time: 71728, content: "[40mnpm[0m [0m[32m"}
    , { time: 71729, content: "[40mhttp[0m [0m[35m200[0m"}
    , { time: 71729, content: " https://registry.npmjs.org/qs/2.3.3\r\n[0m"}
    , { time: 71753, content: "[37m"}
    , { time: 71753, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 71753, content: "http[0m "}
    , { time: 71753, content: "[0m[35m200[0m https://registry.npmjs.org/bytes/1.0.0\r\n[0m"}
    , { time: 71812, content: "[37m"}
    , { time: 71812, content: "[40mnpm[0m [0m[32m"}
    , { time: 71812, content: "[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/tiny-lr-fork/0.0.5"}
    , { time: 71812, content: "\r\n[0m"}
    , { time: 71842, content: "[37m"}
    , { time: 71842, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 71842, content: "http[0m [0m"}
    , { time: 71842, content: "[35m304[0m https://registry.npmjs.org/type-is\r\n[0m"}
    , { time: 71862, content: "[37m"}
    , { time: 71862, content: "[40mnpm[0m [0m"}
    , { time: 71862, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 71862, content: "304[0m https://registry.npmjs.org/gaze\r\n[0m"}
    , { time: 71980, content: "[37m"}
    , { time: 71980, content: "[40mnpm[0m [0m[32m"}
    , { time: 71980, content: "[40mhttp[0m [0m[35m"}
    , { time: 71980, content: "304[0m https://registry.npmjs.org/lodash\r\n[0m"}
    , { time: 71984, content: "[37m"}
    , { time: 71984, content: "[40mnpm[0m [0m"}
    , { time: 71984, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 71984, content: "200[0m https://registry.npmjs.org/date-time/-/date-time-1.0.0.tgz\r\n[0m"}
    , { time: 72029, content: "[37m"}
    , { time: 72029, content: "[40mnpm[0m [0m[32m"}
    , { time: 72030, content: "[40mhttp[0m [0m[35mGET"}
    , { time: 72030, content: "[0m https://registry.npmjs.org/forever-agent\r\n[0m"}
    , { time: 72063, content: "[37m"}
    , { time: 72063, content: "[40mnpm[0m [0m[32m"}
    , { time: 72063, content: "[40mhttp[0m"}
    , { time: 72064, content: " [0m[35m304[0m https://registry.npmjs.org/colors\r\n"}
    , { time: 72064, content: "[0m"}
    , { time: 72070, content: "[37m"}
    , { time: 72071, content: "[40mnpm[0m "}
    , { time: 72071, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 72071, content: "[35m304[0m https://registry.npmjs.org/dateformat/1.0.2-1.2.3\r\n[0m"}
    , { time: 72091, content: "[37m"}
    , { time: 72091, content: "[40mnpm[0m [0m"}
    , { time: 72091, content: "[32m[40mhttp[0m [0m[35m200"}
    , { time: 72091, content: "[0m https://registry.npmjs.org/pretty-ms/-/pretty-ms-1.0.0.tgz\r\n[0m"}
    , { time: 72095, content: "[37m"}
    , { time: 72095, content: "[40mnpm[0m"}
    , { time: 72095, content: " [0m[32m[40mhttp[0m"}
    , { time: 72095, content: " [0m[35m304[0m https://registry.npmjs.org/eventemitter2\r\n"}
    , { time: 72095, content: "[0m"}
    , { time: 72161, content: "[37m"}
    , { time: 72161, content: "[40mnpm[0m [0m[32m"}
    , { time: 72161, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 72161, content: " https://registry.npmjs.org/form-data\r\n[0m"}
    , { time: 72163, content: "[37m"}
    , { time: 72163, content: "[40mnpm[0m"}
    , { time: 72163, content: " [0m[32m[40mhttp"}
    , { time: 72163, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/json-stringify-safe"}
    , { time: 72163, content: "\r\n[0m"}
    , { time: 72164, content: "[37m"}
    , { time: 72164, content: "[40mnpm[0m"}
    , { time: 72164, content: " [0m[32m"}
    , { time: 72164, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 72164, content: " https://registry.npmjs.org/node-uuid\r\n[0m"}
    , { time: 72165, content: "[37m"}
    , { time: 72165, content: "[40mnpm"}
    , { time: 72165, content: "[0m [0m[32m"}
    , { time: 72165, content: "[40mhttp[0m"}
    , { time: 72165, content: " [0m[35mGET[0m https://registry.npmjs.org/mime-types\r\n"}
    , { time: 72165, content: "[0m"}
    , { time: 72166, content: "[37m"}
    , { time: 72166, content: "[40mnpm[0m "}
    , { time: 72166, content: "[0m[32m[40mhttp[0m "}
    , { time: 72166, content: "[0m[35mGET[0m https://registry.npmjs.org/tunnel-agent\r\n[0m"}
    , { time: 72177, content: "[37m"}
    , { time: 72177, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 72177, content: "http[0m "}
    , { time: 72177, content: "[0m[35m304[0m https://registry.npmjs.org/iconv-lite\r\n[0m"}
    , { time: 72198, content: "[37m"}
    , { time: 72198, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/http-signature\r\n[0m"}
    , { time: 72202, content: "[37m"}
    , { time: 72202, content: "[40mnpm[0m [0m[32m"}
    , { time: 72202, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/oauth-sign\r\n[0m"}
    , { time: 72208, content: "[37m"}
    , { time: 72208, content: "[40mnpm[0m [0m[32m"}
    , { time: 72208, content: "[40mhttp[0m [0m[35m"}
    , { time: 72208, content: "GET[0m https://registry.npmjs.org/tough-cookie\r\n[0m"}
    , { time: 72210, content: "[37m"}
    , { time: 72210, content: "[40mnpm[0m"}
    , { time: 72211, content: " [0m[32m[40mhttp[0m"}
    , { time: 72211, content: " [0m[35mGET[0m https://registry.npmjs.org/hawk/1.1.1\r\n"}
    , { time: 72211, content: "[0m"}
    , { time: 72211, content: "[37m"}
    , { time: 72211, content: "[40mnpm[0m"}
    , { time: 72211, content: " [0m[32m"}
    , { time: 72211, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 72211, content: " https://registry.npmjs.org/aws-sign2\r\n[0m"}
    , { time: 72212, content: "[37m"}
    , { time: 72212, content: "[40mnpm[0m"}
    , { time: 72212, content: " [0m[32m[40mhttp[0m "}
    , { time: 72212, content: "[0m[35mGET[0m https://registry.npmjs.org/combined-stream\r\n"}
    , { time: 72212, content: "[0m"}
    , { time: 72214, content: "[37m"}
    , { time: 72214, content: "[40mnpm[0m"}
    , { time: 72214, content: " [0m[32m[40mhttp[0m "}
    , { time: 72214, content: "[0m[35mGET[0m https://registry.npmjs.org/qs\r\n"}
    , { time: 72215, content: "[0m"}
    , { time: 72216, content: "[37m"}
    , { time: 72216, content: "[40mnpm[0m "}
    , { time: 72216, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 72216, content: "[35mGET[0m https://registry.npmjs.org/bl\r\n"}
    , { time: 72216, content: "[0m"}
    , { time: 72218, content: "[37m"}
    , { time: 72218, content: "[40mnpm[0m"}
    , { time: 72218, content: " [0m[32m[40mhttp[0m"}
    , { time: 72218, content: " [0m[35mGET[0m https://registry.npmjs.org/stringstream\r\n"}
    , { time: 72218, content: "[0m"}
    , { time: 72220, content: "[37m"}
    , { time: 72220, content: "[40mnpm[0m [0m"}
    , { time: 72220, content: "[32m[40mhttp[0m [0m[35mGET"}
    , { time: 72220, content: "[0m https://registry.npmjs.org/caseless\r\n[0m"}
    , { time: 72235, content: "[37m"}
    , { time: 72235, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 72235, content: "http[0m [0m[35mGET"}
    , { time: 72235, content: "[0m https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.5.tgz\r\n[0m"}
    , { time: 72242, content: "[37m"}
    , { time: 72242, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 72242, content: "[35mGET[0m https://registry.npmjs.org/bytes/-/bytes-1.0.0.tgz\r\n[0m"}
    , { time: 72243, content: "[37m"}
    , { time: 72243, content: "[40mnpm[0m "}
    , { time: 72244, content: "[0m[32m[40mhttp[0m "}
    , { time: 72244, content: "[0m[35m304[0m https://registry.npmjs.org/async\r\n[0m"}
    , { time: 72251, content: "[37m"}
    , { time: 72251, content: "[40mnpm[0m "}
    , { time: 72251, content: "[0m[32m[40mhttp[0m [0m[35m"}
    , { time: 72251, content: "200[0m https://registry.npmjs.org/on-finished/-/on-finished-2.1.1.tgz\r\n[0m"}
    , { time: 72259, content: "[37m"}
    , { time: 72259, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 72260, content: "http[0m [0m[35mGET[0m"}
    , { time: 72260, content: " https://registry.npmjs.org/qs/-/qs-2.3.3.tgz\r\n[0m"}
    , { time: 72273, content: "[37m"}
    , { time: 72273, content: "[40mnpm[0m [0m[32m"}
    , { time: 72273, content: "[40m"}
    , { time: 72273, content: "http[0m [0m[35m304[0m"}
    , { time: 72273, content: " https://registry.npmjs.org/underscore.string\r\n[0m"}
    , { time: 72314, content: "[37m"}
    , { time: 72314, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 72314, content: "[0m [0m[35m304[0m https://registry.npmjs.org/minimatch\r\n[0m"}
    , { time: 72350, content: "[37m"}
    , { time: 72351, content: "[40mnpm[0m [0m[32m"}
    , { time: 72351, content: "[40mhttp[0m [0m[35m304[0m"}
    , { time: 72351, content: " https://registry.npmjs.org/lodash\r\n[0m"}
    , { time: 72429, content: "[37m"}
    , { time: 72429, content: "[40mnpm[0m [0m[32m"}
    , { time: 72429, content: "[40mhttp[0m"}
    , { time: 72429, content: " [0m[35m304[0m https://registry.npmjs.org/nopt\r\n[0m"}
    , { time: 72495, content: "[37m"}
    , { time: 72495, content: "[40mnpm[0m [0m[32m"}
    , { time: 72495, content: "[40mhttp[0m [0m[35m304[0m"}
    , { time: 72495, content: " https://registry.npmjs.org/getobject\r\n[0m"}
    , { time: 72523, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m"}
    , { time: 72523, content: " [0m[35m304[0m https://registry.npmjs.org/js-yaml\r\n"}
    , { time: 72523, content: "[0m"}
    , { time: 72527, content: "[37m"}
    , { time: 72527, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 72527, content: "[0m [0m[35m304[0m https://registry.npmjs.org/grunt-legacy-util\r\n[0m"}
    , { time: 72549, content: "[37m"}
    , { time: 72549, content: "[40mnpm[0m [0m[32m"}
    , { time: 72549, content: "[40mhttp[0m [0m[35m"}
    , { time: 72549, content: "304[0m https://registry.npmjs.org/exit\r\n"}
    , { time: 72549, content: "[0m"}
    , { time: 72632, content: "[37m"}
    , { time: 72632, content: "[40mnpm[0m [0m"}
    , { time: 72632, content: "[32m[40mhttp[0m "}
    , { time: 72632, content: "[0m[35m304[0m https://registry.npmjs.org/async\r\n"}
    , { time: 72633, content: "[0m"}
    , { time: 72725, content: "[37m"}
    , { time: 72725, content: "[40mnpm[0m"}
    , { time: 72726, content: " [0m"}
    , { time: 72727, content: "[32m"}
    , { time: 72727, content: "[40mhttp"}
    , { time: 72727, content: "[0m [0m[35m"}
    , { time: 72727, content: "304[0m https://registry.npmjs.org/rimraf\r\n"}
    , { time: 72727, content: "[0m"}
    , { time: 72750, content: "[37m"}
    , { time: 72750, content: "[40mnpm[0m"}
    , { time: 72750, content: " [0m[32m[40mhttp[0m"}
    , { time: 72750, content: " [0m[35m304[0m"}
    , { time: 72750, content: " https://registry.npmjs.org/grunt-legacy-log\r\n[0m"}
    , { time: 72782, content: "[37m"}
    , { time: 72782, content: "[40mnpm[0m "}
    , { time: 72782, content: "[0m[32m[40mhttp[0m"}
    , { time: 72782, content: " [0m[35m304[0m"}
    , { time: 72782, content: " https://registry.npmjs.org/which\r\n[0m"}
    , { time: 72829, content: "[37m"}
    , { time: 72829, content: "[40mnpm[0m"}
    , { time: 72830, content: " [0m[32m"}
    , { time: 72830, content: "[40mhttp[0m [0m[35m"}
    , { time: 72830, content: "304[0m https://registry.npmjs.org/glob\r\n[0m"}
    , { time: 72935, content: "[37m"}
    , { time: 72935, content: "[40mnpm[0m"}
    , { time: 72936, content: " [0m[32m[40mhttp[0m [0m"}
    , { time: 72936, content: "[35m200[0m https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.5.tgz\r\n"}
    , { time: 72936, content: "[0m"}
    , { time: 72975, content: "[37m"}
    , { time: 72975, content: "[40mnpm[0m "}
    , { time: 72976, content: "[0m[32m[40mhttp[0m"}
    , { time: 72976, content: " [0m[35m304[0m"}
    , { time: 72976, content: " https://registry.npmjs.org/forever-agent\r\n[0m"}
    , { time: 72993, content: "[37m"}
    , { time: 72993, content: "[40mnpm"}
    , { time: 72994, content: "[0m [0m[32m"}
    , { time: 72994, content: "[40mhttp[0m [0m"}
    , { time: 72994, content: "[35m200[0m https://registry.npmjs.org/bytes/-/bytes-1.0.0.tgz\r\n[0m"}
    , { time: 72999, content: "[37m"}
    , { time: 73000, content: "[40mnpm[0m"}
    , { time: 73000, content: " [0m[32m[40mhttp[0m "}
    , { time: 73000, content: "[0m[35m304[0m https://registry.npmjs.org/form-data\r\n[0m"}
    , { time: 73029, content: "[37m"}
    , { time: 73029, content: "[40mnpm[0m [0m"}
    , { time: 73029, content: "[32m[40m"}
    , { time: 73029, content: "http[0m [0m[35m304"}
    , { time: 73029, content: "[0m https://registry.npmjs.org/node-uuid\r\n[0m"}
    , { time: 73040, content: "[37m"}
    , { time: 73040, content: "[40mnpm[0m [0m"}
    , { time: 73041, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 73041, content: "304[0m https://registry.npmjs.org/json-stringify-safe\r\n[0m"}
    , { time: 73048, content: "[37m"}
    , { time: 73048, content: "[40mnpm"}
    , { time: 73048, content: "[0m [0m[32m[40mhttp[0m"}
    , { time: 73048, content: " [0m[35m200[0m https://registry.npmjs.org/qs/-/qs-2.3.3.tgz\r\n[0m"}
    , { time: 73085, content: "[37m"}
    , { time: 73085, content: "[40mnpm[0m [0m"}
    , { time: 73085, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 73085, content: "200[0m https://registry.npmjs.org/coffee-script\r\n[0m"}
    , { time: 73225, content: "[37m"}
    , { time: 73226, content: "[40mnpm[0m [0m[32m"}
    , { time: 73226, content: "[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/mime-types\r\n"}
    , { time: 73226, content: "[0m"}
    , { time: 73249, content: "[37m"}
    , { time: 73249, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 73249, content: "http[0m [0m[35m304[0m https://registry.npmjs.org/tunnel-agent\r\n"}
    , { time: 73249, content: "[0m"}
    , { time: 73253, content: "[37m"}
    , { time: 73253, content: "[40mnpm[0m [0m"}
    , { time: 73253, content: "[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/oauth-sign\r\n[0m"}
    , { time: 73289, content: "[37m"}
    , { time: 73289, content: "[40mnpm[0m [0m[32m"}
    , { time: 73289, content: "[40mhttp[0m"}
    , { time: 73289, content: " [0m[35m304[0m https://registry.npmjs.org/http-signature\r\n[0m"}
    , { time: 73307, content: "[37m"}
    , { time: 73307, content: "[40mnpm[0m [0m[32m"}
    , { time: 73307, content: "[40mhttp[0m [0m[35m"}
    , { time: 73307, content: "304[0m https://registry.npmjs.org/tough-cookie\r\n[0m"}
    , { time: 73434, content: "[37m"}
    , { time: 73434, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 73434, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/vary\r\n[0m"}
    , { time: 73440, content: "[37m"}
    , { time: 73440, content: "[40mnpm[0m"}
    , { time: 73440, content: " [0m[32m"}
    , { time: 73440, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/send/0.10.1\r\n"}
    , { time: 73440, content: "[0m"}
    , { time: 73442, content: "[37m"}
    , { time: 73442, content: "[40mnpm[0m"}
    , { time: 73442, content: " [0m[32m[40mhttp[0m "}
    , { time: 73442, content: "[0m[35mGET[0m https://registry.npmjs.org/merge-descriptors/0.0.2\r\n"}
    , { time: 73442, content: "[0m"}
    , { time: 73444, content: "[37m"}
    , { time: 73444, content: "[40mnpm[0m"}
    , { time: 73444, content: " [0m[32m[40mhttp[0m "}
    , { time: 73444, content: "[0m[35mGET[0m https://registry.npmjs.org/utils-merge/1.0.0\r\n"}
    , { time: 73444, content: "[0m"}
    , { time: 73449, content: "[37m"}
    , { time: 73449, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 73449, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/escape-html/1.0.1"}
    , { time: 73449, content: "\r\n[0m"}
    , { time: 73473, content: "[37m"}
    , { time: 73473, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 73473, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/serve-static\r\n[0m"}
    , { time: 73481, content: "[37m"}
    , { time: 73481, content: "[40mnpm[0m "}
    , { time: 73481, content: "[0m[32m[40m"}
    , { time: 73481, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/finalhandler/0.3.2\r\n"}
    , { time: 73481, content: "[0m"}
    , { time: 73483, content: "[37m"}
    , { time: 73483, content: "[40mnpm[0m"}
    , { time: 73483, content: " [0m[32m"}
    , { time: 73483, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/parseurl"}
    , { time: 73483, content: "\r\n[0m"}
    , { time: 73485, content: "[37m"}
    , { time: 73485, content: "[40mnpm[0m "}
    , { time: 73485, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 73485, content: "[35mGET[0m https://registry.npmjs.org/path-to-regexp/0.1.3\r\n[0m"}
    , { time: 73487, content: "[37m"}
    , { time: 73487, content: "[40mnpm[0m "}
    , { time: 73487, content: "[0m[32m[40mhttp[0m [0m[35m"}
    , { time: 73487, content: "GET[0m https://registry.npmjs.org/content-disposition/0.5.0\r\n[0m"}
    , { time: 73516, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/hawk/1.1.1\r\n[0m[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/qs\r\n[0m"}
    , { time: 73523, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/aws-sign2\r\n[0m[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/combined-stream\r\n[0m"}
    , { time: 73528, content: "[37m"}
    , { time: 73528, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 73528, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/accepts\r\n[0m"}
    , { time: 73529, content: "[37m"}
    , { time: 73530, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/methods/1.1.0"}
    , { time: 73530, content: "\r\n[0m"}
    , { time: 73557, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/bl\r\n[0m"}
    , { time: 73600, content: "[37m"}
    , { time: 73600, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 73600, content: "http[0m "}
    , { time: 73600, content: "[0m[35mGET[0m"}
    , { time: 73600, content: " https://registry.npmjs.org/range-parser\r\n[0m"}
    , { time: 73716, content: "[37m"}
    , { time: 73716, content: "[40mnpm[0m [0m"}
    , { time: 73716, content: "[32m[40mhttp[0m [0m[35m304"}
    , { time: 73716, content: "[0m https://registry.npmjs.org/stringstream\r\n[0m"}
    , { time: 73719, content: "[37m"}
    , { time: 73719, content: "[40mnpm[0m "}
    , { time: 73719, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 73719, content: "[35m304[0m https://registry.npmjs.org/vary\r\n[0m"}
    , { time: 73731, content: "[37m"}
    , { time: 73731, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 73731, content: "[0m [0m[35m304[0m https://registry.npmjs.org/send/0.10.1\r\n[0m"}
    , { time: 73760, content: "[37m"}
    , { time: 73760, content: "[40mnpm[0m [0m[32m"}
    , { time: 73760, content: "[40mhttp[0m [0m[35m304[0m"}
    , { time: 73760, content: " https://registry.npmjs.org/merge-descriptors/0.0.2\r\n[0m"}
    , { time: 73769, content: "[37m"}
    , { time: 73769, content: "[40mnpm[0m"}
    , { time: 73769, content: " [0m[32m[40mhttp[0m"}
    , { time: 73769, content: " [0m[35m304[0m"}
    , { time: 73769, content: " https://registry.npmjs.org/caseless\r\n[0m"}
    , { time: 73913, content: "[37m"}
    , { time: 73913, content: "[40mnpm[0m [0m[32m"}
    , { time: 73913, content: "[40mhttp[0m [0m[35m304[0m"}
    , { time: 73913, content: " https://registry.npmjs.org/utils-merge/1.0.0\r\n[0m"}
    , { time: 73916, content: "[37m"}
    , { time: 73916, content: "[40mnpm[0m"}
    , { time: 73917, content: " [0m[32m[40mhttp[0m"}
    , { time: 73917, content: " [0m[35m304[0m https://registry.npmjs.org/escape-html/1.0.1\r\n"}
    , { time: 73917, content: "[0m"}
    , { time: 73984, content: "[37m"}
    , { time: 73984, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 73984, content: "[0m [0m[35m304[0m https://registry.npmjs.org/serve-static\r\n[0m"}
    , { time: 74009, content: "[37m"}
    , { time: 74009, content: "[40mnpm[0m [0m[32m"}
    , { time: 74010, content: "[40mhttp[0m [0m[35m304"}
    , { time: 74010, content: "[0m https://registry.npmjs.org/finalhandler/0.3.2\r\n[0m"}
    , { time: 74018, content: "[37m"}
    , { time: 74018, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 74019, content: "[0m [0m"}
    , { time: 74019, content: "[35m304[0m https://registry.npmjs.org/parseurl\r\n[0m"}
    , { time: 74045, content: "[37m"}
    , { time: 74045, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 74045, content: "[35mGET[0m https://registry.npmjs.org/proxy-addr\r\n[0m"}
    , { time: 74166, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/content-disposition/0.5.0\r\n[0m"}
    , { time: 74171, content: "[37m"}
    , { time: 74171, content: "[40mnpm[0m"}
    , { time: 74171, content: " [0m"}
    , { time: 74172, content: "[32m[40mhttp[0m [0m"}
    , { time: 74172, content: "[35m200[0m https://registry.npmjs.org/path-to-regexp/0.1.3\r\n[0m"}
    , { time: 74260, content: "[37m"}
    , { time: 74260, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 74260, content: "[0m [0m[35m304[0m https://registry.npmjs.org/methods/1.1.0\r\n"}
    , { time: 74260, content: "[0m"}
    , { time: 74267, content: "[37m"}
    , { time: 74267, content: "[40mnpm[0m "}
    , { time: 74267, content: "[0m[32m[40mhttp[0m [0m[35m"}
    , { time: 74267, content: "304[0m https://registry.npmjs.org/range-parser\r\n[0m"}
    , { time: 74416, content: "[37m"}
    , { time: 74416, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 74416, content: "http[0m "}
    , { time: 74416, content: "[0m[35m304[0m https://registry.npmjs.org/proxy-addr\r\n[0m"}
    , { time: 74440, content: "[37m"}
    , { time: 74440, content: "[40mnpm[0m [0m"}
    , { time: 74440, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 74440, content: "200[0m https://registry.npmjs.org/accepts\r\n[0m"}
    , { time: 74960, content: "[37m"}
    , { time: 74960, content: "[40mnpm[0m [0m"}
    , { time: 74960, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 74960, content: "GET[0m https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.3.tgz\r\n[0m"}
    , { time: 75554, content: "[37m"}
    , { time: 75554, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/crc/3.2.1\r\n[0m"}
    , { time: 75719, content: "[37m"}
    , { time: 75719, content: "[40mnpm[0m [0m[32m"}
    , { time: 75719, content: "[40mhttp[0m "}
    , { time: 75719, content: "[0m[35m200"}
    , { time: 75719, content: "[0m https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.3.tgz\r\n[0m"}
    , { time: 75724, content: "[37m"}
    , { time: 75724, content: "[40mnpm"}
    , { time: 75732, content: "[0m "}
    , { time: 75732, content: "[0m[32m[40mhttp"}
    , { time: 75732, content: "[0m [0m"}
    , { time: 75732, content: "[35mGET[0m https://registry.npmjs.org/array-union\r\n[0m"}
    , { time: 75732, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/array-differ\r\n[0m"}
    , { time: 75974, content: "[37m"}
    , { time: 75974, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 75974, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/globule\r\n[0m"}
    , { time: 76029, content: "[37m"}
    , { time: 76029, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 76029, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/abbrev\r\n[0m"}
    , { time: 76182, content: "[37m"}
    , { time: 76182, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 76182, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/parse-ms\r\n[0m"}
    , { time: 76251, content: "[37m"}
    , { time: 76251, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 76251, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/ansi-styles\r\n[0m"}
    , { time: 76252, content: "[37m"}
    , { time: 76252, content: "[40mnpm[0m"}
    , { time: 76252, content: " [0m[32m[40mhttp[0m "}
    , { time: 76252, content: "[0m[35mGET[0m https://registry.npmjs.org/strip-ansi\r\n[0m"}
    , { time: 76254, content: "[37m"}
    , { time: 76254, content: "[40mnpm[0m"}
    , { time: 76254, content: " [0m[32m[40mhttp[0m "}
    , { time: 76254, content: "[0m[35mGET[0m https://registry.npmjs.org/get-stdin\r\n[0m"}
    , { time: 76290, content: "[37m"}
    , { time: 76290, content: "[40mnpm[0m [0m[32m[40mhttp[0m"}
    , { time: 76290, content: " [0m[35mGET[0m https://registry.npmjs.org/supports-color\r\n[0m"}
    , { time: 76292, content: "[37m"}
    , { time: 76292, content: "[40mnpm[0m [0m[32m[40mhttp[0m"}
    , { time: 76292, content: " [0m[35mGET[0m https://registry.npmjs.org/has-ansi\r\n[0m"}
    , { time: 76293, content: "[37m"}
    , { time: 76293, content: "[40mnpm[0m [0m"}
    , { time: 76293, content: "[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/escape-string-regexp\r\n[0m"}
    , { time: 76362, content: "[37m[40mnpm"}
    , { time: 76362, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 76362, content: "[0m[35m304"}
    , { time: 76362, content: "[0m https://registry.npmjs.org/crc/3.2.1\r\n[0m"}
    , { time: 76384, content: "[37m"}
    , { time: 76384, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 76384, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/lru-cache\r\n"}
    , { time: 76384, content: "[0m"}
    , { time: 76416, content: "[37m"}
    , { time: 76416, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 76416, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/sigmund\r\n[0m"}
    , { time: 76505, content: "[37m"}
    , { time: 76505, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 76505, content: "http[0m [0m[35mGET"}
    , { time: 76505, content: "[0m https://registry.npmjs.org/debug\r\n[0m"}
    , { time: 76508, content: "[37m"}
    , { time: 76508, content: "[40mnpm[0m [0m"}
    , { time: 76508, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 76508, content: "304[0m https://registry.npmjs.org/array-differ\r\n[0m"}
    , { time: 76533, content: "[37m[40m"}
    , { time: 76533, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 76533, content: " [0m[35m304[0m https://registry.npmjs.org/array-union\r\n[0m"}
    , { time: 76627, content: "[37m"}
    , { time: 76627, content: "[40mnpm[0m [0m[32m"}
    , { time: 76627, content: "[40mhttp[0m [0m[35m200[0m"}
    , { time: 76627, content: " https://registry.npmjs.org/parse-ms\r\n[0m"}
    , { time: 76661, content: "[37m"}
    , { time: 76661, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/noptify\r\n[0m"}
    , { time: 76666, content: "[37m"}
    , { time: 76666, content: "[40mnpm[0m [0m"}
    , { time: 76666, content: "[32m[40mhttp[0m [0m[35mGET[0m"}
    , { time: 76666, content: " https://registry.npmjs.org/faye-websocket\r\n[0m"}
    , { time: 76722, content: "[37m"}
    , { time: 76722, content: "[40mnpm[0m [0m"}
    , { time: 76722, content: "[32m[40mhttp[0m [0m[35m304"}
    , { time: 76722, content: "[0m https://registry.npmjs.org/strip-ansi\r\n[0m"}
    , { time: 76739, content: "[37m"}
    , { time: 76739, content: "[40mnpm[0m "}
    , { time: 76739, content: "[0m[32m[40mhttp"}
    , { time: 76739, content: "[0m [0m[35mGET"}
    , { time: 76739, content: "[0m https://registry.npmjs.org/ee-first/1.1.0\r\n[0m"}
    , { time: 76749, content: "[37m"}
    , { time: 76749, content: "[40mnpm[0m [0m"}
    , { time: 76749, content: "[32m[40mhttp[0m "}
    , { time: 76749, content: "[0m[35m304"}
    , { time: 76749, content: "[0m https://registry.npmjs.org/ansi-styles\r\n[0m"}
    , { time: 76761, content: "[37m[40m"}
    , { time: 76762, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 76762, content: " [0m[35m"}
    , { time: 76762, content: "304[0m https://registry.npmjs.org/globule\r\n[0m"}
    , { time: 76772, content: "[37m"}
    , { time: 76772, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 76772, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/parse-ms/-/parse-ms-1.0.0.tgz\r\n"}
    , { time: 76772, content: "[0m"}
    , { time: 76775, content: "[37m"}
    , { time: 76775, content: "[40mnpm[0m "}
    , { time: 76775, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 76775, content: "[35mGET[0m https://registry.npmjs.org/array-union/-/array-union-1.0.1.tgz\r\n[0m"}
    , { time: 76778, content: "[37m"}
    , { time: 76778, content: "[40mnpm[0m [0m"}
    , { time: 76778, content: "[32m[40mhttp[0m [0m[35mGET"}
    , { time: 76778, content: "[0m https://registry.npmjs.org/array-differ/-/array-differ-1.0.0.tgz\r\n[0m"}
    , { time: 76829, content: "[37m[40m"}
    , { time: 76829, content: "npm[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 76829, content: "[35m304[0m https://registry.npmjs.org/get-stdin\r\n"}
    , { time: 76829, content: "[0m"}
    , { time: 76965, content: "[37m[40m"}
    , { time: 76965, content: "npm[0m [0m[32m[40mhttp"}
    , { time: 76965, content: "[0m [0m[35m304[0m https://registry.npmjs.org/supports-color\r\n[0m"}
    , { time: 76981, content: "[37m"}
    , { time: 76981, content: "[40mnpm[0m [0m[32m"}
    , { time: 76981, content: "[40mhttp"}
    , { time: 76991, content: "[0m"}
    , { time: 76991, content: " [0m[35mGET[0m https://registry.npmjs.org/inherits\r\n"}
    , { time: 76991, content: "[0m"}
    , { time: 77023, content: "[37m"}
    , { time: 77023, content: "[40mnpm[0m [0m[32m"}
    , { time: 77023, content: "[40mhttp[0m "}
    , { time: 77023, content: "[0m[35m304[0m https://registry.npmjs.org/has-ansi\r\n[0m"}
    , { time: 77028, content: "[37m"}
    , { time: 77028, content: "[40mnpm[0m [0m[32m"}
    , { time: 77028, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/graceful-fs\r\n[0m"}
    , { time: 77036, content: "[37m[40m"}
    , { time: 77036, content: "npm[0m [0m[32m"}
    , { time: 77036, content: "[40mhttp[0m"}
    , { time: 77036, content: " [0m[35m304[0m https://registry.npmjs.org/lru-cache\r\n[0m"}
    , { time: 77063, content: "[37m"}
    , { time: 77063, content: "[40mnpm[0m"}
    , { time: 77064, content: " [0m[32m"}
    , { time: 77064, content: "[40mhttp[0m [0m[35m"}
    , { time: 77064, content: "304[0m https://registry.npmjs.org/abbrev\r\n[0m"}
    , { time: 77248, content: "[37m"}
    , { time: 77248, content: "[40mnpm[0m [0m[32m"}
    , { time: 77248, content: "[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/escape-string-regexp\r\n"}
    , { time: 77248, content: "[0m"}
    , { time: 77291, content: "[37m"}
    , { time: 77291, content: "[40mnpm[0m [0m"}
    , { time: 77291, content: "[32m[40mhttp[0m [0m[35m304"}
    , { time: 77291, content: "[0m https://registry.npmjs.org/noptify\r\n[0m"}
    , { time: 77297, content: "[37m"}
    , { time: 77297, content: "[40mnpm[0m "}
    , { time: 77297, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 77298, content: "[35m304[0m https://registry.npmjs.org/debug\r\n[0m"}
    , { time: 77455, content: "[37m"}
    , { time: 77455, content: "[40mnpm[0m [0m"}
    , { time: 77455, content: "[32m[40mhttp[0m [0m[35m304[0m"}
    , { time: 77455, content: " https://registry.npmjs.org/sigmund\r\n[0m"}
    , { time: 77457, content: "[37m"}
    , { time: 77457, content: "[40mnpm"}
    , { time: 77457, content: "[0m [0m"}
    , { time: 77457, content: "[32m[40mhttp[0m [0m[35m200"}
    , { time: 77457, content: "[0m https://registry.npmjs.org/parse-ms/-/parse-ms-1.0.0.tgz\r\n[0m"}
    , { time: 77463, content: "[37m"}
    , { time: 77463, content: "[40m"}
    , { time: 77463, content: "npm[0m"}
    , { time: 77463, content: " [0m[32m[40mhttp[0m [0m[35m"}
    , { time: 77463, content: "200[0m https://registry.npmjs.org/array-differ/-/array-differ-1.0.0.tgz\r\n[0m"}
    , { time: 77494, content: "[37m"}
    , { time: 77494, content: "[40mnpm[0m [0m[32m"}
    , { time: 77494, content: "[40mhttp[0m "}
    , { time: 77494, content: "[0m[35m304[0m https://registry.npmjs.org/inherits\r\n[0m"}
    , { time: 77497, content: "[37m"}
    , { time: 77497, content: "[40mnpm"}
    , { time: 77497, content: "[0m [0m[32m[40mhttp"}
    , { time: 77497, content: "[0m [0m[35m200[0m"}
    , { time: 77497, content: " https://registry.npmjs.org/array-union/-/array-union-1.0.1.tgz\r\n[0m"}
    , { time: 77529, content: "[37m"}
    , { time: 77529, content: "[40mnpm[0m [0m[32m"}
    , { time: 77529, content: "[40mhttp[0m"}
    , { time: 77529, content: " [0m[35m304[0m https://registry.npmjs.org/ee-first/1.1.0\r\n[0m"}
    , { time: 77542, content: "[37m"}
    , { time: 77542, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 77542, content: "http[0m [0m"}
    , { time: 77542, content: "[35m304[0m https://registry.npmjs.org/graceful-fs\r\n[0m"}
    , { time: 77600, content: "[37m"}
    , { time: 77600, content: "[40mnpm[0m [0m[32m"}
    , { time: 77600, content: "[40mhttp[0m [0m[35m"}
    , { time: 77600, content: "200[0m https://registry.npmjs.org/faye-websocket\r\n[0m"}
    , { time: 78291, content: "[37m"}
    , { time: 78291, content: "[40mnpm[0m [0m[32m"}
    , { time: 78291, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/ansi-regex\r\n"}
    , { time: 78291, content: "[0m"}
    , { time: 78293, content: "[37m"}
    , { time: 78293, content: "[40mnpm[0m "}
    , { time: 78293, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 78294, content: "[35mGET[0m https://registry.npmjs.org/ansi-regex\r\n[0m"}
    , { time: 78514, content: "[37m"}
    , { time: 78514, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 78514, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/mkdirp\r\n[0m"}
    , { time: 78519, content: "[37m"}
    , { time: 78519, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 78519, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/constantinople\r\n"}
    , { time: 78519, content: "[0m"}
    , { time: 78521, content: "[37m"}
    , { time: 78521, content: "[40mnpm[0m "}
    , { time: 78521, content: "[0m[32m[40mhttp[0m [0m[35m"}
    , { time: 78521, content: "GET[0m https://registry.npmjs.org/character-parser/1.2.1\r\n[0m"}
    , { time: 78523, content: "[37m"}
    , { time: 78523, content: "[40mnpm[0m "}
    , { time: 78523, content: "[0m[32m[40mhttp[0m [0m[35m"}
    , { time: 78523, content: "GET[0m https://registry.npmjs.org/commander\r\n[0m"}
    , { time: 78526, content: "[37m"}
    , { time: 78526, content: "[40mnpm[0m "}
    , { time: 78526, content: "[0m[32m[40mhttp"}
    , { time: 78527, content: "[0m [0m[35mGET[0m"}
    , { time: 78527, content: " https://registry.npmjs.org/transformers/2.1.0\r\n[0m"}
    , { time: 78569, content: "[37m"}
    , { time: 78569, content: "[40mnpm[0m [0m"}
    , { time: 78570, content: "[32m[40mhttp[0m [0m"}
    , { time: 78570, content: "[35mGET[0m https://registry.npmjs.org/void-elements\r\n"}
    , { time: 78570, content: "[0m"}
    , { time: 78636, content: "[37m"}
    , { time: 78636, content: "[40mnpm[0m [0m"}
    , { time: 78636, content: "[32m[40mhttp[0m [0m"}
    , { time: 78636, content: "[35mGET[0m https://registry.npmjs.org/argparse\r\n[0m"}
    , { time: 78672, content: "[37m"}
    , { time: 78672, content: "[40mnpm[0m [0m[32m"}
    , { time: 78672, content: "[40mhttp"}
    , { time: 78672, content: "[0m [0m[35m"}
    , { time: 78672, content: "GET[0m https://registry.npmjs.org/with\r\n"}
    , { time: 78672, content: "[0m"}
    , { time: 78681, content: "[37m"}
    , { time: 78681, content: "[40mnpm[0m [0m[32m"}
    , { time: 78681, content: "[40mhttp[0m [0m[35mGET"}
    , { time: 78681, content: "[0m https://registry.npmjs.org/esprima\r\n[0m"}
    , { time: 78801, content: "[37m"}
    , { time: 78801, content: "[40mnpm[0m [0m"}
    , { time: 78801, content: "[32m[40mhttp[0m"}
    , { time: 78802, content: " [0m[35mGET[0m"}
    , { time: 78802, content: " https://registry.npmjs.org/array-uniq\r\n[0m"}
    , { time: 79126, content: "[37m"}
    , { time: 79126, content: "[40mnpm[0m [0m[32m"}
    , { time: 79126, content: "[40mhttp[0m [0m"}
    , { time: 79126, content: "[35m304[0m https://registry.npmjs.org/ansi-regex\r\n"}
    , { time: 79126, content: "[0m"}
    , { time: 79308, content: "[37m"}
    , { time: 79308, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 79308, content: "[0m [0m[35mGET[0m"}
    , { time: 79308, content: " https://registry.npmjs.org/delayed-stream/0.0.5\r\n[0m"}
    , { time: 79371, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 79371, content: "[37m[40m"}
    , { time: 79371, content: " [0m[35m"}
    , { time: 79371, content: "304[0m https://registry.npmjs.org/commander\r\n[0m"}
    , { time: 79373, content: "[37m"}
    , { time: 79373, content: "[40mnpm"}
    , { time: 79373, content: "[0m [0m"}
    , { time: 79373, content: "[32m[40mhttp[0m "}
    , { time: 79373, content: "[0m[35m304[0m https://registry.npmjs.org/constantinople\r\n"}
    , { time: 79373, content: "[0m"}
    , { time: 79385, content: "[37m"}
    , { time: 79385, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 79385, content: "[0m [0m[35mGET[0m"}
    , { time: 79385, content: " https://registry.npmjs.org/negotiator/0.4.9\r\n[0m"}
    , { time: 79388, content: "[37m"}
    , { time: 79388, content: "[40mnpm[0m [0m[32m"}
    , { time: 79388, content: "[40mhttp[0m [0m"}
    , { time: 79388, content: "[35m304[0m https://registry.npmjs.org/ansi-regex\r\n"}
    , { time: 79388, content: "[0m"}
    , { time: 79413, content: "[37m[40mnpm"}
    , { time: 79413, content: "[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 79413, content: "[35m304[0m https://registry.npmjs.org/mkdirp\r\n[0m"}
    , { time: 79457, content: "[37m[40m"}
    , { time: 79457, content: "npm[0m [0m[32m"}
    , { time: 79457, content: "[40mhttp[0m "}
    , { time: 79457, content: "[0m[35mGET[0m https://registry.npmjs.org/forwarded\r\n"}
    , { time: 79457, content: "[0m"}
    , { time: 79529, content: "[37m"}
    , { time: 79529, content: "[40mnpm[0m [0m[32m[40mhttp[0m"}
    , { time: 79529, content: " [0m[35mGET[0m https://registry.npmjs.org/ipaddr.js/0.1.5\r\n"}
    , { time: 79529, content: "[0m"}
    , { time: 79589, content: "[37m"}
    , { time: 79589, content: "[40mnpm[0m"}
    , { time: 79589, content: " [0m[32m[40mhttp"}
    , { time: 79589, content: "[0m [0m[35m"}
    , { time: 79590, content: "304[0m https://registry.npmjs.org/character-parser/1.2.1\r\n[0m"}
    , { time: 79612, content: "[37m"}
    , { time: 79612, content: "[40mnpm[0m [0m[32m"}
    , { time: 79612, content: "[40mhttp[0m [0m[35m"}
    , { time: 79612, content: "304[0m https://registry.npmjs.org/transformers/2.1.0\r\n[0m"}
    , { time: 79652, content: "[37m"}
    , { time: 79652, content: "[40mnpm[0m "}
    , { time: 79653, content: "[0m[32m[40mhttp[0m"}
    , { time: 79653, content: " [0m[35m304[0m"}
    , { time: 79653, content: " https://registry.npmjs.org/argparse\r\n[0m"}
    , { time: 79825, content: "[37m"}
    , { time: 79825, content: "[40mnpm[0m [0m[32m"}
    , { time: 79825, content: "[40mhttp[0m [0m"}
    , { time: 79825, content: "[35mGET[0m https://registry.npmjs.org/destroy/1.0.3\r\n"}
    , { time: 79825, content: "[0m"}
    , { time: 79861, content: "[37m"}
    , { time: 79861, content: "[40mnpm[0m [0m"}
    , { time: 79861, content: "[32m[40mhttp[0m "}
    , { time: 79861, content: "[0m[35m304"}
    , { time: 79861, content: "[0m https://registry.npmjs.org/array-uniq\r\n[0m"}
    , { time: 79864, content: "[37m"}
    , { time: 79864, content: "[40mnpm[0m"}
    , { time: 79864, content: " [0m[32m[40mhttp"}
    , { time: 79864, content: "[0m [0m[35m"}
    , { time: 79864, content: "304[0m https://registry.npmjs.org/void-elements\r\n[0m"}
    , { time: 79880, content: "[37m"}
    , { time: 79881, content: "[40mnpm[0m [0m"}
    , { time: 79881, content: "[32m[40mhttp[0m [0m"}
    , { time: 79881, content: "[35m304[0m https://registry.npmjs.org/esprima\r\n"}
    , { time: 79881, content: "[0m"}
    , { time: 79913, content: "[37m"}
    , { time: 79913, content: "[40mnpm[0m [0m[32m"}
    , { time: 79913, content: "[40mhttp[0m "}
    , { time: 79913, content: "[0m[35m304[0m https://registry.npmjs.org/with\r\n[0m"}
    , { time: 79958, content: "[37m"}
    , { time: 79958, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 79958, content: "http[0m [0m[35m304"}
    , { time: 79958, content: "[0m https://registry.npmjs.org/delayed-stream/0.0.5\r\n[0m"}
    , { time: 79977, content: "[37m"}
    , { time: 79977, content: "[40mnpm[0m [0m[32m"}
    , { time: 79977, content: "[40mhttp[0m [0m[35m"}
    , { time: 79977, content: "GET[0m https://registry.npmjs.org/mime/1.2.11\r\n[0m"}
    , { time: 80088, content: "[37m"}
    , { time: 80088, content: "[40mnpm[0m [0m[32m[40mhttp[0m "}
    , { time: 80088, content: "[0m[35m304[0m https://registry.npmjs.org/ipaddr.js/0.1.5\r\n"}
    , { time: 80088, content: "[0m"}
    , { time: 80114, content: "[37m[40m"}
    , { time: 80114, content: "npm[0m [0m[32m[40mhttp"}
    , { time: 80114, content: "[0m [0m"}
    , { time: 80114, content: "[35m304[0m https://registry.npmjs.org/forwarded\r\n[0m"}
    , { time: 80158, content: "[37m[40m"}
    , { time: 80158, content: "npm[0m [0m[32m[40mhttp[0m [0m[35m200[0m"}
    , { time: 80158, content: " https://registry.npmjs.org/negotiator/0.4.9\r\n[0m"}
    , { time: 80175, content: "[37m"}
    , { time: 80175, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 80175, content: "http[0m [0m[35m304"}
    , { time: 80175, content: "[0m https://registry.npmjs.org/destroy/1.0.3\r\n[0m"}
    , { time: 80265, content: "[37m"}
    , { time: 80265, content: "[40mnpm[0m [0m[32m"}
    , { time: 80265, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/negotiator/-/negotiator-0.4.9.tgz"}
    , { time: 80265, content: "\r\n[0m"}
    , { time: 80477, content: "[37m"}
    , { time: 80477, content: "[40mnpm[0m [0m[32m[40mhttp[0m"}
    , { time: 80477, content: " [0m[35m"}
    , { time: 80477, content: "GET[0m https://registry.npmjs.org/readable-stream\r\n[0m"}
    , { time: 80483, content: "[37m[40m"}
    , { time: 80483, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 80483, content: " [0m[35mGET[0m https://registry.npmjs.org/assert-plus/0.1.2\r\n"}
    , { time: 80483, content: "[0m"}
    , { time: 80484, content: "[37m"}
    , { time: 80484, content: "[40mnpm[0m [0m"}
    , { time: 80484, content: "[32m[40mhttp[0m [0m"}
    , { time: 80484, content: "[35mGET[0m https://registry.npmjs.org/asn1/0.1.11\r\n[0m"}
    , { time: 80487, content: "[37m"}
    , { time: 80487, content: "[40mnpm[0m [0m"}
    , { time: 80487, content: "[32m[40mhttp[0m [0m[35mGET"}
    , { time: 80487, content: "[0m https://registry.npmjs.org/ctype/0.5.2\r\n[0m"}
    , { time: 80558, content: "[37m"}
    , { time: 80558, content: "[40mnpm[0m [0m[32m[40mhttp[0m "}
    , { time: 80558, content: "[0m[35mGET[0m"}
    , { time: 80558, content: " https://registry.npmjs.org/mime-db\r\n[0m"}
    , { time: 80805, content: "[37m"}
    , { time: 80805, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 80805, content: "[0m [0m[35m"}
    , { time: 80805, content: "304[0m https://registry.npmjs.org/mime/1.2.11\r\n"}
    , { time: 80805, content: "[0m"}
    , { time: 80983, content: "[37m"}
    , { time: 80983, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 80983, content: "http[0m [0m[35m200"}
    , { time: 80983, content: "[0m https://registry.npmjs.org/negotiator/-/negotiator-0.4.9.tgz\r\n[0m"}
    , { time: 81061, content: "[37m"}
    , { time: 81061, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 81061, content: "http[0m"}
    , { time: 81061, content: " [0m[35mGET[0m"}
    , { time: 81061, content: " https://registry.npmjs.org/acorn\r\n[0m"}
    , { time: 81063, content: "[37m"}
    , { time: 81063, content: "[40mnpm[0m "}
    , { time: 81063, content: "[0m[32m[40m"}
    , { time: 81063, content: "http[0m [0m"}
    , { time: 81063, content: "[35m304[0m https://registry.npmjs.org/mime-db\r\n[0m"}
    , { time: 81084, content: "[37m"}
    , { time: 81084, content: "[40mnpm[0m [0m"}
    , { time: 81084, content: "[32m[40mhttp[0m [0m"}
    , { time: 81084, content: "[35mGET[0m https://registry.npmjs.org/acorn-globals\r\n"}
    , { time: 81084, content: "[0m"}
    , { time: 81132, content: "[37m"}
    , { time: 81133, content: "[40mnpm[0m [0m"}
    , { time: 81133, content: "[32m[40mhttp[0m [0m"}
    , { time: 81133, content: "[35mGET[0m https://registry.npmjs.org/acorn-globals\r\n"}
    , { time: 81133, content: "[0m"}
    , { time: 81242, content: "[37m"}
    , { time: 81242, content: "[40mnpm[0m [0m"}
    , { time: 81242, content: "[32m[40mhttp[0m [0m"}
    , { time: 81242, content: "[35mGET[0m https://registry.npmjs.org/promise\r\n"}
    , { time: 81242, content: "[0m"}
    , { time: 81279, content: "[37m"}
    , { time: 81279, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 81279, content: "http[0m [0m[35mGET[0m"}
    , { time: 81279, content: " https://registry.npmjs.org/css\r\n[0m"}
    , { time: 81286, content: "[37m"}
    , { time: 81286, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 81286, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/uglify-js\r\n[0m"}
    , { time: 81316, content: "[37m"}
    , { time: 81316, content: "[40mnpm[0m [0m"}
    , { time: 81316, content: "[32m[40mhttp[0m "}
    , { time: 81316, content: "[0m[35m304[0m https://registry.npmjs.org/assert-plus/0.1.2"}
    , { time: 81316, content: "\r\n[0m"}
    , { time: 81318, content: "[37m"}
    , { time: 81318, content: "[40mnpm[0m"}
    , { time: 81318, content: " [0m"}
    , { time: 81318, content: "[32m[40mhttp[0m "}
    , { time: 81318, content: "[0m[35m304[0m https://registry.npmjs.org/ctype/0.5.2\r\n"}
    , { time: 81318, content: "[0m"}
    , { time: 81437, content: "[37m"}
    , { time: 81437, content: "[40mnpm[0m [0m"}
    , { time: 81437, content: "[32m"}
    , { time: 81437, content: "[40mhttp[0m [0m"}
    , { time: 81437, content: "[35mGET[0m"}
    , { time: 81437, content: " https://registry.npmjs.org/minimist/0.0.8\r\n[0m"}
    , { time: 81493, content: "[37m"}
    , { time: 81493, content: "[40mnpm[0m [0m[32m"}
    , { time: 81494, content: "[40mhttp[0m "}
    , { time: 81494, content: "[0m[35m"}
    , { time: 81494, content: "304[0m https://registry.npmjs.org/asn1/0.1.11\r\n[0m"}
    , { time: 81510, content: "[37m"}
    , { time: 81511, content: "[40mnpm[0m [0m[32m"}
    , { time: 81511, content: "[40mhttp[0m "}
    , { time: 81511, content: "[0m[35m304"}
    , { time: 81511, content: "[0m https://registry.npmjs.org/readable-stream\r\n[0m"}
    , { time: 81516, content: "[37m"}
    , { time: 81516, content: "[40mnpm[0m [0m"}
    , { time: 81516, content: "[32m[40m"}
    , { time: 81516, content: "http[0m [0m[35m304"}
    , { time: 81516, content: "[0m https://registry.npmjs.org/acorn-globals\r\n[0m"}
    , { time: 81714, content: "[37m"}
    , { time: 81714, content: "[40mnpm[0m"}
    , { time: 81714, content: " [0m[32m[40mhttp"}
    , { time: 81714, content: "[0m [0m[35m"}
    , { time: 81714, content: "304[0m https://registry.npmjs.org/uglify-js\r\n[0m"}
    , { time: 81748, content: "[37m"}
    , { time: 81748, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 81748, content: "[0m [0m[35m304[0m"}
    , { time: 81748, content: " https://registry.npmjs.org/promise\r\n[0m"}
    , { time: 81792, content: "[37m"}
    , { time: 81792, content: "[40mnpm[0m [0m[32m[40mhttp[0m"}
    , { time: 81792, content: " [0m[35m304[0m https://registry.npmjs.org/css\r\n[0m"}
    , { time: 81806, content: "[37m"}
    , { time: 81806, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 81806, content: "http[0m [0m[35m304[0m https://registry.npmjs.org/acorn-globals\r\n[0m"}
    , { time: 81828, content: "[37m"}
    , { time: 81828, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 81828, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/punycode\r\n[0m"}
    , { time: 81831, content: "[37m"}
    , { time: 81831, content: "[40mnpm[0m [0m"}
    , { time: 81831, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 81831, content: "200[0m https://registry.npmjs.org/acorn\r\n[0m"}
    , { time: 81964, content: "[37m[40mnpm"}
    , { time: 81964, content: "[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 81964, content: "[35m304[0m https://registry.npmjs.org/minimist/0.0.8"}
    , { time: 81964, content: "\r\n[0m"}
    , { time: 82019, content: "[37m"}
    , { time: 82019, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 82019, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/underscore\r\n"}
    , { time: 82019, content: "[0m"}
    , { time: 82033, content: "[37m"}
    , { time: 82033, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/hoek\r\n"}
    , { time: 82033, content: "[0m"}
    , { time: 82037, content: "[37m"}
    , { time: 82037, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 82037, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/cryptiles\r\n"}
    , { time: 82037, content: "[0m"}
    , { time: 82039, content: "[37m"}
    , { time: 82039, content: "[40mnpm[0m [0m[32m"}
    , { time: 82039, content: "[40mhttp[0m [0m[35m"}
    , { time: 82039, content: "GET[0m https://registry.npmjs.org/boom\r\n[0m"}
    , { time: 82042, content: "[37m"}
    , { time: 82042, content: "[40mnpm[0m [0m"}
    , { time: 82042, content: "[32m[40mhttp[0m [0m[35mGET"}
    , { time: 82042, content: "[0m https://registry.npmjs.org/sntp\r\n[0m"}
    , { time: 82267, content: "[37m[40mnpm"}
    , { time: 82267, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 82267, content: "[0m[35mGET[0m https://registry.npmjs.org/core-util-is\r\n[0m"}
    , { time: 82269, content: "[37m"}
    , { time: 82269, content: "[40mnpm[0m "}
    , { time: 82269, content: "[0m[32m[40m"}
    , { time: 82269, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/string_decoder\r\n[0m"}
    , { time: 82347, content: "[37m"}
    , { time: 82347, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 82347, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/is-promise\r\n"}
    , { time: 82347, content: "[0m"}
    , { time: 82350, content: "[37m"}
    , { time: 82350, content: "[40mnpm[0m "}
    , { time: 82350, content: "[0m[32m[40mhttp[0m [0m[35m"}
    , { time: 82350, content: "GET[0m https://registry.npmjs.org/isarray/0.0.1\r\n[0m"}
    , { time: 82454, content: "[37m"}
    , { time: 82454, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 82455, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/css-stringify/1.0.5\r\n[0m"}
    , { time: 82476, content: "[37m"}
    , { time: 82476, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 82476, content: "http[0m [0m[35mGET[0m"}
    , { time: 82477, content: " https://registry.npmjs.org/css-parse/1.0.4\r\n[0m"}
    , { time: 82661, content: "[37m"}
    , { time: 82661, content: "[40mnpm[0m "}
    , { time: 82662, content: "[0m[32m[40mhttp[0m"}
    , { time: 82662, content: " [0m[35m304"}
    , { time: 82662, content: "[0m https://registry.npmjs.org/punycode\r\n[0m"}
    , { time: 82746, content: "[37m"}
    , { time: 82746, content: "[40mnpm[0m [0m"}
    , { time: 82746, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 82746, content: "304[0m https://registry.npmjs.org/underscore\r\n[0m"}
    , { time: 82792, content: "[37m"}
    , { time: 82792, content: "[40m"}
    , { time: 82792, content: "npm[0m"}
    , { time: 82792, content: " [0m[32m"}
    , { time: 82792, content: "[40mhttp[0m"}
    , { time: 82792, content: " [0m[35m304"}
    , { time: 82792, content: "[0m https://registry.npmjs.org/boom\r\n[0m"}
    , { time: 82835, content: "[37m"}
    , { time: 82835, content: "[40mnpm[0m [0m"}
    , { time: 82835, content: "[32m[40mhttp[0m "}
    , { time: 82835, content: "[0m[35m304[0m https://registry.npmjs.org/hoek\r\n[0m"}
    , { time: 82836, content: "[37m"}
    , { time: 82836, content: "[40mnpm[0m"}
    , { time: 82837, content: " [0m[32m[40mhttp[0m"}
    , { time: 82837, content: " [0m[35m304[0m https://registry.npmjs.org/cryptiles\r\n"}
    , { time: 82837, content: "[0m"}
    , { time: 82860, content: "[37m"}
    , { time: 82860, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 82860, content: "http[0m [0m[35m304[0m https://registry.npmjs.org/sntp\r\n[0m"}
    , { time: 82927, content: "[37m"}
    , { time: 82927, content: "[40mnpm[0m [0m[32m"}
    , { time: 82927, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 82927, content: " https://registry.npmjs.org/source-map\r\n[0m"}
    , { time: 82936, content: "[37m"}
    , { time: 82936, content: "[40mnpm[0m [0m[32m"}
    , { time: 82936, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 82936, content: " https://registry.npmjs.org/optimist\r\n[0m"}
    , { time: 82937, content: "[37m"}
    , { time: 82937, content: "[40mnpm[0m [0m"}
    , { time: 82937, content: "[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/core-util-is"}
    , { time: 82937, content: "\r\n[0m"}
    , { time: 82992, content: "[37m"}
    , { time: 82992, content: "[40mnpm[0m "}
    , { time: 82992, content: "[0m[32m"}
    , { time: 82992, content: "[40mhttp[0m [0m[35m"}
    , { time: 82992, content: "304[0m https://registry.npmjs.org/string_decoder\r\n[0m"}
    , { time: 83042, content: "[37m"}
    , { time: 83042, content: "[40mnpm[0m"}
    , { time: 83042, content: " "}
    , { time: 83042, content: "[0m[32m[40mhttp[0m"}
    , { time: 83042, content: " [0m[35m"}
    , { time: 83042, content: "304[0m https://registry.npmjs.org/isarray/0.0.1\r\n[0m"}
    , { time: 83060, content: "[37m"}
    , { time: 83060, content: "[40mnpm[0m [0m"}
    , { time: 83060, content: "[32m[40mhttp[0m"}
    , { time: 83060, content: " [0m[35m304"}
    , { time: 83060, content: "[0m https://registry.npmjs.org/css-stringify/1.0.5\r\n[0m"}
    , { time: 83117, content: "[37m"}
    , { time: 83117, content: "[40mnpm[0m [0m"}
    , { time: 83117, content: "[32m[40mhttp[0m [0m[35m304[0m"}
    , { time: 83117, content: " https://registry.npmjs.org/is-promise\r\n[0m"}
    , { time: 83127, content: "[37m"}
    , { time: 83127, content: "[40mnpm[0m [0m[32m"}
    , { time: 83127, content: "[40mhttp[0m [0m[35m"}
    , { time: 83127, content: "304[0m https://registry.npmjs.org/css-parse/1.0.4\r\n"}
    , { time: 83127, content: "[0m"}
    , { time: 83484, content: "[37m"}
    , { time: 83484, content: "[40mnpm[0m [0m"}
    , { time: 83485, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 83485, content: "304[0m https://registry.npmjs.org/source-map\r\n[0m"}
    , { time: 83527, content: "[37m"}
    , { time: 83527, content: "[40mnpm[0m [0m[32m"}
    , { time: 83527, content: "[40mhttp[0m "}
    , { time: 83527, content: "[0m[35m304"}
    , { time: 83527, content: "[0m https://registry.npmjs.org/optimist\r\n[0m"}
    , { time: 83745, content: "[37m"}
    , { time: 83745, content: "[40mnpm[0m [0m"}
    , { time: 83745, content: "[32m[40mhttp[0m [0m"}
    , { time: 83746, content: "[35mGET[0m https://registry.npmjs.org/wordwrap\r\n"}
    , { time: 83746, content: "[0m"}
    , { time: 83797, content: "[37m"}
    , { time: 83797, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 83797, content: "[0m [0m[35mGET[0m"}
    , { time: 83797, content: " https://registry.npmjs.org/amdefine\r\n[0m"}
    , { time: 84656, content: "[37m"}
    , { time: 84656, content: "[40mnpm[0m "}
    , { time: 84656, content: "[0m[32m"}
    , { time: 84656, content: "[40mhttp[0m [0m[35m"}
    , { time: 84656, content: "304[0m https://registry.npmjs.org/wordwrap\r\n[0m"}
    , { time: 84658, content: "[37m"}
    , { time: 84658, content: "[40mnpm"}
    , { time: 84658, content: "[0m "}
    , { time: 84658, content: "[0m[32m"}
    , { time: 84658, content: "[40mhttp"}
    , { time: 84658, content: "[0m "}
    , { time: 84658, content: "[0m[35m304[0m https://registry.npmjs.org/amdefine"}
    , { time: 84658, content: "\r\n[0m"}
    , { time: 85156, content: "grunt-develop@0.4.0 node_modules/grunt-develop\r\n\r\ndebug@2.1.0 node_modules/debug\r\n└── ms@0.6.2\r\n\r\ncookie-parser@1.3.3 node_modules/cookie-parser\r\n├── cookie@0.1.2\r\n└── cookie-signature@1.0.5\r\n\r\nmorgan@1.5.0 node_modules/morgan\r\n├── basic-auth@1.0.0\r\n├── depd@1.0.0\r\n"}
    , { time: 85156, content: "└── on-finished@2.1.1 (ee-first@1.1.0)\r\n\r\nserve-favicon@2.1.7 node_modules/serve-favicon\r\n├── ms@0.6.2\r\n├── fresh@0.2.4\r\n└── etag@1.5.1 (crc@3.2.1)\r\n\r\ntime-grunt@1.0.0 node_modules/time-grunt\r\n├── date-time@1.0.0\r\n├── figures@1.3.5\r\n├── text-table@0.2.0\r\n├── hooker@0.2.3\r\n├── pretty-ms@1.0.0 (parse-ms@1.0.0, get-stdin@3.0.2)\r\n└── chalk@0.5.1 (escape-string-regexp@1.0.2, ansi-styles@1.1.0, supports-color@0.2.0, strip-ansi@0.3.0, has-ansi@0.1.0)\r\n\r\ngrunt-contrib-watch@0.6.1 node_modules/grunt-contrib-watch\r\n├── async@0.2.10\r\n├── tiny-lr-fork@0.0.5 (debug@0.7.4, faye-websocket@0.4.4, noptify@0.0.3, qs@0.5.6)\r\n├── gaze@0.5.1 (globule@0.1.0)\r\n└── lodash@2.4.1\r\n\r\nexpress@4.10.6 node_modules/express\r\n├── utils-merge@1.0.0\r\n├── merge-descriptors@0.0.2\r\n├── cookie@0.1.2\r\n├── fresh@0.2.4\r\n├── escape-html@1.0.1\r\n├── range-parser@1.0.2\r\n├── cookie-signature@1.0.5\r\n├── finalhandler@0.3.2\r\n├── vary@1.0.0\r\n├── media-typer@0.3.0\r\n├── methods@1.1.0\r\n├── parseurl@1.3.0\r\n├── serve-static@1.7.1\r\n├── content-disposition@0.5.0"}
    , { time: 85156, content: "\r\n├── path-to-regexp@0.1.3\r\n├── depd@1.0.0\r\n├── on-finished@2.1.1 (ee-first@1.1.0)\r\n├── qs@2.3.3\r\n├── etag@1.5.1 (crc@3.2.1)\r\n├── proxy-addr@1.0.4 (forwarded@0.1.0, ipaddr.js@0.1.5)\r\n├── send@0.10.1 (destroy@1.0.3, ms@0.6.2, mime@1.2.11)\r\n├── type-is@1.5.4 (mime-types@2.0.4)\r\n└── accepts@1.1.4 (negotiator@0.4.9, mime-types@2.0.4)\r\n\r\nrequest@2.51.0 node_modules/request\r\n├── caseless@0.8.0\r\n├── json-stringify-safe@5.0.0\r\n├── forever-agent@0.5.2\r\n├── aws-sign2@0.5.0\r\n├── stringstream@0.0.4\r\n├── oauth-sign@0.5.0\r\n├── tunnel-agent@0.4.0\r\n├── node-uuid@1.4.2\r\n├── mime-types@1.0.2"}
    , { time: 85157, content: "\r\n├── combined-stream@0.0.7 (delayed-stream@0.0.5)\r\n├── qs@2.3.3\r\n├── form-data@0.2.0 (async@0.9.0, mime-types@2.0.4)\r\n├── tough-cookie@0.12.1 (punycode@1.3.2)\r\n├── http-signature@0.10.0 (assert-plus@0.1.2, asn1@0.1.11, ctype@0.5.2)\r\n├── bl@0.9.3 (readable-stream@1.0.33)\r\n└── hawk@1.1.1 (cryptiles@0.2.2, sntp@0.2.4, boom@0.4.2, hoek@0.9.1)\r\n\r\nbody-parser@1.10.0 node_modules/body-parser\r\n├── bytes@1.0.0\r\n├── media-typer@0.3.0\r\n├── raw-body@1.3.1\r\n├── depd@1.0.0\r\n├── on-finished@2.1.1 (ee-first@1.1.0)\r\n├── qs@2.3.3\r\n├── type-is@1.5.4 (mime-types@2.0.4)\r\n└── iconv-lite@0.4.5\r\n\r\nload-grunt-tasks@1.0.0 node_modules/load-grunt-tasks\r\n├── multimatch@1.0.1 (array-differ@1.0.0, array-union@1.0.1, minimatch@1.0.0)\r\n└── findup-sync@0.1.3 (glob@3.2.11, lodash@2.4.1)\r\n\r\ngrunt@0.4.5 node_modules/grunt\r\n├── which@1.0.8\r\n├── dateformat@1.0.2-1.2.3\r\n├── eventemitter2@0.4.14\r\n├── getobject@0.1.0\r\n├── rimraf@2.2.8\r\n├── colors@0.6.2\r\n├── hooker@0.2.3\r\n├── async@0.1.22\r\n├── grunt-legacy-util@0.2.0\r\n├── exit@0.1.2\r\n├── nopt@1.0.10 (abbrev@1.0.5)\r\n├── glob@3.1.21 (inherits@1.0.0, graceful-fs@1.2.3)\r\n├── minimatch@0.2.14 (sigmund@1.0.0, lru-cache@2.5.0)\r\n├── lodash@0.9.2\r\n├── coffee-script@1.3.3\r\n├── underscore.string@2.2.1\r\n├── iconv-lite@0.2.11\r\n├── js-yaml@2.0.5 (argparse@0.1.16, esprima@1.0.4)\r\n├── grunt-legacy-log@0.1.1 (underscore.string@2.3.3, lodash@2.4.1)\r\n└── findup-sync@0.1.3 (glob@3.2.11, lodash@2.4.1)\r\n\r\njade@1.8.2 node_modules/jade\r\n├── character-parser@1.2.1"}
    , { time: 85157, content: "\r\n├── void-elements@1.0.0\r\n├── commander@2.5.1\r\n├── mkdirp@0.5.0 (minimist@0.0.8)\r\n├── with@4.0.0 (acorn-globals@1.0.1, acorn@0.8.0)\r\n├── transformers@2.1.0 (promise@2.0.0, css@1.0.8, uglify-js@2.2.5)\r\n└── constantinople@3.0.1 (acorn-globals@1.0.1)\r\n"}
    , { time: 85200, content: "]2;crisboot@crisboot-Aspire-S3-391  crudtest/"}
    , { time: 85212, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~/crudtest$ [m"}
    , { time: 87299, content: "t"}
    , { time: 87373, content: "r"}
    , { time: 87438, content: "e"}
    , { time: 87648, content: "e"}
    , { time: 87992, content: " "}
    , { time: 88493, content: "-"}
    , { time: 88833, content: "L"}
    , { time: 89042, content: " "}
    , { time: 89251, content: "1"}
    , { time: 90161, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  tree -L 1"}
    , { time: 90253, content: "[01;34m.[00m\r\n├── app.js\r\n├── [01;34mbin[00m\r\n├── bower.json\r\n├── Gruntfile.js\r\n├── [01;34mnode_modules[00m\r\n├── package.json\r\n├── [01;34mpublic[00m\r\n├── [01;34mroutes[00m\r\n└── [01;34mviews[00m\r\n\r\n5 directories, 4 files\r\n"}
    , { time: 90255, content: "]2;crisboot@crisboot-Aspire-S3-391  crudtest/"}
    , { time: 90266, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~/crudtest$ [m"}
    , { time: 93506, content: "n"}
    , { time: 93724, content: "p"}
    , { time: 93925, content: "m"}
    , { time: 94074, content: " "}
    , { time: 94291, content: "s"}
    , { time: 94522, content: "t"}
    , { time: 94589, content: "a"}
    , { time: 94731, content: "r"}
    , { time: 95020, content: "t"}
    , { time: 95790, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  npm start"}
    , { time: 97640, content: "\r\n> crudtest@0.0.1 start /home/crisboot/crudtest\r\n> node ./bin/www\r\n\r\n"}
    , { time: 97848, content: "\r\n"}
    , { time: 97848, content: "events.js:72\r\n"}
    , { time: 97848, content: "        throw er; // Unhandled 'error' event\r\n      "}
    , { time: 97848, content: "        ^\r\n"}
    , { time: 97849, content: "Error: listen EADDRINUSE\r\n    at errnoException (net.js:901:11)"}
    , { time: 97849, content: "\r\n    at Server._listen2 (net.js:1039:14)\r\n    at listen (net.js:1061:10)\r\n    at Server.listen (net.js:1127:5)\r\n    at EventEmitter.app.listen (/home/crisboot/crudtest/node_modules/express/lib/application.js:559:24)\r\n    at Object.<anonymous> (/home/crisboot/crudtest/bin/www:7:18)\r\n    at Module._compile (module.js:456:26)\r\n    at Object.Module._extensions..js (module.js:474:10)\r\n    at Module.load (module.js:356:32)\r\n    at Function.Module._load (module.js:312:12)\r\n"}
    , { time: 97855, content: "[37m"}
    , { time: 97855, content: "[40m"}
    , { time: 97855, content: "npm"}
    , { time: 97855, content: "[0m "}
    , { time: 97855, content: "[0m[31m"}
    , { time: 97855, content: "[40mERR![0m [0m"}
    , { time: 97855, content: "[35mweird error[0m 8\r\n[0m"}
    , { time: 97856, content: "[37m"}
    , { time: 97856, content: "[40mnpm[0m"}
    , { time: 97856, content: " [0m[31m[40mERR!"}
    , { time: 97857, content: "[0m [0m[35mnot ok"}
    , { time: 97857, content: "[0m"}
    , { time: 97857, content: " code 0\r\n[0m"}
    , { time: 97859, content: "]2;crisboot@crisboot-Aspire-S3-391  crudtest/"}
    , { time: 97867, content: "[m [31m1[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~/crudtest$ [m"}
];

var terminalText = "";

//Markers
var m1, c = "", regexRollback;

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

//t.play();
