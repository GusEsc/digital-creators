// JavaScript para Digital Creators - Versión Corregida

// Función para mostrar mensaje de bienvenida
function showWelcomeMessage() {
    const messages = [
        "¡Bienvenido a Digital Creators! 🚀",
        "Somos Gustavo y Gastón, apasionados por la tecnología 💻",
        "¡Explora nuestros perfiles individuales! 👥",
        "Juntos creamos experiencias increíbles ✨"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Crear elemento de mensaje
    const messageDiv = document.createElement('div');
    messageDiv.textContent = randomMessage;
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #2563eb, #1e40af);
        color: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 1000;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(messageDiv);
    
    // Remover mensaje después de 3 segundos
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// Función para animar los contadores
function animateCounters() {
    const counters = [
        { id: 'projectCounter', target: 8, suffix: '+' },
        { id: 'experienceCounter', target: 2, suffix: '+' },
        { id: 'clientCounter', target: 12, suffix: '+' }
    ];
    
    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        if (element) {
            animateCounter(element, counter.target, counter.suffix);
        }
    });
}

// Función auxiliar para animar un contador específico
function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 40);
}

// Función para efecto paralaje
function addParallaxEffect() {
    const floatingCard = document.getElementById('floatingCard');
    if (!floatingCard) return;
    
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        const moveX = (x - 50) * 0.1;
        const moveY = (y - 50) * 0.1;
        
        floatingCard.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    });
    
    document.addEventListener('mouseleave', () => {
        floatingCard.style.transform = 'translate(0px, 0px) scale(1)';
    });
}

// Función para observador de intersección
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                if (entry.target.classList.contains('stats-section')) {
                    animateCounters();
                }
            }
        });
    }, { threshold: 0.1 });
    
    const elementsToAnimate = document.querySelectorAll('.team-card, .stats-section');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Función para interacciones con tarjetas del equipo
function setupTeamCardInteractions() {
    const teamCards = document.querySelectorAll('.team-card');
    const colors = ['#2563eb', '#7c3aed', '#059669', '#dc2626', '#ea580c'];
    
    teamCards.forEach((card) => {
        const cardImage = card.querySelector('.card-image');
        const originalBackground = window.getComputedStyle(cardImage).background;
        
        card.addEventListener('mouseenter', () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            cardImage.style.background = `linear-gradient(45deg, ${randomColor}, #f59e0b)`;
        });
        
        card.addEventListener('mouseleave', () => {
            cardImage.style.background = originalBackground;
        });
    });
}

// FUNCIONES PARA PÁGINAS INDIVIDUALES

// Función para mostrar/ocultar habilidades
function toggleSkills(buttonElement) {
    console.log('toggleSkills llamada');
    
    const skillsGrid = buttonElement.parentElement.querySelector('.skills-grid');
    
    if (!skillsGrid) {
        console.error('No se encontró .skills-grid');
        return;
    }
    
    const isHidden = skillsGrid.style.display === 'none' || skillsGrid.style.display === '';
    
    if (isHidden) {
        skillsGrid.style.display = 'grid';
        buttonElement.textContent = 'Ocultar Habilidades';
        
        // Animar entrada
        skillsGrid.style.opacity = '0';
        skillsGrid.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            skillsGrid.style.transition = 'all 0.5s ease';
            skillsGrid.style.opacity = '1';
            skillsGrid.style.transform = 'translateY(0)';
        }, 10);
    } else {
        skillsGrid.style.opacity = '0';
        skillsGrid.style.transform = 'translateY(-10px)';
        buttonElement.textContent = 'Mostrar Habilidades';
        
        setTimeout(() => {
            skillsGrid.style.display = 'none';
        }, 300);
    }
}

// Función para cambiar tema
function changeTheme(buttonElement) {
    console.log('changeTheme llamada');
    
    const themes = [
        { primary: '#2563eb', accent: '#f59e0b', name: 'Azul Océano' },
        { primary: '#7c3aed', accent: '#10b981', name: 'Violeta Cosmos' },
        { primary: '#059669', accent: '#f59e0b', name: 'Verde Natura' },
        { primary: '#dc2626', accent: '#fbbf24', name: 'Rojo Fuego' },
        { primary: '#0891b2', accent: '#f97316', name: 'Cyan Tropical' }
    ];
    
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    
    document.documentElement.style.setProperty('--primary-color', randomTheme.primary);
    document.documentElement.style.setProperty('--accent-color', randomTheme.accent);
    
    // Mostrar notificación
    showThemeNotification(randomTheme.name, randomTheme.primary);
}

