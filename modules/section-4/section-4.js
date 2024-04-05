export function createSection4() {
    // Create container for Section 4
    let containerSEC4 = document.createElement("section");
    containerSEC4.setAttribute("id", "map");
    document.body.appendChild(containerSEC4);
    
    // Add HTML content to the container
    containerSEC4.innerHTML = `
      <div class="map-cart">
          <span class="card-title"> همین حالا خرید کن</span>
          <span class="card-des"> وظایف سفیران شامل جمع‌آوری سفارشات، تحویل به موقع، ارتباط مؤثر با مشتریان و حفظ کیفیت خدمات است.</span>
          <button>درخواست سفیر</button>
      </div>
    `;
  }
  