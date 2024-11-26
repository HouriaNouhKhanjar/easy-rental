document.addEventListener('DOMContentLoaded', function () {
    // This code was taken from stackoverflow 
    // Add fade in class on scrolling
    var animateElmentClass = '.animation-element';
    var animateClass = 'fadein';

    // Get all elements with the class 'animation-element'
    var animationElements = document.querySelectorAll(animateElmentClass);
    var windowElement = window;
    // Function to check if elements are in view
    function checkIfInView() {
        var windowHeight = windowElement.innerHeight;
        var windowTopPosition = windowElement.scrollY;
        var windowBottomPosition = windowTopPosition + windowHeight;

        animationElements.forEach(function (element) {
            var elementHeight = element.offsetHeight;
            var elementTopPosition = element.getBoundingClientRect().top + windowTopPosition;
            var elementBottomPosition = elementTopPosition + elementHeight;

            // Check if the element is in the viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                element.classList.add(animateClass);
            } else if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition) && element.classList.contains(animateClass)) {
                element.classList.remove(animateElmentClass);
                element.classList.remove(animateClass);
            }
        });
    }

    // Add event listeners for scroll and resize
    windowElement.addEventListener('scroll', checkIfInView);
    windowElement.addEventListener('resize', checkIfInView);

    // Trigger the scroll event to check initial position
    checkIfInView();
});