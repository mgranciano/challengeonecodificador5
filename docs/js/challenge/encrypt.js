const encryptText = ['ai', 'enter', 'imes', 'ober', 'ufat'];
const decryptText = ['a', 'e', 'i', 'o', 'u'];


//funcion para encriptar
function fnEncrypt(data) {
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


//funcion para desencriptar
function fnDecrypt(data) {
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