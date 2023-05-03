//Asignando la acción al boton de encriptar
var btnEncrypt = document.getElementById("btnEncriptar");
btnEncrypt.onclick = encrypt;

//Asignando la acción al boton de desencriptar
var btnDecrypt = document.getElementById("btnDesencriptar");
btnDecrypt.onclick = decrypt;

//Asignando la acción al boton de cerrar alert
var eventAlert = document.querySelector(".close");
eventAlert.onclick = hideAlert;

//leyendo el valor del input
var str = document.getElementById("txtInput");

function encrypt() {

    hideAlert();
    standby('Procesando . . .');

    const resultValidation = isValidTextToConvert(str.value);

    if (isEmpty(resultValidation)) {

        showLoader();
        setTimeout(() => {
            var result = '';
            try {
                result = fnEncrypt(str.value);
                setTimeout(() => {
                    hideLoader();
                    showpnlOutput(result);
                    eventAlertOpen(1, 'Dato encriptado correctamente');
                }, 1000)
            } catch (error) {
                eventAlertOpen(0, error);
                hideLoader();
                return;
            }

        }, 100)

    } else {

        eventAlertOpen(0, 'Error: ' + resultValidation);
        standby(resultValidation);
    }

}

function decrypt() {

    hideAlert();
    standby('Procesando . . .');

    const resultValidation = isValidTextToConvert(str.value);

    if (isEmpty(resultValidation)) {

        showLoader();
        setTimeout(() => {
            var result = '';
            try {
                result = fnDecrypt(str.value);
                setTimeout(() => {
                    hideLoader();
                    showpnlOutput(result);
                    eventAlertOpen(1, 'Dato desencriptado correctamente');
                }, 1000)
            } catch (error) {
                eventAlertOpen(0, error);
                hideLoader();
                return;
            }

        }, 100)

    } else {

        eventAlertOpen(0, 'Error: ' + resultValidation);
        standby(resultValidation);
    }

}