var system;

function setup() {
  createCanvas(800, 600);
  system = new ParticleSystem(createVector(width/2, height/2));
}

function draw() {
  background(0);
  system.addParticle();
  system.run();
}

var Particle = function(position) {
  this.acceleration = createVector(0, 0.001);
  this.velocity = createVector(random(-20, 20), random(-20, 20));
  this.position = position.copy();
  this.lifespan = 100.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};


Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan += 10;
};

Particle.prototype.display = function() {
  stroke(mouseX, mouseY, this.lifespan);
  strokeWeight(500);
  fill(mouseX,this.lifespan);
  ellipse(this.position.x, this.position.y, 50, 50);
};

Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
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
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};