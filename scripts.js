
// função principal
function changeMode() {
    // funções secundárias
    changeClasses();
    changeText();
}

// função mudar classes
function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

//função mudar textos
function changeText(){
    // variáveis guardando strings
    const lightMode = "Ligth Mode";
    const darkMode = "Dark Mode";
    
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode +" ON";
        return;
    }
    
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const darkModeClass = 'dark-mode'
// chamar elementos html
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

// adicionar evento
button.addEventListener('click', changeMode);