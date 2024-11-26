


window.onscroll = function() {
    var backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

document.getElementById('backToTopBtn').onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
};
