//click sur le menu déroulant
document.getElementById("icon-menu").addEventListener("click", function () {
    document.getElementById("dropdown-menu").classList.toggle("display");
});

//buttons
document.getElementById('btn-concept').addEventListener('click', ()=>{
    window.location.href = "./concept.html";
});

document.getElementById('btn-events').addEventListener('click', ()=>{
    window.location.href = "./events.html";
})

document.getElementById('btn-shops').addEventListener('click', ()=>{
    window.location.href = "./shops.html";
})

document.getElementById('btn-products').addEventListener('click', ()=>{
    window.location.href = "./products.html";
});

document.getElementById('btn-account').addEventListener('click', ()=>{
    window.location.href = "./account.html";
});

document.getElementById('btn-command').addEventListener('click', ()=>{
    window.location.href = "./command.html";
});