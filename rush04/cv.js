document.addEventListener('DOMContentLoaded', function () {

    const mainNav = document.body.querySelector('#navbar-main');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navbar-main',
            offset: 100
        });
    }
    
});

