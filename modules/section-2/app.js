// html contener [start]
function htmlContenerSEC2Genretor(){
    // crete Contener
    let contenerSEC2 = document.querySelector("body").appendChild(document.createElement("section"))
    // get class for contenerSEC2
    contenerSEC2.setAttribute("class","SEC-2")

    // genrate title SEC2
    let titleSEC2 = document.querySelector(".SEC-2").appendChild(document.createElement("h1"))
    // add text in title
    titleSEC2.innerText = "تنرو , چه خدماتی ارائه میدهد؟ "
}
htmlContenerSEC2Genretor()
// html contener [end]

