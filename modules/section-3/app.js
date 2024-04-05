// create contaener SEC3 [start]
let conteanerSEC3 = document.createElement("section");
conteanerSEC3.classList.add("SEC-3");
document.body.appendChild(conteanerSEC3);
// create contaener SEC3 [end]
// create title SEC3 [start]
let titleSEC3 = document.createElement("h1");
conteanerSEC3.appendChild(titleSEC3);
titleSEC3.innerText = "چرا تنرو را انتخاب کنیم؟";
// create title SEC3 [end]
// create a content object [start]

let contentBodySEC3 = [
  {
    imgUrl: "img/imgitm-body-SEC31.png",
    titleItms: "همیشه در دسترس",
    Pitms: "پشتیبانی 24 ساعته همکاران ما در تنرو",
  },
  {
    imgUrl: "img/imgitm-body-SEC32.png",
    titleItms: "به صرفه",
    Pitms: " ارزان ترین فروشگاه های ممکن نزدیک به شما",
  },
  {
    imgUrl: "img/imgitm-body-SEC33.png",
    titleItms: " حداکثر سرعت",
    Pitms: " تحویل کالا در کم ترین زمان ممکن برای شما",
  },
  {
    imgUrl: "img/imgitm-body-SEC34.png",
    titleItms: " کیفیت بالا    ",
    Pitms: "بهترین کیفیت ممکن که فکرش هم می کنید.",
  },
];
// create a content object [END]
// create contenar body SEC3 [start]
let bodyConteanerSEC3 = document.createElement("div");
bodyConteanerSEC3.classList.add("body-SEC-3");
conteanerSEC3.appendChild(bodyConteanerSEC3);
// create contenar body SEC3 [end]
// create itm body SEC3 [start]
contentBodySEC3.forEach((content,index) => {
  let itmBodySEC3 = document.createElement("div");
  itmBodySEC3.classList.add("itm-SEC3");
  bodyConteanerSEC3.appendChild(itmBodySEC3);
  itmBodySEC3.innerHTML = `
    <img src="${content.imgUrl}" />
    <div>
        <h2>${content.titleItms}</h2>
        <p>${content.Pitms}</p>
    </div>
    
    `;
});
// create itm body SEC3 [end]
