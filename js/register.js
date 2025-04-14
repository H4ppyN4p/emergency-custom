console.log("hello world")

const slider = document.querySelector("#confidence")
const sliderValueWritten = document.querySelector("#confidence-value")

slider.addEventListener("input", updateValue)

function updateValue() {
    sliderValueWritten.textContent = slider.value
}

document.querySelector("#notify-form").reset();
document.querySelector("#submit-button").addEventListener("click", submitForm)

function submitForm() {
    //console.log(document.querySelector("#name").value)

    document.querySelector("#name-summary").textContent = document.querySelector("#name").value

    document.querySelector("#is-famous-summary").textContent = document.querySelector("#is-famous").checked
    
    document.querySelector("#platform-summary").textContent = document.querySelector("#platform").value
    
    document.querySelector("#link-summary").textContent = document.querySelector("#link").value
    
    document.querySelector("#confidence-summary").textContent = document.querySelector("#confidence").value + "%"

    document.querySelector("#summary-recap").classList.remove("hide")
}

function sendInfo() {
    document.querySelector("#notify-form").reset()
    document.querySelector("#summary-recap").classList.add("hide")

}

console.log(slider.value)


