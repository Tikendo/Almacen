document.addEventListener("DOMContentLoaded", function () {

    /* ───────────────────────────────────────────────
       Sección Hover - Industrias (Reutilizable)
    ─────────────────────────────────────────────── */
    function setupHoverEffect(sectionId, titleId, textId, defaultTitle, defaultText) {
        const items = document.querySelectorAll(`#${sectionId} .single-features-item`);
        const titleEl = document.getElementById(titleId);
        const textEl = document.getElementById(textId);

        if (!items.length || !titleEl || !textEl) return;

        items.forEach(item => {
            item.addEventListener('mouseover', function () {
                titleEl.textContent = this.querySelector('h3').textContent;
                textEl.textContent = this.dataset.text || '';
            });
            item.addEventListener('mouseleave', function () {
                titleEl.textContent = defaultTitle;
                textEl.textContent = defaultText;
            });
        });
    }

    // Aplicar hover a las dos secciones
    setupHoverEffect('section-1', 'dynamic-title-1', 'dynamic-text-1',
        "SOLUCIONES DE CADENA DE SUMINISTRO POR INDUSTRIA",
        "Ofrecemos las mejores soluciones para todas las industrias.");

    setupHoverEffect('section-2', 'dynamic-title-2', 'dynamic-text-2',
        "SOLUCIONES A LA MEDIDA DE TU NEGOCIO",
        "Ofrecemos las mejores soluciones para todas las industrias.");

    /* ───────────────────────────────────────────────
       FORMULARIO DE COTIZACIÓN DINÁMICO
    ─────────────────────────────────────────────── */

    // === OBJETOS DE PREGUNTAS (sin cambios) ===
    const allQuestions = {
        "Sistemas de gestión de almacén": [
            { id: 2, text: "¿Cuál es la cantidad promedio de órdenes de pedido que se procesan diariamente en tu almacén?", options: ["Muy baja frecuencia (1–50 órdenes/día)", "Baja frecuencia (51–150 órdenes/día)", "Frecuencia moderada (151–300 órdenes/día)", "Alta frecuencia (301–500 órdenes/día)", "Muy alta frecuencia (más de 500 órdenes/día)"], type: "radio" },
            { id: 3, text: "¿Cuántos usuarios necesitarán acceder al sistema de gestión de almacén?", options: ["1-5 usuarios", "6-10 usuarios", "11-20 usuarios", "21-50 usuarios", "Más de 50 usuarios"], type: "radio" },
            { id: 4, text: "¿Qué tipo de funciones desea automatizar con un sistema de gestión de almacén?", options: ["Recepción y Verificación de Inventarios", "Ubicación de Productos en el Almacén", "Gestión de Inventarios en Tiempo Real", "Preparación de Pedidos (Picking)", "Embalaje y Consolidación de Pedidos", "Despacho y Envío de Pedidos", "Gestión de Devoluciones", "Reabastecimiento de Inventario", "Optimización de la Ruta de Picking", "Gestión de Almacenes Múltiples", "Gestión de Lotes y Códigos de Barras", "Integración con Otros Sistemas"], type: "checkbox" },
            { id: 5, text: "¿Requiere que su sistema de gestión de almacén se conecte o integre con otros sistemas?", options: ["Si", "No"], type: "radio", hasTextbox: true }
        ],
        "Impresoras de Etiquetas": [
            { id: 6, text: "¿Qué tipo de impresora de etiquetas buscas para tu almacén y logística?", options: ["Impresoras de escritorio", "Impresoras portátiles", "Impresoras Industriales"], type: "radio" }
        ],
        "Escaneres": [
            { id: 7, text: "¿Qué tipo de escáner de código de barras requiere?", options: ["Escáneres de mano para uso general", "Escáneres manos libres para uso general", "Escáneres ultrarresistentes", "Escáneres para puntos de venta de plano único y con balanza", "Escáneres de código de barras de montaje fijo"], type: "radio" }
        ],
        "Computadoras y tablets": [
            { id: 8, text: "¿Que tipo de computadora o Tablet está buscando?", options: ["Computadoras de mano", "Computadoras para montaje vehicular", "Computadoras vestibles"], type: "radio" }
        ]
    };

    const printerQuestions = {
                "Impresoras de escritorio": [
                    { id: 9, text: "¿Cuál es el sector en el que se trabajará con las impresoras?", options: ["Atención sanitaria", "Fabricación", "Sector de retail", "Transporte y logística", "Almacén y distribución", "Otro"], type: "radio", hasTextbox: true },
                    { id: 10, text: "¿Qué aplicaciones de trabajo se utilizarán con la impresora?", options: ["Trazabilidad de prendas y mercancías", "Etiquetas de activos", "Check-in y administración", "Etiquetado de alimentos y bebida", "Seguridad alimentaria", "Identificación de huéspedes", "Etiquetado en atención sanitaria", "Gestión de inventario", "Trazabilidad de muestras de laboratorio", "Gestión de laboratorio", "Ingresos de pacientes", "Etiquetado de recetas médicas", "Etiquetado de precios", "Etiquetado de productos", "Brazaletes RFID", "Etiquetado de estanterías", "Etiquetas de envío", "Etiquetado de muestras"], type: "checkbox" },
                    { id: 11, text: "¿Qué tipo de ancho de impresión requiere que trabaje la impresora?", options: ["1 pulgada", "2 pulgadas", "4 pulgadas"], type: "radio" },
                    { id: 12, text: "¿Requiere que la impresora cuente con capacidades RFID?", options: ["Si", "No"], type: "radio" },
                    { id: 13, text: "¿Está buscando alguna de las siguientes marcas?", options: ["Zebra", "Honeywell", "Brother", "Epson", "TSC Auto ID", "Otro"], type: "radio", hasTextbox: true }
                ],
                "Impresoras portátiles": [
                    { id: 14, text: "¿Cuál es el sector en la trabajará con las impresoras portátiles?", options: ["Atención sanitaria", "Fabricación", "Sector de retail", "Transporte y logística", "Almacén y distribución", "Otro"], type: "radio", hasTextbox: true },
                    { id: 15, text: "¿Qué aplicaciones de trabajo se utilizarán con la impresora?", options: ["Identificación de equipaje para aerolíneas", "Aerolínea bajo control", "Trazabilidad de prendas y mercancías", "Etiquetas de activos", "Gestión de activos", "Administración de cuidados a pie de cama", "Gestión de banco de sangre", "Etiquetado de leche materna", "Compra online con recogida en tienda", "Registros", "Muelle cruzado", "Entrega directa en tiendas", "Citación electrónica", "Lectura de contadores de empresas de energía y suministro", "Servicio de campo", "Trazabilidad de la cadena de suministro de alimentación", "Etiquetado en atención sanitaria", "Gestión de inventario", "Trazabilidad de inventario", "Comercialización", "Terminal de punto de venta (TPV) móvil"], type: "checkbox" },
                    { id: 16, text: "¿Qué tipo de ancho de impresión requiere que trabaje la impresora?", options: ["1 pulgada", "2 pulgadas", "4 pulgadas"], type: "radio" },
                    { id: 17, text: "¿Requiere que la impresora cuente con capacidades RFID?", options: ["Si", "No"], type: "radio" },
                    { id: 18, text: "¿Está buscando alguna de las siguientes marcas?", options: ["Zebra", "Honeywell", "Brother", "Epson", "TSC Auto ID", "Otro"], type: "radio", hasTextbox: true }
                ],
                "Impresoras Industriales": [
                    { id: 19, text: "¿Cuál es el sector en la trabajará con las impresoras industriales?", options: ["Atención sanitaria", "Fabricación", "Sector de retail", "Transporte y logística", "Almacén y distribución"], type: "radio" },
                    { id: 20, text: "¿Qué aplicaciones de trabajo se utilizarán con la impresora industrial?", options: ["Etiquetas de activos", "Etiquetado normalizado", "Etiquetas de inventario", "Etiquetado de palés", "Operaciones de trastienda del sector de retail", "Etiquetado de inventario en el sector de retail", "Etiquetas RFID para cajas-palés", "Etiquetas de envío"], type: "radio" },
                    { id: 21, text: "¿Qué tipo de ancho de impresión requiere que trabaje la impresora?", options: ["4 pulgadas", "6 pulgadas", "8 pulgadas"], type: "radio" },
                    { id: 22, text: "¿Requiere que la impresora cuente con capacidades RFID?", options: ["Si", "No"], type: "radio" },
                    { id: 23, text: "¿Está buscando alguna de las siguientes marcas?", options: ["Zebra", "Honeywell", "Brother", "Epson", "TSC Auto ID", "Otro"], type: "radio", hasTextbox: true }
                ]
            };

    const scannerQuestions = {
                "Escáneres de mano para uso general": [
                    { id: 24, text: "¿Cuál es el sector en donde trabajará con los escáneres de mano?", options: ["Atención sanitaria", "Fabricación", "Sector público", "Sector de retail", "Transporte y logística", "Otro"], type: "radio", hasTextbox: true },
                    { id: 25, text: "¿Qué aplicaciones de trabajo se utilizarán con el escáner?", options: ["Verificación de edad", "Administración de medicamentos con códigos de barras", "Administración de cuidados a pie de cama", "Cupones y fidelización", "Acceso a informes médicos electrónicos", "Ocio", "Gestión de inventario", "Comercialización", "Escaneado de códigos de barras en móviles", "Terminal de punto de venta (TPV) móvil", "Identificación de pacientes", "Pago en el punto de venta", "Reposición y reabastecimiento"], type: "checkbox" },
                    { id: 26, text: "¿Qué tipo de decodificación requiere el lector de código de barras?", options: ["1D", "2D", "Digimarc"], type: "radio" },
                    { id: 27, text: "¿Está buscando alguna de las siguientes marcas?", options: ["Zebra", "Honeywell", "Datalogic", "Symbol", "Otro"], type: "radio", hasTextbox: true }
                ],
                "Escáneres manos libres para uso general": [
                    { id: 28, text: "¿Cuál es el sector en donde trabajará con los escáneres manos libres?", options: ["Atención sanitaria", "Fabricación", "Sector de retail", "Transporte y logística", "Otro"], type: "radio", hasTextbox: true },
                    { id: 29, text: "¿Qué aplicaciones de trabajo se utilizarán con el escáner?", options: ["Verificación de edad", "Vigilancia electrónica de artículos (EAS) en puntos de control", "Cupones y fidelización", "Trazabilidad de muestras de laboratorio", "Gestión de laboratorio", "Escaneado de códigos de barras en móviles", "Ingresos de pacientes", "Pago en el punto de venta", "Trazabilidad de muestras"], type: "checkbox" },
                    { id: 30, text: "¿Qué tipo de decodificación requiere el lector de código de barras?", options: ["1D", "2D", "Digimarc"], type: "radio" },
                    { id: 31, text: "¿Está buscando alguna de las siguientes marcas?", options: ["Zebra", "Honeywell", "Datalogic", "Symbol", "Otro"], type: "radio", hasTextbox: true }
                ],
                "Escáneres ultrarresistentes": [
                    { id: 32, text: "¿Cuál es el sector en el cual trabajará con los escáneres ultrarresistentes?", options: ["Fabricación", "Sector de retail", "Almacén y distribución"], type: "radio" },
                    { id: 33, text: "¿Qué aplicaciones de trabajo se utilizarán con el escáner?", options: ["Automoción", "Muelle cruzado", "Distribución", "Fabricación de equipos electrónicos", "Trazabilidad de inventario", "Gestión de mantenimiento", "Fabricación de equipos médicos", "Lectura 1D a corta distancia", "Selección", "Selección y empaquetado", "Pago en el punto de venta", "Autenticación de productos", "Comprobante de recogida y entrega", "Recepción", "Expedición", "Selección y empaquetado de artículos pequeños", "Supervisión y trazabilidad", "Gestión de almacén", "Productos semiacabados"], type: "checkbox" },
                    { id: 34, text: "¿Qué tipo de decodificación requiere el lector de código de barras?", options: ["1D", "2D", "Digimarc"], type: "radio" },
                    { id: 35, text: "¿Está buscando alguna de las siguientes marcas?", options: ["Zebra", "Honeywell", "Datalogic", "Symbol", "Otro"], type: "radio", hasTextbox: true }
                ],
                "Escáneres para puntos de venta de plano único y con balanza": [
                    { id: 36, text: "¿Qué aplicaciones de trabajo se utilizarán con el escáner?", options: ["Escaneado para cajas", "Pago en el punto de venta", "Cajas de autopago"], type: "radio" },
                    { id: 37, text: "¿Qué tipo de decodificación requiere el lector de código de barras?", options: ["1D", "2D", "Digimarc"], type: "radio" },
                    { id: 38, text: "¿Está buscando alguna de las siguientes marcas?", options: ["Zebra", "Honeywell", "Datalogic", "Symbol", "Otro"], type: "radio", hasTextbox: true }
                ],
                "Escáneres de código de barras de montaje fijo": [
                    { id: 39, text: "¿Cuál es el sector en donde se trabajará con escáneres de montaje fijo?", options: ["Atención sanitaria", "Fabricación", "Transporte y logística", "Sector de retail", "Otro"], type: "radio", hasTextbox: true },
                    { id: 40, text: "¿Qué aplicaciones de trabajo se utilizarán con el escáner?", options: ["Verificación de edad", "Facturación de aerolíneas", "Cajeros automáticos", "Compra online con recogida en tienda (BOPIS)", "Cupones y fidelización", "Escaneado de carnés de conducir", "Juegos y entretenimiento", "Kioscos", "Terminales de lotería", "Fabricación de equipos médicos", "Ingresos de pacientes", "Pago en el punto de venta", "Cajas de autopago"], type: "checkbox" },
                    { id: 41, text: "¿Qué tipo de decodificación requiere el lector de código de barras?", options: ["1D", "2D", "Digimarc"], type: "radio" },
                    { id: 42, text: "¿Está buscando alguna de las siguientes marcas?", options: ["Zebra", "Honeywell", "Datalogic", "Symbol", "Otro"], type: "radio", hasTextbox: true }
                ]
            };

    const computerQuestions = {
                "Computadoras de mano": [
                    { id: 43, text: "¿Cuál es el sector en donde se trabajará con las computadoras y tablets?", options: ["Operaciones sobre el terreno", "Atención sanitaria", "Fabricación", "Sector público", "Sector de retail", "Transporte y logística", "Almacén y distribución", "Otro"], type: "radio", hasTextbox: true },
                    { id: 44, text: "¿Qué tipo de aplicación le dará a las computadoras de mano?", options: ["Identificación de equipaje para aerolíneas", "Aerolínea bajo control", "Gestión de activos e instalaciones", "Gestión de activos", "Control de activos", "Venta con asistencia", "Operaciones de trastienda", "Gestión de trastienda y almacén", "Compra online con recogida en tienda (BOPIS)", "Check-in y administración", "Gestión de la cadena de frío", "Comunicación y colaboración", "Mensajería y entrega", "Muelle cruzado", "Entrega directa en tiendas", "Citación electrónica", "Acceso a historias electrónicas de pacientes", "Entradas para eventos y pases de temporada", "Despacho y enrutamiento sobre el terreno", "Ventas sobre el terreno", "Servicio de campo", "Servicios de restauración"], type: "checkbox" },
                    { id: 45, text: "¿Cuál es el tamaño de pantalla que buscas?", options: ["4 pulgadas", "6 pulgadas"], type: "radio" },
                    { id: 46, text: "Sistema operativo disponible", options: ["Android"], type: "radio" },
                    { id: 47, text: "¿Requiere capacidades de RFID?", options: ["Si", "No"], type: "radio" },
                    { id: 48, text: "¿Qué tipo de conectividad requiere?", options: ["WLAN", "WPAN", "WWAN"], type: "radio" },
                    { id: 49, text: "Tipo de entrada requerida en la computadora de mano", options: ["All-Touch", "Tablero interno", "Teclas", "Táctil"], type: "radio" },
                    { id: 50, text: "¿Qué marca de computadoras de mano está buscando?", options: ["Zebra", "Honeywell", "Dell", "Datalogic", "Janam", "Unitech", "Otro"], type: "radio", hasTextbox: true }
                ],
                "Computadoras para montaje vehicular": [
                    { id: 51, text: "¿Cuál es el sector en donde se trabajará con las computadoras?", options: ["Fabricación", "Almacén y distribución"], type: "radio" },
                    { id: 52, text: "¿Qué tipo de aplicación le dará?", options: ["Muelle cruzado", "Selección y empaquetado", "Recepción", "Productos semiacabados", "Gestión de patios"], type: "checkbox" },
                    { id: 53, text: "¿Cuál es el tamaño de pantalla que buscas?", options: ["8 pulgadas", "10 pulgadas"], type: "radio" },
                    { id: 54, text: "¿Qué tipo de sistema operativo está buscando?", options: ["Android", "Windows"], type: "radio" },
                    { id: 55, text: "¿Qué tipo de entrada requiere?", options: ["Tablero interno", "Táctil"], type: "radio" },
                    { id: 56, text: "¿Requiere kit de montaje para vehículo?", options: ["Si", "No"], type: "radio" },
                    { id: 57, text: "¿Qué marca de computadoras está buscando?", options: ["Zebra", "Honeywell", "Dell", "Datalogic", "Janam", "Unitech", "Otro"], type: "radio", hasTextbox: true }
                ],
                "Computadoras vestibles": [
                    { id: 58, text: "¿Cuál es el sector en donde se trabajará con las computadoras vestibles?", options: ["Operaciones sobre el terreno", "Fabricación", "Sector público", "Sector de retail", "Transporte y logística", "Almacén y distribución", "Otro"], type: "radio", hasTextbox: true },
                    { id: 59, text: "¿Qué tipo de aplicación le dará a las computadoras vestibles?", options: ["Control de accesos", "Montaje", "Venta con asistencia", "Servicio de campo", "Cámaras frigoríficas y camiones frigoríficos", "Limpieza", "Gestión de inventario", "Carga y descarga", "Pedido online Click and Collect", "Procesamiento de pedidos y devoluciones", "Selección y empaquetado de pedidos", "Embalaje y envío", "Selección y ubicación", "Selección", "Gestión de precios", "Almacenaje y reabastecimiento", "Recepción", "Logística inversa", "Clasificación", "Preparación", "Gestión de tareas", "Comunicación de voz", "Gestión de almacén", "Gestión de patios"], type: "checkbox" },
                    { id: 60, text: "¿Cuál es el tamaño de pantalla que buscas?", options: ["4-6 pulgadas", "Menos de 4 pulgadas"], type: "radio" },
                    { id: 61, text: "Sistema operativo disponible", options: ["Android"], type: "radio" },
                    { id: 62, text: "¿Requiere capacidades de RFID?", options: ["Si", "No"], type: "radio" },
                    { id: 63, text: "¿Qué tipo de conectividad requiere?", options: ["WLAN", "WPAN"], type: "radio" },
                    { id: 64, text: "¿Qué marca de computadoras está buscando?", options: ["Zebra", "Honeywell", "Dell", "Datalogic", "Janam", "Unitech", "Otro"], type: "radio", hasTextbox: true }
                ]
            };

    // Variables del wizard
    let currentIndex = 0;
    let selectedQuestions = [];

    // Elementos del DOM
    const questionBox = document.getElementById("questionBox");
    const contactInfo = document.getElementById("contact-info");
    const questionText = document.getElementById("questionText");
    const questionNum = document.getElementById("questionNum");
    const optionsContainer = document.getElementById("optionsContainer");
    const nextButton = document.getElementById("nextButton");
    const progressBar = document.getElementById("progressBar");

    function loadQuestion(index) {
        const question = selectedQuestions[index];
        if (!question) return;

        currentIndex = index;

        questionNum.textContent = `${index + 1} de ${selectedQuestions.length}`;
        questionText.textContent = question.text;

        optionsContainer.innerHTML = question.options.map((option, i) => `
            <div class="form-check">
                <input class="form-check-input" type="${question.type}" 
                       name="question-${question.id}" 
                       id="option-${index}-${i}" 
                       value="${option}" 
                       onchange="handleOptionChange('${option}', ${index})">
                <label class="form-check-label" for="option-${index}-${i}">${option}</label>
            </div>
        `).join("");

        if (question.hasTextbox) {
            optionsContainer.innerHTML += `
                <div id="textbox-container-${index}" style="display:none; margin-top:15px;">
                    <label for="textbox-${index}" class="form-label">Por favor especifique:</label>
                    <input type="text" class="form-control" id="textbox-${index}" placeholder="Escriba aquí...">
                </div>`;
        }

        nextButton.disabled = true;
        updateProgressBar();
    }

    function updateProgressBar() {
        if (progressBar && selectedQuestions.length > 0) {
            const progress = Math.round(((currentIndex + 1) / selectedQuestions.length) * 100);
            progressBar.style.width = `${progress}%`;
        }
    }

    window.handleOptionChange = function (option, index) {
        const question = selectedQuestions[currentIndex];
        const checked = document.querySelectorAll(`input[name="question-${question.id}"]:checked`);
        nextButton.disabled = checked.length === 0;

        const textboxContainer = document.getElementById(`textbox-container-${index}`);
        if (textboxContainer) {
            textboxContainer.style.display = (question.hasTextbox && (option === "Si" || option === "Otro")) ? "block" : "none";
        }
    };

    nextButton.addEventListener("click", () => {
        const question = selectedQuestions[currentIndex];

        let selected = Array.from(document.querySelectorAll(`input[name="question-${question.id}"]:checked`))
                            .map(i => i.value);

        const tb = document.getElementById(`textbox-${currentIndex}`);
        if (tb && tb.parentElement.style.display !== "none" && tb.value.trim()) {
            selected.push(tb.value.trim());
        }

        selectedQuestions[currentIndex].answer = selected;

        // Lógica condicional
        if (currentIndex === 0) {
            const cat = selected[0];
            if (allQuestions[cat]) selectedQuestions = [...selectedQuestions, ...allQuestions[cat]];
        }

        if (question.text.includes("impresora de etiquetas buscas") && printerQuestions[selected[0]]) {
            selectedQuestions = [...selectedQuestions, ...printerQuestions[selected[0]]];
        }
        if (question.text.includes("escáner de código de barras requiere") && scannerQuestions[selected[0]]) {
            selectedQuestions = [...selectedQuestions, ...scannerQuestions[selected[0]]];
        }
        if (question.text.includes("computadora o Tablet") && computerQuestions[selected[0]]) {
            selectedQuestions = [...selectedQuestions, ...computerQuestions[selected[0]]];
        }

        currentIndex++;

        if (currentIndex < selectedQuestions.length) {
            loadQuestion(currentIndex);
        } else {
            questionBox.style.display = "none";
            contactInfo.style.display = "block";
        }
    });

    // Inicializar
    selectedQuestions = [{
        id: 1,
        text: "¿Qué tipo de solución de automatización de almacén está buscando?",
        options: Object.keys(allQuestions),
        type: "radio"
    }];

    loadQuestion(0);

    /* ───────────────────────────────────────────────
       VALIDACIÓN Y ENVÍO
    ─────────────────────────────────────────────── */
    window.validateForm = function () {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();

        if (nombre.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
            return false;
        }
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert("Ingrese un correo electrónico válido.");
            return false;
        }
        if (!telefono.match(/^\d{10}$/)) {   // ← Solo 10 dígitos exactos
            alert("El número de teléfono debe contener exactamente 10 dígitos (ej: 5512345678).");
            return false;
        }
        return true;
    };

    window.submitForm = function () {
        if (!window.validateForm()) return;

        const answers = selectedQuestions.map(q => ({
            text: q.text,
            answer: q.answer || []
        }));

        const formData = {
            nombre: document.getElementById("nombre").value.trim(),
            email: document.getElementById("email").value.trim(),
            telefono: document.getElementById("telefono").value.trim(),
            empresa: document.getElementById("empresa").value.trim(),
            comentarios: document.getElementById("comentarios").value.trim(),
            answers: answers
        };

        const btn = document.querySelector("#contact-info button");
        const originalText = btn.textContent;

        btn.disabled = true;
        btn.textContent = "Enviando cotización...";

        fetch('procesar-cotizacion.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message || "¡Cotización enviada con éxito!");
                window.location.href = "agradecimiento.html";   // Redirección al éxito
            } else {
                alert("Error: " + (data.error || "No se pudo enviar la cotización."));
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error de conexión. Por favor intenta nuevamente.");
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = originalText;
        });
    };

}); // Fin de DOMContentLoaded