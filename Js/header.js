window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    header.classList.toggle('header', window.scrollY <= 0);
});