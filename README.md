# Mi portfolio

Portfolio personal donde me presento y muestro algunos de mis proyectos.

### Pre-requisitos 📋

Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit

### Instalación 🔧

```
npm install
```

### Pasos para arrancar el proyecto 📦

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. Para ello ejecuta el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de Chrome y muestra tu página web**.
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
  - Convierte los ficheros SASS en CSS.
  - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/`.

### Pasos para publicar el proyecto en GitHub Pages 📦

Para generar tu página para producción ejecuta el comando:

```bash
npm run docs
```

Y a continuación:

1. Sube a tu repo la carpeta `docs/` que se te acaba de generar.
2. Entra en la pestaña `settings` de tu repo.
3. Y en el apartado de GitHub Pages activa la opción **master branch /docs folder**.

Además, los comandos:

```bash
npm run push-docs
```

o

```bash
npm run deploy
```

son un atajo que nos genera la versión de producción y hace push de la carpeta `docs/` del tirón. Te recomendamos ver el fichero `package.json` para aprender cómo funciona.

### Construido con 🛠️

- [Adalab web starter kit](https://github.com/Adalab/adalab-web-starter-kit) - plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas
