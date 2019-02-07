# TALLER 3 - TÓPICOS ESPECIALES I

## Consumir el API creado en Node JS, Express y MongoDB
## Crear una aplicación Web con Vue JS

Una vez lista el API se ha decidido que la interfaz de presentación la cual será una
aplicación Web, utilizando el framework de JavaScript Vue JS, esta interfaz debe tener
la siguiente funcionalidad:

- Listar la primera página (10) de tareas ordenados descendentemente por fecha
de creación con toda su información
- Un formulario para crear una nueva tarea donde se pueda seleccionar el autor
de una lista
- Una vez creada la nueva tarea se debe actualizar el listado de estas mismas.
- Un formulario para crear los autores.
- Cada tarea debe tener la opción de completarla (para indicar que esta tarea ya
está realizada), editarla y eliminarla.


Pasos para hacer uso de la API:

1. clonar el repositorio.

```shell
git clone https://github.com/antpon007/tallervue
```

2. correr el comando para instalar las dependencias

```shell
npm install
```

3. ejecutar dependiendo del entorno (desarrollo o producción)
```shell
npm run serve
```
 o 
 
```shell
npm run build
```


**nota:** _Tener en cuenta que este proyecto fue realizado con nodejs v. 10 (Instalarlo si aun no lo tiene)_

Esta API cumple con lo lineamientos del contrato REST, para hacer uso de los metodos GET, POST, PUSH, DELETE, se utiliza como origen http://localhost:8080/#/


