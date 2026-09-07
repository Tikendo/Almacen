/**
 * analytics-events.js - Rastreo automático de eventos personalizados en GA4 para TiKendo
 * ID de medición: G-5PMNCYQHY5
 */

(function () {
    'use strict';

    // Función segura para enviar eventos a Google Analytics 4 (gtag)
    function sendGA4Event(eventName, params = {}) {
        if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, {
                send_to: 'G-5PMNCYQHY5',
                ...params
            });
            // Log en consola solo en desarrollo local
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                console.log(`[GA4 Event] ${eventName}:`, params);
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {

        /* -------------------------------------------------------------
           1. CLIC EN WHATSAPP (Lead / Contacto de alta intención)
        ------------------------------------------------------------- */
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href*="wa.me"], a[href*="whatsapp.com"]');
            if (link) {
                sendGA4Event('click_whatsapp', {
                    event_category: 'Contacto',
                    event_label: link.href,
                    page_location: window.location.pathname
                });
            }
        });

        /* -------------------------------------------------------------
           2. CLIC EN TELÉFONO O CORREO ELECTRÓNICO
        ------------------------------------------------------------- */
        document.addEventListener('click', (e) => {
            const telLink = e.target.closest('a[href^="tel:"]');
            if (telLink) {
                sendGA4Event('click_telefono', {
                    event_category: 'Contacto',
                    event_label: telLink.getAttribute('href').replace('tel:', ''),
                    page_location: window.location.pathname
                });
            }

            const mailLink = e.target.closest('a[href^="mailto:"]');
            if (mailLink) {
                sendGA4Event('click_email', {
                    event_category: 'Contacto',
                    event_label: mailLink.getAttribute('href').replace('mailto:', ''),
                    page_location: window.location.pathname
                });
            }
        });

        /* -------------------------------------------------------------
           3. CLIC EN BOTONES DE LLAMADO A LA ACCIÓN (CTA Cotización)
        ------------------------------------------------------------- */
        document.addEventListener('click', (e) => {
            const ctaBtn = e.target.closest('.btn-naranja, .btn-base, a[href*="/contacto"]');
            if (ctaBtn && !ctaBtn.closest('#contact-info')) {
                const text = ctaBtn.textContent.trim().substring(0, 50);
                sendGA4Event('click_cta_cotizacion', {
                    event_category: 'Conversión CTA',
                    event_label: text,
                    page_location: window.location.pathname
                });
            }
        });

        /* -------------------------------------------------------------
           4. DESCARGAS DE ARCHIVOS O DOCUMENTOS (PDF, Catálogos, Fichas)
        ------------------------------------------------------------- */
        document.addEventListener('click', (e) => {
            const fileLink = e.target.closest('a[href$=".pdf"], a[href$=".xlsx"], a[href$=".zip"], a[href$=".doc"]');
            if (fileLink) {
                const fileName = fileLink.getAttribute('href').split('/').pop();
                sendGA4Event('file_download', {
                    event_category: 'Descargas',
                    file_name: fileName,
                    link_url: fileLink.href
                });
            }
        });

        /* -------------------------------------------------------------
           5. INTERACCIÓN CON EL FORMULARIO DE COTIZACIÓN (WIZARD)
        ------------------------------------------------------------- */
        const nextBtn = document.getElementById('nextButton');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const questionNum = document.getElementById('questionNum');
                const stepText = questionNum ? questionNum.textContent.trim() : 'Paso';
                sendGA4Event('cotizador_step', {
                    event_category: 'Cotizador',
                    step: stepText
                });
            });
        }

        // Envío exitoso de cotización (interceptamos fetch de procesar-cotizacion.php)
        const originalFetch = window.fetch;
        if (originalFetch) {
            window.fetch = async function (...args) {
                const [resource] = args;
                const response = await originalFetch.apply(this, args);

                if (typeof resource === 'string' && resource.includes('procesar-cotizacion.php')) {
                    try {
                        const clone = response.clone();
                        const data = await clone.json();
                        if (data.success) {
                            sendGA4Event('generate_lead', {
                                event_category: 'Conversión',
                                value: 1,
                                currency: 'MXN',
                                lead_type: 'Cotización Web'
                            });
                        }
                    } catch (err) {
                        // Silencioso
                    }
                }
                return response;
            };
        }

        /* -------------------------------------------------------------
           6. PROFUNDIDAD DE SCROLL (50% y 90%)
        ------------------------------------------------------------- */
        let scroll50Triggered = false;
        let scroll90Triggered = false;

        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

            if (scrollPercent >= 50 && !scroll50Triggered) {
                scroll50Triggered = true;
                sendGA4Event('scroll_depth', {
                    depth_percentage: 50,
                    page_location: window.location.pathname
                });
            }

            if (scrollPercent >= 90 && !scroll90Triggered) {
                scroll90Triggered = true;
                sendGA4Event('scroll_depth', {
                    depth_percentage: 90,
                    page_location: window.location.pathname
                });
            }
        }, { passive: true });

    });

    // Exponer helper global por si se quiere disparar eventos manualmente
    window.trackGA4CustomEvent = sendGA4Event;

})();
