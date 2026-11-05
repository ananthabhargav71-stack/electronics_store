// ---------- category data ----------
// This list drives the homepage chip grid. Each entry becomes one
// IC-styled card and links to its own detail page (built in the next step).
const categories = [
  {
    id: "001",
    title: "Smartphones & Tablets",
    desc: "Latest releases, flagship comparisons and budget picks.",
    href: "smartphones.html",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg>`
  },
  {
    id: "002",
    title: "Laptops & Computers",
    desc: "Everyday laptops, workstations, and desktop builds.",
    href: "laptops.html",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="12" rx="1.5"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`
  },
  {
    id: "003",
    title: "Audio & Headphones",
    desc: "Over-ears, earbuds, speakers and home theatre gear.",
    href: "audio.html",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 13a8 8 0 0 1 16 0"/><rect x="2" y="13" width="5" height="7" rx="1.5"/><rect x="17" y="13" width="5" height="7" rx="1.5"/></svg>`
  },
  {
    id: "004",
    title: "Home Appliances",
    desc: "Kitchen, cleaning and everyday appliances for the home.",
    href: "appliances.html",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="2" width="14" height="20" rx="1.5"/><line x1="5" y1="10" x2="19" y2="10"/><circle cx="9" cy="6" r="0.8" fill="currentColor" stroke="none"/></svg>`
  },
  {
    id: "005",
    title: "Cameras & Photography",
    desc: "Mirrorless bodies, lenses, gimbals and accessories.",
    href: "cameras.html",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="7" width="20" height="13" rx="2"/><circle cx="12" cy="13.5" r="4"/><path d="M8 7l1.5-3h5L16 7"/></svg>`
  },
  {
    id: "006",
    title: "Gaming & Consoles",
    desc: "Consoles, controllers, and PC gaming peripherals.",
    href: "gaming.html",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="8" width="20" height="9" rx="4"/><line x1="7" y1="12.5" x2="7" y2="12.5"/><line x1="5" y1="12.5" x2="9" y2="12.5"/><line x1="7" y1="10.5" x2="7" y2="14.5"/><circle cx="16" cy="11" r="0.9" fill="currentColor" stroke="none"/><circle cx="18.5" cy="13.5" r="0.9" fill="currentColor" stroke="none"/></svg>`
  },
  {
    id: "007",
    title: "Wearables & Smartwatches",
    desc: "Smartwatches, fitness bands and connected wearables.",
    href: "wearables.html",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 7V4h6v3M9 17v3h6v-3"/></svg>`
  }
];

// Store-info links (not product categories) — rendered as their own section.
const infoLinks = [
  {
    id: "A1",
    title: "About Us",
    desc: "Our story, where we're based, and why we started the store.",
    href: "about.html",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="3.2"/><path d="M4.5 20c1.4-4 4.2-6 7.5-6s6.1 2 7.5 6"/></svg>`
  },
  {
    id: "A2",
    title: "Contact Us",
    desc: "Store address, phone, email and support hours.",
    href: "contact.html",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 5.5A1.5 1.5 0 0 1 4.5 4H8l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3.5a1.5 1.5 0 0 1-1.5 1.5C9.6 20 3 13.4 3 5.5Z"/></svg>`
  }
];

function renderCategories() {
  const grid = document.getElementById("chipGrid");
  if (!grid) return;

  grid.innerHTML = categories.map(cat => `
    <a class="chip-card" href="${cat.href}" data-id="${cat.id}">
      <span class="chip-index">MODULE&nbsp;#${cat.id}</span>
      <span class="chip-icon">${cat.icon}</span>
      <span class="chip-title">${cat.title}</span>
      <span class="chip-desc">${cat.desc}</span>
      <span class="chip-go">Open category →</span>
    </a>
  `).join("");
}

function renderInfoLinks() {
  const grid = document.getElementById("infoGrid");
  if (!grid) return;

  grid.innerHTML = infoLinks.map(item => `
    <a class="chip-card chip-card--info" href="${item.href}" data-id="${item.id}">
      <span class="chip-index">INFO&nbsp;${item.id}</span>
      <span class="chip-icon">${item.icon}</span>
      <span class="chip-title">${item.title}</span>
      <span class="chip-desc">${item.desc}</span>
      <span class="chip-go">Open page →</span>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderInfoLinks();
});
