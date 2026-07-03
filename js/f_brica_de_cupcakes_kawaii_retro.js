/* ==========================================================================
   GRÁFICOS ULTRA-KAWAII DE GATITO POR DEFECTO (SVG fallback en memoria)
   ========================================================================== */
const DEFAULT_SPRITES = {
    "cupcake-0": 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M6,17 L26,17 L22,31 L10,31 Z" fill="%23d7ccc8" stroke="%234e342e" stroke-width="1.5"/><path d="M5,12 L11,7 L15,12 Z" fill="%23ffcc80" stroke="%234e342e" stroke-width="1.5"/><path d="M17,12 L21,7 L27,12 Z" fill="%23ffcc80" stroke="%234e342e" stroke-width="1.5"/><path d="M4,17 Q4,10 16,10 Q28,10 28,17 Z" fill="%23ffcc80" stroke="%234e342e" stroke-width="1.5"/><rect x="8" y="13" width="3" height="3" fill="%234e342e"/><rect x="8" y="13" width="1" height="1" fill="%23fff"/><rect x="21" y="13" width="3" height="3" fill="%234e342e"/><rect x="21" y="13" width="1" height="1" fill="%23fff"/><rect x="6" y="15" width="2" height="1" fill="%23ffab91"/><rect x="24" y="15" width="2" height="1" fill="%23ffab91"/><path d="M14,15.5 Q15,16.5 16,15.5 Q17,16.5 18,15.5" stroke="%234e342e" stroke-width="1" fill="none"/></svg>',
    
    "cupcake-1": 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M6,17 L26,17 L22,31 L10,31 Z" fill="%23d7ccc8" stroke="%234e342e" stroke-width="1.5"/><path d="M5,12 L11,7 L15,12 Z" fill="%23ffcc80" stroke="%234e342e" stroke-width="1.5"/><path d="M17,12 L21,7 L27,12 Z" fill="%23ffcc80" stroke="%234e342e" stroke-width="1.5"/><path d="M4,17 Q4,10 16,10 Q28,10 28,17 Z" fill="%23ffcc80" stroke="%234e342e" stroke-width="1.5"/><rect x="8" y="13" width="3" height="3" fill="%234e342e"/><rect x="21" y="13" width="3" height="3" fill="%234e342e"/><path d="M9,13 L10,13" fill="%23fff"/><path d="M22,13 L23,13" fill="%23fff"/><path d="M9,13" fill="%23fff"/><path d="M10,11 Q16,3 22,11 Q27,13 25,18 L7,18 Q5,13 10,11 Z" fill="%23fff3e0" stroke="%234e342e" stroke-width="1.5"/><path d="M12,15 Q16,10 20,15" stroke="%23ffccbc" stroke-width="1.2" fill="none"/></svg>',
    
    "cupcake-2": 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M6,17 L26,17 L22,31 L10,31 Z" fill="%23d7ccc8" stroke="%234e342e" stroke-width="1.5"/><path d="M5,12 L11,7 L15,12 Z" fill="%23ffcc80" stroke="%234e342e" stroke-width="1.5"/><path d="M17,12 L21,7 L27,12 Z" fill="%23ffcc80" stroke="%234e342e" stroke-width="1.5"/><path d="M4,17 Q4,10 16,10 Q28,10 28,17 Z" fill="%23ffcc80" stroke="%234e342e" stroke-width="1.5"/><rect x="8" y="13" width="3" height="3" fill="%234e342e"/><rect x="21" y="13" width="3" height="3" fill="%234e342e"/><path d="M10,11 Q16,3 22,11 Q27,13 25,18 L7,18 Q5,13 10,11 Z" fill="%23fff3e0" stroke="%234e342e" stroke-width="1.5"/><path d="M12,15 Q16,10 20,15" stroke="%23ffccbc" stroke-width="1.2" fill="none"/><path d="M12,11 L14,11 L13,13 Z" fill="%23795548"/><polygon points="19,10 20,11 21,10 20,12" fill="%23fb8c00"/><rect x="15" y="14" width="2" height="1" fill="%238d6e63"/></svg>',
    
    "cupcake-3": 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="6" r="3.5" fill="%23e53935" stroke="%234e342e" stroke-width="1.5"/><circle cx="15" cy="5" r="1" fill="%23ffffff"/><path d="M17,3.5 Q20,-1 23,2" stroke="%237cb342" stroke-width="1.2" fill="none"/><path d="M6,17 L26,17 L22,31 L10,31 Z" fill="%23d7ccc8" stroke="%234e342e" stroke-width="1.5"/><path d="M5,12 L11,7 L15,12 Z" fill="%23ffcc80" stroke="%234e342e" stroke-width="1.5"/><path d="M17,12 L21,7 L27,12 Z" fill="%23ffcc80" stroke="%234e342e" stroke-width="1.5"/><path d="M4,17 Q4,10 16,10 Q28,10 28,17 Z" fill="%23ffcc80" stroke="%234e342e" stroke-width="1.5"/><rect x="8" y="13" width="3" height="3" fill="%234e342e"/><rect x="21" y="13" width="3" height="3" fill="%234e342e"/><path d="M10,11 Q16,3 22,11 Q27,13 25,18 L7,18 Q5,13 10,11 Z" fill="%23fff3e0" stroke="%234e342e" stroke-width="1.5"/><path d="M12,15 Q16,10 20,15" stroke="%23ffccbc" stroke-width="1.2" fill="none"/><path d="M12,11 L14,11 L13,13 Z" fill="%23795548"/><polygon points="19,10 20,11 21,10 20,12" fill="%23fb8c00"/><rect x="15" y="14" width="2" height="1" fill="%238d6e63"/></svg>',
    
    "bowl-crema": 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10,4 Q16,-2 22,4 Q28,8 24,14 L12,14 Z" fill="%23fff3e0"/><path d="M12,8 Q16,5 20,8" stroke="%23ffccbc" stroke-width="1" fill="none"/><path d="M4,14 L28,14 L24,28 L8,28 Z" fill="%23a5d6a7" stroke="%234e342e" stroke-width="2" stroke-linejoin="round"/><path d="M11,20 L13,20 L12,22 Z" fill="%2366bb6a"/><path d="M19,20 L21,20 L20,22 Z" fill="%2366bb6a"/></svg>',
    
    "bowl-granas": 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M6,12 Q16,6 26,12 L28,14 L4,14 Z" fill="%23eee"/><rect x="8" y="11" width="2" height="1" fill="%23795548"/><rect x="16" y="9" width="1" height="2" fill="%23fb8c00"/><rect x="22" y="11" width="2" height="1" fill="%238d6e63"/><path d="M4,14 L28,14 L24,28 L8,28 Z" fill="%23a5d6a7" stroke="%234e342e" stroke-width="2" stroke-linejoin="round"/><polygon points="15,20 16,19 17,20 16,21" fill="%2366bb6a"/></svg>',
    
    "bowl-cerezas": 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="12" cy="10" r="4" fill="%23e53935" stroke="%234e342e" stroke-width="1.5"/><circle cx="20" cy="11" r="4" fill="%23e53935" stroke="%234e342e" stroke-width="1.5"/><path d="M13,7 Q16,3 19,8" stroke="%237cb342" stroke-width="1" fill="none"/><path d="M4,14 L28,14 L24,28 L8,28 Z" fill="%23a5d6a7" stroke="%234e342e" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="20" r="1" fill="%234e342e"/><circle cx="20" cy="20" r="1" fill="%234e342e"/><path d="M14,22 Q16,23 18,22" stroke="%234e342e" stroke-width="1" fill="none"/></svg>'
};

