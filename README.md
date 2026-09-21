# TiKendo — Automatización de Almacenes en México

Sitio web corporativo y plataforma de generación de leads B2B para soluciones de automatización logística, tecnología AIDC, sistemas WMS y hardware industrial en México.

- Dominio de Producción: https://automatizaciondealmacen.com/
- Empresa: TiKendo S.A. de C.V.
- Ubicación: Blvd. Solidaridad las Torres, Álvaro Obregón, 52100 San Mateo Atenco, Estado de México.
- Contacto: +52 55 1328 7995 / +52 722 326 0677 | automatizaciondealmacen@tikendo.mx

---

## Arquitectura Técnica y Estructura de Silos (SEO Silo Architecture)

Para maximizar el posicionamiento en Google y evitar la canibalización de palabras clave, el sitio implementa una Arquitectura de Silos Temáticos Estrictos (Thematic Topic Clusters).

### Que es la Arquitectura de Silos y por que se usa
La arquitectura de silos organiza los contenidos del sitio web en grupos semánticos aislados y altamente especializados. Cada sección tiene un tema central bien delimitado, lo que ayuda a los motores de búsqueda (como Googlebot) a entender exactamente cuál es la autoridad del dominio en cada nicho y a transferir PageRank de forma controlada hacia las páginas comerciales clave.

```
                             [ HOME: / ]
              (Automatización de Almacenes en México)
                                 │
     ┌───────────────────────────┼───────────────────────────┐
     ▼                           ▼                           ▼
[ SILO: PRODUCTOS ]     [ SILO: SERVICIOS ]          [ SILO: BLOG ]
 (/productos/*)           (/servicios)                 (/blog/*)
 - WMS                   - Consultoría               - Guías de Selección
 - RFID                  - Implementación            - Casos de Uso
 - Computadoras          - Soporte Postventa         - Picking y Errores
 - Escáneres             - Pólizas                   - Mantenimiento Zebra
 - Impresoras
 - Suministros
```

---

## Regla Fundamental: Archivo index.html Obligatorio en Cada Carpeta / Silo

Toda carpeta dentro de la estructura del proyecto debe contener obligatoriamente su propio archivo `index.html`. 

### Por que es indispensable
1. **Evitar errores 403 Forbidden o Directory Listing:** Si un usuario o Googlebot accede a la raíz del directorio (por ejemplo `https://automatizaciondealmacen.com/blog/` o `https://automatizaciondealmacen.com/productos/`), el servidor web Apache cargará de inmediato la vista del silo en lugar de un error de permisos o exponer el árbol de archivos.
2. **Página Hub o Pilar del Silo:** El archivo `index.html` actúa como directorio central que concentra la temática del cluster, enlazando hacia todas las páginas hijas y canalizando la autoridad hacia la home y el formulario de contacto.
3. **Consistencia Canónica:** Las URLs canónicas de los hubs deben declararse terminando con barra (`https://automatizaciondealmacen.com/blog/` y `https://automatizaciondealmacen.com/productos/`).

### Estructura de Carpetas del Proyecto
```
Almacen/
├── index.html              (Home principal / Nivel 0)
├── nosotros.html
├── servicios.html
├── soluciones.html
├── contacto.html
├── faq.html
├── sitemap.xml
├── productos/              (Carpeta Silo Productos)
│   ├── index.html          (Hub de catálogo /productos/)
│   ├── sistemas-gestion-almacen-wms.html
│   ├── tecnologia-rfid.html
│   ├── computadoras-para-almacen.html
│   ├── escaneres-codigo-barras.html
│   ├── impresoras-de-etiquetas.html
│   └── suministros-y-refacciones.html
└── blog/                   (Carpeta Silo Blog)
    ├── index.html          (Hub de artículos /blog/)
    ├── como-reducir-errores-de-picking-y-surtido.html
    ├── guia-seleccion-wms.html
    ├── beneficios-implementar-wms.html
    ├── guia-seleccion-tecnologia-rfid-almacenes.html
    ├── rfid-captura-datos.html
    ├── mantenimiento-refacciones-impresoras-zebra.html
    ├── matriz-evaluacion-automatizar.html
    ├── que-proceso-de-almacen-conviene-automatizar-primero.html
    ├── infraestructura-tecnologica-seguridad-red.html
    └── tendencias-automatizacion-almacenes.html
```

---

## Mapa de URLs y Clusters Temáticos

### 1. Núcleo Institucional y Transaccional (Nivel 0 / 1)
- `/` — Landing Page Principal: Enfoque en automatización logística general e intención de marca.
- `/nosotros` — Autoridad y Confianza: Quiénes somos, certificaciones y trayectoria en México.
- `/servicios` — Servicios de Integración: Consultoría, diagnóstico de almacén, implementación y soporte.
- `/soluciones` — Soluciones por Industria: Logística, e-commerce, manufactura y retail.
- `/contacto` — Conversión directa: Formulario de cotización y diagnóstico de almacén sin costo.
- `/faq` — Preguntas Frecuentes: Respuestas a dudas operativas, de precios y tiempos.

