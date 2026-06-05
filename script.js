const IMAGE_BASE =
  "https://www.lafemmefashion.com/sites/default/files/styles/dress_315x500/public/dresses_images/";

const images = {
  cloud: {
    src: `${IMAGE_BASE}cloud-blue-prom-dress-1-33812.jpg?itok=ZWMdZC-2`,
    alt: "Cloud blue La Femme dress",
  },
  pink: {
    src: `${IMAGE_BASE}bubblegum-pink-prom-dress-1-33355.jpg?itok=c3zaRtAf`,
    alt: "Bubblegum pink La Femme dress",
  },
  copper: {
    src: `${IMAGE_BASE}copper-prom-dress-1-33417.jpg?itok=-5OvtYzh`,
    alt: "Copper La Femme dress",
  },
  ice: {
    src: `${IMAGE_BASE}ice-blue-prom-dress-1-33373.jpg?itok=NCYDweR2`,
    alt: "Ice blue La Femme dress",
  },
  peach: {
    src: `${IMAGE_BASE}peach-prom-dress-1-33863.jpg?itok=BLOPoMz5`,
    alt: "Peach La Femme dress",
  },
};

const navItems = [
  ["Prom Dresses", "#collections", true],
  ["Mother of the Bride", "#collections", true],
  ["Homecoming", "#collections", true],
  ["Plus Size", "#collections", true],
  ["Evening Dresses", "#collections", true],
  ["About Us", "#atelier"],
  ["Store Locator", "#stores"],
];

const retailers = ["Nordstrom", "Bloomingdale's", "PromGirl", "Windsor", "Local Bridal", "Evening Edit"];

const feedItems = [
  ["Cloud blue tulle", images.cloud],
  ["Homecoming color", images.pink],
  ["Evening satin", images.copper],
  ["Soft sparkle", images.ice],
  ["Prom edit", images.peach],
];

const collections = [
  ["Prom Dresses", "Shop Prom", images.cloud, "large"],
  ["Mother of the Bride", "Shop Occasion", images.ice],
  ["Homecoming", "Shop Homecoming", images.pink],
  ["Plus Size", "Shop Plus Size", images.peach],
  ["Evening Dresses", "Shop Evening", images.copper],
];

const products = [
  ["La Femme 33812", images.cloud, ["#b8d9e9", "#f7f3ea", "#0f1728"]],
  ["La Femme 33355", images.pink, ["#f38ab8", "#050505", "#f4d4c8"]],
  ["La Femme 33417", images.copper, ["#9b4d32", "#471a2d", "#1b1b1c"]],
  ["La Femme 33863", images.peach, ["#f1b5a6", "#c9dded", "#fff6ee"]],
];

const featuredPosts = [
  {
    title: "La Femme 32739",
    image: {
      src: "https://www.lafemmefashion.com/sites/default/files/styles/dress_315x500/public/dresses_images/navy-mother-of-the-bride-dress-1-32739.jpg?itok=x8Qe-1iO",
      alt: "La Femme navy mother of the bride dress",
    },
  },
  {
    title: "La Femme 29488",
    image: {
      src: "https://www.lafemmefashion.com/sites/default/files/styles/dress_315x500/public/dresses_images/neon-yellow-homecoming-dress-1-29488.jpg",
      alt: "La Femme neon yellow homecoming dress",
    },
  },
  {
    title: "La Femme 30929",
    image: {
      src: "https://www.lafemmefashion.com/sites/default/files/styles/dress_315x500/public/dresses_images/royal-blue-homecoming-dress-1-30929.jpg?itok=TusdipEo",
      alt: "La Femme royal blue homecoming dress",
    },
  },
];

const details = ["Hand-finished sparkle", "Soft structured fit", "Occasion-led edits", "Retailer-first discovery"];

const footerColumns = {
  Shop: ["Prom Dresses", "Mother of the Bride", "Homecoming", "Plus Size", "Evening Dresses"],
  Help: ["About Us", "Size Chart", "Press", "News", "Trade Shows", "FAQ"],
};

const socialLinks = [
  ["Facebook", "f"],
  ["Instagram", "IG"],
  ["X", "X"],
  ["TikTok", "TT"],
  ["Pinterest", "P"],
];

const duplicate = (items) => [...items, ...items];

