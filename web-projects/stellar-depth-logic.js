// Wait for the user to scroll
window.addEventListener('scroll', function() {
    
    // Select the hero section
    const hero = document.querySelector('#hero-layer');
    
    // Calculate how far we have scrolled from the top
    let offset = window.pageYOffset;
    
    /* 
       Apply the parallax effect:
       We move the background Y-position by 70% of the scroll speed.
       This makes the background move SLOWER than the foreground.
    */
    hero.style.backgroundPositionY = (offset * 0.7) + "px";
});
