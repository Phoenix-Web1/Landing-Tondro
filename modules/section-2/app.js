// HTML container generator [start]
function htmlContainerSEC2Generator() {
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
}
htmlContainerSEC2Generator();
// HTML container generator [end]

// create bodySEC2 [start]
function bodySEC2Generator() {
  let contentBodySEC2 = [
    {
      headName: "1درخواست خرید",
      imgUrl: "img/thumbnail & headertext.png",
      titleNameBody: "ارسال خر2ید",
      Ptext:
        "میتوانید برای سازمان یا منزل شخصی خود فقط با مشخص کردن مبدا و مقصد و ارسال لیست های خرید خود, کارها را با سرعت بیشتری انجام دهید و برای دیگر کار هایتان زمان بخرید.",
      btnText: "درخواست خرید",
    },
    {
      headName: "2درخواست خرید",
      imgUrl: "img/thumbnail & headertext.png",
      titleNameBody: "ارسال خری1د",
      Ptext:
        "میتوانید برای سازمان یا منزل شخصی خود فقط با مشخص کردن مبدا و مقصد و ارسال لیست های خرید خود, کارها را با سرعت بیشتری انجام دهید و برای دیگر کار هایتان زمان بخرید.",
      btnText: "درخواست خرید",
    },
  ];

  // Get the main section
  const mainSection = document.querySelector(".mainSec");

  // Function to update main section content
  function updateMainSectionContent(index) {
    const content = contentBodySEC2[index];
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
      updateMainSectionContent(index);
    });

    // append header button to headers div
    document.querySelector(".headers").appendChild(headerButton);
  });

  // Show the content of the first item by default
  updateMainSectionContent(0);
}
bodySEC2Generator();
// create bodySEC2 [end]
