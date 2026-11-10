const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");
const themeToggle = document.querySelector(".theme-toggle");
const languageToggle = document.querySelector(".language");
const customCursor = document.querySelector(".custom-cursor");

const translations = [
  [".desktop-nav a:nth-child(1)", ["À propos", "About"]],
  [".desktop-nav a:nth-child(2)", ["Parcours", "Experience"]],
  [".desktop-nav a:nth-child(3)", ["Distinctions", "Highlights"]],
  [".desktop-nav a:nth-child(4)", ["Projets", "Projects"]],
  [".desktop-nav a:nth-child(5)", ["Contact", "Contact"]],
  [".hero-copy .eyebrow", ["BONJOUR, JE SUIS", "HELLO, I AM"]],
  [".role", ["<span>&gt;_</span> Ingénieure en systèmes d’information<span class=\"cursor\"></span>", "<span>&gt;_</span> Information Systems Engineer<span class=\"cursor\"></span>"]],
  [".pill-list span:nth-child(1)", ["Étudiante en 4ᵉ année à l’EMSI", "Fourth-year engineering student at EMSI"]],
  [".pill-list span:nth-child(2)", ["Développement full-stack, IA & transformation numérique", "Full-stack development, AI & digital transformation"]],
  [".scroll-cue", ["<span>↓</span> Découvrir mon univers", "<span>↓</span> Explore my work"]],
  [".about .eyebrow", ["01 / À PROPOS", "01 / ABOUT"]],
  [".about h2", ["Donner une forme<br /><em>aux bonnes idées.</em>", "Shaping<br /><em>great ideas.</em>"]],
  [".about-content .lead", ["Étudiante en 4ᵉ année d’ingénierie à l’EMSI, je construis des solutions numériques à la rencontre du développement full-stack, de l’intelligence artificielle et des systèmes d’information.", "As a fourth-year engineering student at EMSI, I build digital solutions at the intersection of full-stack development, artificial intelligence and information systems."]],
  [".about-content p:not(.lead)", ["Curieuse et polyvalente, je maîtrise notamment C, C++, Python, Java, PHP, JavaScript et TypeScript, ainsi que des frameworks comme React, Laravel, Django et Spring Boot. Je m’intéresse aussi à l’IA et au cloud computing.", "Curious and versatile, I work with C, C++, Python, Java, PHP, JavaScript and TypeScript, as well as frameworks such as React, Laravel, Django and Spring Boot. I am also interested in AI and cloud computing."]],
  [".text-link", ["Parlons de votre projet <span>↗</span>", "Let's talk about your project <span>↗</span>"]],
  [".timeline .eyebrow", ["02 / PARCOURS", "02 / EXPERIENCE"]],
  [".timeline h2", ["Un parcours en<br /><em>mouvement.</em>", "A journey<br /><em>in progress.</em>"]],
  [".timeline-item:nth-child(1) h3", ["Stagiaire en transformation numérique", "Digital transformation intern"]],
  [".timeline-item:nth-child(2) h3", ["Cycle ingénieur — 4ᵉ année", "Engineering cycle — fourth year"]],
  [".timeline-item:nth-child(3) h3", ["Ingénierie informatique", "Computer engineering"]],
  [".timeline-item:nth-child(1) .company", ["ADD (Agence de Développement Digital) · Rabat", "ADD (Digital Development Agency) · Rabat"]],
  [".timeline-item:nth-child(2) .company", ["EMSI · École Marocaine des Sciences de l’Ingénieur", "EMSI · Moroccan School of Engineering Sciences"]],
  [".timeline-item:nth-child(3) .company", ["EMSI · Maroc", "EMSI · Morocco"]],
  [".timeline-item:nth-child(1) div > p:last-child", ["Participation à des projets internes de transformation numérique et conception d’une solution full-stack.", "Contributing to digital transformation projects and designing a full-stack solution."]],
  [".timeline-item:nth-child(2) div > p:last-child", ["Génie informatique, systèmes d’information, développement logiciel et intelligence artificielle.", "Computer engineering, information systems, software development and artificial intelligence."]],
  [".timeline-item:nth-child(3) div > p:last-child", ["Conception, développement et déploiement de systèmes numériques.", "Design, development and deployment of digital systems."]],
  [".timeline-item:nth-child(1) .period", ["2026 · 1 mois", "2026 · 1 month"]],
  [".timeline-item:nth-child(2) .period", ["Formation en cours", "Currently studying"]],
  [".timeline-item:nth-child(3) .period", ["Parcours académique", "Academic background"]],
  [".credentials .eyebrow", ["03 / DISTINCTIONS & EXPÉRIENCES", "03 / HIGHLIGHTS & EXPERIENCE"]],
  [".credentials h2", ["Les étapes qui<br /><em>me font grandir.</em>", "Milestones that<br /><em>help me grow.</em>"]],
  [".credential-column:nth-child(1) .credential-heading h3", ["Hackathons", "Hackathons"]],
  [".credential-column:nth-child(2) .credential-heading h3", ["Certificats", "Certificates"]],
  [".credential-column:nth-child(3) .credential-heading h3", ["Stages", "Internships"]],
  [".credential-column:nth-child(1) .credential-item:nth-of-type(1) h4", ["1ʳᵉ place — Hackathon EMSI", "1st place — EMSI Hackathon"]],
  [".credential-column:nth-child(1) .credential-item:nth-of-type(2) h4", ["Tutorat à l’EMSI", "EMSI Tutoring"]],
  [".credential-column:nth-child(2) .credential-item:nth-of-type(1) h4", ["Certificats & attestations", "Certificates & credentials"]],
  [".credential-column:nth-child(2) .credential-item:nth-of-type(2) h4", ["Compétences techniques", "Technical skills"]],
  [".credential-column:nth-child(3) .credential-item:nth-of-type(1) h4", ["Stage en transformation numérique", "Digital transformation internship"]],
  [".credential-column:nth-child(3) .credential-item:nth-of-type(2) h4", ["Projet réalisé au CHU", "CHU internship project"]],
  [".credential-column:nth-child(1) .credential-item:nth-of-type(1) p:last-child", ["Une victoire collective autour d’une solution numérique innovante.", "A team victory built around an innovative digital solution."]],
  [".credential-column:nth-child(1) .credential-item:nth-of-type(1) p:nth-of-type(3)", ["Une victoire collective autour d’une solution numérique innovante.", "A team victory built around an innovative digital solution."]],
  [".credential-column:nth-child(1) .credential-item:nth-of-type(2) p:last-child", ["Accompagnement et partage de connaissances avec les étudiants.", "Supporting students and sharing knowledge."]],
  [".credential-column:nth-child(2) .credential-item:nth-of-type(1) p:last-child", ["Retrouve ici les certifications et attestations présentées dans tes documents.", "This section presents the certificates and credentials from your documents."]],
  [".credential-column:nth-child(2) .credential-item:nth-of-type(2) p:last-child", ["Python, Java, PHP, JavaScript, TypeScript, React, Laravel, Django, Spring Boot, MySQL et Oracle.", "Python, Java, PHP, JavaScript, TypeScript, React, Laravel, Django, Spring Boot, MySQL and Oracle."]],
  [".credential-column:nth-child(3) .credential-item:nth-of-type(1) .company", ["ADD (Agence de Développement Digital)", "ADD (Digital Development Agency)"]],
  [".credential-column:nth-child(3) .credential-item:nth-of-type(1) p:last-child", ["Immersion dans des projets numériques concrets au sein d’une équipe de transformation digitale.", "Hands-on experience with real digital projects in a digital transformation team."]],
  [".credential-column:nth-child(3) .credential-item:nth-of-type(2) p:last-child", ["Découverte d’un contexte hospitalier et de ses systèmes d’information.", "Experience in a hospital environment and its information systems."]],
  [".certificate-card--image strong", ["Introduction to Data Science", "Introduction to Data Science"]],
  [".certificate-card--image small", ["Cisco", "Cisco"]],
  [".credential-column:nth-child(1) .credential-item:nth-of-type(1) .period", ["1er prix · 2024", "1st prize · 2024"]],
  [".credential-column:nth-of-type(1) .credential-item:nth-of-type(2) .period", ["2026", "2026"]],
  [".credential-column:nth-of-type(2) .credential-item:nth-of-type(1) .period", ["2025–2026", "2025–2026"]],
  [".credential-column:nth-of-type(2) .credential-item:nth-of-type(2) .period", ["2025–2026", "2025–2026"]],
  [".credential-column:nth-of-type(3) .credential-item:nth-of-type(1) .period", ["2026 · 1 mois", "2026 · 1 month"]],
  [".credential-column:nth-of-type(3) .credential-item:nth-of-type(2) .period", ["2026 · 1 mois", "2026 · 1 month"]],
  [".projects .eyebrow", ["04 / PROJETS SÉLECTIONNÉS", "04 / SELECTED PROJECTS"]],
  [".projects h2", ["Ce que j’aime<br /><em>construire.</em>", "What I love<br /><em>building.</em>"]],
  [".projects-intro", ["Quelques projets qui racontent ma façon de travailler : une idée forte, une exécution soignée, un impact mesurable.", "A selection of projects that reflect how I work: strong ideas, careful execution and measurable impact."]],
  [".project-card:nth-child(1) .project-type", ["Projet PFA · IA", "Capstone project · AI"]],
  [".project-card:nth-child(2) .project-type", ["Projet de stage", "Internship project"]],
  [".project-card:nth-child(1) h3", ["Dons &<br />intelligence", "Donations &<br />intelligence"]],
  [".project-card:nth-child(2) h3", ["Projet<br />CHU", "CHU<br />project"]],
  [".project-card:nth-child(1) .project-description", ["Une plateforme pour faciliter la gestion des dons et améliorer leur orientation grâce à l’intelligence artificielle.", "A platform designed to simplify donation management and improve allocation through artificial intelligence."]],
  [".project-card:nth-child(2) .project-description", ["Une solution numérique pensée pour répondre à un besoin concret dans un environnement hospitalier et ses systèmes d’information.", "A digital solution designed to address a real need in a hospital environment and its information systems."]],
  [".github-banner strong", ["Voir mon code sur GitHub", "View my code on GitHub"]],
  [".github-banner small", ["Projets, expérimentations et contributions · github.com/ranialamsakhar-debug", "Projects, experiments and contributions · github.com/ranialamsakhar-debug"]],
  [".document-card strong", ["Rapport de stage ADD", "ADD internship report"], ["Rapport de stage CHU", "CHU internship report"], ["FoodAid — version finale du projet PFA", "FoodAid — final capstone project version"]],
  [".document-card small", ["Rapport PDF · 2026", "PDF report · 2026"], ["Rapport PDF · 2026", "PDF report · 2026"], ["Rapport PDF · Dons et intégration de l’intelligence artificielle", "PDF report · Donations and artificial intelligence"]],
  [".contact .eyebrow", ["05 / CONTACT", "05 / CONTACT"]],
  [".contact h2", ["Une idée en tête ?<br /><em>Écrivons la suite.</em>", "Have an idea?<br /><em>Let's build what comes next.</em>"]],
  [".contact-footer span", ["Disponible pour de nouveaux projets", "Available for new projects"]]
];