// Función auxiliar para mostrar notificación de tema
function showThemeNotification(themeName, color) {
    const existingMessage = document.querySelector('.theme-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const message = document.createElement('div');
    message.className = 'theme-message';
    message.textContent = `🎨 Tema: ${themeName}`;
    message.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${color};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        z-index: 1000;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateX(100px);
        opacity: 0;
        transition: all 0.4s ease;
    `;
    
    document.body.appendChild(message);
    
    // Animar entrada
    setTimeout(() => {
        message.style.transform = 'translateX(0)';
        message.style.opacity = '1';
    }, 10);
    
    // Animar salida
    setTimeout(() => {
        message.style.transform = 'translateX(100px)';
        message.style.opacity = '0';
        setTimeout(() => message.remove(), 400);
    }, 2500);
}

// Función para mostrar favoritos (películas/música)
function showFavorites(type, buttonElement) {
    console.log('showFavorites llamada con tipo:', type);
    
    const section = buttonElement.parentElement;
    const list = section.querySelector('.media-list');
    
    if (!list) {
        console.error('No se encontró .media-list');
        return;
    }
    
    const isHidden = list.style.display === 'none' || list.style.display === '';
    
    if (isHidden) {
        list.style.display = 'block';
        buttonElement.textContent = `Ocultar ${type}`;
        
        // Animar cada elemento
        const items = list.querySelectorAll('li');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            item.style.transition = 'all 0.4s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, (index * 100) + 100);
        });
    } else {
        const items = list.querySelectorAll('li');
        buttonElement.textContent = `Mostrar ${type}`;
        
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-30px)';
            }, index * 50);
        });
        
        setTimeout(() => {
            list.style.display = 'none';
        }, items.length * 50 + 200);
    }
}

// Función para crear efectos de ondas en botones
function addRippleEffect() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('interactive-button') || 
            e.target.classList.contains('cta-button') || 
            e.target.classList.contains('profile-link')) {
            
            const ripple = document.createElement('span');
            const rect = e.target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255,255,255,0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            e.target.style.position = 'relative';
            e.target.style.overflow = 'hidden';
            e.target.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        }
    });
}

// Función para crear partículas de fondo
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(37, 99, 235, 0.1);
            border-radius: 50%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Event Listeners principales
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Digital Creators - JavaScript iniciado correctamente');
    
    // Verificar funciones globales
    window.toggleSkills = toggleSkills;
    window.changeTheme = changeTheme;
    window.showFavorites = showFavorites;
    
    console.log('✅ Funciones globales registradas:', {
        toggleSkills: typeof window.toggleSkills,
        changeTheme: typeof window.changeTheme,
        showFavorites: typeof window.showFavorites
    });
    
    // Configurar botón de bienvenida (solo en index.html)
    const welcomeBtn = document.getElementById('welcomeBtn');
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', showWelcomeMessage);
        console.log('✅ Botón de bienvenida configurado');
    }
    
    // Configurar efectos visuales
    addParallaxEffect();
    addRippleEffect();
    setupIntersectionObserver();
    setupTeamCardInteractions();
    createParticles();
    
    // Animación inicial
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateX(0)';
        }
    }, 100);
    
    console.log('🎉 Todas las funcionalidades inicializadas');
});

// Añadir estilos CSS para las animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
    
    @keyframes slideOut {
        from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
    
    @keyframes ripple {
        from { transform: scale(0); opacity: 0.4; }
        to { transform: scale(1); opacity: 0; }
    }
    
    .hero-content {
        opacity: 0;
        transform: translateX(-30px);
        transition: all 0.8s ease-out;
    }
    
    .skill-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }
    
    .media-list li {
        transition: all 0.3s ease;
        border-radius: 8px;
        padding: 1rem;
        margin: 0.5rem 0;
    }
    
    .media-list li:hover {
        background: var(--surface);
        transform: translateX(10px);
    }
    
    .interactive-button {
        position: relative;
        overflow: hidden;
    }
    
    .interactive-button:active {
        transform: translateY(-1px);
    }
    
    /* Reducir animaciones si el usuario lo prefiere */
    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
document.head.appendChild(style);