/* ==========================================================================
   SINTETIZADOR DE AUDIO RETRO (Web Audio API)
   ========================================================================== */
const AudioRetro = {
    ctx: null,
    isMuted: false,
    init() {
        try {
            if (!this.ctx) {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                if (AudioContextClass) {
                    this.ctx = new AudioContextClass();
                }
            }
        } catch (e) {
            console.warn("AudioContext bloqueado o no soportado en este visor.");
        }
    },
    playNota(frecuencia, tipo, duracion, volumen) {
        if (!this.isMuted) try {
            this.init();
            if (!this.ctx) return;
            
            let osc = this.ctx.createOscillator();
            let gainNode = this.ctx.createGain();
            
            osc.type = tipo;
            osc.frequency.setValueAtTime(frecuencia, this.ctx.currentTime);
            
            gainNode.gain.setValueAtTime(volumen, this.ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + duracion);
            
            osc.connect(gainNode);
            gainNode.connect(this.ctx.destination);
            
            osc.start();
            osc.stop(this.ctx.currentTime + duracion);
        } catch (e) {
            // No interrumpir la jugabilidad si falla el audio
        }
    },
    clickIngrediente() {
        this.playNota(600, 'square', 0.08, 0.1);
    },
    aciertoCompleto() {
        setTimeout(() => this.playNota(523.25, 'square', 0.1, 0.15), 0);
        setTimeout(() => this.playNota(659.25, 'square', 0.1, 0.15), 80);
        setTimeout(() => this.playNota(783.99, 'square', 0.15, 0.15), 160);
        setTimeout(() => this.playNota(1046.50, 'square', 0.25, 0.2), 240);
    },
    errorFallo() {
        setTimeout(() => this.playNota(220, 'sawtooth', 0.15, 0.2), 0);
        setTimeout(() => this.playNota(147, 'sawtooth', 0.3, 0.2), 120);
    }
};

