console.log('hello world')

document.querySelector("#head-circle").addEventListener("click", infoChange)
document.querySelector("#hand-circle").addEventListener("click", infoChange)
document.querySelector("#tie-circle").addEventListener("click", infoChange)

function infoChange() {
    document.querySelector("#info-text-container").classList.add("hide")
    document.querySelector("#info-text-container").classList.remove("hide")
    document.querySelector("#info-text-container").classList.add("show")
    document.querySelector("#info-text-container").addEventListener("animationend", cleanup)
    
    

    switch (this.id) {
        case 'head-circle':
            document.querySelector('#info-text-content').textContent =  "Hvis der kommer et udsagn som Trump selv har fundet på, så er det nok falskt"
            console.log('clicked head circle')
            break
        case 'hand-circle':
            document.querySelector('#info-text-content').textContent =  "Hvis Trump skriver noget på sociale medier, så er det nok falsk"
            console.log('clicked hand circle')
            break
        case 'tie-circle':
            document.querySelector('#info-text-content').textContent =  "Hvis Trump siger noget højt så er det nok falsk"
            console.log('tie circle clicked')
            break
    }
}

function cleanup() {
    document.querySelector("#info-text-container").classList.remove("show")
    document.querySelector("#info-text-container").removeEventListener("animationend", cleanup)
}