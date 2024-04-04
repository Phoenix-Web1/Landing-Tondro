// html contener [start]
function htmlContenerSEC2Genretor() {
    // crete Contener
    let contenerSEC2 = document.querySelector("body").appendChild(document.createElement("section"))
    // get class for contenerSEC2
    contenerSEC2.setAttribute("class", "SEC-2")

    // genrate title SEC2
    let titleSEC2 = document.querySelector(".SEC-2").appendChild(document.createElement("h1"))
    // add text in title
    titleSEC2.innerText = "تنرو , چه خدماتی ارائه میدهد؟ "
}
htmlContenerSEC2Genretor()
// html contener [end]

// create bodySEC2 [start]
function BodySEC2Genretore() {
    // You can enter all the content you want to be created inside this and it will create a new section for you inside the second section
    let contentBodySEC2 = [
        {
            headName: "1درخواست خرید",
            imgUrl: "img/thumbnail & headertext.png",
            titleNameBody: "ارسال خرید",
            Ptext: "میتوانید برای سازمان یا منزل شخصی خود فقط با مشخص کردن مبدا و مقصد و ارسال لیست های خرید خود, کارها را با سرعت بیشتری انجام دهید و برای دیگر کار هایتان زمان بخرید.",
            btnText: "درخواست خرید",
        },
        {
            headName: "2درخواست خرید",
            imgUrl: "img/thumbnail & headertext.png",
            titleNameBody: "ارسال خرید",
            Ptext: "میتوانید برای سازمان یا منزل شخصی خود فقط با مشخص کردن مبدا و مقصد و ارسال لیست های خرید خود, کارها را با سرعت بیشتری انجام دهید و برای دیگر کار هایتان زمان بخرید.",
            btnText: "درخواست خرید",
        },
    ];
    contentBodySEC2.forEach(element => {
        console.log(element);
        for (let index = 0; index < 1; index++) {
            console.log(element);
            
        }
    });
    /*
     // create title body SEC2 [start]
     function genreteHeadBodySEC2(contenteSEC2){
         // craete continer div for head body
         let btnHead = document.querySelector(".SEC-2").appendChild(document.createElement("div"))
         // create btn body head
         let btnBodyHead = ""
         // add contente head body
         btnHead.document.appendChild(btnBodyHead)
     }
     genreteHeadBodySEC2(contentBodySEC2)
     // create title body SEC2 [end] 
     */
}
BodySEC2Genretore()
// create bodySEC2 [END]