/* ==========================================================================
   LÓGICA DEL MOTOR DEL JUEGO CON DETECCION DE LOCAL STORAGE
   ========================================================================= */
let puntos = 0;
let vidas = 3;
let highScore = 0;
let estadoCupcake = 0; // 0=Base, 1=Crema, 2=Granas, 3=Cereza (Listo)

let posicionX = -100;
let velocidadBase = 2.0; 
let velocidadActual = 2.0;
let juegoActivo = false;
let selectedBowlIndex = 0; // 0: crema, 1: granas, 2: cerezas
let idAnimacion;

// Elementos de la interfaz de usuario
const cupcakeEl = document.getElementById('cupcake');
const puntosEl = document.getElementById('txt-puntos');
const highScoreEl = document.getElementById('txt-hiscore');
const vidasEl = document.getElementById('txt-vidas');
const instruccionRecetaEl = document.getElementById('instruccion-receta');
const pantallaArcade = document.getElementById('pantalla-arcade');

// Elementos de Menús flotantes
const menuInicio = document.getElementById('menu-inicio');
const menuGameOver = document.getElementById('menu-gameover');
const puntosFinalesEl = document.getElementById('puntos-finales');
const newHighScoreMsg = document.getElementById('new-highscore-msg');

const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');

// Controles de audio
const btnMute = document.getElementById('btn-mute');
const bgMusic = document.getElementById('bg-music');
const rainSound = document.getElementById('rain-sound');

// Bowls Interactivos
const bCrema = document.getElementById('bowl-crema');
const bGranas = document.getElementById('bowl-granas');
const bCerezas = document.getElementById('bowl-cerezas');

const bowls = [bCrema, bGranas, bCerezas];

function loadAsset(key) {
    const stored = localStorage.getItem(key);
    if (stored) {
        return stored;
    }
    return DEFAULT_SPRITES[key];
}

// Renderiza el cupcake asignándole tus imágenes dinámicas
function actualizarSpriteCupcake() {
    const assetKey = `cupcake-${estadoCupcake}`;
    cupcakeEl.style.backgroundImage = `url('${loadAsset(assetKey)}')`;
}

// Carga los fondos de los bowls de ingredientes
function inicializarBowls() {
    bCrema.style.backgroundImage = `url('${loadAsset("bowl-crema")}')`;
    bGranas.style.backgroundImage = `url('${loadAsset("bowl-granas")}')`;
    bCerezas.style.backgroundImage = `url('${loadAsset("bowl-cerezas")}')`;
}

function actualizarTextoInstruccion() {
    if (estadoCupcake === 0) {
        instruccionRecetaEl.textContent = "1° CREMA";
        instruccionRecetaEl.style.color = "#ffffff";
    } else if (estadoCupcake === 1) {
        instruccionRecetaEl.textContent = "2° GRANAS";
        instruccionRecetaEl.style.color = "#fff9c4"; /* Yellow 100 */
    } else if (estadoCupcake === 2) {
        instruccionRecetaEl.textContent = "3° CEREZA";
        instruccionRecetaEl.style.color = "#f472b6"; /* Hot Pink */
    } else if (estadoCupcake === 3) {
        instruccionRecetaEl.textContent = "¡LISTO! 👍";
        instruccionRecetaEl.innerHTML = "¡LISTO! <i class='bx bxs-check-square'></i>";
        instruccionRecetaEl.style.color = "#dce775"; /* Lime 300 */
    }
}

// Calcula posiciones relativas para que las partículas exploten perfectamente sin importar la escala
function lanzarParticasEnCupcake(color, offsetYFactor) {
    const cupcakeRect = cupcakeEl.getBoundingClientRect();
    const arcadeRect = pantallaArcade.getBoundingClientRect();

    const spawnX = cupcakeRect.left - arcadeRect.left + (cupcakeRect.width / 2);
    const spawnY = cupcakeRect.top - arcadeRect.top + (cupcakeRect.height * offsetYFactor);

    lanzarParticulas(spawnX, spawnY, color);
}

