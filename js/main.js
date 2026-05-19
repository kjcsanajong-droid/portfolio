document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Controleer of de bezoeker al eerder een taal heeft gekozen, anders standaard 'nl'
    const currentLang = localStorage.getItem('portfolio-lang') || 'nl';
    setLanguage(currentLang);

    // Voeg klik-events toe aan de taalknoppen
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    function setLanguage(lang) {
        // Sla de taalkeuze op in de browser
        localStorage.setItem('portfolio-lang', lang);

        // Update de actieve status van de knoppen in de navbar
        langButtons.forEach(button => {
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Verander de content op basis van de geselecteerde taal
        if (lang === 'en') {
            convertToEnglish();
        } else {
            convertToDutch();
        }
    }

    function convertToEnglish() {
        // Navigatiebalk & Algemeen
        updateText('.nav-links a[href="about.html"]', 'About Me');
        updateText('.nav-links a[href="work.html"]', 'Work & Projects');
        updateText('.nav-links a[href="contact.html"]', 'Contact');
        
        // --- INDEX.HTML VERTALINGEN ---
        updateText('.greeting', "Hi, I am");
        updateText('.scroll-btn', 'View Education ↓');
        updateText('.cta-buttons a[href="work.html"]', 'View Projects');
        updateText('.cta-buttons a[href="contact.html"]', 'Get in Touch');
        updateText('.achievement-title', 'Top Academic Performance');
        updateText('.achievement-desc', 'Graduated among the top students in high school VWO 4 (2024-2025).');
        updateText('.subsection-title', 'Current Education');
        updateText('.status-badge', 'Semester 2 (Active)');
        updateText('.education-details-grid div:nth-child(1) h5', 'Focus & Ambition');
        updateText('.education-details-grid div:nth-child(1) p', 'Within this program, I focus on analyzing business processes to drastically simplify, automate, and accelerate them through targeted software architecture and IT solutions.');
        updateText('.education-details-grid div:nth-child(2) h5', 'Practical Knowledge');
        updateText('.education-details-grid div:nth-child(2) p', 'I directly apply the acquired theory to advanced prototypes (such as microcontroller systems with the ESP32-S3) and data-driven optimization of digital e-commerce platforms.');

        // --- ABOUT.HTML VERTALINGEN ---
        updateText('.section-title', 'Who am I?');
        updateText('.about-text p:nth-of-type(1)', 'My passion for IT and technology is no coincidence; from a young age, I had a strong urge to discover how the world around me worked. I loved experimenting with everything and anything I could get my hands on. That curiosity and the drive to dissect, test, and improve systems have always stuck with me and are the driving force behind my work today.');
        updateText('.about-text p:nth-of-type(2)', 'Today, this lifelong passion for experimenting translates directly into my IT career. It helps me accurately and independently analyze complex business processes and design them more efficiently with smart, innovative software architecture and hardware solutions.');
        updateText('.about-text p:nth-of-type(3)', 'Alongside my studies, I apply my software knowledge directly in practice to build my digital businesses. I am proactive, results-oriented, and always strive to successfully achieve the goals set for myself and the team.');
        updateText('.objectives-block h3', 'Objectives');
        updateText('.objectives-block p', 'I am currently focused on finding a high-quality internship within a forward-thinking IT company, specifically <strong>Quology</strong>. Here, I want to further sharpen my personal competencies and develop new skills that are directly applicable within the modern IT world.');
        updateText('.sidebar-info .info-block:nth-of-type(1) h3', 'Interests');
        // Belangrijk: De emoji's moeten behouden blijven in de lijst
        updateHTML('.interests-list', `
            <li><span class="emoji">🔬</span> Experimenting</li>
            <li><span class="emoji">🏋️‍♂️</span> Gymming</li>
            <li><span class="emoji">🎨</span> Painting</li>
            <li><span class="emoji">☕</span> Caffeine</li>
        `);
        updateText('.sidebar-info .info-block:nth-of-type(2) h3', 'Education');
        updateText('.status-text', 'Semester 2 (Current)');
        // Selecteer specifiek de status van vwo 4
        const vwoStatus = document.querySelectorAll('.status-text')[1];
        if(vwoStatus) vwoStatus.innerText = 'Top Performance — Best Graduates';
    }

    function convertToDutch() {
        // Dit herstelt de originele Nederlandse teksten (Verversen van pagina of handmatig terugzetten)
        // Omdat de originele HTML al in het Nederlands is geschreven, herladen we de defaults via JS indien nodig:
        updateText('.nav-links a[href="about.html"]', 'Over Mij');
        updateText('.nav-links a[href="work.html"]', 'Werk & Projecten');
        updateText('.nav-links a[href="contact.html"]', 'Contact');
        
        // Index NL herstel
        updateText('.greeting', "Hallo, ik ben");
        updateText('.scroll-btn', 'Bekijk Opleiding ↓');
        updateText('.cta-buttons a[href="work.html"]', 'Bekijk Projecten');
        updateText('.cta-buttons a[href="contact.html"]', 'Neem contact op');
        updateText('.achievement-title', 'Top-fitte Prestatie Academisch Jaar');
        updateText('.achievement-desc', 'Geëindigd als een van de best geslaagden op de middelbare school VWO 4 (2024-2025).');
        updateText('.subsection-title', 'Huidige Opleiding');
        updateText('.status-badge', 'Semester 2 (Actief)');
        
        // About NL herstel
        updateText('.section-title', 'Wie ben ik?');
        updateHTML('.interests-list', `
            <li><span class="emoji">🔬</span> Experimenteren</li>
            <li><span class="emoji">🏋️‍♂️</span> Gymming</li>
            <li><span class="emoji">🎨</span> Painting</li>
            <li><span class="emoji">☕</span> Caffeine</li>
        `);
    }

    // Hulpfuncties om fouten te voorkomen als een element niet op de huidige pagina staat
    function updateText(selector, text) {
        const element = document.querySelector(selector);
        if (element) element.innerText = text;
    }

    function updateHTML(selector, html) {
        const element = document.querySelector(selector);
        if (element) element.innerHTML = html;
    }
});