document.addEventListener('DOMContentLoaded', function () {

    const mainNav = document.body.querySelector('#navbar-main');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navbar-main',
            offset: 100
        });
    }
    
});

document.getElementById('ellenBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const go = confirm("Unfortunatle, This is NOT a button to MARRIGE.\nCONTINUE??");
    if (go) {
        window.location.href = this.href;
    }

});

document.getElementById('eryaBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const go = confirm("YES!\nJOB secured!");
    if (go) {
        window.location.href = this.href;
    }

});
