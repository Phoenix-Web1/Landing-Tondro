export function createSection6() {
    // Create container for Section 6
    let containerSEC6 = document.createElement("section");
    containerSEC6.classList.add("social-section");
    document.body.appendChild(containerSEC6);
    
    // Add HTML content to the container
    containerSEC6.innerHTML = `
      <p>راه های ارتباطی با ما</p>
      <div>
          <img src="media/whatsApp.png" alt="">
          <img src="media/telegram.png" alt="">
          <img src="media/facebook.png" alt="">
          <img src="media/instagram.png" alt="">
      </div>
    `;
  }
  