document.addEventListener("DOMContentLoaded", function () {

            /* ── Sección industria 1 ── */
            const featureItemsSection1 = document.querySelectorAll('#section-1 .single-features-item');
            const dynamicTitle1 = document.getElementById('dynamic-title-1');
            const dynamicText1 = document.getElementById('dynamic-text-1');
            const defaultTitle1 = "SOLUCIONES DE CADENA DE SUMINISTRO POR INDUSTRIA";
            const defaultText1 = "Ofrecemos las mejores soluciones para las todas las industrias.";

            featureItemsSection1.forEach(item => {
                item.addEventListener('mouseover', function () {
                    dynamicTitle1.textContent = this.querySelector('h3').textContent;
                    dynamicText1.textContent = this.dataset.text;
                });
                item.addEventListener('mouseleave', function () {
                    dynamicTitle1.textContent = defaultTitle1;
                    dynamicText1.textContent = defaultText1;
                });
            });

            /* ── Sección industria 2 ── */
            const featureItemsSection2 = document.querySelectorAll('#section-2 .single-features-item');
            const dynamicTitle2 = document.getElementById('dynamic-title-2');
            const dynamicText2 = document.getElementById('dynamic-text-2');
            const defaultTitle2 = "SOLUCIONES A LA MEDIDA DE TU NEGOCIO";
            const defaultText2 = "Ofrecemos las mejores soluciones para las todas las industrias.";

            featureItemsSection2.forEach(item => {
                item.addEventListener('mouseover', function () {
                    dynamicTitle2.textContent = this.querySelector('h3').textContent;
                    dynamicText2.textContent = this.dataset.text;
                });
                item.addEventListener('mouseleave', function () {
                    dynamicTitle2.textContent = defaultTitle2;
                    dynamicText2.textContent = defaultText2;
                });
            });

            /* ── Formulario de cotización ── */
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

            let currentIndex = 0;
            let selectedQuestions = [];

            const questionText = document.getElementById("questionText");
            const optionsContainer = document.getElementById("optionsContainer");
            const nextButton = document.getElementById("nextButton");

            function loadQuestion(index) {
                const question = selectedQuestions[index];
                questionText.textContent = question.text;
                optionsContainer.innerHTML = question.options.map((option, i) => `
          <div class="form-check">
            <input class="form-check-input" type="${question.type}" name="question-${question.id}" id="option-${index}-${i}" value="${option}" onchange="handleOptionChange('${option}', ${index})">
            <label class="form-check-label" for="option-${index}-${i}">${option}</label>
          </div>
        `).join("");
                if (question.hasTextbox) {
                    optionsContainer.innerHTML += `
            <div id="textbox-container-${index}" style="display:none; margin-top:10px;">
              <label for="textbox-${index}" class="form-label">Por favor especifique:</label>
              <input type="text" class="form-control" id="textbox-${index}" placeholder="Escriba aquí...">
            </div>`;
                }
                nextButton.disabled = true;
            }

            window.handleOptionChange = function (option, index) {
                const question = selectedQuestions[currentIndex];
                const inputs = document.querySelectorAll(`input[name="question-${question.id}"]:checked`);
                const tc = document.getElementById(`textbox-container-${index}`);
                nextButton.disabled = !inputs.length;
                if (tc) tc.style.display = (question.hasTextbox && (option === "Si" || option === "Otro")) ? "block" : "none";
            };

            nextButton.addEventListener("click", () => {
                const question = selectedQuestions[currentIndex];
                let selected = Array.from(document.querySelectorAll(`input[name="question-${question.id}"]:checked`)).map(i => i.value);
                const tb = document.getElementById(`textbox-${currentIndex}`);
                if (tb && tb.style.display !== "none" && tb.value.trim()) selected.push(tb.value.trim());
                selectedQuestions[currentIndex].answer = selected;

                if (currentIndex === 0) {
                    const cat = selected[0];
                    if (allQuestions[cat]) selectedQuestions = [...selectedQuestions, ...allQuestions[cat]];
                }
                if (question.text.includes("impresora de etiquetas buscas")) {
                    if (printerQuestions[selected[0]]) selectedQuestions = [...selectedQuestions, ...printerQuestions[selected[0]]];
                }
                if (question.text.includes("escáner de código de barras requiere")) {
                    if (scannerQuestions[selected[0]]) selectedQuestions = [...selectedQuestions, ...scannerQuestions[selected[0]]];
                }
                if (question.text.includes("computadora o Tablet")) {
                    if (computerQuestions[selected[0]]) selectedQuestions = [...selectedQuestions, ...computerQuestions[selected[0]]];
                }

                currentIndex++;
                if (currentIndex < selectedQuestions.length) {
                    loadQuestion(currentIndex);
                } else {
                    document.getElementById("questionBox").style.display = "none";
                    document.getElementById("contact-info").style.display = "block";
                }
            });

            selectedQuestions = [{ id: 1, text: "¿Qué tipo de solución de automatización de almacén está buscando?", options: Object.keys(allQuestions), type: "radio" }];
            loadQuestion(0);

            /* ── Validación y envío ── */
            window.validateForm = function () {
                const nombre = document.getElementById("nombre").value.trim();
                const email = document.getElementById("email").value.trim();
                const telefono = document.getElementById("telefono").value.trim();
                if (!nombre.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/)) { alert("El nombre solo puede contener letras y espacios."); return false; }
                if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { alert("Ingrese un correo electrónico válido."); return false; }
                if (telefono && !telefono.match(/^\d{10}$/)) { alert("El número de teléfono debe contener exactamente 10 dígitos."); return false; }
                return true;
            };

            window.submitForm = function () {
                if (!window.validateForm()) return;
                const nombreUsuario = document.getElementById("nombre").value.trim();
                const form = document.createElement("form");
                form.action = "https://formsubmit.co/ialmazan@tikendo.mx";
                form.method = "POST";

                const addHidden = (name, value) => { const i = document.createElement("input"); i.type = "hidden"; i.name = name; i.value = value; form.appendChild(i); };
                addHidden("_subject", `Cotización de: ${nombreUsuario}`);
                addHidden("_next", "https://automatizaciondealmacen.com/agradecimiento.html");

                let content = `Cotización de: ${nombreUsuario}\n\n`;
                selectedQuestions.forEach(q => {
                    content += `- ${q.text}\n  → ${Array.isArray(q.answer) ? q.answer.join(", ") : q.answer}\n\n`;
                });
                content += `Información de contacto:\n- Nombre: ${document.getElementById("nombre").value.trim()}\n- Correo: ${document.getElementById("email").value.trim()}\n- Teléfono: ${document.getElementById("telefono").value.trim()}\n- Empresa: ${document.getElementById("empresa").value.trim()}\n- Comentarios: ${document.getElementById("comentarios").value.trim()}`;
                addHidden("message", content);

                document.body.appendChild(form);
                form.submit();
            };

        }); // fin DOMContentLoaded