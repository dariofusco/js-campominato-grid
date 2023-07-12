document.getElementById("myBtn").addEventListener("click", function () {

    const div = document.querySelector("div.row")

    for (let i = 1; i <= 100; i++) {
        const singleSquare = `<div class="${i} border border-1 square">${i}</div>`
        div.innerHTML += singleSquare

    }
    const squareList = document.querySelectorAll(".square")

    for (let i = 0; i < squareList.length; i++) {
        squareList[i].addEventListener("click", function () {
            squareList[i].classList.toggle("bg-success")
            console.log(squareList[i].innerHTML)
        })
    }
    
})








