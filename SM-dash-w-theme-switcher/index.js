const lightStyles = document.querySelectorAll('link[rel=stylesheet][href*=light]');
const darkStyles = document.querySelectorAll('link[rel=stylesheet][href*=dark]');
const switcherRadios = document.querySelectorAll('input[type=radio]');

function getSavedScheme() {
    return localStorage.getItem('color-scheme');
}

function setScheme(scheme) {
    setMedia(scheme);
    localStorage.setItem('color-scheme', scheme);
}

function setMedia(scheme) {
    let lightMedia;
    let darkMedia;

    lightMedia = (scheme === 'light') ? 'all' : 'not all';
    darkMedia = (scheme === 'dark') ? 'all' : 'not all';

    [...lightStyles].forEach((link) => link.setAttribute('media', lightMedia));
    [...darkStyles].forEach((link) => link.setAttribute('media', darkMedia));
}

function setupSwitcher() {
    const savedScheme = getSavedScheme();

    if (savedScheme !== null) {
        const currentRadio = document.querySelector(`input[type=radio][id=${savedScheme}]`);
        currentRadio.setAttribute('checked', 'true');
    }
    [...switcherRadios].forEach((radio) => {
        radio.addEventListener('change', (event) => {
            setScheme(event.target.id);
        })
    })
}

document.querySelector('.switcher').addEventListener('click',()=>{

})

setupSwitcher();
setMedia(getSavedScheme());

