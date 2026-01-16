import './style.css'

const cookieConsent = document.getElementById('cookie');
const closeButton = document.getElementById('close');
const acceptButton = document.getElementById('accept');

closeButton.addEventListener('click', () => {
  cookieConsent.close();
});

acceptButton.addEventListener('click', () => {
    document.cookie = "cookies=accepted";
    cookieConsent.close();
})

if (getCookie("cookies") !== "accepted")
setTimeout(() => {
    cookieConsent.showModal();
}, 1000);

function getCookie(cookieName) {
  let name = cookieName + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}