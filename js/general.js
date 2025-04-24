const darkmode_checker = document.querySelector("#dark-mode-input")


var darkmode_bool = false

darkmode_checker.addEventListener('change', () => {
    if (darkmode_bool) {
        darkmode_bool = false;
        document.querySelector('#theme').setAttribute('href', 'css/custom.css')        
    }

    else {
        darkmode_bool = true
        document.querySelector('#theme').setAttribute('href', 'css/custom-dark.css')
    }
})