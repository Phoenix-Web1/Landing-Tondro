export function createFooter() {
  // Function to create footer
  function createFooter() {
    // Create footer element
    let footer = document.createElement("footer");
    footer.id = "flexibleFooter";

    // Create footer content container
    let footerContent = document.createElement("div");
    footerContent.id = "footerContent";

    // Create footer parts
    let parts = [
      {
        id: "part1",
        content: [
          { heading: "ایمیل", subtext: "info@tonrow.mail.com", isLink: true }, // Define content for part 1
          { heading: "شماره تماس", subtext: "1800", isLink: false }, // Define content for part 1
          {
            heading: "آدرس",
            subtext: "بوشهر،صلح آباد، خیابان صدرا، پشت پمپ بنزین وزیری",
            isLink: false,
          }, // Define content for part 1
        ],
      },
      {
        id: "part2",
        heading: "سفیران", // Define heading for part 2
        links: [
          { text: "دانلود اپ سفیر", url: "#" }, // Define links for part 2
          { text: "پرسش های متداول سفیران", url: "#" }, // Define links for part 2
          { text: "شرایط و قوانین سفیران", url: "#" }, // Define links for part 2
        ],
      },
      {
        id: "part3",
        heading: "خدمات", // Define heading for part 3
        links: [
          { text: "خرید منزل", url: "#" }, // Define links for part 3
          { text: "درخواست جا به جایی", url: "#" }, // Define links for part 3
          { text: "بازگشت وجه", url: "#" }, // Define links for part 3
          { text: "پشتیبانی", url: "#" }, // Define links for part 3
        ],
      },
      {
        id: "part4",
        heading: "سفیر", // Define heading for part 4
        links: [
          { text: "وبلاگ سفیر", url: "#" }, // Define links for part 4
          { text: "لوگو و هویت سفیر", url: "#" }, // Define links for part 4
          { text: "قوانین و مقررات", url: "#" }, // Define links for part 4
          { text: "درباره ما", url: "#" }, // Define links for part 4
          { text: "تماس با ما", url: "#" }, // Define links for part 4
          { text: "فرصت شغلی", url: "#" }, // Define links for part 4
        ],
      },
      {
        id: "part5",
        heading: "سفیر", // Changed Part 5 title to "سفیر"
        imageUrl: "/media/tonrow.png", // Add image URL for part 5
        subtext: "حمل و نقل با ما، آسودگی خاطر برای شما!", // Add subtext for part 5
      }, // Add imageUrl and subtext for Part 5
    ];

    // Check if it's mobile
    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    // Append parts to footer
    parts.forEach(function (part) {
      // Create div for each part
      let div = document.createElement("div");
      div.id = part.id; // Set id for each part
      div.style.textAlign = "right"; // Align text to the right

      // Check part type and create content accordingly
      if (part.content) {
        // Create content for part with content
        part.content.forEach(function (item, index) {
          // Create heading element
          let h2Div = document.createElement("div");
          let h2 = document.createElement("h2");
          h2.textContent = item.heading; // Set heading text
          h2Div.appendChild(h2);

          // Create subtext element
          let span = document.createElement("span");
          span.style.textAlign = "right"; // Align text to the right
          if (item.isLink && index === 0) {
            let mailtoLink = document.createElement("a");
            mailtoLink.href = "mailto:" + item.subtext; // Set mailto link
            mailtoLink.textContent = item.subtext;
            mailtoLink.style.textDecoration = "underline"; // Keep underline
            mailtoLink.style.color = "inherit"; // Inherit color from parent
            span.appendChild(mailtoLink);
          } else {
            span.textContent = item.subtext;
          }

          // Append heading and subtext to div
          h2Div.appendChild(span);
          div.appendChild(h2Div);
        });
      } else if (part.heading && part.links) {
        // Create content for part with heading and links
        let h2Div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = part.heading; // Set heading text
        h2.style.textAlign = "right";
        h2Div.appendChild(h2);
        div.appendChild(h2Div);

        part.links.forEach(function (link) {
          // Exclude specific links on mobile
          if (
            !isMobile ||
            (isMobile &&
              link.text !== "دانلود اپ سفیر" &&
              link.text !== "پشتیبانی" &&
              link.text !== "قوانین و مقررات" &&
              link.text !== "لوگو و هویت سفیر" &&
              link.text !== "وبلاگ سفیر" &&
              link.text !== "فرصت شغلی")
          ) {
            // Create link elements
            let a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.text;
            a.style.textDecoration = "none";
            a.style.color = "inherit";
            let linkDiv = document.createElement("div");
            linkDiv.style.textAlign = "right";
            linkDiv.appendChild(a);
            div.appendChild(linkDiv);
          }
        });
      } else if (part.heading === "سفیر" && part.imageUrl && part.subtext) {
        // Create content for Part 5 with image and subtext
        let imageTitleContainer = document.createElement("div");
        imageTitleContainer.style.display = "flex";
        imageTitleContainer.style.alignItems = "center"; // Align items vertically
        imageTitleContainer.style.justifyContent = "flex-end"; // Align items to the end
        imageTitleContainer.style.flexDirection = "row-reverse";

        // Create image element
        let image = document.createElement("img");
        image.src = part.imageUrl; // Set image source
        image.alt = part.heading;
        image.style.marginLeft = "4px"; // Add margin to separate from text
        image.style.height = "20px"; // Adjust height as needed
        imageTitleContainer.appendChild(image);

        // Create title element
        let h2 = document.createElement("h2");
        h2.textContent = part.heading; // Set heading text
        h2.style.textAlign = "right";
        imageTitleContainer.appendChild(h2);

        // Append image and title container to the div
        div.appendChild(imageTitleContainer);

        // Create span element for subtext
        let span = document.createElement("span");
        span.textContent = part.subtext; // Set subtext
        div.appendChild(span);
      } else {
        div.textContent = part.text;
      }

      // Swap position of Part 3 and Part 5 on mobile
      if (isMobile && part.id === "part3") {
        let part5Element = document.getElementById("part5");
        if (part5Element) {
          footerContent.appendChild(part5Element); // Swap position of Part 3 and Part 5 on mobile
        }
      }

      footerContent.appendChild(div); // Append current part's div to footer content
    });

    // Additional block with images
    let imageBlock = document.createElement("div");
    imageBlock.classList.add("image-block"); // Add class for styling

    // Function to add image
    function addImage(imageSrc, altText, isLarge = false) {
      let image = document.createElement("img");
      image.src = imageSrc;
      image.alt = altText;
      image.style.marginLeft = "10px";
      image.style.height = isLarge ? "120px" : "50px"; // Set larger height if isLarge is true
      imageBlock.appendChild(image);
    }

    // Adding images
    addImage("/media/meliSabt.png", "نشان ملی ثبت(رسانه دیجیتال)", true); // Set the third argument to true for larger height
    addImage("/media/namadElc.png", "نماد الکترونیک", true); // Set the third argument to true for larger height
    // Add more images if needed

    // Append footer content to footer
    footer.appendChild(footerContent);

    // Append image block
    footer.appendChild(imageBlock);

    // Add border line under images div
    let imageBlockBorder = document.createElement("div");
    imageBlockBorder.style.width = "100%";
    imageBlockBorder.style.borderBottom = "1px solid black"; // Add border line
    imageBlockBorder.style.marginTop = "10px"; // Adjust margin as needed
    footer.appendChild(imageBlockBorder);

    // Add span under the border line
    let spanUnderBorder = document.createElement("span");
    spanUnderBorder.textContent =
      "تمامی حقوق مادی و معنوی این وبسایت متعلق به تنرو است."; // Add your text here
    spanUnderBorder.style.display = "block"; // Display as block to place it below the border line
    spanUnderBorder.style.marginTop = "10px"; // Adjust margin as needed
    footer.appendChild(spanUnderBorder);

    // Append footer to body
    document.body.appendChild(footer);
  }

  // Call function to create footer
  createFooter();
}
