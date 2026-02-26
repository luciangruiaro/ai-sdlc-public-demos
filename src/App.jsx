import React, { useState } from "react";

const services = [
  {
    id: "cloud",
    title: "Cloud Platforms",
    summary: "Modernize operations with secure cloud-native architecture.",
    detail:
      "We migrate legacy workflows, automate release pipelines, and reduce infrastructure overhead by up to 35% in mock benchmark projects."
  },
  {
    id: "retail",
    title: "Retail Intelligence",
    summary: "Convert customer data into real-time demand signals.",
    detail:
      "Our fictional retail engine combines POS, loyalty, and fulfillment data into a unified planning layer for faster decisions."
  },
  {
    id: "experience",
    title: "Digital Experience",
    summary: "Design frictionless channels across web, mobile, and in-store.",
    detail:
      "From UX strategy to implementation, we build customer journeys that improve conversion and reduce support friction."
  }
];

const insights = [
  "Navigating 2026 supply-chain volatility with AI forecasting.",
  "How composable commerce accelerates release speed.",
  "Blueprint: resilient omnichannel fulfillment in 90 days."
];

const cases = [
  { label: "National Grocer", value: "32% faster forecasting cycles" },
  { label: "Fashion Marketplace", value: "18% higher repeat purchase rate" },
  { label: "Electronics Retailer", value: "41% faster launch readiness" }
];

function App() {
  const [activeService, setActiveService] = useState("cloud");
  const [submitted, setSubmitted] = useState(false);

  const scrollToSection = (id) => {
    const node = document.getElementById(id);
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-shell" id="top">
      <header className="topbar">
        <a className="brand" href="#top">
          NORTHSTAR DIGITAL
        </a>
        <nav className="topnav">
          <a href="#services">Services</a>
          <a href="#insights">Insights</a>
          <a href="#cases">Results</a>
        </nav>
        <button className="btn btn-small" onClick={() => scrollToSection("contact")}>
          Start a Project
        </button>
      </header>

      <main>
        <section className="hero panel">
          <div className="hero-copy">
            <p className="eyebrow">Fictional Enterprise Partner</p>
            <h1>We build resilient retail systems for what is next.</h1>
            <p>
              Northstar Digital helps global retailers modernize platforms,
              accelerate releases, and turn operational data into confident
              decisions.
            </p>
            <div className="hero-actions">
              <button className="btn" onClick={() => scrollToSection("services")}>
                Explore Services
              </button>
              <button className="btn btn-ghost" onClick={() => scrollToSection("contact")}>
                Talk to Team
              </button>
            </div>
          </div>
          <aside className="hero-card">
            <h2>2026 Snapshot</h2>
            <ul>
              <li>
                <strong>120+</strong>
                <span>Retail programs delivered</span>
              </li>
              <li>
                <strong>17 countries</strong>
                <span>Operational support footprint</span>
              </li>
              <li>
                <strong>24/7</strong>
                <span>Managed reliability coverage</span>
              </li>
            </ul>
          </aside>
        </section>

        <section className="metric-row">
          <article className="metric panel">
            <p className="metric-number">99.98%</p>
            <p>Platform availability in managed environments</p>
          </article>
          <article className="metric panel">
            <p className="metric-number">4.3x</p>
            <p>Typical speed-up from data-informed promotion planning</p>
          </article>
          <article className="metric panel">
            <p className="metric-number">8 weeks</p>
            <p>Median timeline to deploy first value increment</p>
          </article>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2>Execution built for enterprise scale.</h2>
          </div>
          <div className="card-grid">
            {services.map((service) => {
              const isOpen = service.id === activeService;
              return (
                <article className="panel service-card" key={service.id}>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <button
                    className="text-btn"
                    onClick={() => setActiveService(isOpen ? "" : service.id)}
                  >
                    {isOpen ? "Hide details" : "Show details"}
                  </button>
                  {isOpen && <p className="service-detail">{service.detail}</p>}
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="insights">
          <div className="section-head">
            <p className="eyebrow">Latest Insights</p>
            <h2>Perspective from strategy to delivery.</h2>
          </div>
          <div className="insight-list">
            {insights.map((item) => (
              <article key={item} className="panel insight-card">
                <p>{item}</p>
                <button className="text-btn" onClick={() => scrollToSection("contact")}>
                  Discuss this topic
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="cases">
          <div className="section-head">
            <p className="eyebrow">Client Results</p>
            <h2>Mock outcomes from fictional programs.</h2>
          </div>
          <div className="case-grid">
            {cases.map((item) => (
              <article key={item.label} className="panel case-card">
                <p className="case-value">{item.value}</p>
                <p>{item.label}</p>
                <button className="text-btn" onClick={() => scrollToSection("contact")}>
                  See similar plan
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact panel" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Plan your next delivery cycle with us.</h2>
            <p>
              This is a mocked contact block for demo purposes. The submit
              button is functional and returns an on-page confirmation.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Jordan Lee" required />

            <label htmlFor="email">Work Email</label>
            <input id="email" type="email" placeholder="jordan@company.com" required />

            <label htmlFor="focus">Focus Area</label>
            <select id="focus" defaultValue="Cloud Platforms">
              <option>Cloud Platforms</option>
              <option>Retail Intelligence</option>
              <option>Digital Experience</option>
            </select>

            <button className="btn" type="submit">
              Send Message
            </button>
            {submitted && (
              <p className="submit-note">Thanks. Your demo request has been recorded.</p>
            )}
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>
          Built by{" "}
          <a href="https://www.cgi.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            CGI.com
          </a>
        </p>
        <button className="text-btn" onClick={() => scrollToSection("top")}>
          Back to top
        </button>
      </footer>
    </div>
  );
}

export default App;
