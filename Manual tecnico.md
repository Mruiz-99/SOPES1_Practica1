#### Universidad de San Carlos de Guatemala
#### Facultad de Ingeniería
#### Escuela de Ciencias y Sistemas
#### Sistemas operativos 1
#### Ing. Sergio Mendez 
#### Aux. Carlos David Ramirez Altan

<img width="165" alt="image" src="https://user-images.githubusercontent.com/69278553/153480675-1ff9d036-d814-447b-accb-bba1f69ffebd.png">

### DESARROLLADO POR:
---
| NOMBRE                              | CARNET        |
|                                 --- |           --- |
| Pedro Rolando Ordoñez Carrillo      |   201701187   |
| Mynor Rene Ruiz Guerra              |   201801329   |
| Erick Daniel Poron Munoz            |   201712132   |

----

### Arquitectura del sistema

<img width="834" alt="image" src="https://user-images.githubusercontent.com/69278553/157996553-294be9e8-efb8-4c9c-b4d0-5fa40c3aaf77.png">

----

### Requerimientos

-  Node 

----

### Backend

El backend fue desarrollado en Node js, este se encarga de conecta a una base de datos MongoDB, para obtener la información de los logs generados por las consultas hechas a las APIs realizadas en GO, dichas APIs estan almacenadas en las máquinas virtuales de Google. Esta herramienta es la que se encarga de comunicarse con el frontend con Socket.io, la cual utilizamos para enviarle la información de los logs obtenidos.

 -----
 
### Estructura de los archivos que componen el backend
 ![image](https://user-images.githubusercontent.com/69278553/157996579-ef2429a3-7d15-4702-888a-96aa79fab309.png)

----

#### App.yaml

Este archivo contiene algunos atributos necesarios como el runtime y el envirement, para poder implementar dicha aplicación en App Engine (servicio de Google)

#### Main.js

Este archivo es el encargado de realizar la conexión a MongoDB, también contiene el código necesario para poder comunicarse por medio de Socket.io al frontend. Este archivo contiene un intervalo de tiempo de 2.5 segundos en el cual cada vez que transcurre dicho intervalo el backend hará una solicitud a la base de datos para verificar si hay alguna actualización de la información, la base de datos se llama “Fase 1” y dentro de ella existe una colección llamada “Logs” que almacena los datos en formato JSON.
El servidor esta escuchando en el puerto 4000.

#### Package.json

En este archivo se encuentra información de dicha aplicación, como también las dependencias utilizadas, tales como: express, mongodb y socket.io
El archivo index.js es el menos relevante pues este contiene una ruta en la cual ejecuta una función que retorna un mensaje, este archivo se utilizo como prueba.



