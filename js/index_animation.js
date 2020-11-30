const urlString = window.location.search;

const urlParameters = new URLSearchParams(urlString);

if (urlParameters.has('from')) {
    const fromPage = urlParameters.get('from');

    var animateElement = document.getElementsByClassName(fromPage)[0].getElementsByTagName('img')[0];

    animateElement.style.animation = 'scaleAnimation ease-out 1.5s';
    animateElement.style.animationDelay = '0s';
    animateElement.style.animationIterationCount = '1';
    animateElement.style.animationFillMode = 'backwards';
    animateElement.style.position = 'relative';
    animateElement.style.zIndex = '1';

}
