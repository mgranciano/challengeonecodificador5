//Asignando el compomente alert
var alert = document.querySelector('.alert');
//Asignación del compoente de 'p' dentro del alert
var alertTxt = document.getElementById("txtAlert");
//Asignando el componente Alert
var alertWindow = document.querySelector('.alert');
//Asignando el componente error
var errorIcon = document.querySelector('.error');
//Asignando el componente error
var successIcon = document.querySelector('.success');

function showAlert() {
    alertWindow.style.opacity = 1;
}

function hideAlert() {
    alertWindow.style.opacity = 0;
}

function eventAlertOpen(opc, str) {

    errorIcon.classList.add('hidden');
    successIcon.classList.add('hidden');
    alert.classList.remove('alert-error');
    alert.classList.remove('alert-success');

    switch (opc) {
        case 0:
            alert.classList.add('alert-error');
            errorIcon.classList.remove('hidden');
            successIcon.classList.add('hidden');
            break;
        case 1:
            alert.classList.add('alert-success');
            errorIcon.classList.add('hidden');
            successIcon.classList.remove('hidden');
            break;
    }

    showAlert();
    alertTxt.innerHTML = str;

    setTimeout(() => {
        hideAlert();
    }, 4500);

}