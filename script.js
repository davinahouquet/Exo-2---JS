const box = document.createElement("div")
box.classList.add("box")

const square = document.querySelector("#square")
square.appendChild(box)

for(let i = 1; i <= 4; i++){
    const newbox = box.cloneNode();
    newbox.innerText = 1;
    square.appendChild(newbox);
}