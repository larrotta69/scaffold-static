## ¿Cómo correr el proyecto?

Para correr el proyecto se usan npm scripts, para compilar todos los assets dentro de la carpeta `/build` se debe correr `npm run dev`. Una vez creados todos los archivos HTML, JS y CSS se debe levantar un servidor local con `npm run serve` e ir a la URL `http://localhost:8080/`.

## Arquitectura

Inicialmente realicé el setup del proyecto, instalando las dependencias y realizando los scripts mostrados en package.json, el proyecto tiene 2 carpetas principales:`build` y `source`: en `build` están alojados todos los documentos renderizados de css y html y js.

### Gulp

Por medio de `gulpfile.js` se realiza la compilación y watch de pug, scss y js, además se determina el `data.json` como fuente de datos de la página.

### Templates

Utilicé pug para generar el código HTML, separando cada uno de los componentes como hero, card, footer entre otros.

### Pre-procesador

SASS: utilicé este pre-procesador para el manejo de estilos en el proyecto, debido a que ahorra código y se puede ordenar de mejor manera, de la misma manera que pug este tiene cada uno de los estilos por componente dentro de la carpeta `source/sass`, siendo `styles.scss` el archivo principal que llama a los otros.

Utilicé dos media screen: `mediamin` y `medialarge` definidas en `variables.scss` para que puedan ser editables directamente.

### Datos

Archivos JSON: para la alimentación de datos utilice el archivo `data.json` alojado en la carpeta `source/data`. Este archivo contiene la información dinámica como textos, imágenes, backgrounds entre otros del proyecto.
