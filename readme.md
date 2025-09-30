# Digital Creators - Trabajo Práctico Grupal 1

## 📋 Descripción del Proyecto

**Digital Creators** es un sitio web desarrollado como parte del Trabajo Práctico Grupal 1 para la materia de Programación Web. El proyecto presenta a nuestro dúo de desarrolladores web con el objetivo de demostrar habilidades técnicas en desarrollo frontend y backend.

El sitio incluye una portada principal que introduce al equipo, páginas individuales para cada integrante con información personal y profesional, una sección de bitácora que documenta el proceso completo de desarrollo, y múltiples funcionalidades interactivas implementadas con JavaScript vanilla.

## 👥 Integrantes del Dúo

- **Gustavo** - Backend Developer | Corrientes, Argentina | 31 años
- **Gastón** - UI/UX Designer | Corrientes, Argentina | 29 años

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con CSS Grid, Flexbox y animaciones
- **JavaScript ES6+**: Interactividad y funciones dinámicas sin frameworks
- **Google Fonts**: Tipografías Inter (textos) y Playfair Display (títulos)
- **Git**: Control de versiones
- **GitHub**: Repositorio remoto
- **Vercel**: Plataforma de despliegue en la nube

## 📁 Estructura de Archivos

```
digital-creators-tp1/
├── index.html              # Portada principal del sitio
├── gustavo.html            # Página individual de Gustavo
├── gaston.html             # Página individual de Gastón
├── bitacora.html           # Documentación del proceso de desarrollo
├── css/
│   └── styles.css          # Hoja de estilos principal (responsive)
├── js/
│   └── script.js           # Archivo JavaScript con todas las funcionalidades
├── img/
│   ├── avatar2.jpg         # Avatar de Gustavo (lobo geométrico)
│   └── avatar3.jpg         # Avatar de Gastón (ilustración digital)
└── README.md               # Este archivo
```

## ⚡ Funcionalidades JavaScript

### Portada Principal (index.html)

1. **Botón de Bienvenida Interactivo**
   - **Función**: `showWelcomeMessage()`
   - **Ubicación**: Sección hero, botón "¡Conoce nuestro dúo!"
   - **Descripción**: Muestra mensajes aleatorios de bienvenida personalizados con animaciones de entrada y salida
   - **Mensajes**: Incluye 4 variaciones diferentes que se muestran aleatoriamente

2. **Contadores Animados de Estadísticas**
   - **Función**: `animateCounters()`
   - **Ubicación**: Sección de estadísticas (proyectos, experiencia, clientes)
   - **Descripción**: Anima los números desde 0 hasta sus valores finales (8+ proyectos, 2+ años experiencia, 12+ clientes felices)
   - **Activación**: Se ejecuta automáticamente cuando la sección entra en el viewport

3. **Efecto Paralaje en Tarjeta Flotante**
   - **Función**: `addParallaxEffect()`
   - **Ubicación**: Tarjeta "🚀 Innovación" en la sección hero
   - **Descripción**: La tarjeta sigue sutilmente el movimiento del mouse del usuario creando un efecto de profundidad

4. **Observador de Intersección**
   - **Función**: `setupIntersectionObserver()`
   - **Ubicación**: Todas las tarjetas del equipo y secciones
   - **Descripción**: Detecta cuando los elementos entran en el viewport y activa animaciones de aparición suaves

5. **Interacciones Dinámicas en Tarjetas del Equipo**
   - **Función**: `setupTeamCardInteractions()`
   - **Ubicación**: Tarjetas de Gustavo y Gastón
   - **Descripción**: Cambia los colores de fondo de las tarjetas con gradientes aleatorios al pasar el mouse

6. **Efectos Ripple en Botones**
   - **Función**: `addRippleEffect()`
   - **Ubicación**: Todos los botones interactivos del sitio
   - **Descripción**: Crea ondas visuales (efecto material design) al hacer clic en botones

7. **Sistema de Partículas de Fondo**
   - **Función**: `createParticles()`
   - **Ubicación**: Fondo de todas las páginas
   - **Descripción**: Genera 20 partículas flotantes decorativas con animaciones aleatorias

### Páginas Individuales (gustavo.html, gaston.html)

1. **Toggle de Habilidades (Mostrar/Ocultar)**
   - **Función**: `toggleSkills(buttonElement)`
   - **Ubicación**: Sección de habilidades de cada perfil
   - **Descripción**: Muestra u oculta la grilla de 6 habilidades técnicas con animación de despliegue suave
   - **Interacción**: El texto del botón cambia entre "Mostrar Habilidades" y "Ocultar Habilidades"

