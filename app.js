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
    'hero.ctaSecondary': 'Descubre Más',
    
    // Signature Treatment
    'signature.badge': 'Tratamiento Exclusivo',
    'signature.title': 'Timexpert Lift_IN',
    'signature.subtitle': 'Descubre una nueva era de firmeza',
    'signature.description': 'El revolucionario tratamiento facial que redefine los contornos del rostro. Una experiencia sensorial única que combina tecnología avanzada con ingredientes activos de máxima eficacia para lograr una piel visiblemente más firme, lisa y luminosa.',
    'signature.feature1.title': 'Firmeza Global',
    'signature.feature1.desc': 'Rostro, cuello, escote y busto',
    'signature.feature2.title': 'Resultados Visibles',
    'signature.feature2.desc': 'Desde la primera sesión',
    'signature.feature3.title': 'Tecnología Premium',
    'signature.feature3.desc': 'Germaine de Capuccini',
    'signature.cta': 'Agendar Tratamiento',
    
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
    
    // Product Spotlight
    'product.badge': 'Producto Destacado',
    'product.title': 'Crema Global Firmeza',
    'product.description': 'Tratamiento intensivo antiedad que actúa sobre las zonas más delicadas. Redensifica, reafirma y remodela el óvalo facial, cuello, escote y busto, restaurando la firmeza y elasticidad de la piel.',
    'product.benefit1.title': 'Acción Inmediata',
    'product.benefit1.desc': 'Efecto lifting visible',
    'product.benefit2.title': 'Fórmula Avanzada',
    'product.benefit2.desc': 'Ingredientes de lujo',
    'product.benefit3.title': 'Textura Sedosa',
    'product.benefit3.desc': 'Absorción perfecta',
    
    // Experience Gallery
    'gallery.title': 'Vive la Experiencia SUNANDA',
    'gallery.subtitle': 'Un viaje sensorial hacia tu mejor versión',
    'gallery.info.title': 'Más que un tratamiento, una transformación',
    'gallery.info.text': 'Cada visita a SUNANDA es una experiencia única diseñada para renovar no solo tu piel, sino también tu espíritu. Nuestro equipo de profesionales certificados te guiará en un viaje personalizado hacia el bienestar integral.',
    'gallery.stat1': 'Satisfacción',
    'gallery.stat2': 'Clientas Felices',
    'gallery.stat3': 'Calificación',
    
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
    'hero.ctaSecondary': 'Discover More',
    
    // Signature Treatment
    'signature.badge': 'Exclusive Treatment',
    'signature.title': 'Timexpert Lift_IN',
    'signature.subtitle': 'Discover a new era of firmness',
    'signature.description': 'The revolutionary facial treatment that redefines facial contours. A unique sensory experience that combines advanced technology with highly effective active ingredients to achieve visibly firmer, smoother and more luminous skin.',
    'signature.feature1.title': 'Global Firmness',
    'signature.feature1.desc': 'Face, neck, décolleté and bust',
    'signature.feature2.title': 'Visible Results',
    'signature.feature2.desc': 'From the first session',
    'signature.feature3.title': 'Premium Technology',
    'signature.feature3.desc': 'Germaine de Capuccini',
    'signature.cta': 'Schedule Treatment',
    
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
    
    // Product Spotlight
    'product.badge': 'Featured Product',
    'product.title': 'Global Firming Cream',
    'product.description': 'Intensive anti-aging treatment that acts on the most delicate areas. Redensifies, firms and remodels facial contours, neck, décolleté and bust, restoring skin firmness and elasticity.',
    'product.benefit1.title': 'Immediate Action',
    'product.benefit1.desc': 'Visible lifting effect',
    'product.benefit2.title': 'Advanced Formula',
    'product.benefit2.desc': 'Luxury ingredients',
    'product.benefit3.title': 'Silky Texture',
    'product.benefit3.desc': 'Perfect absorption',
    
    // Experience Gallery
    'gallery.title': 'Live the SUNANDA Experience',
    'gallery.subtitle': 'A sensory journey to your best self',
    'gallery.info.title': 'More than a treatment, a transformation',
    'gallery.info.text': 'Every visit to SUNANDA is a unique experience designed to renew not only your skin, but also your spirit. Our team of certified professionals will guide you on a personalized journey towards integral wellbeing.',
    'gallery.stat1': 'Satisfaction',
    'gallery.stat2': 'Happy Clients',
    'gallery.stat3': 'Rating',
    
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
  
  // Intersection Observer for AOS animations
  setupAOS();
  
  // Video controls
  setupVideoControls();
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

// ===== AOS Animations =====
function setupAOS() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);
  
  // Observe all elements with data-aos attribute
  const animatedElements = document.querySelectorAll('[data-aos]');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
  
  // Also observe existing elements
  const legacyElements = document.querySelectorAll('.service-card, .contact-card, .about-content');
  legacyElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    const legacyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    legacyObserver.observe(el);
  });
}

// ===== Video Controls =====
function setupVideoControls() {
  const videoPlayBtn = document.querySelector('.video-play-btn');
  const experienceVideo = document.querySelector('.experience-video');
  
  if (videoPlayBtn && experienceVideo) {
    videoPlayBtn.addEventListener('click', () => {
      if (experienceVideo.paused) {
        experienceVideo.play();
      } else {
        experienceVideo.pause();
      }
    });
    
    // Hide overlay when video is playing
    experienceVideo.addEventListener('play', () => {
      const overlay = document.querySelector('.video-play-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
      }
    });
    
    experienceVideo.addEventListener('pause', () => {
      const overlay = document.querySelector('.video-play-overlay');
      if (overlay) {
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'auto';
      }
    });
  }
}

// ===== Initialize on DOM ready =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
