# Entrega final de la estrategia de pruebas

## Estudiantes
Nuestro equipo está conformado por 3 integrantes.
|Nombre |Correo|
|--|--|
|Cesar Andrade |co.andrade86@uniandes.edu.co|
|Wilson Beltran |w.beltran@uniandes.edu.co|
|Marby Leguizamón|m.leguizamong@uniandes.edu.co|

# Estrategia de pruebas 
A continuación  encontrara el documento de la propuesta y el video explicativo:
- [1. Documento estrategia](https://github.com/wilson-bg/entrega-final/blob/main/6.%20Soportes/estrategia-pruebas.pdf)- 
- [2. Presentacion estrategia](https://github.com/wilson-bg/entrega-final/blob/main/6.%20Soportes/Video_Estrategia.pptx)

# Funcionalidades
- Login
- Agregar post 
- Editar post
- Publicar post
- Revertir publicación de post
- Borrar post
- Crear tags
- Editar tags
- Borrar tags
- Editar usuario
- Invitar usuarios
- Suspender usuario


Este repositorio contiene el código para poder ejecutar las siguientes pruebas :

- [1. Pruebas manuales](https://github.com/wilson-bg/entrega-final/tree/main/1.%20Pruebas%20manuales)
- [2. Pruebas de reconocimiento](https://github.com/wilson-bg/entrega-final/tree/main/2.%20Pruebas%20de%20reconocimiento/monkey-cypress)
- [3. Pruebas E2E](https://github.com/wilson-bg/entrega-final/tree/main/3.%20Pruebas%20E2E/Cypress)
- [4. Pruebas de regresión VRT](https://github.com/wilson-bg/entrega-final/tree/main/4.%20VRT/ResembleJS)
- [5. Escenarios de validación de datos](https://github.com/wilson-bg/entrega-final/tree/main/5.%20Escenarios%20de%20validaci%C3%B3n%20de%20datos/Cypress)

con la herramienta:
# Cypress
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)


A conitnuación se detalla el contenido y los pasos para ejecutar cada una de las pruebas:

# Instrucciones de instalación.
1. Instalar la versión 3.42.5 de ghost.  En el siguiente enlace podrá encontrar un tutorial que servirá de guía: https://www.coursera.org/learn/pruebas-automatizadas-software/supplement/gjD9z/como-desplegar-ghost-de-forma-local
2. Inicie ghost. Desde el sitio del administrador cree el siguiente usuario:

|Correo|Clave|
|--|--|
|m.leguizamong@uniandes.edu.co|123456789!|

3. Instalar cypress. En el siguiente enlace podrá encontrar un tutorial que servirá de guía: https://misovirtual.virtual.uniandes.edu.co/codelabs/cypress-tutorial/index.html#1
4. Descargue el repositorio del código en su máquina. Desde powershell ingrese el siguiente comando: git clone https://github.com/wilson-bg/entrega-final.git

## 1. Pruebas manuales
Esta carpeta contiene el artefacto [inventario-pruebas-exploratorias.xlsx](https://github.com/wilson-bg/entrega-final/blob/main/1.%20Pruebas%20manuales/inventario-pruebas-exploratorias.xlsx), en su interior se encuentrán los resultado de las pruebas exploratirias y los escenarios propuestos.


## 2. Pruebas de reconocimiento con Monkey

La carpeta [2. Pruebas de reconocimiento/monkey-cypress/](https://github.com/wilson-bg/entrega-final/tree/main/2.%20Pruebas%20de%20reconocimiento/monkey-cypress) contiene  el proyecto Cypress con el código fuente las pruebas de exploración aleatorias (Monkey).
```
- Abra una nueva consola 
- Ubique la carpeta  2. Pruebas de reconocimiento/monkey-cypress
- Descargue las dependencias del proyecto, ejecutando el siguiente comando;
      npm install
- Ejecute el comando cypress open.
- Ejecute monkey_testing
```


## 3. Pruebas E2E
La carpeta [3. Pruebas E2E/Cypress](https://github.com/wilson-bg/entrega-final/tree/main/3.%20Pruebas%20E2E/Cypress) contiene el proyecto Cypress con el código fuente las pruebas e2e. Ejecute los isguientes pasos para desplegar los casos de prueba implementados en Cypress:
```
- Abra una nueva consola 
- Ubique la carpeta  /3. Pruebas E2E/Cypress
- Ejecute el comando cypress open.
```

## 4. Pruebas de regresión VRT 
La carpeta [/4. VRT/ResembleJS/](https://github.com/wilson-bg/entrega-final/tree/main/4.%20VRT/ResembleJS) contiene el código fuente de las pruebas de regresión y el [reporte](https://github.com/wilson-bg/entrega-final/blob/main/4.%20VRT/ResembleJS/screenshots/ghost/report.html) con el resultado de las mismas. Para ejecutar las pruebas se debe tener encuenta lo siguientes pasos:

```
- Abra una nueva consola 
- Ubique la carpeta 4. VRT/ResembleJS
- Para instalar Playwright, ejecute el siguiente comando:
      npm install playwright
- Para instalar Resemble.js, ejecute el siguiente comando:
      npm install resemblejs
- Para ejecutar las pruebas, ejecute el siguiente comando:
      node index.js
- Ubique el reporte de los resultados "report.html" en la carpeta 4. VRT/ResembleJS/screenshots/ghost
```

## 5. Escenarios de validación de datos
A continuación, se detallan las estrategias utilizadas para la generación de datos en los escenenarios elaborados:

(i) pool de datos a-priori y (ii) pool de datos (pseudo) aleatorio dinámico

### (i) pool de datos a-priori.
Para la generación previa de datos, se utilizó el sitio https://www.mockaroo.com/ estableciendo una plantilla de tipos de datos requeridos, posteriormente se generó un archivo json con 100 registros en total fueron 8 archivos y este fue ubicado dentro del proyecto cypress.  En cada caso de pruebas implementado, se importó el mencionado archivo haciendo uso aleatario de los registros allí encontrados.

 - MOCK_DATA_CLAVES.json
 - MOCK_DATA_EMAIL.json
 - MOCK_DATA_ESPECIAL.json
 - MOCK_DATA_LOGIN.json
 - MOCK_DATA_NULL.json
 - MOCK_DATA_NUMEROS.json
 - MOCK_DATA_TEXTOLARGO.json
 - MOCK_DATA_USUARIO.json

### (ii) pool de datos (pseudo) aleatorio dinámico.
Para la generación de datos se hizo uso de la herramienta [Mockaroo](https://www.mockaroo.com/) y mediante un llamado a la API se obtienen los datos y posteriormente se almacenan en el archivos **fixtures/mockaroo.json** Para hacer esto posible se creó una cuenta en Mockaroo, se definió un Schema con diferentes campos y tipos de datos, además, se realizo la creación de la respectiva [API](https://my.api.mockaroo.com/data.json?key=fae49f20). Antes de iniciar la ejecución de los escenarios se lee el archivo mockaroo.json y se almacena en un array y cada vez que se ejecuta un escenario se genera un numero aleatorio de la longitud del array, el cual indica la posición de los datos que serán usados.

![image](https://github.com/coandrade/TallerEstrategiaDatos/blob/main/Cypress/imagen/api.PNG)


```
- Abra una nueva consola 
- Ubique la carpeta /5. Escenarios de validación de datos/Cypress
- Ejecute el comando cypress open.
```

## Issues
[Registro de incidenciass Ghost](https://github.com/wilson-bg/entrega-final/issues)

