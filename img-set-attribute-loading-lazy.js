document.addEventListener('DOMContentLoaded', function() {
    
    // gett all <img> elements
    
    var imgs = document.querySelectorAll('img');
    [].forEach.call(imgs, function(element, index, array) {
        
        // add attribute loading with value lazy
        element.setAttribute('loading', 'lazy');

        // done :-)
        // visit: https://dhemant.consulting
    });
});
