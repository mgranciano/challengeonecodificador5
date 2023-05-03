const acceptedCharacters = '^[a-zñÑ ]+$';


function isEmpty(str) {
    return (!str || str.trim().length === 0);
}

function isValid(str) {
    const pattern = new RegExp(acceptedCharacters);
    return !pattern.test(str);
}

function isValidTextToConvert(str) {

    let result = '';

    str = str.split("\n").join("");

    if (isEmpty(str)) {
        result = 'El texto no puede estar vacío.';
    } else {
        if (isValid(str)) {
            result = 'El texto contienen caracteres especiales <br>( solo acepta minúsculas )';
        }
    }

    return result;
}