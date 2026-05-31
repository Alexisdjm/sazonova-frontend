# Etapa 1: build de la app React (variables REACT_APP_* en tiempo de build)
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Obligatorio en producción: --build-arg REACT_APP_API_URL=https://api.tudominio.com
ARG REACT_APP_API_URL=
ARG REACT_APP_MAPBOX_ACCESS_TOKEN=
ARG REACT_APP_MAPBOX_STYLE=mapbox://styles/mapbox/streets-v12
ARG REACT_APP_SITE_URL=
ARG GENERATE_SOURCEMAP=false

ENV REACT_APP_API_URL=$REACT_APP_API_URL \
    REACT_APP_MAPBOX_ACCESS_TOKEN=$REACT_APP_MAPBOX_ACCESS_TOKEN \
    REACT_APP_MAPBOX_STYLE=$REACT_APP_MAPBOX_STYLE \
    REACT_APP_SITE_URL=$REACT_APP_SITE_URL \
    GENERATE_SOURCEMAP=$GENERATE_SOURCEMAP \
    NODE_ENV=production \
    CI=true

RUN npm run build

# Etapa 2: servir estáticos con nginx (SPA + React Router)
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
