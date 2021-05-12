var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(8081));
var five = require('johnny-five');



const {RaspiIO} = require("raspi-io");

app.use(express.static(__dirname));

app.get('/', function (res) {
  	res.sendfile('/index.html');
});

io.on('upgrade', function (req, socket, head) {
  io.handleUpgrade(req, socket, head);
});

var board = new five.Board({
  	repl:false,
	io: new RaspiIO()
});

board.on('ready', function () {
    var speed, commands, motors;
    motors = {
        a: new five.Motor({
    pins: {
      pwm: 'GPIO7',
      dir: 'GPIO8'
    },
    invertPWM: true
    }),
        b: new five.Motor({
    pins: {
      pwm: 'GPIO9',
      dir:'GPIO10'
    },
    invertPWM: true
    })
    };

    commands = null;


	app.get('/start', function (req,res) {
	motors.a.rev(220);
		    motors.b.rev(220);
	res.json({done:true});
	})

	app.get('/stop', function (req,res) {
	motors.a.rev(120);
		    motors.a.stop();
		    motors.b.stop();
	res.json({done:true});
	})

	app.get('/left', function (req,res) {
		    var aSpeed = 220;
		    var bSpeed = 50;
		    motors.a.fwd(aSpeed);
		    motors.b.rev(bSpeed);
	res.json({done:true});
	})

	app.get('/right', function (req,res) {
	var aSpeed = 50;
		    var bSpeed = 220;
		    motors.a.rev(aSpeed);
		    motors.b.fwd(bSpeed);
	res.json({done:true});
	})


});
