var system;

function setup() {
  createCanvas(windowWidth, windowHeight);
  system = new ParticleSystem(createVector(windowWidth/2, windowHeight/2));
}

function draw() {
  background(0);
  system.addParticle();
  system.run();
}

var Particle = function(position) {
  this.acceleration = createVector(0,0);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.position = position.copy();
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
};

Particle.prototype.display = function() {
  stroke(random(255),random(255),random(255), 30);
  strokeWeight(random(100));
  noFill();
  ellipse(this.position.x, this.position.y, 200, 200);
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
  
  }
};

