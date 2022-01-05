var points = []

var r1
var r2
var g1
var g2
var b1
var b2

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(10)
    noiseDetail(5)

    var density = 250
    var space = width / density

    for (var x = 0; x < width; x+= space) {
        for (var y = 0; y < height; y += space) {
            var p = createVector(x + random(-10, 10), y + random(-10, 10))
            points.push(p)
        }
    }

    r1 = random(255)
    r2 = random(255)
    g1 = random(255)
    g2 = random(255)
    b1 = random(255)
    b2 = random(255)

  }
  
  function draw() {
    strokeWeight(0.01)

    for (var i = 0; i < points.length; i++) {

        var r = map(points[i].x, 0, width, r1, r2)
        var g = map(points[i].y, 0, height, g1, g2)
        var b = map(points[i].x, 0, width, b1, b2)
        var alpha = map(dist(width / 2, height / 2,
            points[i].x, points[i].y), 0, 300, 255, 0)

        fill(r, g, b, alpha)

        circle(points[i].x, points[i].y, 2)   
        
    }
  }