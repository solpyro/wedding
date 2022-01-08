var currentLang = 'en';

window.addEventListener('load', () => {
    document.getElementById("language-toggle").addEventListener('click', function (e) {
        e.preventDefault();
        
        toggleLanguage((currentLang=='et')?'en':'et');
    });

    var browserLang = window.navigator.language;
    var userPreference = getCookie("lang");
    
    if((userPreference ?? browserLang) == "et")
        toggleLanguage("et");
    else {
        currentLang = "et"
        toggleLanguage("en");
    }
    
    document.body.classList.remove('loading');
});

function toggleLanguage(newLang) {
    document.querySelectorAll("[lang="+newLang+"]").forEach(el => el.style.display = '');
    document.querySelectorAll("[lang="+currentLang+"]").forEach(el => el.style.display = 'none');

    setCookie("lang",newLang)

    currentLang = newLang;
}

