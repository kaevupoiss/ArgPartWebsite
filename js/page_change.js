// Defineerib funktsiooni, läheb html elemendi onclick atribuudi sisse.
function animateTo(URL, target) {

    // Võtab elementide puust pardi pildi.
    var targetDuck = target.children[0];

    // Seab elemendile stiili
    targetDuck.style.transform = 'scale(200,200)';

    // Seab elemendi teiste peale
    targetDuck.style.position = 'relative';
    targetDuck.style.zIndex = '5'

    // Ootab ära animatsiooni, 1.5 sekundit, ning siis vahetab lehekülge
    setTimeout(
        function () {
            window.location = URL;
        },
        1500
    );
}

