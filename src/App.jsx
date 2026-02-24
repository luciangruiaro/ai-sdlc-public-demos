import { useState } from "react";

const makeMockImage = (label, bg, accent) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${bg}" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="960" height="640" fill="url(#bg)" />
      <circle cx="820" cy="110" r="84" fill="rgba(255,255,255,0.28)" />
      <rect x="90" y="360" width="780" height="170" rx="22" fill="rgba(255,255,255,0.56)" />
      <rect x="122" y="390" width="140" height="110" rx="12" fill="rgba(16,22,29,0.14)" />
      <rect x="282" y="390" width="420" height="72" rx="10" fill="rgba(16,22,29,0.12)" />
      <rect x="728" y="390" width="110" height="110" rx="12" fill="rgba(16,22,29,0.16)" />
      <text x="110" y="120" fill="#0f273f" font-family="Arial, sans-serif" font-size="54" font-weight="700">${label}</text>
      <text x="110" y="170" fill="#173d63" font-family="Arial, sans-serif" font-size="24">Mock image preview</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const heroImage = makeMockImage("Nordlys Room Set", "#cbe6ff", "#f7fbff");

const categories = [
  {
    name: "Living Room",
    hint: "Sofas, storage and lighting",
    image: makeMockImage("Living Room", "#d7e9fb", "#fff5be"),
  },
  {
    name: "Bedroom",
    hint: "Better sleep, smarter space",
    image: makeMockImage("Bedroom", "#d6f2ec", "#f1f8ff"),
  },
  {
    name: "Kitchen",
    hint: "Cookware and compact systems",
    image: makeMockImage("Kitchen", "#ffe7ce", "#fffdf1"),
  },
  {
    name: "Office",
    hint: "Desk setups for focus",
    image: makeMockImage("Office", "#dbe8ff", "#edf4ff"),
  },
];

const products = [
  {
    name: "LINN Chair",
    price: "$89.00",
    tag: "Best Seller",
    image: makeMockImage("LINN Chair", "#e9f4ff", "#fff3b8"),
  },
  {
    name: "SUND Table",
    price: "$129.00",
    tag: "New",
    image: makeMockImage("SUND Table", "#f2f9ff", "#d7e8ff"),
  },
  {
    name: "HEM Lamp",
    price: "$39.00",
    tag: "Limited",
    image: makeMockImage("HEM Lamp", "#fff4d8", "#ffe4ba"),
  },
  {
    name: "BJORK Shelf",
    price: "$59.00",
    tag: "Top Rated",
    image: makeMockImage("BJORK Shelf", "#dcecff", "#f3f7ff"),
  },
  {
    name: "MILA Ottoman",
    price: "$69.00",
    tag: "Popular",
    image: makeMockImage("MILA Ottoman", "#ecf8ef", "#d9eeff"),
  },
  {
    name: "NORA Cabinet",
    price: "$149.00",
    tag: "Save 15%",
    image: makeMockImage("NORA Cabinet", "#dce9ff", "#ffe8cb"),
  },
];

const perks = [
  { title: "Delivery from $9", text: "Fast, flat-rate shipping nationwide." },
  { title: "Easy pickup", text: "Collect your order in as little as 2 hours." },
  { title: "30-day returns", text: "Simple returns for unopened products." },
];

export default function App() {
  const [bagCount, setBagCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const addToBag = (productName) => {
    setBagCount((count) => count + 1);
    setLastAdded(`${productName} added to bag.`);
  };

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">N</span>
          <span className="brand-name">NORDLYS HOME</span>
        </div>
        <nav className="main-nav">
          <a href="#shop">Shop</a>
          <a href="#rooms">Rooms</a>
          <a href="#deals">Deals</a>
          <a href="#inspiration">Inspiration</a>
        </nav>
        <button
          className="header-cta"
          onClick={() => scrollToSection("deals")}
          type="button"
        >
          Start shopping
        </button>
      </header>

      <main>
        <section className="hero" id="shop">
          <div className="hero-copy">
            <p className="eyebrow">New season collection</p>
            <h1>Smart design for every corner of your home.</h1>
            <p>
              Discover practical furniture, warm lighting, and storage ideas
              made for real life, at everyday low prices.
            </p>
            <div className="hero-actions">
              <button
                className="primary"
                onClick={() => scrollToSection("deals")}
                type="button"
              >
                Explore products
              </button>
              <button
                className="secondary"
                onClick={() => scrollToSection("inspiration")}
                type="button"
              >
                See inspiration
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <img
              className="hero-photo"
              src={heroImage}
              alt="Mocked room image for the featured collection"
            />
            <div className="visual-card visual-card-a">
              <span>Living Room Set</span>
              <strong>$399</strong>
            </div>
            <div className="visual-card visual-card-b">
              <span>Workspace Bundle</span>
              <strong>$229</strong>
            </div>
          </div>
        </section>

        <section className="categories" id="rooms">
          <div className="section-heading">
            <h2>Shop by room</h2>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <article className="category-card" key={category.name}>
                <img
                  className="category-image"
                  src={category.image}
                  alt={`${category.name} mock setup`}
                />
                <h3>{category.name}</h3>
                <p>{category.hint}</p>
                <button
                  className="category-btn"
                  onClick={() => scrollToSection("deals")}
                  type="button"
                >
                  Browse room
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="products" id="deals">
          <div className="section-heading">
            <h2>Featured picks</h2>
            <a href="#shop">View all</a>
          </div>
          <p className="bag-status">
            Bag: <strong>{bagCount}</strong>{" "}
            {lastAdded ? <span>{lastAdded}</span> : null}
          </p>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <img
                  className="product-thumb"
                  src={product.image}
                  alt={`${product.name} mock product image`}
                />
                <span className="product-tag">{product.tag}</span>
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button onClick={() => addToBag(product.name)} type="button">
                  Add to bag
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="perks" id="inspiration">
          {perks.map((perk) => (
            <article key={perk.title}>
              <h3>{perk.title}</h3>
              <p>{perk.text}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>Nordlys Home</p>
        <small>Design for everyday life.</small>
      </footer>
    </div>
  );
}
