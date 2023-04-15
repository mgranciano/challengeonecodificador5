////
//funcion para encriptar
////
function encrypt(data) {
    let result = '';
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        switch (element) {
            case 'a':
                result = result + 'ai';
                break;
            case 'e':
                result = result + 'enter';
                break;
            case 'i':
                result = result + 'imse';
                break;
            case 'o':
                result = result + 'ober';
                break;
            case 'u':
                result = result + 'ufat';
                break;
            default:
                result = result + element;
                break;
        }
    }
    return result;
}
////
//funcion para encriptar
////
function decrypt(data) {
    let result = '';


    result = data.replace('enter', 'e').replace('imes', 'i').replace('ai', 'a').replace('ober', 'o').replace('ufat', 'u');

    return result;
}
////
// funcion para copiar al portapapeles
////
function copyToClipboard() {
    var text = document.getElementById('txtOutput').value;

    navigator.clipboard.writeText(text)
        .then(() => { // si logra copiar al portapapeles solo manda msg al log 
            console.log('Text copied to clipboard');
        })
        .catch(err => { // si manda error al llamar el api navigator manda el error en un alert 
            Alert('Error in copying text: ', err);
        });
}

////
// funcion para ocultar elementos al inicio de la pagina 
///
function hide_show_Elements() {
    document.getElementById('notresult').style.display = 'inline';
    document.getElementById('result').style.display = 'none';
    document.getElementById('result').value = '';
    document.getElementById("txtInput").focus();
}
////
//funcion para validar si Solo letras minúsculas y sin acentos, no acepta otra cosa 
////
function validate(value) {
    // Variable que usaremos para determinar si el input es valido
    let isValid = false;
    // regex para solo letras minusculas
    const pattern = new RegExp('^[a-z]+$');


    if (!pattern.test(value)) {
        isValid = false;
    } else {
        // Si pasamos todas la validaciones anteriores, entonces el input es valido
        isValid = true;
    }
    //retornamos el valor resultado 
    return isValid;
}
////
//funcion para validar e iniciar el proceso de encriptar 
////
function startEncript() {
    const data = document.getElementById("txtInput").value.trim();

    if (!data) { // Se valida que tenga información el textarea 
        alert('No hay datos para encriptar');
    } else {
        if (validate(data)) { // se valida que tenga los criterios correctos para encriptar

            document.getElementById('result').style.display = 'inline';
            document.getElementById('notresult').style.display = 'none';
            document.getElementById("txtOutput").value = encrypt(data);

        } else {
            alert('El mensaje a encriptar contiene caracteres inválidos');
            hide_show_Elements();
        }
    }
}
////
//funcion para iniciar la desencriptacion desencriptar
////
function startDecrypt() {
    const data = document.getElementById("txtInput").value;

    document.getElementById('result').style.display = 'inline';
    document.getElementById('notresult').style.display = 'none';
    document.getElementById("txtOutput").value = decrypt(data);
}

//Asignando la acción al boton de encriptar
var btnEncriptar = document.getElementById("btnEncriptar");
btnEncriptar.onclick = startEncript;

//Asignando la acción al boton de desencriptar
var btnDesencriptar = document.getElementById("btnDesencriptar");
btnDesencriptar.onclick = startDecrypt;

//Asignando la acción al boton de copiar
var btnCopiar = document.getElementById("btnCopiar");
btnCopiar.onclick = copyToClipboard;

hide_show_Elements();

// mandar msg con alert paraespecificar que solo lleva letrasy minusculas