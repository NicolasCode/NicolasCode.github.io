const inputs = document.querySelectorAll('.input');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentNode.classList.add('focus');
    });
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentNode.classList.remove('focus');
        }
    });
});