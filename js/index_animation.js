// Source: https://www.sitepoint.com/get-url-parameters-with-javascript/

// Võtab terve url-i
const urlString = window.location.search;

// Võtab url-ist parameetrid
const urlParameters = new URLSearchParams(urlString);

// Kas parameetrite hulgas on "from":
if (urlParameters.has('from')) {

    // Võtab milliselt lehelt tuli
    const fromPage = urlParameters.get('from');

    // Võtab elementide puust pildi mille suurust animeerida
    var animateElement = document.getElementsByClassName(fromPage)[0].getElementsByTagName('img')[0];

    // Seab pildile animatsiooni
    animateElement.style.animation = 'scaleAnimation ease-out 1.5s';
    animateElement.style.animationDelay = '0s';
    animateElement.style.animationIterationCount = '1';
    animateElement.style.animationFillMode = 'backwards';

    // Et animatsioon oleks teiste elementide peal
    animateElement.style.position = 'relative';
    animateElement.style.zIndex = '1';

}
