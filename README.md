# TiKendo — Automatización de Almacenes en México

Sitio web corporativo y plataforma de generación de leads B2B para soluciones de automatización logística, tecnología AIDC, sistemas WMS y hardware industrial en México.

- **Dominio de Producción:** [https://automatizaciondealmacen.com/](https://automatizaciondealmacen.com/)
- **Empresa:** TiKendo S.A. de C.V.
- **Ubicación:** Blvd. Solidaridad las Torres, Álvaro Obregón, 52100 San Mateo Atenco, Estado de México.
- **Contacto:** +52 55 1328 7995 / +52 722 326 0677 | `automatizaciondealmacen@tikendo.mx`

---

## Arquitectura Técnica y Estructura de Silos (SEO Silo Architecture)

Para maximizar el posicionamiento en Google y evitar la canibalización de palabras clave, el sitio implementa una **Arquitectura de Silos Temáticos Estrictos** (*Thematic Topic Clusters*).

### ¿Qué es la Arquitectura de Silos y por qué se usa?
La arquitectura de silos organiza los contenidos del sitio web en grupos semánticos aislados y altamente especializados. Cada sección tiene un tema central bien delimitado, lo que ayuda a los motores de búsqueda (como Googlebot) a entender exactamente cuál es la autoridad del dominio en cada nicho y a transferir *PageRank* de forma controlada hacia las páginas comerciales clave.

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
 - Computadoras          - Soporte Postventa         - Picking y Reducción de Errores
 - Escáneres             - Pólizas de Mantenimiento  - Mantenimiento Preventivo Zebra
 - Impresoras
 - Suministros
```

---

## Mapa de URLs y Clusters Temáticos

### 1. Núcleo Institucional y Transaccional (Nivel 0 / 1)
- `/` — *Landing Page Principal*: Enfoque en automatización logística general e intención de marca.
- `/nosotros` — *Autoridad y Confianza*: Quiénes somos, certificaciones y trayectoria en México.
- `/servicios` — *Servicios de Integración*: Consultoría, diagnóstico de almacén, implementación y soporte.
- `/soluciones` — *Soluciones por Industria*: Logística, e-commerce, manufactura y retail.
- `/contacto` — *Conversión directa*: Formulario de cotización y diagnóstico de almacén sin costo.
- `/faq` — *Preguntas Frecuentes*: Respuestas a dudas operativas, de precios y tiempos.

### 2. Silo: Productos y Hardware AIDC (`/productos/*`)
Páginas comerciales de alta intención transaccional (*Commercial Intent*):
- `/productos/` — Catálogo general.
- `/productos/sistemas-gestion-almacen-wms` — Software WMS (Gestión de Almacenes).
- `/productos/tecnologia-rfid` — Antenas, tags, chips y lectores RFID fijos y móviles.
- `/productos/computadoras-para-almacen` — Terminales móviles de uso rudo y montables para montacargas.
- `/productos/escaneres-codigo-barras` — Lectores 1D/2D industriales inalámbricos y fijos.
- `/productos/impresoras-de-etiquetas` — Impresoras térmicas industriales, portátiles y de escritorio.
- `/productos/suministros-y-refacciones` — Cabezales, rodillos platen, ribbons y etiquetas originales Zebra.

### 3. Silo: Blog y Contenido Educativo (`/blog/*`)
Artículos de autoridad de contenido y palabras clave *long-tail* informacionales (*Informational Intent*):
- `/blog/` — Directorio de artículos y guías.
- `/blog/como-reducir-errores-de-picking-y-surtido` — Estrategias para exactitud del 99.8% en surtido.
- `/blog/guia-seleccion-wms` — Criterios para elegir software WMS y conexión a ERP.
- `/blog/beneficios-implementar-wms` — 10 ventajas de optimización y trazabilidad con WMS.
- `/blog/guia-seleccion-tecnologia-rfid-almacenes` — Selección de chips, tags y lectores RFID.
- `/blog/rfid-captura-datos` — Comparativa RFID vs Código de Barras en centros de distribución.
- `/blog/mantenimiento-refacciones-impresoras-zebra` — Mantenimiento preventivo, cabezales y rodillos.
- `/blog/matriz-evaluacion-automatizar` — Matriz de madurez operativa para automatizar.
- `/blog/que-proceso-de-almacen-conviene-automatizar-primero` — Diagnóstico de cuellos de botella iniciales.
- `/blog/infraestructura-tecnologica-seguridad-red` — Redes industriales y Wi-Fi en naves logísticas.
- `/blog/tendencias-automatizacion-almacenes` — Tendencias globales de intralogística en México.

---

## Guía de Práctica Correcta (Best Practices) para la Estructura de Silos

Para mantener la efectividad del SEO y evitar diluir la autoridad de las URLs, se deben seguir estas reglas estrictas al crear o editar páginas:

### Regla 1: Jerarquía de Interlinking (Link Equity)
* **Unidireccionalidad ascendente:** Las páginas de soporte (artículos de blog) siempre deben enlazar hacia su **página pilar de producto o servicio** relevante con anchor text exacto o descriptivo (ej: `[software WMS](/productos/sistemas-gestion-almacen-wms)` o `[terminales móviles](/productos/computadoras-para-almacen)`).
* **Cross-linking dentro del mismo silo:** Los artículos de blog pueden y deben enlazarse entre sí si complementan el tema (mediante la sección *Recursos y Artículos Relacionados*).
* **Evitar enlaces cruzados irrelevantes:** Un artículo sobre mantenimiento de cabezales térmicos no debe enlazar arbitrariamente a un tema no relacionado sin contexto semántico.

### Regla 2: Longitud y Optimización de Metadatos
* **`<title>`:** Rango óptimo entre **45 y 62 caracteres**. Debe incluir la keyword principal + Modificador geográfico (México) + Marca (`| TiKendo`).
* **`<meta name="description">`:** Rango óptimo entre **120 y 155 caracteres**, con llamada a la acción clara.
* **`<link rel="canonical">`:** Obligatoria en cada archivo HTML apuntando a su versión oficial HTTPS sin extensiones `.html` si el servidor maneja URLs limpias.

### Regla 3: Datos Estructurados (Schema.org / JSON-LD)
Cada tipo de página debe contar con su esquema correspondiente:
- **Páginas de servicio/producto:** `Product`, `Service`, `FAQPage`.
- **Artículos de blog:** `BlogPosting`, `BreadcrumbList`, y `FAQPage` para preguntas y respuestas.
- **Páginas institucionales:** `Organization`, `LocalBusiness`, `AboutPage`, `ContactPage`.

### Regla 4: Optimización de Rendimiento (Core Web Vitals)
- Todos los scripts JS secundarios deben incluir `defer`.
- Toda imagen fuera de la vista inicial (*below the fold*) debe llevar `loading="lazy"`.
- Los logotipos y cabeceras deben llevar `decoding="async"`.
- Utilizar siempre imágenes en formato moderno **WebP**.

---

## Despliegue y Flujo de Trabajo (Git Workflow)

- **Rama de Producción:** `production`
- **Host / Servidor:** Apache / Docker en entorno productivo.
- **Comandos estándar de despliegue:**
  ```bash
  git add .
  git commit -m "feat/fix: descripción de la mejora"
  git push origin production
  ```
- **Sitemap:** Cada nueva página añadida o editada de forma sustancial debe registrarse o actualizar su `<lastmod>` en `sitemap.xml`.
