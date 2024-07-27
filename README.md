###### Proyecto iWeather

Simple proyecto que consiste en golpear una API del tiempo y traer sus datos. El stack fue muy simple, se utilizo React.js, Typescript y Vite, junto al resto de las tecnologias requeridas para este challenge. El proyecto carece de testing por falta de tiempo, por eso se opto por usar Typescript en vez de testear, para de alguna manera, hacer minimamente robusta la aplicacion (Cabe aclarar, no cumplen la misma funcion).
El proyecto actualmente se encuentra deployado en Vercel y se puede acceder a traves del siguiente link: https://iweather-ytvf.vercel.app/
La API en su modo gratuito ofrece un pronostico del tiempo de 3 dias y no 5 como requiere el challenge, por eso en los detalles se veran solo 3 dias (en realidad son 2, el dia corriente mas los 2 siguientes.)

# Configuracion

La configuracion para poder levantar este proyecto en entorno local es minima, por no decir nula. Debido a que el proyecto estaba enfocado en el Frontend, no se creo un Backend con las tipicas funcionalidades. De esta manera por ejemplo, no va haber necesidad de configurar una base de datos ya que se "persiste" en localStorage, ni muchos menos variables de entorno.

Asimismo en el caso de la API_KEY de la cuenta de rapidapi no es necesaria ya que voy a dejar hardcodeada la que yo obtuve, ya que no hay manera de salva-guardarla en una variable de entorno. Debido a que no hay backend. En este sentido, las llamadas a la API externa se hace desde el Frontend (mala practica).

No obstante, si fuera necesario obtener una api key nueva para insertarla en el proyecto para probarlo localmente, los pasos serian los siguientes:
1° Ingresar a [rapidapi](https://rapidapi.com/hub), y crearse una cuenta en caso de no tener.
2° Una vez dentro de la plataforma, en el buscador ingresar "weather api"
y elegimos el que se llama "WeatherAPI.com"
3° Una vez que elegimos la opcion, nos va a llevar a una suerte de Plataforma API para probar las llamadas a los endpoints de la api externa seleccionada.
4° En esta nueva pantalla en el panel izquierdo podemos hacer click donde dice "API Overview" para que nos de un panorama de que se puede hacer.
Tambien vamos a ver que estan los planes para suscribirnos que nos van a brindar la api key que necesitamos para trabajar, hacemos click en "Basic" que es la que cuesta $0.00 y nos brinda hasta 1000 llamadas mensuales y tambien 1000 llamadas por hora.
5° Una vez que seleccionamos nuestro plan, podemos seleccionar del panel izquierdo los endpoints a probar en la plataforma, seleccionemos "Realtime Weather API" (si al momento de realizar esto no se encuentra cualquier otro endpoint va a servir)
6° Una vez seleccionado el endpoint, del lado derecho se nos va a desplegar otro panel donde tenemos una tab llamada "Code Snippets", en el seleccionador llamado "Target" elegimos "Node.js", cuando nos muestre el codigo, dentro del objeto "options" podremos encontrar la clave "headers" donde va a contener tanto, la API_KEY ('x-rapidapi-key'), como el BASE_URL ('x-rapidapi-host') de los endpoints de esta API.

Las llamadas a la API se encuentran dentro de la carpeta src/services en el modulo llamado "weather.ts". Dentro de ese modulo vamos a encontrar los metodos "getWeather" y "getForecast" que dentro de ellos estan los objetos "headers" donde se encuentra la clave 'x-rapidapi-key' en el cual habria que asignarle el valor de la nueva API_KEY.

# Ejecucion en entorno Local

Una vez que clonamos de github el repositorio dentro de una carpeta de nuestra eleccion, utilizando la terminal de nuestra eleccion nos situamos en la raiz de nuestro proyecto recien clonado y ejecutamos el comando "npm install", una vez instaladas todas las dependencias y archivos necesarios, en nuestra terminal ahora ejecutamos el comando "npm run dev", una vez que el proyecto termine de "levantar" nos va a indicar la url a la cual podremos acceder a nuestra app en entorno local.

A CONTINUACION EL CONTENDIO DEL README.md CREADO POR VITE

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: [
            "./tsconfig.json",
            "./tsconfig.node.json",
            "./tsconfig.app.json",
        ],
        tsconfigRootDir: __dirname,
    },
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
