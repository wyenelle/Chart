let input = document.getElementById("input-field")
let image = document.querySelector(".image")
let errorMessage = document.querySelector(".extra")
let button = document.getElementById("btn")

errorMessage.textContent = ""

const mtnNumbers = ['0803', '0806', '0814', '0810', '0813','0816','0703','0706','0903','0906'];

const hideError = () => {
    setTimeout(() => {
        errorMessage.style.display = "none"
    }, 5000)
}

let validateForm = () => {
    if(input.value.length < 11) {
         input.style.border = "2px solid red"
       errorMessage.textContent = "Input a valid and complete Number"
        
    // } else if(input.value === NaN) {
    //     errorMessage.textContent = "Input is Invalid"
    //     input.value = ""

    } else if (input.value.length == 11){
        image.style.display = "inline-block"
        input.style.border = "2px solid green"
        errorMessage.style.display = "none"
    } else {
        input.value = ""
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault();

    if (mtnNumbers.includes(input.value)) {
        image.style.display = "inline-block"
        input.value = "";
    } else {
        image.style.display = "none" 
        errorMessage.textContent = "Input a valid and complete Number"
        hideError()
    }
    validateForm()
})