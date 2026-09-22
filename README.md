# AM Ingeniería

Sitio web de Alison Mora: ingeniería, documentación técnica, diseño y modelado e impresión 3D.

## Ejecutar localmente

```sh
python3 -m http.server 8765
```

Abrir http://localhost:8765. No requiere compilación ni dependencias de JavaScript.

## Publicación

Publicar la raíz del repositorio como sitio estático. `index.html` es el archivo de entrada.
El archivo `CNAME` declara el dominio previsto `amingenieriapro.com`; no configura por sí solo el alojamiento ni los registros DNS.

## Contenido y diseño

- Información e imágenes de proyectos suministradas en el borrador de AM Ingeniería en Canva.
- Dirección visual inspirada en la portada de Aloja Group, adaptada a la marca AM con verde oliva sutil.
- Presentación del servicio 3D orientada a objetos personalizados y trofeos, según los ejemplos propios suministrados.
- WhatsApp: +57 302 736 3773. Correo: amingenieria31@gmail.com.
- Tipografías Manrope y DM Sans servidas por Google Fonts, con Arial como respaldo.
- Navegación móvil, enlaces por servicio, acordeones accesibles y respeto a movimiento reducido.

Los enlaces de WhatsApp abren una conversación con texto preparado; el sitio no envía mensajes automáticamente.

## Catálogo y SEO — septiembre de 2026

60 fichas en `/productos/` y `/servicios/`, seis categorías y 70 URL canónicas indexables. El catálogo se encuentra en `/catalogo/`. Cada ficha es HTML estático servido directamente, con título y descripción propios, canonical, migas de pan y enlaces relacionados. Las variantes de un producto comparten ficha.

`sitemap.xml` enumera las URL canónicas; `robots.txt` declara el sitemap. `.htaccess` configura HTTPS, dominio sin www, normalización de index.html y respuesta 404. Hostinger debe desplegar la rama `main` desde su panel Git después de cada actualización si no se ha configurado un webhook.

Los precios, opciones y fotografías de suministros provienen del catálogo entregado por AM. Confirmar valores y alcances antes de contratar. No se publicaron los datos bancarios del PDF. El logo original se utiliza únicamente en el encabezado. Instagram tiene enlace directo y QR en la sección de contacto.

Al agregar o quitar fichas, actualizar navegación, sitemap y canónicas. Conservar URL existentes o implementar redirecciones 301 cuando sea necesario. Publicación e indexabilidad no equivalen a indexación confirmada por Google.
