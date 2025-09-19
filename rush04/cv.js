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
    const go = confirm("Unfortunatle, This is NOT a button to MARRIGE. CONTINUE??");
    if (go) {
        window.location.href = this.href;
    }

});

document.getElementById('eryaBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const go = confirm("YES! JOB secured!");
    if (go) {
        window.location.href = this.href;
    }

});