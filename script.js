// Typing animation
const typed = new Typed('.typed-text', {
    strings: ['PhD Researcher', 'Medical Doctor', 'Software Engineer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Language switching functionality
const translations = {
    en: {
        current_position: "Current Position",
        experience: "Work Experience",
        education: "Education",
        skills: "Skills & Languages",
        languages: "Languages",
        technical_skills: "Technical Skills",
        current_desc: "Working on mammography screening classification AI"
        // Add more translations as needed
    },
    uz: {
        current_position: "Hozirgi Lavozim",
        experience: "Ish Tajribasi",
        education: "Ta'lim",
        skills: "Ko'nikmalar va Tillar",
        languages: "Tillar",
        technical_skills: "Texnik Ko'nikmalar",
        current_desc: "Mammografiya skrining klassifikatsiyasi AI ustida ishlash"
        // Add more translations when ready
    },
    ru: {
        current_position: "Текущая Должность",
        experience: "Опыт Работы",
        education: "Образование",
        skills: "Навыки и Языки",
        languages: "Языки",
        technical_skills: "Технические Навыки",
        current_desc: "Работа над ИИ классификации маммографического скрининга"
        // Add more translations when ready
    }
};

// Language switcher functionality
document.querySelectorAll('.language-switcher button').forEach(button => {
    button.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        changeLanguage(lang);
        
        // Update active button
        document.querySelectorAll('.language-switcher button').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Initialize in English
changeLanguage('en');

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75);
        
        if (isVisible) {
            section.classList.add('fade-in');
        }
    });
});