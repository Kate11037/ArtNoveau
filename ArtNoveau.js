var stopHere;

function setup() {
	createCanvas(400, 400);
	background(0);
	stopHere = 0;
}

function drawTile(x, y) {
	push();
	translate(x, y);
	rotate(PI/4);
	for (i = 0; i < 7; i ++) {
		var pos = i * 5;
		var size = (7 - i) * 10
		rect(pos, pos, size, size); 
	}
	pop();
}

function drawTiles() {
	for(n = -50; n <= 350; n += 50){
		for(m = 0; m < 5; m ++) {
			if(n % 100 == 0) {
				drawTile(m * 100 + 50, n);
			}
			else {
				drawTile(m * 100, n);
			}
		}
	}
}

function drawTiles2() {
	for(n = -50; n < 400; n += 50) {
		for(m = 0; m < 5; m ++) {
			if(n % 100 == 0) {
				drawTile(m * 100 + 50, n);
			}
			else {
				drawTile(m * 100, n);
			}
		}
	}

}


function drawCurve(cx, cy) {

	var x, y;
	var cx, cy;
	var theta;
	var radius;
	var end = 0;

	cx = width/2;
	cy = height/2;
	radius = 200;
	theta = 0;

	noFill();
	stroke(255);
	beginShape();
	
	print("before the loop");
	print("x:", x)
	print("y:", y)
	for(var i = 0; i < end; i ++) {
		x = cx + cos(5 * theta / 7) * radius * cos(theta);
		y = cy + sin(5 * theta / 7) * radius * cos(theta);
		if(i > 1) {
			vertex(x, y);
		}
		theta += TWO_PI / 200;
	}

	endShape();

	if(end < 2000) {
		end += 1;
	}
	else {
		noLoop();
	}
}

function draw() {
	fill(254, 233, 192);
	//drawTiles2();
	drawCurve();
	noLoop();

}
