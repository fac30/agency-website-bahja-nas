const siteName  = 'Pawsitive Haven Adoption Agency';


/* ----
Menu
----- */

const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})


/* -----
Hidden Text
----- */

const toggleText = () => {
    const additionalText = document.querySelector('.additional-text');
    additionalText.classList.toggle('hiddenText');
}


/* -----
Footer 
----- */

// copyright date, left div
let year = new Date().getFullYear();
const copyRight = `&copy; ${year} - ${siteName} - All rights reserved.`;
let currentYear = document.querySelector('#currentYear').innerHTML = copyRight;

// right div
const footerRightDiv = document.querySelector('footer div#right').textContent = `Website by ${siteName}`;
