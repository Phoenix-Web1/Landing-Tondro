// HTML container generator [start]

// create container
let containerSEC2 = document.createElement("section");
// get class for containerSEC2
containerSEC2.setAttribute("class", "SEC-2");

// generate title for SEC2
let titleSEC2 = document.createElement("h1");
// add text to title
titleSEC2.innerText = "تنرو , چه خدماتی ارائه میدهد؟";

// append title to container
containerSEC2.appendChild(titleSEC2);

// append container to body
document.body.appendChild(containerSEC2);

// HTML container generator [end]
let headerSEC2 = document.createElement("div");
headerSEC2.setAttribute("class", "headers");
containerSEC2.appendChild(headerSEC2);
// create bodySEC2 [start]

let contentBodySEC2 = [
  {
    headName: "درخواست سفیر",
    imgUrl: "img/thumbnail & headertext2.png",
    titleNameBody: "درخواست سفیر",
    Ptext:
      " با درخواست سفیر خیل راحت بسته های خود را جابجا کنید و برای دیگر کارهایتن زمان بزارید.",
    btnText: " درخواست سفیر",
  },
  {
    headName: "درخواست خرید",
    imgUrl: "img/thumbnail & headertext.png",
    titleNameBody: "ارسال خرید",
    Ptext:
      "میتوانید برای سازمان یا منزل شخصی خود فقط با مشخص کردن مبدا و مقصد و ارسال لیست های خرید خود, کارها را با سرعت بیشتری انجام دهید و برای دیگر کار هایتان زمان بخرید.",
    btnText: "درخواست خرید",
  },
  
];

// Get the main section
// Function to update main section content
function updateMainSectionContent(index) {
  const content = contentBodySEC2[index];
  let mainSection = document.createElement("div");
  mainSection.classList.add("mainSec");
  containerSEC2.appendChild(mainSection);
  mainSection.innerHTML = `
  <img src="${content.imgUrl}" />
  <div>
  <h2>${content.titleNameBody}</h2>
  <p>${content.Ptext}</p>
  <button>${content.btnText}</button>
  </div>
  `;
}

// loop through each content and generate HTML and event listeners
contentBodySEC2.forEach((content, index) => {
  // create button for headers
  let headerButton = document.createElement("button");
  headerButton.innerText = content.headName;
  headerButton.classList.add("header-btn");
  // add event listener to button
  headerButton.addEventListener("click", () => {
    document.querySelector(".active-sec2").setAttribute("class", "header-btn");
    updateMainSectionContent(index);
    headerButton.classList.add("active-sec2");
  });
  updateMainSectionContent(index);
  headerSEC2.appendChild(headerButton);
  // append header button to headers div
});

// Show the content of the first item by default

// create bodySEC2 [end]

let mmdi = document.querySelector(".header-btn:last-of-type");
mmdi.setAttribute("class", "active-sec2");


let  flashGuide = document.createElement('img')
flashGuide.setAttribute('src','img/Vector 4.svg')
flashGuide.setAttribute('class','flashGuide')
containerSEC2.appendChild(flashGuide)