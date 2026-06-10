document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LANGUAGE TOGGLE LOGIC ---
    const langBtn = document.getElementById('langToggle');
    let currentLang = 'ID'; // Default bahasa Indonesia

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const idElements = document.querySelectorAll('.lang-id');
            const enElements = document.querySelectorAll('.lang-en');

            if (currentLang === 'ID') {
                // Switch to English
                idElements.forEach(el => el.classList.add('hidden'));
                enElements.forEach(el => el.classList.remove('hidden'));
                langBtn.textContent = 'Mode: EN';
                currentLang = 'EN';
            } else {
                // Switch to Indonesia
                idElements.forEach(el => el.classList.remove('hidden'));
                enElements.forEach(el => el.classList.add('hidden'));
                langBtn.textContent = 'Mode: ID';
                currentLang = 'ID';
            }
        });
    }

    // --- 2. SCROLLSPY LOGIC ---
    // Hanya jalankan jika sidebar ada di halaman
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('section');

    if (sidebarLinks.length > 0 && sections.length > 0) {
        window.addEventListener('scroll', () => {
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                // Offset 100px untuk kompensasi header/margin
                if (pageYOffset >= (sectionTop - 150)) {
                    currentSection = section.getAttribute('id');
                }
            });

            sidebarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(currentSection)) {
                    link.classList.add('active');
                }
            });
        });
    }

});