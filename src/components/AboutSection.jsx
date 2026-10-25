import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content">
            <span className="about-tag">WHO WE ARE</span>
            <h2 className="about-title">
              About <span className="highlight">DINI MART</span>
            </h2>
            <p className="about-desc">
              Dini Mart is Sri Lanka's leading online cake tools and gift store. We specialize in bringing professional bakers, passionate home cooks, and gift shoppers the finest quality baking accessories, cake turntables, piping tips, gift hampers, plush toys, and craft supplies.
            </p>

            <div className="about-highlights">
              <div className="highlight-card">
                <span className="highlight-icon">🎂</span>
                <div>
                  <h4>100% Quality Baking Supplies</h4>
                  <p>Certified food-safe silicone, stainless steel tips & durable tools.</p>
                </div>
              </div>

              <div className="highlight-card">
                <span className="highlight-icon">🚚</span>
                <div>
                  <h4>Fast Island-wide Delivery</h4>
                  <p>Quick processing & safe doorstep delivery anywhere in Sri Lanka.</p>
                </div>
              </div>

              <div className="highlight-card">
                <span className="highlight-icon">📞</span>
                <div>
                  <h4>Instant WhatsApp Support</h4>
                  <p>Personalized assistance & fast order placement at 077 136 7348.</p>
                </div>
              </div>
            </div>

            <div className="about-action-bar">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fb-link-btn"
              >
                👍 Follow Us on Facebook (380+ Followers)
              </a>
            </div>
          </div>

          <div className="about-visual-card">
            <div className="badge-overlay">
              <span className="badge-number">100%</span>
              <span className="badge-text">Satisfaction Guaranteed</span>
            </div>
            <div className="visual-content">
              <h3>DINI MART</h3>
              <p>Cake Tools & Gift Store</p>
              <div className="contact-chip">📞 077 136 7348</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