function lanzarParticulas(x, y, color) {
    for (let i = 0; i < 8; i++) {
        const p = document.createElement('div');
        p.className = 'particula';
        p.style.backgroundColor = color;
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        pantallaArcade.appendChild(p);

        let velX = (Math.random() - 0.5) * 6;
        let velY = (Math.random() - 0.7) * 6;

        function moverParticula() {
            let cx = parseFloat(p.style.left);
            let cy = parseFloat(p.style.top);
            p.style.left = (cx + velX) + 'px';
            p.style.top = (cy + velY) + 'px';
            velY += 0.25; 
            
            if (cy > arcadeRectHeight() || cx < 0 || cx > arcadeRectWidth()) {
                p.remove();
            } else {
                requestAnimationFrame(moverParticula);
            }
        }
        requestAnimationFrame(moverParticula);
    }
}

function arcadeRectWidth() {
    return pantallaArcade.getBoundingClientRect().width;
}

function arcadeRectHeight() {
    return pantallaArcade.getBoundingClientRect().height;
}

function resetearCupcake() {
    posicionX = -100;
    estadoCupcake = 0;
    actualizarSpriteCupcake();
    actualizarTextoInstruccion();
    velocidadActual = velocidadBase + (puntos / 150);
    if (velocidadActual > 7.0) velocidadActual = 7.0; 
}

function animarFalloCupcake() {
    juegoActivo = false; // Pausa el bucle principal
    let angulo = 0;
    let posY = parseFloat(cupcakeEl.style.top);
    let opacidad = 1;
    const duracionAnimacion = 600; // en ms
    const inicioAnimacion = performance.now();

    function frameFallo(timestamp) {
        const progreso = (timestamp - inicioAnimacion) / duracionAnimacion;

        if (progreso < 1) {
            angulo += 8;
            posY += 2 + (progreso * 5); // Acelera la caída
            opacidad = 1 - progreso;

            cupcakeEl.style.transform = `translateY(${posY - parseFloat(cupcakeEl.style.top)}px) rotate(${angulo}deg)`;
            cupcakeEl.style.opacity = opacidad;
            requestAnimationFrame(frameFallo);
        } else {
            cupcakeEl.style.opacity = 1;
            cupcakeEl.style.transform = '';
            resetearCupcake();
            juegoActivo = true; // Reanuda el juego
            buclePrincipal();
        }
    }
    requestAnimationFrame(frameFallo);
}

function buclePrincipal() {
    if (!juegoActivo) return;

    posicionX += velocidadActual;
    cupcakeEl.style.left = (posicionX / 640) * 100 + '%';

    if (posicionX > 640) {
        if (estadoCupcake === 3) {
            puntos += 50;
            puntosEl.textContent = String(puntos).padStart(4, '0');
            AudioRetro.aciertoCompleto();
            lanzarParticasEnCupcake('#00ffcc', 0.5);
        } else {
            vidas--;
            AudioRetro.errorFallo();
            if (vidas <= 0) {
                finalizarJuego();
                return;
            }
            actualizarVidasHUD();
            animarFalloCupcake();
            return; // Detiene este ciclo para que la animación controle el reinicio
        }
        resetearCupcake();
    }

    idAnimacion = requestAnimationFrame(buclePrincipal);
}

function actualizarVidasHUD() {
    vidasEl.textContent = "❤".repeat(Math.max(0, vidas));
    vidasEl.innerHTML = "<i class='bx bxs-heart'></i>".repeat(Math.max(0, vidas));
}

function anadirIngrediente(tipo) {
    if (!juegoActivo) return;
    AudioRetro.clickIngrediente();

    switch(tipo) {
        case 'crema':
            if (estadoCupcake === 0) {
                estadoCupcake = 1;
                actualizarSpriteCupcake();
                actualizarTextoInstruccion();
                lanzarParticasEnCupcake('#fff3e0', 0.4);
            }
            break;
        case 'granas':
            if (estadoCupcake === 1) {
                estadoCupcake = 2;
                actualizarSpriteCupcake();
                actualizarTextoInstruccion();
                lanzarParticasEnCupcake('#795548', 0.3);
            }
            break;
        case 'cerezas':
            if (estadoCupcake === 2) {
                estadoCupcake = 3;
                actualizarSpriteCupcake();
                actualizarTextoInstruccion();
                lanzarParticasEnCupcake('#e53935', 0.1);
            }
            break;
    }
}

