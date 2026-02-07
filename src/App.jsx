import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Coffee,
} from "lucide-react";

function App() {
  const [activeHash, setActiveHash] = useState("#home");

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveHash(`#${id}`);
    }
  };

  return (
    <div className="app">
      <div className="container">
        {/* Navigation */}
        <nav className="navbar">
          <div className="logo">&lt;Dev/&gt;</div>
          <div className="nav-links">
            {["hero", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) =>
                  scrollToSection(e, item === "hero" ? "home" : item)
                }
                style={{
                  color: activeHash === `#${item}` ? "var(--text-primary)" : "",
                }}
              >
                {item.charAt(0).toUpperCase() +
                  item.slice(1).replace("Hero", "Home")}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home">
          <div style={{ maxWidth: "600px", marginTop: "4rem" }}>
            <h3>Cześć, jestem Podatek</h3>
            <h1>Java & Web Developer</h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.25rem",
                marginBottom: "2rem",
              }}
            >
              Buduję skalowalne aplikacje backendowe i responsywne webowe
              interfejsy. Specjalizuję się w ekosystemie Spring Boot oraz React.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => scrollToSection(e, "projects")}
              >
                Zobacz projekty
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                Kontakt
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Podatek"
                target="_blank"
                rel="noreferrer"
                title="Github"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <Linkedin />
              </a>
              <a href="mailto:podatek306@gmail.com" title="Email">
                <Mail />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <h2>O mnie</h2>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <p
                style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}
              >
                Jestem programistą z pasją do czystego kodu i wydajnych
                rozwiązań. Moja przygoda z programowaniem zaczęła się od Javy,
                gdzie głębiej poznałem paradygmaty obiektowe. Obecnie łączę
                solidny backend (Spring) z nowoczesnym frontendem (React,
                TypeScript).
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                Po godzinach pasjonuję się nowinkami technologicznymi, kawą i
                open source.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
              }}
            >
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Code2
                  size={40}
                  color="var(--accent)"
                  style={{ marginBottom: "1rem" }}
                />
                <span>Clean Code</span>
              </div>
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Database
                  size={40}
                  color="var(--accent)"
                  style={{ marginBottom: "1rem" }}
                />
                <span>Database Design</span>
              </div>
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Server
                  size={40}
                  color="var(--accent)"
                  style={{ marginBottom: "1rem" }}
                />
                <span>Scalable API</span>
              </div>
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Layout
                  size={40}
                  color="var(--accent)"
                  style={{ marginBottom: "1rem" }}
                />
                <span>Modern UI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Technologie</h2>
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}
            >
              Backend & Core
            </h3>
            <div className="skills-grid">
              <div className="skill-item">Java 21</div>
              <div className="skill-item">PostgreSQL</div>
              <div className="skill-item">Docker</div>
              <div className="skill-item">Maven/Gradle</div>
            </div>
          </div>
          <div>
            <h3
              style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}
            >
              Frontend & Tools
            </h3>
            <div className="skills-grid">
              <div className="skill-item">JavaScript (ES6+)</div>
              <div className="skill-item">React</div>
              <div className="skill-item">HTML5 & CSS3</div>
              <div className="skill-item">Git</div>
              <div className="skill-item">IntelliJ IDEA</div>
              <div className="skill-item">VS Code</div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>Projekty</h2>
          <div className="grid">
            {/* Project 1 */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Coffee size={32} color="var(--accent)" />
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <a href="#" style={{ color: "var(--text-secondary)" }}>
                    <Github size={20} />
                  </a>
                  <a href="#" style={{ color: "var(--text-secondary)" }}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3>Warehouse Managment System</h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginTop: "0.5rem",
                }}
              >
                System WMS (Warehouse Managment System) do zarządzania robotem
                od AMR (Automated Mobile Robot) własnej produkcji który porusza
                się po magazynie i transportuje towary. System umożliwia
                monitorowanie stanu magazynu, zarządzanie zadaniami dla robota.
              </p>
              <div>
                <span className="tag">Python</span>
                <span className="tag">Arduino</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Layout size={32} color="var(--accent)" />
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <a href="#" style={{ color: "var(--text-secondary)" }}>
                    <Github size={20} />
                  </a>
                  <a href="#" style={{ color: "var(--text-secondary)" }}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3>Portfolio Dashboard</h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginTop: "0.5rem",
                }}
              >
                Frontendowy dashboard do wizualizacji danych. Tryb dark mode,
                responsywność i dynamiczne wykresy.
              </p>
              <div>
                <span className="tag">React</span>
                <span className="tag">Vite</span>
                <span className="tag">Chart.js</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          style={{ textAlign: "center", paddingBottom: "8rem" }}
        >
          <h2>Kontakt</h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "500px",
              margin: "0 auto 2rem auto",
            }}
          >
            Obecnie jestem otwarty na nowe propozycje współpracy. Jeśli masz
            pytanie lub po prostu chcesz się przywitać, napisz do mnie!
          </p>
          <a href="mailto:hello@example.com" className="btn btn-primary">
            <Mail size={18} />
            Napisz do mnie
          </a>
        </section>

        <footer
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            padding: "2rem 0",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p>&copy; 2024 Jan Developer. Wszystkie prawa zastrzeżone.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
