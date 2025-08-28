const consent = document.querySelector('#consent-pop');
const consentremove = document.querySelector('button');

const consentpop = () => {
  if (!localStorage.getItem('consentpop')) {
    setTimeout(() => {
      consent.classList.remove('invisible');
    }, 3000);
  }
};

const removeconsent = (e) => {
  if (e.target === consentremove) {
    consent.classList.add('invisible');
  }
  localStorage.setItem('cookieConsent', 'true');
};
window.addEventListener('load', consentpop);
consentremove.addEventListener('click', removeconsent);
