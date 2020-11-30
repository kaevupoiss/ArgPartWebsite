function animateTo(URL, target) {
    var targetDuck = target.children[0];

    targetDuck.style.transform = 'scale(200,200)';
    targetDuck.style.position = 'relative';
    targetDuck.style.zIndex = '5'

    setTimeout(
        function () {
            window.location = URL;
        },
        1500
    );
}

