document.addEventListener('DOMContentLoaded', function () {

    const mainNav = document.body.querySelector('#navbar-main');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navbar-main',
            offset: 100
        });
    }
    
});


    // If the navigation bar exists, create a new Bootstrap ScrollSpy instance.
    // This will automatically update the nav links to an "active" state
    // as you scroll past the different sections of your resume page.