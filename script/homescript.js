// To open the mobile menus
const mobileIcon = document.querySelector('#menu-mobileView-Icon');
mobileIcon.addEventListener('click', () => {
    document.querySelector('#mobileview-Nav-contianer')
        .classList.add('mobileview-Nav-contianer-style');
});

// Remove the mobile menu in case of resize the broswer
window.addEventListener('resize', () => {
    (window.innerWidth > 768) ? document.querySelector('#mobileview-Nav-contianer')
        .classList.remove('mobileview-Nav-contianer-style') : '';
});


// To close the Mobile View Div
const closesidebar = document.querySelectorAll('.mobienavbarmenu-a');
closesidebar.forEach(c => {
    c.addEventListener('click', () => {
        document.querySelector('#mobileview-Nav-contianer')
            .classList.remove('mobileview-Nav-contianer-style');
    });
});

// scroll to the next page from the initial page to the intro page
const openInropage = document.querySelector('#intro-header-scrollupBtn');
openInropage.addEventListener('click', () => {

    setTimeout(() => {
        document.querySelector('#intro-profile').scrollIntoView({
            behavior: "smooth"
        });
    }, 500)

});