function applyLanguage(language) {
  translations.forEach(([selector, ...values]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      const value = values[index] || values[0];
      element.innerHTML = value[language === "en" ? 1 : 0];
    });
  });
  document.documentElement.lang = language;
  languageToggle.textContent = language === "fr" ? "EN" : "FR";
  languageToggle.setAttribute("aria-label", language === "fr" ? "Passer en anglais" : "Switch to French");
  document.title = language === "fr" ? "Rania | Ingénieure en systèmes d’information" : "Rania | Information Systems Engineer";
  localStorage.setItem("cv-language", language);
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".desktop-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☾" : "☼";
  themeToggle.setAttribute("aria-label", isDark ? "Activer le mode clair" : "Activer le mode sombre");
});

languageToggle.addEventListener("click", () => {
  applyLanguage(document.documentElement.lang === "fr" ? "en" : "fr");
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section-shell, .timeline-item, .credential-column, .project-card, .github-banner").forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});

const progressBar = document.querySelector(".scroll-progress");
const updateScrollProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${scrollableHeight ? window.scrollY / scrollableHeight : 0})`;
};
window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

const cursorTargets = "a, button, h1, h2, h3, h4, p, li, span, em";
let hoveredText;
document.addEventListener("pointermove", (event) => {
  if (event.pointerType !== "mouse") return;
  customCursor.style.left = `${event.clientX}px`;
  customCursor.style.top = `${event.clientY}px`;
  customCursor.classList.add("is-visible");
  const nextHoveredText = event.target.closest(cursorTargets);
  if (hoveredText !== nextHoveredText) {
    hoveredText?.classList.remove("cursor-text-focus");
    nextHoveredText?.classList.add("cursor-text-focus");
    hoveredText = nextHoveredText;
  }
  customCursor.classList.toggle("is-hovering", Boolean(nextHoveredText));
});
document.addEventListener("pointerleave", () => {
  customCursor.classList.remove("is-visible");
  hoveredText?.classList.remove("cursor-text-focus");
  hoveredText = undefined;
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -4;
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 4;
    card.style.transform = `translateY(-7px) perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

applyLanguage(localStorage.getItem("cv-language") === "en" ? "en" : "fr");
