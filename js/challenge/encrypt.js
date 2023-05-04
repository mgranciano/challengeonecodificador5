const passportText = [
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat']
];


//funcion para encriptar
function fnEncrypt(data) {
    for (let index = 0; index < passportText.length; index++) {
        if (data.includes(passportText[index][0])) {
            data = data.replaceAll(passportText[index][0], passportText[index][1]);
        }
    }
    return data;
}

//funcion para desencriptar
function fnDecrypt(data) {
    for (let index = 0; index < passportText.length; index++) {
        if (data.includes(passportText[index][1])) {
            data = data.replaceAll(passportText[index][1], passportText[index][0]);
        }
    }
    return data;
}