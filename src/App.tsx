import "./index.css";

function App() {
  return (
    <div className="app landing-page-background">
      <header className="site-header">
        <p className="brand-name">
          VoltNest <span style={{ fontWeight: "normal" }}>Electronics</span>
        </p>
      </header>

      <main className="site-main">
        <section className="hero" aria-labelledby="hero-heading">
          <p className="hero__eyebrow">
            Curated electronics for the modern day
          </p>
          <h1 id="hero-heading">
            Technology that earns its place in your day.
          </h1>
          <p className="hero__description">
            Discover dependable devices and accessories for work, entertainment,
            and everyday convenience.
          </p>
        </section>
      </main>
      <footer className="site-footer">
        <p>VoltNest Electronics &copy; 2026</p>
      </footer>
    </div>
  );
}

export default App;
