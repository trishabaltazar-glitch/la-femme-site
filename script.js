const IMAGE_BASE =
  'https://www.lafemmefashion.com/sites/default/files/styles/dress_315x500/public/dresses_images/';

const images = {
  cloud: {
    src: `${IMAGE_BASE}cloud-blue-prom-dress-1-33812.jpg?itok=ZWMdZC-2`,
    alt: 'Cloud blue La Femme dress',
  },
  pink: {
    src: `${IMAGE_BASE}bubblegum-pink-prom-dress-1-33355.jpg?itok=c3zaRtAf`,
    alt: 'Bubblegum pink La Femme dress',
  },
  copper: {
    src: `${IMAGE_BASE}copper-prom-dress-1-33417.jpg?itok=-5OvtYzh`,
    alt: 'Copper La Femme dress',
  },
  ice: {
    src: `${IMAGE_BASE}ice-blue-prom-dress-1-33373.jpg?itok=NCYDweR2`,
    alt: 'Ice blue La Femme dress',
  },
  peach: {
    src: `${IMAGE_BASE}peach-prom-dress-1-33863.jpg?itok=BLOPoMz5`,
    alt: 'Peach La Femme dress',
  },
};

const navItems = [
  ['Prom Dresses', 'index.html#collections', true],
  ['Mother of the Bride', 'index.html#collections', true],
  ['Homecoming', 'index.html#collections', true],
  ['Plus Size', 'index.html#collections', true],
  ['Evening Dresses', 'index.html#collections', true],
  ['Contact Us', 'contact.html'],
  ['Where to Buy', 'store-locator.html'],
];

const locatorMenuMarkup = `
  <a href="index.html#collections">Prom Dresses<span aria-hidden="true"></span></a>
  <a href="index.html#collections">Mother of the Bride<span aria-hidden="true"></span></a>
  <a href="index.html#collections">Homecoming<span aria-hidden="true"></span></a>
  <a href="index.html#collections">Plus Size<span aria-hidden="true"></span></a>
  <a href="contact.html">Contact Us</a>
  <details class="where-to-buy-menu">
    <summary>Store Locator<span aria-hidden="true"></span></summary>
    <div class="where-to-buy-links">
      <a href="store-locator.html">Store Locator</a>
      <details class="country-flyout">
        <summary>United States<span aria-hidden="true"></span></summary>
        <div class="country-city-links">
          <a href="stores-chicago-il.html">Chicago, IL</a>
          <a href="stores-dallas-tx.html">Dallas, TX</a>
          <a href="stores-los-angeles-ca.html">Los Angeles, CA</a>
          <a href="stores-new-york-ny.html">New York, NY</a>
        </div>
      </details>
      <details class="country-flyout">
        <summary>Canada<span aria-hidden="true"></span></summary>
        <div class="country-city-links">
          <a href="stores-toronto-on.html">Toronto, ON</a>
        </div>
      </details>
    </div>
  </details>
`;

const feedItems = [
  ['Cloud blue tulle', images.cloud],
  ['Homecoming color', images.pink],
  ['Evening satin', images.copper],
  ['Soft sparkle', images.ice],
  ['Prom edit', images.peach],
];

const collections = [
  ['Prom Dresses', 'Shop Prom', images.cloud, 'large'],
  ['Mother of the Bride', 'Shop Occasion', images.ice],
  ['Homecoming', 'Shop Homecoming', images.pink],
  ['Plus Size', 'Shop Plus Size', images.peach],
  ['Evening Dresses', 'Shop Evening', images.copper],
];

const products = [
  ['La Femme 33812', images.cloud, ['#b8d9e9', '#f7f3ea', '#0f1728']],
  ['La Femme 33355', images.pink, ['#f38ab8', '#050505', '#f4d4c8']],
  ['La Femme 33417', images.copper, ['#9b4d32', '#471a2d', '#1b1b1c']],
  ['La Femme 33863', images.peach, ['#f1b5a6', '#c9dded', '#fff6ee']],
  ['La Femme 33373', images.ice, ['#c9dded', '#f7f3ea', '#1b1b1c']],
  ['La Femme 33355 Rose', images.pink, ['#f38ab8', '#2c2f3a', '#ead8c9']],
];