2. **Sistema de Cambio de Colores Dinámico**
   - **Función**: `changeTheme(buttonElement)`
   - **Ubicación**: Sección "Sobre mí" de cada perfil
   - **Descripción**: Cambia los colores primarios y de acento del sitio entre 5 paletas predefinidas:
     - Azul Océano (#2563eb, #f59e0b)
     - Violeta Cosmos (#7c3aed, #10b981)
     - Verde Natura (#059669, #f59e0b)
     - Rojo Fuego (#dc2626, #fbbf24)
     - Cyan Tropical (#0891b2, #f97316)
   - **Feedback**: Muestra una notificación temporal con el nombre del tema aplicado

3. **Visualizador de Favoritos (Películas y Música)**
   - **Función**: `showFavorites(type, buttonElement)`
   - **Ubicación**: Secciones de películas y música favoritas
   - **Descripción**: Despliega listas de películas (5 items) o música (5 items) con animación escalonada de entrada
   - **Animación**: Cada elemento aparece con un retraso de 100ms para crear efecto cascada

## 🎨 Diseño Responsive

El sitio web está completamente optimizado para adaptarse a diferentes dispositivos mediante breakpoints específicos:

### Breakpoints Implementados:

- **≤ 400px** (Móviles pequeños)
  - Layout de una sola columna
  - Navegación vertical compacta
  - Tipografía reducida (título hero: 2.5rem)
  - Grids de habilidades en 1 columna
  - Estadísticas en layout vertical

- **401px - 900px** (Tablets)
  - Hero en una columna con contenido centrado
  - Grids de tarjetas adaptativo
  - Título hero: 3rem
  - Skills en 2 columnas
  - Navegación horizontal completa

- **≥ 1200px** (Escritorio)
  - Hero en 2 columnas (contenido + animación)
  - Título hero: 4rem
  - Tarjetas del equipo en 2 columnas centradas
  - Perfiles con contenido en 2 columnas
  - Máximo aprovechamiento del espacio horizontal

## 🎯 Características de Diseño

### Sistema de Colores
- **Primario**: #2563eb (Azul moderno)
- **Secundario**: #1e40af (Azul oscuro)
- **Acento**: #f59e0b (Amarillo/naranja)
- **Fondo**: #ffffff (Blanco)
- **Superficie**: #f8fafc (Gris muy claro)
- **Texto primario**: #1f2937 (Gris oscuro)
- **Texto secundario**: #6b7280 (Gris medio)

### Tipografía
- **Títulos y headings**: Playfair Display (serif, elegante)
- **Texto de cuerpo**: Inter (sans-serif, alta legibilidad)
- Ambas fuentes cargadas desde Google Fonts

### Animaciones y Transiciones
- Transiciones suaves de 0.3s en elementos interactivos
- Efecto hover con elevación en tarjetas
- Animación flotante continua en tarjeta hero
- Respeto a `prefers-reduced-motion` para accesibilidad

### Accesibilidad
- Contrastes de color apropiados (WCAG AA)
- Navegación por teclado funcional
- Elementos interactivos con estados claros
- Tamaños de fuente legibles en todos los dispositivos

## 🧭 Sistema de Navegación

- **Header fijo**: Navegación siempre visible con enlaces a Inicio y Bitácora
- **Botones de retorno**: Todas las páginas secundarias incluyen botón "← Volver"
- **Enlaces directos**: Desde la portada a cada perfil individual
- **Sin dependencia del navegador**: No es necesario usar el botón "Atrás" del navegador

## 📝 Contenido de Perfiles

### Gustavo (Backend Developer)
- **Habilidades**: Node.js, Python, MongoDB, PostgreSQL, Docker, AWS
- **Películas**: Blade Runner 2049, The Matrix, Arrival, Ex Machina, Ready Player One
- **Música**: Daft Punk, Boards of Canada, Pink Floyd, Radiohead, Aphex Twin

### Gastón (UI/UX Designer)
- **Habilidades**: Figma, Adobe Creative Suite, User Research, Design Systems, Sketch, Principios UX
- **Películas**: Lost in Translation, The Grand Budapest Hotel, Inside Out, Her, Midnight in Paris
- **Música**: Lorde (Melodrama), Thom Yorke (The Eraser), Turnstile (GLOW ON), Oasis, The Cranberries

## 🌐 Enlace al Proyecto Desplegado

🔗 **[Ver proyecto en vivo en Vercel](https://digital-creators-tp1.vercel.app)**

## 💻 Instalación y Uso Local

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Opcionalmente: servidor local para desarrollo

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/usuario/digital-creators-tp1.git
```

2. **Navegar al directorio del proyecto**
```bash
cd digital-creators-tp1
```

3. **Abrir en navegador** (opción simple)
   - Hacer doble clic en `index.html`, o
   - Arrastrar el archivo al navegador

4. **O usar servidor local** (opción recomendada)

Con Python:
```bash
python -m http.server 8000
# Luego abrir: http://localhost:8000
```

Con Node.js (http-server):
```bash
npx http-server
# Luego abrir el puerto indicado
```

Con Visual Studio Code:
```bash
# Instalar extensión "Live Server"
# Clic derecho en index.html > "Open with Live Server"
```

## 🔧 Metodología de Trabajo

### División de Tareas
- **Gustavo**: 
  - Desarrollo de la lógica JavaScript
  - Implementación de funcionalidades interactivas
  - Optimización de rendimiento
  - Testing en diferentes navegadores

- **Gastón**: 
  - Diseño visual y sistema de colores
  - Implementación de CSS y responsive design
  - Selección de tipografías y espaciados
  - Experiencia de usuario (UX)

- **Colaboración conjunta**: 
  - Estructuración HTML semántico
  - Decisiones de arquitectura del proyecto
  - Creación de contenido y copys
  - Testing y corrección de bugs

### Control de Versiones
- Uso de Git para control de versiones
- Commits descriptivos siguiendo buenas prácticas
- Branches para desarrollo de features
- Repositorio remoto en GitHub

### Testing y Validación
- Pruebas en múltiples navegadores (Chrome, Firefox, Safari, Edge)
- Testing en dispositivos reales (móvil, tablet, desktop)
- Validación HTML5 y CSS3
- Optimización con Lighthouse (Performance, Accessibility, Best Practices, SEO)

## 📚 Bitácora del Proyecto

La sección de bitácora documenta todo el proceso de desarrollo, incluyendo:

### Decisiones de Diseño
- Paleta de colores moderna y accesible
- Tipografías de Google Fonts para óptima legibilidad
- Layout responsive con breakpoints estratégicos
- Sistema de navegación intuitivo

### Dificultades Encontradas
1. **Responsive design en dispositivos pequeños**: Solucionado ajustando paddings y grid layouts
2. **Compatibilidad de JavaScript**: Implementación de fallbacks para navegadores antiguos
3. **Optimización de imágenes**: Lazy loading y formatos optimizados
4. **Animaciones en móviles**: Uso de transform y opacity para mejor rendimiento

### Cambios Durante el Desarrollo
- Migración de CSS inline a archivos externos
- Expansión de funcionalidades JavaScript
- Enriquecimiento del contenido de perfiles
- Implementación de header fijo para mejor UX

## 🚀 Próximas Mejoras (TP2 y TP3)

Funcionalidades planificadas para las siguientes entregas:

- [ ] Implementación de APIs externas (clima, noticias, etc.)
- [ ] Sistema de comentarios dinámico con persistencia
- [ ] Modo oscuro/claro completamente funcional con toggle
- [ ] Galería de proyectos con filtros interactivos
- [ ] Formulario de contacto con validación
- [ ] Integración con base de datos
- [ ] Sistema de búsqueda y filtrado avanzado
- [ ] Optimización SEO con meta tags y Schema.org
- [ ] Mejora de performance (lazy loading, code splitting)
- [ ] Animaciones más complejas con IntersectionObserver

## 💡 Reflexiones del Equipo

Este proyecto nos permitió aplicar de manera práctica y concreta todos los conceptos fundamentales aprendidos sobre desarrollo web moderno. La colaboración entre ambos integrantes fue clave para lograr un producto final cohesivo y funcional.

**Aprendizajes clave:**
- Importancia del diseño responsive y mobile-first
- Buenas prácticas de organización de código
- Semántica HTML5 para accesibilidad
- CSS moderno con Grid y Flexbox
- JavaScript vanilla sin dependencias
- Trabajo en equipo y división de tareas
- Control de versiones con Git
- Despliegue en plataformas cloud

**Desafíos superados:**
- Compatibilidad entre navegadores
- Optimización de rendimiento
- Responsive design para múltiples dispositivos
- Organización y mantenibilidad del código

---

## 📄 Licencia y Uso Académico

Este proyecto fue desarrollado con fines académicos como parte del Trabajo Práctico 1 de Programación Web.

**Fecha de creación**: Septiembre 2025  
**Versión**: 1.0.0  
**Estado**: ✅ Completado y desplegado

---

**Digital Creators** © 2025 - Gustavo & Gastón | Todos los derechos reservados