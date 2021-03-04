# classify-comics
clasificación de comic's 5 estrellas

<h2>Vista Previa</h2>

<img src="https://64.media.tumblr.com/1b78ef32152cec5f2d59576d6a6d92f1/eb055ada59287d25-c6/s1280x1920/6b1f3f5b7eec790d6e7eb34c56a64e37b009e421.png" />

<h4>WEB desarrollada consultado la API de comic clásicos https://xkcd.com/json.html, contiene:</h4>
<ul>
  <li>1.	Número del comic.</li>
  <li>2.	Título del comic</li>
  <li>3.	Fecha de lanzamiento del comic</li>
  <li>4.	Imagen (comic)</li>
  <li>5.	Narración del comic, y diálogos de personajes (Ingles)</li>
  <li>6.	Barra de estrellas para calificación de comic.</li>
</ul>

<h4>Tecnologías usadas para el desarrollo de la web</h4>

<ul>
  <li>1.	React</li>
  <li>2.	Sass</li>
  <li>3.	Webpack</li>
  <li>4.	Axios</li>
  <li>5.	Babel</li>
  <li>6.	Programación funcional </li>
  <li>7.	Hooks (useState, useReducer, UseEffect)</li>     
</ul>

<h4>a. ¿Cómo construyó la solución de la prueba?</h4>
<p>Se construyó la web con la aplicación de componentes REACT como forma de estructurar nuestro diseño,
el manejo de dependencias fueron instalas con NPM. Se hizo la petición HTTP por medio de la biblioteca AXIOS,
la administración de archivos Javascript, Sass, CSS, y HTML por medio de WEBPACK, y los loader correspondientes
para cada tecnología incluida babel para permitirnos el uso de Javascript moderno.</p>

<h4>b. ¿Cuáles fueron los principales problemas con los que se encontró?</h4>
<p>El principal problema fue la petición a la API, ya que esta tiene oculto el CORS, por lo que no nos deja obtener las cabeceras “Access-Control-Allow-Origin”,
por lo que fue necesario la instalación de una extensión para el navegador quien nos permite poder obtener los datos.</p>

<h4>c. ¿Cómo solucionó los problemas encontrados?</h4>
<p>La problemática que presento la petición GET a esta API, me tomo por sorpresa es primera vez que se me presenta este error,
tome tiempo para consultar en foros sobre la problemática y una de las soluciones fue instalar la extensión de Chrome, o mozilla para CORS,
pero esta no es la única también puede usarse un PROXY obtenido en servicios como HEROKU,
y utilizando esta dirección precedida de la que nos de HEROKU, con esto obtenemos el header  y el CORS de la API no estará bloqueado.</p>

<img src="https://64.media.tumblr.com/cfa68f01db25120bf971417ebe330d21/3513c527ed30740a-d8/s400x600/6d5d104997425abb852c0f7547c77c4e008a6f30.png"/>


<h1>Como ejecutar</h1>

<h4>Por los problemas presentados por la API, debemos instalar la extensión <b> Allow CORS: Access-Control-Allow-Origin</b>,
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=es, para poder obtener los datos, tambien puede buscar la extensión
equivalente en otros navegadores con la palabra CORS.</h4>

<ul>
  <li>1. Primero tomemos la dirección del repositorio y con GIT, ejecutemos el comando GIT CLONE URL, para obtener copia del respositorio en nuestro equipo</li>
  <li>2. Ya estando dentro del proyecto ejecutemos "npm install", para instalar todas las dependencias del proyecto.</li>
  <li>3. Al termino de la instalación de dependencias, usemos el comando "npm run start", para generar la carpeta "dist", que es la que contiene todo en codigo creado por WEBPACK</li>
  <li>4. Puede usar cualquier plugins de su editor de codigo preferido para crear un servidor donde pueda ejecutar la web.</li>
  <li>5. No olvides ejucutar la extensión de CHROMEN, en la parte de dice "TOGGLE ON"</li>
  <img src="https://64.media.tumblr.com/a9e02e4131635ec62a2b3539020db16b/0b4956cf19d8f388-fd/s500x750/d368bbd51c1a76729e65bb2ca3a357ca94473c22.png"/>
</ul>
