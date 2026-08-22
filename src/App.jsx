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
  Globe,
  Smartphone,
  Scissors,
  ShoppingCart,
  FlaskConical,
} from "lucide-react";

function App() {
  const [activeHash, setActiveHash] = useState("#home");
  const [lang, setLang] = useState("pl");

  const translations = {
    pl: {
      nav: {
        hero: "Home",
        about: "O mnie",
        skills: "Technologie",
        projects: "Projekty",
        contact: "Kontakt",
      },
      hero: {
        greeting: "Cześć, jestem Podatek",
        role: "Java & Web Developer",
        description:
          "Buduję skalowalne aplikacje backendowe i responsywne webowe interfejsy. Specjalizuję się w ekosystemie Spring Boot oraz React.",
        projectsBtn: "Zobacz projekty",
        contactBtn: "Kontakt",
      },
      about: {
        title: "O mnie",
        p1: "Jestem programistą z pasją do czystego kodu i wydajnych rozwiązań. Moja przygoda z programowaniem zaczęła się od Javy, gdzie głębiej poznałem paradygmaty obiektowe. Obecnie łączę solidny backend (Spring) z nowoczesnym frontendem (React, TypeScript).",
        p2: "Po godzinach pasjonuję się nowinkami technologicznymi, kawą i open source.",
        cleanCode: "Clean Code",
        dbDesign: "Database Design",
        scalableApi: "Scalable API",
        modernUi: "Modern UI",
      },
      skills: {
        title: "Technologie",
        backend: "Backend & Core",
        frontend: "Frontend & Tools",
      },
      projects: {
        title: "Projekty",
        p1: {
          title: "Warehouse Managment System",
          desc: "System WMS (Warehouse Managment System) do zarządzania robotem od AMR (Automated Mobile Robot) własnej produkcji który porusza się po magazynie i transportuje towary. System umożliwia monitorowanie stanu magazynu, zarządzanie zadaniami dla robota.",
        },
        p2: {
          title: "Aplikacja pogody dla Androida",
          desc: "Prosta aplikacja pogodowa na Androida, która pokazuje aktualną pogodę. Wykorzystuje API OpenWeatherMap i nowoczesne komponenty Material Design.",
        },
        p3: {
          title: "Portfolio Dashboard",
          desc: "Frontendowy dashboard do wizualizacji danych. Tryb dark mode, responsywność i dynamiczne wykresy.",
        },
        p4: {
          title: "Template strony dla salonu fryzjerskiego",
          desc: "Szablon strony internetowej dla salonu fryzjerskiego, zaprojektowany z myślą o responsywności i estetyce.",
        },
        p5: {
          title: "Template strony dla sklepu z elektroniką",
          desc: "Szablon strony internetowej dla sklepu z elektroniką, z nowoczesnym designem i funkcjonalnościami e-commerce.",
        },
        p6: {
          title: "ChemiaAPP",
          desc: "Aplikacja wspierająca naukę chemii, z interaktywnymi materiałami i narzędziami dla uczniów.",
        },
      },
      contact: {
        title: "Kontakt",
        desc: "Obecnie jestem otwarty na nowe propozycje współpracy. Jeśli masz pytanie lub po prostu chcesz się przywitać, napisz do mnie!",
        btn: "Napisz do mnie",
      },
      footer: "© 2026 Podatek. Wszystkie prawa zastrzeżone.",
    },
    en: {
      nav: {
        hero: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        greeting: "Hi, I'm Podatek",
        role: "Java & Web Developer",
        description:
          "I build scalable backend applications and responsive web interfaces. I specialize in the Spring Boot ecosystem and React.",
        projectsBtn: "View Projects",
        contactBtn: "Contact",
      },
      about: {
        title: "About Me",
        p1: "I am a developer with a passion for clean code and efficient solutions. My programming journey started with Java, where I dove deep into object-oriented paradigms. Currently, I combine a solid backend (Spring) with a modern frontend (React, TypeScript).",
        p2: "After hours, I'm passionate about tech news, coffee, and open source.",
        cleanCode: "Clean Code",
        dbDesign: "Database Design",
        scalableApi: "Scalable API",
        modernUi: "Modern UI",
      },
      skills: {
        title: "Technologies",
        backend: "Backend & Core",
        frontend: "Frontend & Tools",
      },
      projects: {
        title: "Projects",
        p1: {
          title: "Warehouse Management System",
          desc: "WMS (Warehouse Management System) for managing an AMR (Automated Mobile Robot) of my own production that moves around the warehouse and transports goods. The system allows monitoring warehouse status and managing robot tasks.",
        },
        p2: {
          title: "Android Weather App",
          desc: "A simple weather app for Android that shows the current weather. It uses the OpenWeatherMap API and modern Material Design components.",
        },
        p3: {
          title: "Portfolio Dashboard",
          desc: "Frontend dashboard for data visualization. Dark mode, responsiveness, and dynamic charts.",
        },
        p4: {
          title: "Hair Salon Website Template",
          desc: "A responsive and elegant website template for a hair salon, designed with a focus on usability and visual style.",
        },
        p5: {
          title: "Electronics Store Website Template",
          desc: "A modern electronics store template with a clean design and e-commerce functionality.",
        },
        p6: {
          title: "ChemiaAPP",
          desc: "An app supporting chemistry learning with interactive materials and useful tools for students.",
        },
      },
      contact: {
        title: "Contact",
        desc: "I am currently open to new cooperation proposals. If you have a question or just want to say hi, write to me!",
        btn: "Write to me",
      },
      footer: "© 2026 Podatek. All rights reserved.",
    },
  };

  const t = translations[lang];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveHash(`#${id}`);
    }
  };

  const toggleLang = () => {
    setLang(lang === "pl" ? "en" : "pl");
  };

  return (
    <div className="app">
      <div className="container">
        {/* Navigation */}
        <nav className="navbar">
          <div className="logo">&lt;Dev/&gt;</div>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div className="nav-links">
              {["hero", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={(e) =>
                      scrollToSection(e, item === "hero" ? "home" : item)
                    }
                    style={{
                      color:
                        activeHash === `#${item}` ? "var(--text-primary)" : "",
                    }}
                  >
                    {t.nav[item]}
                  </a>
                ),
              )}
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="btn btn-outline"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Globe size={16} />
              {lang.toUpperCase()}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home">
          <div style={{ maxWidth: "600px", marginTop: "4rem" }}>
            <h3>{t.hero.greeting}</h3>
            <h1>{t.hero.role}</h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.25rem",
                marginBottom: "2rem",
              }}
            >
              {t.hero.description}
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => scrollToSection(e, "projects")}
              >
                {t.hero.projectsBtn}
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                {t.hero.contactBtn}
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
          <h2>{t.about.title}</h2>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <p
                style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}
              >
                {t.about.p1}
              </p>
              <p style={{ color: "var(--text-secondary)" }}>{t.about.p2}</p>
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
                <span>{t.about.cleanCode}</span>
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
                <span>{t.about.dbDesign}</span>
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
                <span>{t.about.scalableApi}</span>
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
                <span>{t.about.modernUi}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>{t.skills.title}</h2>
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}
            >
              {t.skills.backend}
            </h3>
            <div className="skills-grid">
              <div className="skill-item">Java</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">PostgreSQL</div>
              <div className="skill-item">Docker</div>
            </div>
          </div>
          <div>
            <h3
              style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}
            >
              {t.skills.frontend}
            </h3>
            <div className="skills-grid">
              <div className="skill-item">JavaScript (ES6+)</div>
              <div className="skill-item">React</div>
              <div className="skill-item">Astro</div>
              <div className="skill-item">Tailwind CSS</div>
              <div className="skill-item">Kotlin</div>
              <div className="skill-item">Git</div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>{t.projects.title}</h2>
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
                  <a
                    href="https://github.com/podateK/WMS"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://github.com/podateK/WMS"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3>{t.projects.p1.title}</h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginTop: "0.5rem",
                }}
              >
                {t.projects.p1.desc}
              </p>
              <div>
                <span className="tag">Python</span>
                <span className="tag">Arduino</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Smartphone size={32} color="var(--accent)" />
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <a href="#" style={{ color: "var(--text-secondary)" }}>
                    <Github size={20} />
                  </a>
                  <a href="#" style={{ color: "var(--text-secondary)" }}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3>{t.projects.p2.title}</h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginTop: "0.5rem",
                }}
              >
                {t.projects.p2.desc}
              </p>
              <div>
                <span className="tag">Kotlin</span>
                <span className="tag">Android SDK</span>
                <span className="tag">Material Design</span>
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
                  <a
                    href="https://github.com/podateK/podatek.dev"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://github.com/podateK/podatek.dev"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3>{t.projects.p3.title}</h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginTop: "0.5rem",
                }}
              >
                {t.projects.p3.desc}
              </p>
              <div>
                <span className="tag">React</span>
                <span className="tag">Vite</span>
                <span className="tag">Chart.js</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Scissors size={32} color="var(--accent)" />
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <a
                    href="https://github.com/podateK/template-fryzjer"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://github.com/podateK/template-fryzjer"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3>{t.projects.p4.title}</h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginTop: "0.5rem",
                }}
              >
                {t.projects.p4.desc}
              </p>
              <div>
                <span className="tag">Astro</span>
                <span className="tag">Tailwind CSS</span>
              </div>
            </div>

            {/* Project 5 */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <ShoppingCart size={32} color="var(--accent)" />
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <a
                    href="https://github.com/podateK/template-elektryk"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://github.com/podateK/template-elektryk"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3>{t.projects.p5.title}</h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginTop: "0.5rem",
                }}
              >
                {t.projects.p5.desc}
              </p>
              <div>
                <span className="tag">Astro</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">E-commerce</span>
              </div>
            </div>

            {/* Project 6 */}
            <div className="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <FlaskConical size={32} color="var(--accent)" />
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <a
                    href="https://github.com/podateK/ChemiaAPP"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://github.com/podateK/ChemiaAPP"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3>{t.projects.p6.title}</h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginTop: "0.5rem",
                }}
              >
                {t.projects.p6.desc}
              </p>
              <div>
                <span className="tag">Java</span>
                <span className="tag">Android</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          style={{ textAlign: "center", paddingBottom: "8rem" }}
        >
          <h2>{t.contact.title}</h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "500px",
              margin: "0 auto 2rem auto",
            }}
          >
            {t.contact.desc}
          </p>
          <a href="mailto:podatek306@gmail.com" className="btn btn-primary">
            <Mail size={18} />
            {t.contact.btn}
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
          <p>{t.footer}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
