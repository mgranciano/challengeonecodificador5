const encryptText = ['ai', 'enter', 'imes', 'ober', 'ufat'];
const decryptText = ['a', 'e', 'i', 'o', 'u'];
const acceptedCharacters = '^[a-z ]+$';
///
//funcion para encriptar
////
function encrypt(data) {
    let result = '';
    for (let index = 0; index < data.length; index++) {
        switch (data[index]) {
            case decryptText[0]:
                result = result + encryptText[0];
                break;
            case decryptText[1]:
                result = result + encryptText[1];
                break;
            case decryptText[2]:
                result = result + encryptText[2];
                break;
            case decryptText[3]:
                result = result + encryptText[3];
                break;
            case decryptText[4]:
                result = result + encryptText[4];
                break;
            default:
                result = result + data[index];
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

    for (let index = 0; index < data.length; index++) {
        switch (data[index]) {
            case decryptText[0]:
                if ((data[index] + data[index + 1]) === encryptText[0]) {
                    result = result + decryptText[0];
                    index++;
                } else {
                    result = result + data[index];
                }
                break;
            case decryptText[1]:
                if ((data[index] + data[index + 1] + data[index + 2] + data[index + 3] + data[index + 4]) === encryptText[1]) {
                    result = result + decryptText[1];
                    index = index + 4;
                } else {
                    result = result + data[index];
                }
                break;
            case decryptText[2]:
                if ((data[index] + data[index + 1] + data[index + 2] + data[index + 3]) === encryptText[2]) {
                    result = result + decryptText[2];
                    index = index + 3;
                } else {
                    result = result + data[index];
                }
                break;
            case decryptText[3]:
                if ((data[index] + data[index + 1] + data[index + 2] + data[index + 3]) === encryptText[3]) {
                    result = result + decryptText[3];
                    index = index + 3;
                } else {
                    result = result + data[index];
                }
                break;
            case decryptText[4]:
                if ((data[index] + data[index + 1] + data[index + 2] + data[index + 3]) === encryptText[4]) {
                    result = result + decryptText[4];
                    index = index + 3;
                } else {
                    result = result + data[index];
                }
                break;
            default:
                result = result + data[index];
                break;
        }
    }
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
            alert('Error al copiar texto: ', err);
        });
}
////
// funcion para ocultar elementos al inicio de la pagina 
///
function hide_show_Elements(error) {
    document.getElementById('notresult').style.display = 'inline';
    document.getElementById('result').style.display = 'none';
    document.getElementById('result').value = '';
    document.getElementById("txtInput").focus();

    if (error === 1) {
        alert('El mensaje contiene caracteres inválidos');
    }
}
////
// funcion para ocultar elementos al inicio de la pagina 
///
function process_Elements() {
    document.getElementById('result').style.display = 'inline';
    document.getElementById('notresult').style.display = 'none';
}
////
//funcion para validar si Solo letras minúsculas y sin acentos, no acepta otra cosa 
////
function validate(value) {
    // Variable que usaremos para determinar si el input es valido
    let isValid = false;
    // regex para solo letras minusculas
    const pattern = new RegExp(acceptedCharacters);

    if (!value) { // Se valida que tenga información el textarea 
        alert('No hay datos para encriptar');
        return;
    }

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

    if (validate(data)) { // se valida que tenga los criterios correctos para encriptar

        process_Elements();
        document.getElementById("txtOutput").value = encrypt(data);

    } else {
        hide_show_Elements(1);
    }

}
////
//funcion para iniciar la desencriptacion desencriptar
////
function startDecrypt() {
    const data = document.getElementById("txtInput").value.trim();

    if (validate(data)) { // se valida que tenga los criterios correctos para encriptar

        process_Elements();
        document.getElementById("txtOutput").value = decrypt(data);

    } else {
        hide_show_Elements(1);
    }
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

hide_show_Elements(0);