// --- MANEJO DE EVENTOS CLICK ---
// Desactivados para forzar el uso del teclado como solicitado.
// bCrema.addEventListener('click', () => anadirIngrediente('crema'));
// bGranas.addEventListener('click', () => anadirIngrediente('granas'));
// bCerezas.addEventListener('click', () => anadirIngrediente('cerezas'));

// --- MANEJO DE EVENTOS DE TECLADO ---
window.addEventListener('keydown', (e) => {
    if (juegoActivo) {
        e.preventDefault(); // Evita que las flechas hagan scroll en la página
        manejarInputTeclado(e.key);
    }
});

function iniciarJuego() {
    AudioRetro.init();
    menuInicio.style.display = 'none';

    if (!AudioRetro.isMuted) {
        bgMusic.volume = 0.3;
        rainSound.volume = 0.1;
        // Usamos promesas para evitar errores si el usuario no ha interactuado
        bgMusic.play().catch(e => console.log("Música bloqueada por el navegador."));
        rainSound.play().catch(e => console.log("Sonido de lluvia bloqueado."));
    }

    juegoActivo = true;
    resetearCupcake();
    buclePrincipal();
}

function finalizarJuego() {
    juegoActivo = false;
    cancelAnimationFrame(idAnimacion);
    puntosFinalesEl.textContent = puntos;
    newHighScoreMsg.style.display = 'none';

    if (puntos > highScore) {
        highScore = puntos;
        localStorage.setItem('cupcake_highscore', highScore);
        newHighScoreMsg.style.display = 'block';
    }
    menuGameOver.style.display = 'flex';
}

function reiniciarJuegoCompleto() {
    puntos = 0;
    vidas = 3;
    puntosEl.textContent = "0000";
    actualizarVidasHUD();
    highScoreEl.textContent = String(highScore).padStart(4, '0');
    menuGameOver.style.display = 'none';
    juegoActivo = true;
    resetearCupcake();
    buclePrincipal();
}

btnStart.addEventListener('click', iniciarJuego);
btnRestart.addEventListener('click', reiniciarJuegoCompleto);
btnMute.addEventListener('click', () => {
    AudioRetro.isMuted = !AudioRetro.isMuted;
    if (AudioRetro.isMuted) {
        btnMute.textContent = '🔇';
        btnMute.innerHTML = "<i class='bx bx-volume-mute'></i>";
        bgMusic.pause();
        rainSound.pause();
    } else {
        btnMute.textContent = '🔊';
        btnMute.innerHTML = "<i class='bx bx-volume-full'></i>";
        if (juegoActivo) {
            bgMusic.play().catch(e => {});
            rainSound.play().catch(e => {});
        }
    }
});



function actualizarSeleccionBowl() {
    bowls.forEach((bowl, index) => {
        if (index === selectedBowlIndex) {
            bowl.classList.add('selected');
        } else {
            bowl.classList.remove('selected');
        }
    });
}

function manejarInputTeclado(key) {
    switch(key) {
        case 'ArrowLeft':
            selectedBowlIndex = (selectedBowlIndex - 1 + bowls.length) % bowls.length;
            actualizarSeleccionBowl();
            AudioRetro.playNota(250, 'triangle', 0.05, 0.1);
            break;
        case 'ArrowRight':
            selectedBowlIndex = (selectedBowlIndex + 1) % bowls.length;
            actualizarSeleccionBowl();
            AudioRetro.playNota(350, 'triangle', 0.05, 0.1);
            break;
        case 'ArrowUp':
            const bowlTypes = ['crema', 'granas', 'cerezas'];
            anadirIngrediente(bowlTypes[selectedBowlIndex]);
            break;
        case ' ': // La barra espaciadora ya no hace nada
        case 'Enter': // Enter tampoco
            // No hacer nada
            break;
    }
}

// Inicialización y renderizado dinámico al cargar la página
window.addEventListener('load', () => {
    inicializarBowls();
    actualizarSpriteCupcake();
    // Cargar el High Score guardado
    highScore = parseInt(localStorage.getItem('cupcake_highscore')) || 0;
    highScoreEl.textContent = String(highScore).padStart(4, '0');
    // Selecciona el primer bowl por defecto visualmente
    selectedBowlIndex = 0;
    actualizarSeleccionBowl();
});