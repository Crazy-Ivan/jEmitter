
(function() {
'use strict';
	var canvas  = document.createElement('canvas'),
		context = canvas.getContext('2d'),
		screenWidth = window.innerWidth,
		screenHeight = window.innerHeight,
		image = document.createElement('img'),

		firstEmitter = new jEmitter.ParticleEmitter({
			spreadX : 0,
			spreadY : 0,
			minVelocity : 3,
			maxVelocity : 9,
			minGravity : 20,
			maxGravity : 20,
			minWind	   : 0,
			maxWind	   : 0,
			minSize    : 5,
			maxSize    : 15,
			minSizeStep : -20,
			maxSizeStep : -20,
			maxParticleEmit : 4,
			minParticleEmit : 1,
			image : image
		}),

		animate = function() {
			context.clearRect(0,0,screenWidth,screenHeight);
			//firstEmitter.update();
			firstEmitter.render(context);
			
			window.requestAnimationFrame(animate);
		};

	canvas.width = screenWidth;
	canvas.height = screenHeight;
	image.src = 'img/ParticleImage2.png';
	document.body.appendChild(canvas);

	context.globalCompositeOperation  = 'lighter';
	animate();

	// setInterval(function() {
	// 		firstEmitter.emit(screenWidth/2,screenHeight/2);
	// }, 50);
	
	 canvas.addEventListener('mousemove', function(e) {
	 	firstEmitter.emit(e.clientX, e.clientY);
	 });

	var gui = new dat.GUI();
		gui.add(firstEmitter, 'poolSize', 0, 10000);
		gui.add(firstEmitter, 'minParticleEmit', 1, 100);
		gui.add(firstEmitter, 'maxParticleEmit', 1, 100);
		gui.add(firstEmitter, 'spreadX', 0, 500);
		gui.add(firstEmitter, 'spreadY', 0, 500);

	var size = gui.addFolder('Size');	
		size.add(firstEmitter, 'minSize', 1, 100);
		size.add(firstEmitter, 'maxSize', 1, 100);
		size.add(firstEmitter, 'minSizeStep', -100, 100);
		size.add(firstEmitter, 'maxSizeStep', -100, 100);

	var env = gui.addFolder('Gravity and Wind');		
		env.add(firstEmitter, 'minGravity', -100, 100);
		env.add(firstEmitter, 'maxGravity', -100, 100);
		env.add(firstEmitter, 'minWind', -100, 100);
		env.add(firstEmitter, 'maxWind', -100, 100);  			

	var velocity = gui.addFolder('Velocity and Rotation');
		velocity.add(firstEmitter, 'equalRadius');
		velocity.add(firstEmitter, 'minVelocity', 0, 10);
		velocity.add(firstEmitter, 'maxVelocity', 0, 10);
		velocity.add(firstEmitter, 'minVelocityRadius', 0, 360);
		velocity.add(firstEmitter, 'maxVelocityRadius', 0, 360);
		velocity.add(firstEmitter, 'minRotateStep', -10, 10);
		velocity.add(firstEmitter, 'maxRotateStep', -10, 10);

	var alphaFade = gui.addFolder('Alpha and Fade');
		alphaFade.add(firstEmitter, 'minAlpha', 1, 100);
		alphaFade.add(firstEmitter, 'maxAlpha', 1, 100);
		alphaFade.add(firstEmitter, 'minFadeStep', 0, 10);
		alphaFade.add(firstEmitter, 'maxFadeStep', 0, 10);
})()






		



