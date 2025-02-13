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

loadPage("header.html", "header");
loadPage("slider.html", "slider");
loadPage("vitrine.html", "vitrine");
loadPage("footer.html", "footer");
loadScript("nav-bar.js");
loadScript("carrousel.js");