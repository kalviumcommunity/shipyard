import ProductCard from "./components/ProductCard";
import { products, categories } from "./data/products";

export default function HomePage() {
  return (
    <main>
      {/* Full-width gradient hero with a couple of quick stats. */}
      <header className="hero">
        <div className="hero-inner">
          <span className="hero-kicker">New season gear</span>
          <h1 className="hero-title">Build. Run. Explore.</h1>
          <p className="hero-sub">
            ShipYard stocks the gear that keeps up with you, from trail shoes to
            pocket cameras.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">{products.length}</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat">
              <span className="stat-num">{categories.length}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat">
              <span className="stat-num">4.5★</span>
              <span className="stat-label">Avg rating</span>
            </div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span>👟</span>
          <span>🎧</span>
          <span>⌚</span>
          <span>📷</span>
        </div>
      </header>

      <div className="container">
        {/* Category chips. Static anchors that jump to each section. */}
        <nav className="chips">
          <a className="chip chip-active" href="#all">
            All
          </a>
          {categories.map((category) => (
            <a key={category} className="chip" href={`#${category}`}>
              {category}
            </a>
          ))}
        </nav>

        <section id="all">
          <div className="section-head">
            <h2 className="section-title">All products</h2>
            <span className="section-count">{products.length} items</span>
          </div>

          {/* A responsive grid: one card per product, straight from data. */}
          <div className="grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* One section per category, so the page has more to explore. */}
        {categories.map((category) => {
          const inCategory = products.filter((p) => p.category === category);
          return (
            <section key={category} id={category} className="cat-section">
              <div className="section-head">
                <h2 className="section-title">{category}</h2>
                <span className="section-count">{inCategory.length} items</span>
              </div>
              <div className="grid">
                {inCategory.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
