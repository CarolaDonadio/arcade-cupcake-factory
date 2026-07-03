# 🧁 Arcade Cupcake Factory (Fábrica de Cupcakes Kawaii Retro)

¡Bienvenido a **Arcade Cupcake Factory**! Un videojuego arcade web con estética retro de tipo *pixel art* y estilo *kawaii*. Los jugadores asumen el rol de un pastelero a contrarreloj que debe decorar correctamente los muffins que se desplazan sobre una cinta transportadora mecánica. ¡Prepara los pedidos a la perfección para sumar puntos y evitar que se escape ninguna delicia!

Además, el proyecto incluye una sección de personalización interna que permite rediseñar la paleta de colores de los *sprites* del juego en tiempo real y exportar los assets personalizados.

---

## 🎮 Características del Juego

- **Estética Retro Arcade:** Interfaz visual nostálgica inspirada en las pantallas CRT de las máquinas arcade tradicionales, acompañada de fuentes pixeladas (`Press Start 2P`).
- **Mecánica Dinámica de Juego:** Los cupcakes avanzan de izquierda a derecha en la cinta transportadora variando su velocidad según la puntuación.
- **Controles por Teclado Exclusivos:** Diseñado para simular los controles físicos de una cabina arcade mediante el uso de los cursores (Flechas del teclado).
- **Sistema de Audio Sintetizado:** Utiliza la **Web Audio API** nativa del navegador para generar efectos de sonido y ondas retro (cuadradas/triangulares) en tiempo real, sin depender de archivos de audio pesados.
- **Creador de Avatar (Generador Pixel Art):** Un editor integrado asistido con Tailwind CSS que permite cambiar toda la paleta de colores del juego y sincronizarla de inmediato con la partida a través de persistencia de datos.

---

## 🛠️ Controles de Juego

Para preservar la esencia de los salones de arcade, el juego prescinde del uso del ratón en la mesa de ingredientes y delega el control total al teclado:

- **Flecha Izquierda ($\leftarrow$):** Desplaza la selección del bowl de ingredientes hacia la izquierda.
- **Flecha Derecha ($\rightarrow$):** Desplaza la selección del bowl de ingredientes hacia la derecha.
- **Flecha Arriba ($\uparrow$):** Añade el ingrediente actualmente seleccionado al cupcake en movimiento.

### 📋 Receta para el Éxito
Cada muffin debe seguir un orden estricto de producción dictado por el cartel dinámico de receta:
1. **Crema / Frosting** 🧁
2. **Granas de Colores** ✨
3. **Cereza** 🍒

*Nota: Añadir un ingrediente fuera de orden o dejar que un cupcake incompleto llegue al final de la cinta resultará en la pérdida de una vida (LIFE).*

---

## 🎨 Creador de Avatar y Editor de Assets

El proyecto incluye un generador avanzado de *sprites* que lee matrices de caracteres de $32 \times 32$ píxeles en memoria y las renderiza dinámicamente en elementos `<canvas>`.

- **Personalización Completa:** Permite alterar el color de los bordes (outline), el pirotín de papel, las sombras, la masa del muffin, la crema y los recipientes.
- **Persistencia con LocalStorage:** Al hacer clic en *"Aplicar al Juego"*, los nuevos diseños se guardan codificados en formato Base64 (`data:image/...`) dentro del almacenamiento local del navegador, aplicándose inmediatamente a los cupcakes de la partida en curso.
- **Exportación HD:** Permite descargar los *sprites* individuales en formato PNG con resoluciones adaptativas desde los $32\times32$ px originales hasta $512\times512$ px (HD) manteniendo el suavizado de pixelado perfecto (`image-rendering: pixelated`).

---

🚀 Tecnologías Utilizadas
- **HTML5:** Estructuración semántica de las pantallas y contenedores multimedia.

- **CSS3 Avanzado:** Uso de variables fluidas (clamp), animaciones nativas (@keyframes), gradientes lineales simulando escaneo de pantalla CRT y manipulación de layouts.

- **Vanilla JavaScript (ES6+):** Motor de juego controlado mediante bucles de animación optimizados con requestAnimationFrame.

- **Web Audio API:** Sintetizador de audio digital nativo para generar ondas de sonido puras y dinámicas para interacciones de acierto, error y movimiento.

- **Tailwind CSS:** Utilizado de manera ágil a través de CDN en la sección del creador de avatares para lograr un diseño responsivo y moderno en los paneles de control.

- **HTML5 Canvas API:** Manipulación e inyección de mapas de bits a nivel de píxel para la renderización y descarga de imágenes.

- **Boxicons & Google Fonts:** Iconografía vectorizada de soporte y la fuente retro 'Press Start 2P'.

---

## 💻 Instalación y Despliegue Local
Al estar desarrollado puramente con tecnologías del lado del cliente (frontend), no requiere de ningún tipo de compilación ni instalación de dependencias en un entorno de servidor backend.

1. Clona el repositorio en tu máquina local:
git clone [https://github.com/tu-usuario/arcade-cupcake-factory.git](https://github.com/tu-usuario/arcade-cupcake-factory.git)

2. Navega a la carpeta del proyecto.

3. Abre el archivo f_brica_de_cupcakes_kawaii_retro.html directamente en cualquier navegador web moderno.

4. (Recomendado) Para evitar problemas de bloqueo de políticas CORS con LocalStorage al saltar entre páginas locales, se aconseja abrir el proyecto utilizando una extensión de servidor local como Live Server en Visual Studio Code.

---

## 📂 Estructura del Proyecto

El repositorio está organizado de forma limpia y modular de la siguiente manera:

```text
arcade-cupcake-factory/
├── f_brica_de_cupcakes_kawaii_retro.html   # Pantalla principal e interfaz del juego arcade.
├── README.md                               # Documentación del proyecto.
├── css/
│   ├── f_brica_de_cupcakes_kawaii_retro.css # Estilos arcade, animaciones de cinta y efectos CRT.
│   └── generador_de_sprites_pixel_art.css   # Estilos personalizados para el editor de avatares.
├── images/
│   └── favicon.png                         # Icono de pestaña (Muffin de gatito pixel art).
├── js/
│   ├── f_brica_de_cupcakes_kawaii_retro.js  # Motor lógico del juego, colisiones, HUD y Web Audio API.
│   └── generador_de_sprites_pixel_art.js    # Lógica de renderizado de matrices y exportación a PNG.
└── pages/
    └── generador_de_sprites_pixel_art.html # Interfaz del editor de paletas de colores (Tailwind CSS).


    └── generador_de_sprites_pixel_art.html # Interfaz del editor de paletas de colores (Tailwind CSS).
