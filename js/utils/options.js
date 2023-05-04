function copyToClipboard(str) {

    navigator.clipboard.writeText(str)
        .then(() => { // si logra copiar al portapapeles solo manda msg al log 
            eventAlertOpen(1, 'Texto copiado a portapalees');
        })
        .catch(err => { // si manda error al llamar el api navigator manda el error en un alert 
            eventAlertOpen(0, 'Error: ' + err);
        });
}