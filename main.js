const siteName  = 'Nas Choudhury';

/* footer */

// copyright date, left div
let year = new Date().getFullYear();
const copyRight = `&copy;${year} - ${siteName} Portfolio`;
let currentYear = document.querySelector('#currentYear').innerHTML = copyRight;

// right div
const footerRightDiv = document.querySelector('footer div#right').textContent = `Website by ${siteName}`;
