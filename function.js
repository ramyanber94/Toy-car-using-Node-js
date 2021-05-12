
function moveup(){
	$.get( "/start", function( data ) {
		console.log(data);
	});
}
function stop(){
	$.get( "/stop", function( data ) {
		console.log(data);
	});
}
function moveright(){
	$.get( "/right", function( data ) {
		console.log(data);
	});
}
function moveleft(){
	$.get( "/left", function( data ) {
		console.log(data);
	});
}
function movedown(){
    socket.emit('reverse');
}


document.getElementById('forward').onclick = moveup;
document.getElementById('stop').onclick = stop;
document.getElementById('turnRight').onclick = moveright;
document.getElementById('turnLeft').onclick = moveleft;
document.getElementById('turnReverse').onclick = movedown;
