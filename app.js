// ===================================
// SUNANDA SPA - App JavaScript
// Funcionalidades: Tema, Idioma, Animaciones
// ===================================

// ===== Traducciones =====
const translations = {
  es: {
    // Hero
    'hero.trustBadge': 'Productos de Alta Calidad',
    'hero.brandPartner': 'Germaine de Capuccini',
    'hero.title': 'Descubre una experiencia única de bienestar y belleza',
    'hero.subtitle': 'Tratamientos especializados faciales y corporales con los mejores productos del mercado',
    'hero.cta': 'Reservar Cita',
    'hero.ctaSecondary': 'Ver Servicios',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Tratamientos personalizados para tu bienestar',
    'services.facial.title': 'Tratamientos Faciales',
    'services.facial.description': 'Limpiezas profundas, hidratación y rejuvenecimiento facial con productos premium',
    'services.facial.feature1': 'Limpieza Profunda',
    'services.facial.feature2': 'Hidratación Intensiva',
    'services.facial.feature3': 'Anti-aging',
    'services.body.title': 'Tratamientos Corporales',
    'services.body.description': 'Masajes terapéuticos, reductores y relajantes para tu cuerpo',
    'services.body.feature1': 'Masajes Relajantes',
    'services.body.feature2': 'Reductores',
    'services.body.feature3': 'Drenaje Linfático',
    'services.packages.title': 'Paquetes Especiales',
    'services.packages.description': 'Combina varios tratamientos y ahorra con nuestros paquetes',
    'services.packages.feature1': 'Paquete Novia',
    'services.packages.feature2': 'Paquete Bienestar',
    'services.packages.feature3': 'Paquete Premium',
    
    // About
    'about.title': '¿Por qué elegir SUNANDA?',
    'about.description': 'Somos un centro de estética dedicado a ofrecer los mejores tratamientos faciales y corporales. Utilizamos productos de alta gama Germaine de Capuccini y contamos con profesionales altamente capacitados.',
    'about.feature1': 'Profesionales Certificados',
    'about.feature2': 'Productos Premium',
    'about.feature3': 'Atención Personalizada',
    'about.feature4': 'Ambiente Relajante',
    
    // Contact
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Estamos aquí para atenderte',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.address': 'Ubicación',
    'contact.schedule': 'Horario',
    'contact.scheduleValue': 'Lunes - Domingo',
    'contact.followUs': 'Síguenos en Facebook',
    
    // CTA
    'cta.title': '¿Lista para tu transformación?',
    'cta.subtitle': 'Reserva tu cita hoy y descubre la diferencia SUNANDA',
    'cta.whatsapp': 'Enviar WhatsApp',
    'cta.email': 'Enviar Email',
    
    // Footer
    'footer.tagline': 'Tu bienestar es nuestra prioridad',
    'footer.rights': 'Todos los derechos reservados'
  },
  en: {
    // Hero
    'hero.trustBadge': 'High Quality Products',
    'hero.brandPartner': 'Germaine de Capuccini',
    'hero.title': 'Discover a unique wellness and beauty experience',
    'hero.subtitle': 'Specialized facial and body treatments with the best products on the market',
    'hero.cta': 'Book Appointment',
    'hero.ctaSecondary': 'View Services',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Personalized treatments for your wellbeing',
    'services.facial.title': 'Facial Treatments',
    'services.facial.description': 'Deep cleansing, hydration and facial rejuvenation with premium products',
    'services.facial.feature1': 'Deep Cleansing',
    'services.facial.feature2': 'Intensive Hydration',
    'services.facial.feature3': 'Anti-aging',
    'services.body.title': 'Body Treatments',
    'services.body.description': 'Therapeutic, reducing and relaxing massages for your body',
    'services.body.feature1': 'Relaxing Massages',
    'services.body.feature2': 'Reducing Treatments',
    'services.body.feature3': 'Lymphatic Drainage',
    'services.packages.title': 'Special Packages',
    'services.packages.description': 'Combine multiple treatments and save with our packages',
    'services.packages.feature1': 'Bridal Package',
    'services.packages.feature2': 'Wellness Package',
    'services.packages.feature3': 'Premium Package',
    
    // About
    'about.title': 'Why choose SUNANDA?',
    'about.description': 'We are a beauty center dedicated to offering the best facial and body treatments. We use high-end Germaine de Capuccini products and have highly trained professionals.',
    'about.feature1': 'Certified Professionals',
    'about.feature2': 'Premium Products',
    'about.feature3': 'Personalized Attention',
    'about.feature4': 'Relaxing Environment',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to serve you',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.address': 'Location',
    'contact.schedule': 'Schedule',
    'contact.scheduleValue': 'Monday - Sunday',
    'contact.followUs': 'Follow us on Facebook',
    
    // CTA
    'cta.title': 'Ready for your transformation?',
    'cta.subtitle': 'Book your appointment today and discover the SUNANDA difference',
    'cta.whatsapp': 'Send WhatsApp',
    'cta.email': 'Send Email',
    
    // Footer
    'footer.tagline': 'Your wellbeing is our priority',
    'footer.rights': 'All rights reserved'
  }
};

// ===== State Management =====
let currentLang = localStorage.getItem('sunanda-lang') || 'es';
let currentTheme = localStorage.getItem('sunanda-theme') || 'dark';

// ===== DOM Elements =====
const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// ===== Initialize =====
function init() {
  // Apply saved theme
  applyTheme(currentTheme);
  
  // Apply saved language
  applyLanguage(currentLang);
  
  // Event listeners
  langToggle.addEventListener('click', toggleLanguage);
  themeToggle.addEventListener('click', toggleTheme);
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Intersection Observer for animations
  setupObserver();
}

// ===== Language Functions =====
function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('sunanda-lang', currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  // Update button text
  langText.textContent = lang === 'es' ? 'EN' : 'ES';
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[lang][key];
    
    if (translation) {
      element.textContent = translation;
    }
  });
}

// ===== Theme Functions =====
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('sunanda-theme', currentTheme);
  applyTheme(currentTheme);
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    themeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    themeIcon.textContent = '🌙';
  }
}

// ===== Scroll Animations =====
function setupObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements
  const animatedElements = document.querySelectorAll('.service-card, .contact-card, .about-content');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}

// ===== Initialize on DOM ready =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
