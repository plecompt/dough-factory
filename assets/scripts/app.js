function loadPage(page, id) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        });
}

function loadScript(scriptName) {
    let script = document.createElement('script');
    
    script.src = `./assets/scripts/${scriptName}`;
    script.defer = true;
    document.body.appendChild(script);
}

function unloadPage(id) {
    document.getElementById(id).innerHTML = ''; // Efface le contenu
}

function unloadScript(scriptName) {
    let scripts = document.querySelectorAll(`script[src="./assets/scripts/${scriptName}"]`);
    scripts.forEach(script => script.remove());
}
//Load main page
loadPage("header.html", "header");
loadPage("slider.html", "slider");
loadPage("vitrine.html", "vitrine");
loadPage("footer.html", "footer");
loadScript("nav-bar.js");
loadScript("carrousel.js");