// I wrapped the whole script into a single function (although it technically cointains three different ones). The script kind of loops through again and again, so this doesn't make much of a difference, it's just easier to export/import the module.

// Let the Death Star take off!
function takeOff() {
    // Once the DOM is ready, we excute this stuff
    $(document).ready(function() {
        // We create a <div> element for the Death Star
        const newDiv = document.createElement('div')
        // We add a class to that newDiv
        newDiv.classList.add('death-star')
        // We append the Death Star to the <body> tag
        document.body.appendChild(newDiv)
        // And then we start animation
        animateDiv($('.death-star'));
    });
    // This function is for setting The Death Star's next destination
    function makeNewPosition($container) {
        // We find current location
        var h = $container.height() - 50;
        var w = $container.width() - 50;
        // And we set a new location with some random math
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
        // The new location is return
        return [nh, nw];

    }
    // This is the main function moves the Death Star around
    function animateDiv($target) {
        // We find our the new location
        var newq = makeNewPosition($target.parent());
        // We find its current location
        var oldq = $target.offset();
        // And we call the calcSpeed function seen here below
        var speed = calcSpeed([oldq.top, oldq.left], newq);

        // Now we use the animate function and move it to the newq-location in it's cruising speed
        $target.animate({
            top: newq[0],
            left: newq[1]
        }, speed, function() {
            // And now we actually call this function again for the Death Star's next movement
            animateDiv($target);
        });

    };
    // Here's some math excercises so that the speed of the Death Star remains pretty constant through it's travels
    function calcSpeed(prev, next) {
        var x = Math.abs(prev[1] - next[1]);
        var y = Math.abs(prev[0] - next[0]);
        var greatest = x > y ? x : y;
        var speedModifier = 0.1;
        var speed = Math.ceil(greatest / speedModifier);
        return speed;

    }
}

takeOff();