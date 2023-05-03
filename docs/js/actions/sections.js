//Asignando  el componente preview section
var pnlPreview = document.getElementById('preview');
//Asignando  el componente output section
var pnlOutput = document.getElementById('output');
//Asignando  el componente output section msg
var txtMsg = document.getElementById('txtMsg');



function standby(str) {

    txtMsg.innerHTML = str;

    pnlOutput.style.display = 'none';
    pnlPreview.style.display = 'flex';

}

function showpnlOutput(str) {

    pnlOutput.style.display = 'inline';
    pnlPreview.style.display = 'none';

    document.getElementById('txtOutput').value = str;
}