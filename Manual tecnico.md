#### Universidad de San Carlos de Guatemala
#### Facultad de Ingeniería
#### Escuela de Ciencias y Sistemas
#### Sistemas operativos 1
#### Ing. Sergio Mendez 
#### Aux. Carlos David Ramirez Altan

<img width="165" alt="image" src="https://user-images.githubusercontent.com/69278553/153480675-1ff9d036-d814-447b-accb-bba1f69ffebd.png">

##### 201801329 Mynor Rene Ruiz Guerra
----
 
### Descripcion
Se realizo una aplicacion que tiene como funcionalidad una calculadora que realiza operaciones basicas como: suma, resta, multiplicacion y division. La aplicacion cuenta con 
un frontend realizado en React js, un backend realizado en Golang y una base de datos en MongoDB, esta aplicación contiene documentos Dockerfile y docker-compose para poder 
desplegarce mediante el uso de contenedores.

----

### Requerimientos del sistema

Para que la aplicacion se pueda visualizar necesitara tener instalado en una computadora los siguientes programas:
- docker
- docker-compose

----

### Arquitectura del sistema

<img width="596" alt="image" src="https://user-images.githubusercontent.com/69278553/154810338-24b9c894-509a-483d-aa05-8c9dffe8e285.png">

----

### Estructura del frontend

<img width="143" alt="image" src="https://user-images.githubusercontent.com/69278553/154810379-bd8b36b8-8215-40df-987d-db99c72080a4.png">

El frontend fue realizado en reactjs el archivo App contiene BrowserRoutes para desplegar los componentes de calculadora y logs por medio de un NavBar que redirecciona por medio de Links hacia los componentes correspondientes. Dentro de esta carpeta tambien se contiene el archivo DockerFile el cual se utilizo para crear nuestra propia imagen de docker, la cual fue publicada en un registry en dockerHub. Se incluyo un archivo que contiene la configuracion de NginX que ayuda en la comunicacion del backend.

----

### Estructura del backend

<img width="135" alt="image" src="https://user-images.githubusercontent.com/69278553/154811251-67d9cd27-dacb-495f-88d6-2eecd0eeaee2.png">

El backend fue desarrollado en el lenguaje Go, es una API la cual trabaja con MongoDB para almacenar los datos de cada operacion realizada por la calculadora, se utilizo la libreria Mux para poder agregar las rutas de la API, el archivo main.go contiene el listener del Servidor exponiendo asi el puerto "9000", el archivo logs_routes.go cuenta con las diferentes rutas desarrolladas, cuenta con dos rutas:
<img width="469" alt="image" src="https://user-images.githubusercontent.com/69278553/154811442-749e0a55-fef3-4db5-bca4-c66d8d770f3e.png">

La ruta "localhost:9000/logs/get", se utiliza para ejecutar la funcion llamada Read(), esta funcion declarada en el archivo log_repository.go es utilizada para obtener todos los registros ingresados a la base de datos, obtiene los logs y los modifica en formato JSON para poder mandarlos por medio de HTTP.Request en una peticion Get. <br/>

La ruta "localhost:9000/logs/insert_log", se utiliza para ejecutar la funcion llamada Create(), esta funcion declarada en el archivo log_repository.go es utilizada para obtener los datos de la parte del frontend, los cuales contienen la informacion de una operacion que desea realizar, esta operacion se realiza en esta funcion para posteriormente poder devolver la respuesta de dicha operacion a la parte del frontend por medio de una peticion POST por el protocolo HTTP.Request, esta funcion guarda los datos en un struct predefinido que posteriormente se modifica a un formato JSON para poderlos asi ingresar a la Colleccion de la base de datos <br/>

----

### Estructura del docker-compose

<img width="260" alt="image" src="https://user-images.githubusercontent.com/69278553/154812057-e2cb1df1-fcba-4139-ba7f-75b9e16495a6.png">

La version que se utiliza de docker-compose es la 2.3, los siguientes servicios se detallan a continuacion: <br/>

El servicio del backend utiliza una imagen que tiene la ruta de "mruiz01329/backend_p1_201801329" en dockerhub, en la propiedad restart le indicamos que siempre este levantado y corriendo y si no lo esta pues lo reiniciara para poder siempre mantener corriendo el servidor backend, la propiedad de ports le indicamos el mapeo de puertos entre la computadora y el contenedor que estara escuchando el backend, la propiedad link le indicaremos con que direccion podremos identificar a nuestro contenedor de la base de datos y en la propiedad depends_on le indicamos que el contenedor depende del contener base de datos por el cual tratara de que este listo dicho contenedor antes que corra el backend.
<br/>

El servicio de database utiliza una imagen certificada de mongo, el nombre del contenedor sera "database" y en el mapeo de puertos, el contenedor y la computadora tendran abierto el puerto "27017" que es el puerto predeterminado de MongoDB, otra propiedad importante es la de las variables de entorno, aqui le pasamos el nombre del usuario y la contraseña de nuestro usuario de mongodb.
<br/>

El servicio de frontend utiliza una imagen que tiene la ruta "mruiz01329/frontend_p1_201801329" en dockerhhub, el contenedor tendra por nombre "frontend", en el mapeo de puertos tendran tanto el contenedor como la computadora host el puerto "80" abierto, en la propiedad de restart le indicamos que la aplicacion siempre este corriendo y le indicamos que el contenedor depende del contenedor del backend para que pueda correr antes el backend.



