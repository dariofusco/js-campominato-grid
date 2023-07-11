document.getElementById("myBtn").addEventListener("click", function () {

    const div = document.querySelector("div.row")

    for (i = 1; i <= 100; i++) {
        const singleSquare = `<div class="${i} border border-1 square">${i}<div>`
        div.innerHTML += singleSquare

    }
    document.querySelector(".square").addEventListener("click", function () {
        document.querySelector(".square").classList.toggle("bg-success")
    })
})








