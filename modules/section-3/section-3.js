
export function createSection3() {
  // create container SEC3
  let containerSEC3 = document.createElement("section");
  containerSEC3.classList.add("SEC-3");
  document.body.appendChild(containerSEC3);

  // create title SEC3
  let titleSEC3 = document.createElement("h1");
  containerSEC3.appendChild(titleSEC3);
  titleSEC3.innerText = "چرا تنرو را انتخاب کنیم؟";

  // create content object
  let contentBodySEC3 = [
      {
          imgUrl: "media/imgitm-body-SEC31.png",
          titleItms: "همیشه در دسترس",
          Pitms: "پشتیبانی 24 ساعته همکاران ما در تنرو",
      },
      {
          imgUrl: "media/imgitm-body-SEC32.png",
          titleItms: "به صرفه",
          Pitms: " ارزان ترین فروشگاه های ممکن نزدیک به شما",
      },
      {
          imgUrl: "media/imgitm-body-SEC33.png",
          titleItms: " حداکثر سرعت",
          Pitms: " تحویل کالا در کم ترین زمان ممکن برای شما",
      },
      {
          imgUrl: "media/imgitm-body-SEC34.png",
          titleItms: " کیفیت بالا    ",
          Pitms: "بهترین کیفیت ممکن که فکرش هم می کنید.",
      },
  ];

  // create container body SEC3
  let bodyConteanerSEC3 = document.createElement("div");
  bodyConteanerSEC3.classList.add("body-SEC-3");
  containerSEC3.appendChild(bodyConteanerSEC3);

  // create item body SEC3
  contentBodySEC3.forEach((content) => {
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
}