### 2. Silo: Productos y Hardware AIDC (`/productos/*`)
- `/productos/` — Catálogo general (index.html del silo).
- `/productos/sistemas-gestion-almacen-wms` — Software WMS (Gestión de Almacenes).
- `/productos/tecnologia-rfid` — Antenas, tags, chips y lectores RFID fijos y móviles.
- `/productos/computadoras-para-almacen` — Terminales móviles de uso rudo y montables.
- `/productos/escaneres-codigo-barras` — Lectores 1D/2D industriales inalámbricos y fijos.
- `/productos/impresoras-de-etiquetas` — Impresoras térmicas industriales y portátiles.
- `/productos/suministros-y-refacciones` — Cabezales, rodillos platen, ribbons y consumibles.

### 3. Silo: Blog y Contenido Educativo (`/blog/*`)
- `/blog/` — Directorio de artículos y guías (index.html del silo).
- `/blog/como-reducir-errores-de-picking-y-surtido` — Exactitud del 99.8% en surtido y picking.
- `/blog/guia-seleccion-wms` — Criterios para evaluar software WMS y conexión a ERP.
- `/blog/beneficios-implementar-wms` — 10 ventajas de control y trazabilidad con WMS.
- `/blog/guia-seleccion-tecnologia-rfid-almacenes` — Selección de chips, tags y lectores RFID.
- `/blog/rfid-captura-datos` — Comparativa RFID vs Código de Barras en centros de distribución.
- `/blog/mantenimiento-refacciones-impresoras-zebra` — Mantenimiento preventivo, cabezales y rodillos.
- `/blog/matriz-evaluacion-automatizar` — Matriz de madurez operativa para automatizar.
- `/blog/que-proceso-de-almacen-conviene-automatizar-primero` — Diagnóstico de cuellos de botella iniciales.
- `/blog/infraestructura-tecnologica-seguridad-red` — Redes industriales y Wi-Fi en almacenes.
- `/blog/tendencias-automatizacion-almacenes` — Tendencias globales de intralogística en México.

---

## Guía de Práctica Correcta (Best Practices) para la Estructura de Silos

### Regla 1: Jerarquía de Interlinking (Link Equity)
- **Unidireccionalidad ascendente:** Todo artículo de blog debe enlazar hacia una o varias páginas pilares de producto o servicio con anchor text descriptivo (ejemplo: `[software WMS](/productos/sistemas-gestion-almacen-wms)` o `[computadoras para almacén](/productos/computadoras-para-almacen)`).
- **Cross-linking dentro del mismo silo:** Los artículos de blog deben sugerir lecturas complementarias mediante el bloque de Recursos y Artículos Relacionados.
- **Mantener el foco semántico:** Evitar enlazar contenidos no relacionados temáticamente sin contexto claro.

### Regla 2: Longitud y Optimización de Metadatos
- **`<title>`:** Rango óptimo entre **45 y 62 caracteres**. Estructura: `Palabra Clave Principal en México | TiKendo`.
- **`<meta name="description">`:** Rango óptimo entre **120 y 155 caracteres**, con llamada a la acción clara.
- **`<link rel="canonical">`:** Obligatoria en cada archivo HTML con URL absoluta oficial sin extensión `.html` (excepto `index.html` que apunta con barra final si es directorio).

### Regla 3: Datos Estructurados (Schema.org / JSON-LD)
- **Productos/Servicios:** `Product`, `Service`, `FAQPage`.
- **Blog:** `BlogPosting`, `BreadcrumbList`, `FAQPage`.
- **Corporativas:** `Organization`, `LocalBusiness`, `AboutPage`.

### Regla 4: Rendimiento y Core Web Vitals
- Scripts JS con atributo `defer`.
- Imágenes con atributo `loading="lazy"` y `decoding="async"`.
- Formato de imagen preferido: WebP.

---

## Como Agregar una Nueva URL al Sitemap (Ejemplo Práctico)

Cuando se publica una nueva página (producto, servicio o artículo de blog), se debe registrar en `sitemap.xml` para que Googlebot la rastree de inmediato.

### Paso a paso:
1. Abrir el archivo `sitemap.xml`.
2. Ubicar la sección correspondiente (`<!-- Productos -->` o `<!-- Artículos de Blog -->`).
3. Insertar el bloque `<url>` asegurando:
   - `<loc>`: La URL pública completa en HTTPS sin la extensión `.html`.
   - `<lastmod>`: La fecha actual en formato ISO 8601 (`YYYY-MM-DDTHH:mm:ss+00:00` o `YYYY-MM-DD`).
   - `<changefreq>`: `monthly` (o `weekly` si tiene actualizaciones recurrentes).
   - `<priority>`: `1.0` (Home), `0.9` (Servicios/Nosotros/FAQ), `0.8` (Productos/Blog).

### Ejemplo de nuevo artículo de Blog:
```xml
  <url>
    <loc>https://automatizaciondealmacen.com/blog/nombre-de-tu-nuevo-articulo</loc>
    <lastmod>2026-09-21T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
```

### Ejemplo de nueva página de Producto:
```xml
  <url>
    <loc>https://automatizaciondealmacen.com/productos/nombre-de-nuevo-producto</loc>
    <lastmod>2026-09-21T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
```

---

## Despliegue y Flujo de Trabajo (Git Workflow)

- **Rama de Producción:** `production`
- **Host / Servidor:** Apache / Docker en entorno productivo.
- **Comandos estándar de despliegue:**
  ```bash
  git add .
  git commit -m "feat/fix: descripción del cambio"
  git push origin production
  ```
