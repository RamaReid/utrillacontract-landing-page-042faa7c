# Servir el sitio estático de utrillacontract-landing-page

El código de la rama `main` ya está en el proyecto: `index.html` en la raíz, junto con los 4 videos `.webm` y las 8 imágenes `.webp`. No hay `package.json` ni framework, y por eso el preview está caído: la plataforma busca un comando de arranque y no encuentra ninguno.

## Qué hacer

1. Agregar un archivo de configuración `lovable.toml` en la raíz que le indique a la plataforma cómo levantar el sitio:
   - comando de desarrollo: un servidor de archivos estáticos sobre la raíz del proyecto, escuchando en el puerto 8080 (el que usa el preview)
   - sin paso de build: los archivos se sirven tal cual
2. Verificar que el preview responde en `/`, que el `index.html` carga y que los `.webm` y `.webp` se descargan con código 200 y el tipo de contenido correcto (video/webm, image/webp).

## Detalle técnico

- `lovable.toml` con `[run] dev = "..."` usando un servidor estático liviano (por ejemplo `bunx serve` o un servidor HTTP mínimo de Node) apuntando a `.` y puerto 8080, con host `0.0.0.0`.
- Sin `build`, `dist` ni bundler: el publicado sirve los mismos archivos de la raíz.
- No se modifica `index.html` ni ningún asset del repo.

## Fuera de alcance

- Cambios de contenido, diseño o estructura del sitio.
- Migrar el HTML a React/TanStack.
