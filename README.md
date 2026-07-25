# Sazonova — Frontend

Sitio web de Sazonova (React + Create React App + Tailwind). Consume el API Django para recetas, productos y el formulario de distribuidores.

## Requisitos

- Node.js 18+ (recomendado 20)
- Backend Django corriendo en local **solo** si vas a probar contra API de desarrollo (`127.0.0.1:8000`)

## Instalación

```bash
npm install
cp .env.example .env
```

Edita `.env` según el modo en el que quieras trabajar (ver abajo).

---

## Variable de debug del API

En `src/config/env.js` (y en `.env`) controlas a dónde van **todas** las peticiones (`/api/recipes`, `/api/products`, `/api/distributors`, etc.):

| `REACT_APP_API_DEBUG` | Comportamiento |
|-----------------------|----------------|
| `true` | Todas las consultas van a `http://127.0.0.1:8000` |
| `false` | Usa `REACT_APP_API_URL` (producción / staging) |

En la consola del navegador verás un aviso cuando el debug esté activo.

**Importante:** Create React App inyecta las variables en **build time**. Tras cambiar `.env` debes reiniciar `npm start` o volver a hacer el build.

---

## Probar en desarrollo (local)

### 1. Backend local + frontend local

1. Arranca Django en `http://127.0.0.1:8000`.
2. En `.env`:

```env
REACT_APP_API_DEBUG=true
REACT_APP_MAPBOX_ACCESS_TOKEN=tu_token
REACT_APP_MAPBOX_STYLE=mapbox://styles/tu-usuario/tu-estilo
```

3. Arranca el frontend:

```bash
npm start
```

4. Abre `http://localhost:3000`.

Endpoints que usa el frontend (sobre `127.0.0.1:8000` con debug):

- `GET /api/recipes/all/`
- `GET /api/products/all/`
- `POST /api/distributors/`
- Mapbox (token y style desde `.env`)

### 2. Frontend local apuntando al API de producción

Útil para validar datos reales sin desplegar:

```env
REACT_APP_API_DEBUG=false
REACT_APP_API_URL=https://api.mysazonova.com
REACT_APP_MAPBOX_ACCESS_TOKEN=tu_token
REACT_APP_MAPBOX_STYLE=mapbox://styles/tu-usuario/tu-estilo
```

```bash
npm start
```

---

## Push y producción

Las variables `REACT_APP_*` se **incrustan en el build**. No bastan en runtime del contenedor nginx: deben existir en el momento de `npm run build` / `docker compose build`.

### Checklist antes del push / deploy

1. En el entorno de build (Jenkins, `.env` del servidor, `.env.production`):

```env
REACT_APP_API_DEBUG=false
REACT_APP_API_URL=https://api.mysazonova.com
REACT_APP_MAPBOX_ACCESS_TOKEN=pk.tu_token_publico
REACT_APP_MAPBOX_STYLE=mapbox://styles/tu-usuario/tu-estilo
REACT_APP_SITE_URL=https://mysazonova.com
GENERATE_SOURCEMAP=false
```

2. **Nunca** dejes `REACT_APP_API_DEBUG=true` en el build de producción (forzaría localhost).

3. Rebuild de la imagen (las variables van como build-args en Docker):

```bash
docker compose build --no-cache
docker compose up -d
```

O con CRA directo:

```bash
npm run build
# servir la carpeta build/ (nginx, serve, etc.)
```

4. Verifica en el navegador (producción):

- Network → peticiones a `api.mysazonova.com` (no a `127.0.0.1`)
- Mapbox → estilo custom (no `streets-v12` por defecto)
- Formulario distribuidores → status `201`
- Productos → `/product/{slug}` carga desde el API

### Jenkins / CI

Pasa las variables en el **build** de la imagen:

- `REACT_APP_API_DEBUG=false`
- `REACT_APP_API_URL=...`
- `REACT_APP_MAPBOX_ACCESS_TOKEN=...` (Credential / secret)
- `REACT_APP_MAPBOX_STYLE=...`

Tu `Dockerfile` y `docker-compose.yml` ya aceptan estos build-args (añade `REACT_APP_API_DEBUG` si aún no está cableado en el pipeline).

---

## Rutas principales

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage |
| `/recipes` | Listado / galería de recetas |
| `/recipes/:slug` | Detalle de receta |
| `/product/:slug` | PDP de producto (hay 2 productos) |

Contextos globales:

- `RecipesContext` → `GET /api/recipes/all/`
- `ProductsContext` → `GET /api/products/all/`

---

## Scripts

```bash
npm start   # desarrollo
npm run build
npm test
```

## Notas

- Fuentes custom: self-host en `src/assets/Fonts/` vía `src/fonts.css`.
- Mapbox: el estilo custom requiere `REACT_APP_MAPBOX_STYLE` en el **build**, no solo el token.
- No subas `.env` ni tokens secretos al repositorio (usa `.env.example` / Credentials en Jenkins).
