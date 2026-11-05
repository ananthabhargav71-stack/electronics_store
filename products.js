// ---------- product catalog data ----------
// Keyed by category id. Each category page includes this file and calls
// renderProducts("categoryKey") once the DOM is ready.
const productData = {
  smartphones: [
    { name: "samsung Galaxy S23", spec: "6.7\" AMOLED · 256GB · 5G", price: "₹54,999", tag: "New", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDxgUW6IdW97Hn8EariD-ow81fMmo-7Dt3v6hio3Bu7unpEAxr3H9DnPiqmZOPXQ8V7oRKF8jKbjn8U_YjP6d01F9AXsuPKQWL4DNyTvssoAmeA6sla6G2Onc1ElqJp3eZKcM2Zg&usqp=CAc" },
    { name: "Apple iPhone 15", spec: "6.5\" LCD · 128GB · Dual SIM", price: "₹22,499", tag: "Popular", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76D9t63VUfuTR_0zRPu7vZg7r7YBuSDdkghKqelICZg&s=10" },
    { name: "IQOO Neo 10", spec: "6.1\" OLED · 128GB · Compact", price: "₹31,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbqRtKOLL4KJ504L3jHQmNjrPZyyAtN6VQb8axrhBVA&s" },
    { name: "Apple iPad 11", spec: "11\" Tablet · 128GB · Wi‑Fi", price: "₹28,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsN2k-Yf5OXpIUK-TMIWTPcQ640nqwefpnFyBQMJqn3w&s=10" },
    { name: "Samsung Zfold 5", spec: "6.8\" AMOLED · 512GB · 5G", price: "₹74,999", tag: "Flagship", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SgwhyPQg5E7-HKxStC69C65zJPGhPXp9wtuFJXyF_w&s=10" },
    { name: "Samsung Galaxy Tab A8", spec: "8\" Tablet · 64GB · Parental Lock", price: "₹11,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-rMiUhVA7QVHPEmE9yVpqcbWcd0cGp7qIzR_uvGloA&s=10" },
    { name: "OnePlus Nord 3", spec: "6.5\" AMOLED · 256GB · 5G", price: "₹39,999", tag: "", img: "https://oasis.opstatics.com/content/dam/oasis/page/2023/global/product/vitamin/vitamin-spec-black.png" },
    { name: "Xiaomi Redmi Note 13", spec: "6.6\" AMOLED · 128GB · 5G", price: "₹14,999", tag: "Budget", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87KR9ZYjhVY88vKjCae90KCZbpj3nT5r9VpcQuaxcYQ&s=10" }
    
  ],
  laptops: [
    { name: "Lenovo IdeaPad", spec: "14\" FHD · i5 · 16GB · 512GB SSD", price: "₹58,999", tag: "Popular", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV285E-OnCxsDFkry0CPv0-qitMoMOt6k5cLA8CpMOIQ&s" },
    { name: "Apple MacBook Air M5", spec: "16\" QHD · i7 · 32GB · 1TB SSD", price: "₹94,999", tag: "New", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--2AFM_qbVy-e_F747HxCLCzz0CvIJUk8e79dGEHyUA&s=10" },
    { name: "Lenovo Legion", spec: "Ryzen 5 · 16GB · RTX 3050 · Tower", price: "₹67,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZlQiddLU6SQ0Rfef_4IMbzq0NHr1KtITGck3qhHbHw&s=10" },
    { name: "HP Victus 7", spec: "Ryzen 7 · 32GB · RTX 4060 · Tower", price: "₹1,19,999", tag: "Flagship", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSMM1zPXyy56jYyb1fFJIXCkaUtsfC_eKTNrTnLwTBg&s=10" },
    { name: "MI Notebook Ultra", spec: "11\" HD · Celeron · 8GB · 256GB SSD", price: "₹26,999", tag: "Budget", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFy4rBvXFkBkY3Dg3DfCeD4daIK8hdpUke8qe5lLE2g&s=10" },
    { name: "Acer Predator", spec: "27\" QHD IPS · 165Hz", price: "₹21,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2_-_UvxAtskeVb_wMDIp-yv5uJpKilt6hL2NekItIg&s=10" },
    { name: "Dell Inspiron", spec: "32\" 4K IPS · HDR400", price: "₹29,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8q1dwfnfC303tIhITBEA-NoM7WzLLZ4pA4sDhu4LZlg&s=10" },
    { name: "Asus ROG Swift", spec: "27\" 4K IPS · 144Hz · G-Sync", price: "₹39,999", tag: "New", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8HRTgBpn9UbkEaSC6Owykv3nVcbsocQAWILaa9Gl2A&s=10" }
  ],
  audio: [
    { name: "Sony WH-1000XM4", spec: "True Wireless · ANC · 30h battery", price: "₹6,999", tag: "Popular", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nNIgiYnVtFW-6tTIUdw8FqMSNJDrR5IZ-4355bjoaA&s=10" },
    { name: "Apple AirPods Pro", spec: "Over-ear · Wired/Wireless · ANC", price: "₹12,499", tag: "New", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPZWsKrge8b9QNJfiG8Ov9DEgK98xeIgXBcWiqlrbeQ&s=10" },
    { name: "Realme Buds air 3", spec: "Bluetooth Speaker · IPX7 · 12h", price: "₹3,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzOEx2f2OuTs6uyHhfAfqCfehMHYXP77HHf7mhrNjug&s=10" },
    { name: "Sony SRS-XB43", spec: "Party Speaker · 200W · Lights", price: "₹15,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmP30mKG82LP9XiqlxzvcdDMhJDY5D4qlFfk-bv6BepIfIULaRCQuWmdI&s=10" },
    { name: "BoAt Airdopes 141", spec: "True Wireless · 20h battery", price: "₹2,799", tag: "Budget", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPKELakYGuva6i6DWvq12iUflKPVibuGQ2qSlMtykZQ&s=10" },
    { name: "JBL Charge 5", spec: "Soundbar + Subwoofer · HDMI ARC", price: "₹17,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM09mlqvWr0VEBUu9ujWUglN6PsTJgSH0H5eRe1xAZ8Q&s=10" },
    { name: "Bose SoundLink Revolve", spec: "360° Bluetooth Speaker · 12h", price: "₹19,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJpsKXBl0SHeU2GBk2mmRmDAsPGcwdkFg1VuC2jsnAag&s=10" },
    { name: "Sennheiser HD 450BT", spec: "Over-ear · ANC · 30h battery", price: "₹8,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GhonCjcChiyfnqOwQ8J-M862wCXvGrcraaq4pxDaNQ&s=10" }
  ],
  appliances: [
    { name: "Fujitsu 1.5T Split AC", spec: "Inverter · 5 Star · Fast Cool", price: "₹36,999", tag: "Popular", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IMGr9udLaqltU1FlqMLPioK2_oJKMrw8-F8Krc8bNQ&s=10" },
    { name: "LG 260L Fridge", spec: "Double Door · Frost Free", price: "₹27,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hrt-8ztpoDCxRBI-wYYpQc71ZqB4RLqk5c1QQfdiKg&s=10" },
    { name: "IFB 7kg", spec: "Front Load Washing Machine", price: "₹24,999", tag: "New", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3S6lZkSISwDrLLKuNmOhui91zs83c595EEjtdLXYfxw&s=10" },
    { name: "Panasonic 23L Microwave", spec: "Convection · Grill · 23L", price: "₹9,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpD_fT5xCrNatqeoQBsJVCPhkju2FVk1Rb1mvP-C7bg&s=10" },
    { name: "Kent RO+UV+UF", spec: "8L Water Purifier · RO+UV+UF", price: "₹11,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbr3AQ_6taOubJmj8gMEi39b76Rl87LaYVWjwEwE8cvw&s=10" },
    { name: "IBELL Vacuum", spec: "Cordless Stick Vacuum · 45min", price: "₹8,999", tag: "Budget", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8CxVYE_18LpDwuMaBizRwbukdemnc_cCB4KzUNZQA4A&s=10" },
    { name: "Haier 2000W Heater", spec: "2000W · Touch Control · Timer", price: "₹3,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQax1U98zkuChTnLl6gtJ7OC7W6zQ4idFlG3gIHXQ8f8Q&s=10" },
    { name: "Philips Air Fryer XXL", spec: "Rapid Air Technology · 1.4kg", price: "₹12,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GnD2d52BLGP6Ogx_qA5hYXUlpEazzXxFISg1ZiLkOw&s=10" }
  ],
  cameras: [
    { name: "Canon EOS M50 Mark II", spec: "24MP · 4K30 · Interchangeable lens", price: "₹64,999", tag: "Flagship", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHbj-OvuwVGfLdgqQD3Z84FP4vZcKZZfUOT09gM4_ag&s=10" },
    { name: "DJI Osmo Pocket", spec: "f/3.5-5.6 · Standard zoom", price: "₹9,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhOqdk5Iy_9-c1QxBGdSCmbk-h0pEG8mQotYzQTnv5Q&s=10" },
    { name: "Sony ZV-1", spec: "3-Axis · Phone & compact camera", price: "₹7,499", tag: "New", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FXSIZQV5Icm6Z0XR8BH9Pzd7xc8qA3ytyKX2AqyGAw&s=10" },
    { name: "GoPro Hero 10", spec: "4K60 · Waterproof · Stabilized", price: "₹18,999", tag: "Popular", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfqONJ218SGzHaO75y1RjCmtW8WwjfjWqC_hL44-Nbw&s=10" },
    { name: "DJI Osmo Tripod", spec: "Aluminium · 60\" · Carry bag", price: "₹2,999", tag: "Budget", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUcIMN-P9HXvuCuJXaSG8IbfHY59grakNqcE_ca6QbSQ&s=10" },
    { name: "Nikon D3500", spec: "LED Studio Light · Adjustable", price: "₹4,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMp5oQGNIwwq9B6gWky1pR3HBfcCAatgxfp94RFHr1Jg&s=10" },
    { name: "Canon EF 50mm f/1.8 STM", spec: "Prime lens · f/1.8 · 50mm", price: "₹12,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbSerdDj5Mq-EGAmr1iSYKm2KFUPps4MiYNmkasGe3Q&s=10" },
    { name: "Sony FE 24-70mm f/2.8 GM", spec: "Zoom lens · f/2.8 · 24-70mm", price: "₹1,49,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVp0n1VwlGBw-LehUiWEwqzwnwLc7k5uQkWdz0hVW2g&s=10" }
  ],
  gaming: [
    { name: "PS4", spec: "Console · 1TB SSD · 4K gaming", price: "₹49,999", tag: "Flagship", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlml88stSIPwJjtQr216tvHGzSBap4MfQfwnkhJ9CP_Q&s" },
    { name: "PlayStation 5", spec: "Console · 825GB SSD · Digital", price: "₹34,999", tag: "Popular", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf65tcMkQLaD-yYD1IW7BRwFd8nNYDkZ6MMJ3X82X8xA&s=10" },
    { name: "Xbox Series X", spec: "Console · 1TB SSD · 4K gaming", price: "₹49,999", tag: "Flagship", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpV8iNq_OHKpyPQCbE6l81N57h-GWmkWZHUrR_epj6Q&s=10" },
    { name: "RacingWheel Pro", spec: "Force feedback · Pedal set", price: "₹13,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlBYq4u3iB5JQT5SREdV65D4P2xEpH2W1Ts1RDt7-NUw&s=10" },
    { name: "EvoFox One S V2", spec: "Mechanical · RGB · Hot-swappable", price: "₹5,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8piYY0puojL-iKATuvvWdccfFqiKX0s_fBhguhMqvmA&s=10" },
    { name: "igear Gaming Mouse", spec: "Gaming mouse · 16000 DPI", price: "₹2,999", tag: "Budget", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8s_KfQN_5_T7FmzqrWRdXKkNS68jEfCed_ySdaQKHHw&s" },
    { name: "Razer BlackWidow V3", spec: "Mechanical · RGB · Gaming keyboard", price: "₹9,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCNkq5KGe1j496HgvGIVda-M82IMNfOfkCqTrY4y7XjQ&s" },
    { name: "igear Gaming Keyboard", spec: "Mechanical · RGB · Macro keys", price: "₹14,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACXG4AzPka3wdsHhF83e6Q6Zu1aHAvst082WDXxPGrA&s=10" }
  ],
  wearables: [
    { name: "Huawei Watch GT", spec: "AMOLED · Heart rate · GPS", price: "₹8,999", tag: "Popular", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-FgVipSMeb3zWrIVgcfrMb-bSm7hgWTFmN1KSAdTe3w&s=10" },
    { name: "Pebble Qore Fitness", spec: "Durable · Step tracking · SOS", price: "₹3,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHua1h8EUUNPq7ys8lV4KWULvpr1o523wlZTpXxIJgw&s=10" },
    { name: "Pebble Qore 2", spec: "7-day battery · Sleep tracking", price: "₹1,999", tag: "Budget", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyK0rm9CTIXJXY3AVMiqg7iW-NtOg3-wCePwzcjlAgUg&s=10" },
    { name: "Apple Watch Series 8", spec: "Sapphire glass · ECG · Cellular", price: "₹49,999", tag: "Flagship", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvD_XwAf_cZGHfb-9S6b1E_11uzrw5XMODYhWsexg7TQ&s=10" },
    { name: "Mivi superpods", spec: "Bone conduction earbuds", price: "₹5,999", tag: "New", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjL00uMSL05hRp_KJbL58CInyX2BM6lITFMOF0BXM2A&s" },
    { name: "Meta Quest 2", spec: "Open-ear audio · Notifications", price: "₹10,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4TwI1Wx-q4yHjivZnoSCknEq_Xmezgcqu-IrpVF2lQ&s" },
    { name: "Fitbit Charge 5", spec: "AMOLED · Heart rate · GPS", price: "₹6,499", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9_o1G0mEyqeDNFAUsklACwgrgDwsmVAyGrrcF8z7uw&s=10" },
    { name: "Garmin Venu 2", spec: "AMOLED · Heart rate · GPS", price: "₹9,999", tag: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpc3WO8GAC-XHZk8G55ZoUaLFD3DF73sMJ9chTuN7xxA&s=10" }
  ]
};

function renderProducts(categoryKey) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const products = productData[categoryKey] || [];

  grid.innerHTML = products.map(p => `
    <article class="product-card">
      <div class="product-image">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-spec">${p.spec}</p>
        <div class="product-footer">
          <span class="product-price">${p.price}</span>
          ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}