const image = ({ src, alt }, decorative = false) =>
  `<img src="${src}" alt="${decorative ? "" : alt}">`;

const render = (selector, markup) => {
  const node = document.querySelector(selector);
  if (node) node.innerHTML = markup;
};

render(
  "[data-nav]",
  navItems
    .map(
      ([label, href, hasChevron]) =>
        `<a href="${href}">${label}${hasChevron ? '<span aria-hidden="true"></span>' : ""}</a>`
    )
    .join("")
);

render(
  "[data-hero-media]",
  [images.cloud, images.copper, images.peach]
    .map((item, index) => `<figure class="hero-panel hero-panel-${index + 1}">${image(item, true)}</figure>`)
    .join("")
);

render("[data-retailers]", duplicate(retailers).map((name) => `<span>${name}</span>`).join(""));

render(
  "[data-feed]",
  duplicate(feedItems)
    .map(
      ([label, item], index) => `
        <article class="feed-card"${index >= feedItems.length ? ' aria-hidden="true"' : ""}>
          ${image(item, index >= feedItems.length)}
          <div><span>${label}</span></div>
        </article>
      `
    )
    .join("")
);

render(
  "[data-collections]",
  collections
    .map(
      ([title, cta, item, size], index) => `
        <article class="collection-card collection-card-${size || "small"}" data-reveal>
          ${image(item)}
          <div>
            <p class="eyebrow">${String(index + 1).padStart(2, "0")}</p>
            <h3>${title}</h3>
            <a class="button button-dark" href="#">${cta}</a>
          </div>
        </article>
      `
    )
    .join("")
);

render(
  "[data-products]",
  duplicate(products)
    .map(
      ([name, item, swatches], index) => `
        <article class="product-card"${index >= products.length ? ' aria-hidden="true"' : ""}>
          <div class="product-media">
            <a href="#" aria-label="View ${name}"${index >= products.length ? ' tabindex="-1"' : ""}>
              ${image(item, index >= products.length)}
            </a>
            <a class="view-product" href="#"${index >= products.length ? ' tabindex="-1"' : ""}>View product</a>
          </div>
          <div class="product-meta">
            <p class="product-name">${name}</p>
            <div class="swatch-row" aria-label="Available colors">
              ${swatches.map((color) => `<span class="swatch" style="--swatch:${color}"></span>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("")
);

render("[data-details]", details.map((detail) => `<span>${detail}</span>`).join(""));

render(
  "[data-featured-posts]",
  featuredPosts
    .map(
      ({ title, image: postImage }) => `
        <article class="featured-post" aria-label="${title}">
          <a href="#" aria-label="View ${title}">
            ${image(postImage)}
          </a>
        </article>
      `
    )
    .join("")
);

render(
  "[data-store-media]",
  [images.peach, images.copper]
    .map(
      (item, index) =>
        `<picture class="stores-panel stores-panel-${index + 1}">${image(item)}</picture>`
    )
    .join("")
);

render(
  "[data-social-links]",
  socialLinks.map(([label, text]) => `<a href="#" aria-label="${label}">${text}</a>`).join("")
);

render(
  "[data-footer-columns]",
  Object.entries(footerColumns)
    .map(
      ([title, links]) => `
        <nav class="footer-column" aria-label="${title}">
          <h2>${title}</h2>
          ${links.map((link) => `<a href="#">${link}</a>`).join("")}
        </nav>
      `
    )
    .join("")
);

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const newsletterForm = document.querySelector("[data-newsletter-form]");
const featuredList = document.querySelector("[data-featured-posts]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

menuButton?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;
  header.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
});

document.querySelectorAll(".collection-card").forEach((card) => {
  card.addEventListener("mouseenter", () => card.classList.add("is-active"));
  card.addEventListener("mouseleave", () => card.classList.remove("is-active"));
  card.addEventListener("focusin", () => card.classList.add("is-active"));
  card.addEventListener("focusout", () => card.classList.remove("is-active"));
});

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
});

document.querySelector("[data-featured-prev]")?.addEventListener("click", () => {
  featuredList?.scrollBy({ left: -featuredList.clientWidth * 0.72, behavior: "smooth" });
});

document.querySelector("[data-featured-next]")?.addEventListener("click", () => {
  featuredList?.scrollBy({ left: featuredList.clientWidth * 0.72, behavior: "smooth" });
});

if (reducedMotion) {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));
}
