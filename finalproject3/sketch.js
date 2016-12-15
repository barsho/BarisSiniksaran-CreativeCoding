var system;
var a = 148;

function setup() {
  createCanvas(600, 600);
  system = new ParticleSystem(createVector(600/2, 600/2));
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
  stroke(mouseX,mouseY,a, 10);
  strokeWeight(random(mouseY));
  noFill();
  triangle(this.position.x, this.position.y, mouseX, mouseY);
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

function mousePressed() {
  a = random(255);
}