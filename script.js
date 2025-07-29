function showMenu() {
    const menu = document.querySelector('.menu');
    const x = document.querySelector('.menuButton');
    x.classList.toggle("change");
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Add event listener to handle window resize
window.addEventListener('resize', function() {
    const menu = document.querySelector('.menu');
    // If window is resized to below 769px, hide the menu
    if (window.innerWidth > 769) {
        menu.style.display = 'none';
    } 
}); 

// function menuX() {}