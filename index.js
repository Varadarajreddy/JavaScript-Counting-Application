let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("count-el1")
console.log(saveEl)
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count

}

function save() {
    saveEl.textContent += " - " + count
    countEl.textContent = 0
    count = 0

}

function clear() {
    console.log("clk")
}