const featuredPosts = [
  {
    title: 'How to Choose a Prom Dress That Feels Like You',
    image: images.pink,
  },
  {
    title: 'Soft Color Stories for Spring Occasions',
    image: images.peach,
  },
  {
    title: 'A Guide to Evening Dress Details',
    image: images.copper,
  },
];

const footerColumns = [
  {
    title: 'Shop',
    links: [
      ['Prom Dresses', 'index.html#collections'],
      ['Mother of the Bride', 'index.html#collections'],
      ['Homecoming', 'index.html#collections'],
      ['Plus Size', 'index.html#collections'],
      ['Evening Dresses', 'index.html#collections'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['The Brand', 'index.html'],
      ['Careers', 'contact.html'],
      ['Become A Retailer', 'contact.html'],
      ['Store Locator', 'store-locator.html'],
      ['Chicago Stores', 'stores-chicago-il.html'],
      ['Dallas Stores', 'stores-dallas-tx.html'],
      ['Los Angeles Stores', 'stores-los-angeles-ca.html'],
      ['New York Stores', 'stores-new-york-ny.html'],
      ['Toronto Stores', 'stores-toronto-on.html'],
      ['Press & Media', 'contact.html'],
      ['Affiliate Program', 'contact.html'],
      ['Contact Us', 'contact.html'],
    ],
  },
];

const socialLinks = [
  [
    'Facebook',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 8.3h2.2V5.1c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.2 1.9-5.2 5.4v3H4.8v3.6h3.3V24h4v-7.1h3.2l.5-3.6h-3.7v-2.6c0-1 .3-1.7 2.1-1.7Z"/></svg>',
  ],
  [
    'Instagram',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 3.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 2a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Zm5.4-2.6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>',
  ],
  [
    'X',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.4 10.5 22.8 1h-2l-7.3 8.2L7.7 1H1l8.8 12.4L1 23.4h2l7.7-8.7 6.2 8.7h6.7l-9.2-12.9Zm-2.7 3.1-.9-1.2L3.7 2.5h3l5.7 8 .9 1.2 7.5 10.3h-3l-6.1-8.4Z"/></svg>',
  ],
  [
    'TikTok',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 2c.4 3 2.1 4.8 5 5v3.4a8.5 8.5 0 0 1-5-1.6v7.1a6.1 6.1 0 1 1-6.1-6.1c.5 0 1 .1 1.5.2v3.6a2.7 2.7 0 1 0 1.1 2.2V2H16Z"/></svg>',
  ],
  [
    'Pinterest',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.3 2C6.7 2 3 5.7 3 10.6c0 3.1 1.7 4.9 2.8 4.9.5 0 .8-1.3.8-1.7 0-.5-1.2-1.5-1.2-3.5 0-4.1 3.1-7 7.1-7 3.4 0 5.9 1.9 5.9 5.5 0 2.7-1.1 7.8-4.6 7.8-1.3 0-2.4-.9-2.4-2.2 0-1.9 1.3-3.7 1.3-5.7 0-3.3-4.6-2.7-4.6 1.3 0 .8.1 1.8.5 2.5-.7 3-2 7.4-2 10.5 0 .3 0 .6.1.9h.2c2.6-3.5 2.5-4.2 3.7-8.8.7 1.2 2.3 1.9 3.7 1.9 5.6 0 7.7-5.5 7.7-10.4C22 4.1 17.9 2 12.3 2Z"/></svg>',
  ],
];

const duplicate = (items) => [...items, ...items];

const image = ({ src, alt }, decorative = false) =>
  `<img src="${src}" alt="${decorative ? '' : alt}">`;

const render = (selector, markup) => {
  const node = document.querySelector(selector);
  if (node) node.innerHTML = markup;
};

if (!document.querySelector('[data-nav]')?.children.length) {
  render('[data-nav]', locatorMenuMarkup);
}

render(
  '[data-feed]',
  duplicate(feedItems)
    .map(
      ([label, item], index) => `
        <article class="feed-card"${index >= feedItems.length ? ' aria-hidden="true"' : ''}>
          ${image(item, index >= feedItems.length)}
          <div><span>${label}</span></div>
        </article>
      `,
    )
    .join(''),
);

render(
  '[data-collections]',
  collections
    .map(
      ([title, cta, item, size], index) => `
        <article class="collection-card collection-card-${size || 'small'}" data-reveal>
          ${image(item)}
          <div>
            <p class="eyebrow">${String(index + 1).padStart(2, '0')}</p>
            <h3>${title}</h3>
            <a class="button button-dark" href="#">${cta}</a>
          </div>
        </article>
      `,
    )
    .join(''),
);

let productStartIndex = 0;
const productWindowSize = 4;

const visibleProducts = () =>
  Array.from(
    { length: productWindowSize },
    (_, offset) => products[(productStartIndex + offset) % products.length],
  );

const renderProducts = () => {
  render(
    '[data-products]',
    visibleProducts()
      .map(
        ([name, item, swatches]) => `
          <article class="product-card">
            <div class="product-media">
              <a href="#" aria-label="View ${name}">
                ${image(item)}
              </a>
              <a class="view-product" href="#">View Product</a>
            </div>
            <div class="product-meta">
              <p class="product-name">${name}</p>
              <div class="swatch-row" aria-label="Available colors">
                ${swatches.map((color) => `<span class="swatch" style="--swatch:${color}"></span>`).join('')}
              </div>
            </div>
          </article>
        `,
      )
      .join(''),
  );
};

renderProducts();

render(
  '[data-featured-posts]',
  duplicate(featuredPosts)
    .map(
      ({ title, image: postImage }, index) => `
        <article class="featured-post" aria-label="${title}"${index >= featuredPosts.length ? ' aria-hidden="true"' : ''}>
          <a href="#" aria-label="View ${title}"${index >= featuredPosts.length ? ' tabindex="-1"' : ''}>
            ${image(postImage)}
          </a>
        </article>
      `,
    )
    .join(''),
);

render(
  '[data-store-media]',
  [images.peach, images.copper]
    .map(
      (item, index) =>
        `<picture class="stores-panel stores-panel-${index + 1}">${image(item)}</picture>`,
    )
    .join(''),
);

render(
  '[data-social-links]',
  socialLinks
    .map(([label, icon]) => `<a href="#" aria-label="${label}">${icon}</a>`)
    .join(''),
);

render(
  '[data-footer-columns]',
  footerColumns
    .map(
      ({ title, links }) => `
        <nav class="footer-column" aria-label="${title}">
          <h2>${title}</h2>
          ${links.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
        </nav>
      `,
    )
    .join(''),
);

const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const newsletterForm = document.querySelector('[data-newsletter-form]');
const contactForm = document.querySelector('[data-contact-form]');
const storeSearchForm = document.querySelector('[data-store-search]');
const featuredList = document.querySelector('[data-featured-posts]');
const productCarousel = document.querySelector('.product-carousel');
const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

menuButton?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

nav?.addEventListener('click', (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;
  header.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open menu');
});

document.querySelectorAll('.collection-card').forEach((card) => {
  card.addEventListener('mouseenter', () => card.classList.add('is-active'));
  card.addEventListener('mouseleave', () => card.classList.remove('is-active'));
  card.addEventListener('focusin', () => card.classList.add('is-active'));
  card.addEventListener('focusout', () => card.classList.remove('is-active'));
});

newsletterForm?.addEventListener('submit', (event) => {
  event.preventDefault();
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
});

const cityMapLayout = document.querySelector('.city-map-layout');
const cityMapCopy = cityMapLayout?.querySelector('.city-map-copy');
const cityRetailerCards = Array.from(document.querySelectorAll('.retailer-card'));

if (cityMapLayout && cityMapCopy && cityRetailerCards.length) {
  const cityLocatorResults = document.createElement('div');
  cityLocatorResults.className = 'city-locator-results';
  cityLocatorResults.setAttribute('aria-label', 'Retailers shown on the map');

  cityRetailerCards.forEach((card, index) => {
    const name = card.querySelector('h3')?.textContent.trim();
    const address = card.querySelector('address');
    const phone = card.querySelector('a[href^="tel:"]');
    const website = card.querySelector('.retailer-details a[href^="http"]');
    const directions = card.querySelector('.retailer-actions a[href*="google.com/maps"]');
    if (!name || !address) return;

    const result = document.createElement('article');
    result.className = 'city-locator-result';

    const marker = document.createElement('span');
    marker.className = 'city-locator-marker';
    marker.textContent = String(index + 1);
    marker.setAttribute('aria-hidden', 'true');

    const content = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = name;
    content.append(title, address.cloneNode(true));

    const links = document.createElement('div');
    links.className = 'city-locator-result-links';
    [phone, website, directions].forEach((source) => {
      if (!source) return;
      const link = source.cloneNode(true);
      if (source === directions) link.textContent = 'Directions';
      links.append(link);
    });
    content.append(links);
    result.append(marker, content);
    cityLocatorResults.append(result);
  });

  cityMapLayout.classList.add('is-city-locator');
  cityMapCopy.append(cityLocatorResults);
}

storeSearchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = storeSearchForm.querySelector('input');
  const message = document.querySelector('[data-store-search-message]');
  const query = input?.value.trim().toLowerCase() || '';
  const cityLinks = Array.from(document.querySelectorAll('[data-city-link]'));
  const match = cityLinks.find((link) =>
    link.dataset.searchTerms?.toLowerCase().includes(query),
  );

  if (match && query) {
    window.location.assign(match.href);
    return;
  }

  if (message) {
    message.textContent = query
      ? 'No city page matches that search yet. Browse the city list below or contact us for retailer help.'
      : 'Enter a city, state, or ZIP code to find an authorized retailer.';
  }
});

