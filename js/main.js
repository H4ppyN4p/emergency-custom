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
            document.querySelector('#info-text-content').textContent =  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur nihil eum ad recusandae doloremque harum reiciendis sit assumenda unde, libero possimus natus incidunt? Culpa numquam nisi velit, nemo saepe accusantium porro quas ipsum dolor modi sint nulla iste cumque. Iure sed debitis unde quos ex architecto quaerat minus commodi"
            console.log('clicked head circle')
            break
        case 'hand-circle':
            document.querySelector('#info-text-content').textContent =  "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eius alias exercitationem modi, harum eveniet dolorum vero dignissimos vel atque, delectus mollitia nesciunt quidem ipsum qui obcaecati in consequuntur tenetur reiciendis eaque? Velit beatae itaque et totam fugit assumenda nisi."
            console.log('clicked hand circle')
            break
        case 'tie-circle':
            document.querySelector('#info-text-content').textContent =  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sequi officiis suscipit consequatur culpa sed, aperiam et repudiandae. Quia, voluptates."
            console.log('tie circle clicked')
            break
    }
}

function cleanup() {
    document.querySelector("#info-text-container").classList.remove("show")
    document.querySelector("#info-text-container").removeEventListener("animationend", cleanup)
}