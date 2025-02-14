function unloadPage(id) {
    document.getElementById(id).innerHTML = ''; // Efface le contenu
}

function unloadScript(scriptName) {
    let scripts = document.querySelectorAll(`script[src="./assets/scripts/${scriptName}"]`);
    scripts.forEach(script => script.remove());
}

//click sur le menu déroulant
document.getElementById("icon-menu").addEventListener("click", function () {
    document.getElementById("dropdown-menu").classList.toggle("display");
});

//buttons
document.getElementById('btn-concept').addEventListener('click', ()=>{
    // window.location.href = "#";
    unloadPage('slider');
    unloadScript()
});

document.getElementById('btn-events').addEventListener('click', ()=>{
    window.location.href = "#";
})

document.getElementById('btn-shops').addEventListener('click', ()=>{
    window.location.href = "#";
})

document.getElementById('logo').addEventListener('click', ()=>{
    window.location.href = "#top";
})

document.getElementById('btn-products').addEventListener('click', ()=>{
    window.location.href = "#";
});

document.getElementById('btn-account').addEventListener('click', ()=>{
    window.location.href = "#";
});

document.getElementById('btn-command').addEventListener('click', ()=>{
    window.location.href = "#";
});