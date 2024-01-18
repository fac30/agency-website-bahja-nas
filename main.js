const siteName  = 'Pawsitive Haven Adoption Agency';

/* footer */

// copyright date, left div
let year = new Date().getFullYear();
const copyRight = `&copy; ${year} - ${siteName} - All rights reserved.`;
let currentYear = document.querySelector('#currentYear').innerHTML = copyRight;

// right div
const footerRightDiv = document.querySelector('footer div#right').textContent = `Website by ${siteName}`;
