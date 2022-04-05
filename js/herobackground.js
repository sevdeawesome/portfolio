// grab the hero id element
var hero = document.getElementById('hero');
// create an array of circle elements
var circles = [];


// create 10 css circles with a random width and height randomly placed around the hero
for (var i = 0; i < 100; i++) {
    var circle = document.createElement('div');
    // give each circle a background color of yellow with an opacity of .3
    circle.style.backgroundColor = 'yellow';
    circle.style.opacity = '.1';

    // give the circles a position of fixed and z index of -1
    circle.style.position = 'absolute';
    circle.style.zIndex = -1;
    circle.classList.add('circle');
    circle.style.width = Math.random() * 1000 + 'px';
    circle.style.height = Math.random() * 1000 + 'px';
    circle.style.left = Math.random() * 100 + '%';
    circle.style.top = Math.random() * 500 + 'px';

    // give the circle a random blob like shape
    circle.style.borderRadius = '50%';
    // add the circle to the array
    circles.push(circle);

    hero.appendChild(circle);
    }

    // animate the circles
    function animateCircles() {
        // loop through each circle
        for (var i = 0; i < circles.length; i++) {
            // get the current circle
            var circle = circles[i];
            // get the current circle's coordinates
            var circleCoords = circle.getBoundingClientRect();
            // get the circles current top and left values
            var circleTop = circleCoords.top;
            var circleLeft = circleCoords.left;
            // create a random number between -1 and 1
            var randomNumber = Math.random() * 2 - 1;

            // move the circle to the left by randomly adding or subtracting a value between -10 and 10 every second
            circle.style.left = circleLeft - (randomNumber * 20) + 'px';
        }
        // call the animate function again, once per second
        // setTimeout(animateCircles, 1000);
        requestAnimationFrame(animateCircles);
    }
    // call the animate function
    animateCircles();
