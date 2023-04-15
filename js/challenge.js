function hideElements() {
    document.getElementById('errorInput').style.display = 'none';
    //document.getElementById('notresult').style.display = 'none';
    console.log("Ocultando elementos");
}


function btnEncriptar() {
    document.getElementById("txtInput").value = "Fifth Avenue, New York City";
}

function btnDesencriptar() {
    document.getElementById("txtInput").value = "Fifth Avenue, New York City";
}


var btnEncriptar = document.getElementById("btnEncriptar");
btnEncriptar.onclick = btnEncriptar;

var btnDesencriptar = document.getElementById("btnDesencriptar");
btnDesencriptar.onclick = btnDesencriptar;

hideElements();