const scrollProductFavorites = (direction) => {
  productStartIndex =
    (productStartIndex + direction + products.length) % products.length;
  renderProducts();
};

document.querySelector('[data-product-prev]')?.addEventListener('click', () => {
  scrollProductFavorites(-1);
});

document.querySelector('[data-product-next]')?.addEventListener('click', () => {
  scrollProductFavorites(1);
});

const scrollFeaturedPosts = (direction) => {
  if (!featuredList) return;
  const maxScroll = featuredList.scrollWidth - featuredList.clientWidth;
  if (maxScroll <= 0) return;

  const scrollAmount = featuredList.clientWidth * 0.72 * direction;
  const nextPosition = featuredList.scrollLeft + scrollAmount;

  if (nextPosition < 1) {
    featuredList.scrollTo({ left: maxScroll, behavior: 'smooth' });
    return;
  }

  if (nextPosition >= maxScroll - 1) {
    featuredList.scrollTo({ left: 0, behavior: 'smooth' });
    return;
  }

  featuredList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};

document
  .querySelector('[data-featured-prev]')
  ?.addEventListener('click', () => {
    scrollFeaturedPosts(-1);
  });

document
  .querySelector('[data-featured-next]')
  ?.addEventListener('click', () => {
    scrollFeaturedPosts(1);
  });

if (reducedMotion) {
  document
    .querySelectorAll('[data-reveal]')
    .forEach((el) => el.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
  );

  document
    .querySelectorAll('[data-reveal]')
    .forEach((el) => revealObserver.observe(el));
}
