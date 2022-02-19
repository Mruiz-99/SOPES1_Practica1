#### Universidad de San Carlos de Guatemala
#### Facultad de Ingeniería
#### Escuela de Ciencias y Sistemas
#### Sistemas operativos 1
#### Ing. Sergio Mendez 
#### Aux. Carlos David Ramirez Altan

<img width="165" alt="image" src="https://user-images.githubusercontent.com/69278553/153480675-1ff9d036-d814-447b-accb-bba1f69ffebd.png">

# Manual de usuario
##### 201801329 Mynor Rene Ruiz Guerra

----
 
### Descripcion
Se realizo una aplicacion que tiene como funcionalidad una calculadora que realiza operaciones basicas como: suma, resta, multiplicacion y division. La aplicacion cuenta con una seccion de "Logs" donde podra visualizar las operaciones realizadas con anterioridad, los numeros ingresaros (2 numeros), el tipo de operacion que se realizo y su resultado, tambien la fecha y hora en la que se realizo dicha operacion.

----

### Requerimientos del sistema

Para que la aplicacion se pueda visualizar necesitara tener instalado en una computadora los siguientes programas:
- docker
- docker-compose

----


### Configuracion del entorno

Una vez tengamos docker y docker-compose instalados en nuestra maquina, podremos visualizar la aplicacion en nuestro navegador, para ello tendremos que seguir los siguientes pasos:
1. Abrir una terminarl
2. Ubicarnos en la ruta en donde tenemos almacenado nuestro archivo .yaml de docker-compose
3. Ingresamos lo siguiente ``docker-compose up -d`` y presionamos Enter

Cuando este proceso termine podremos ingresar en nuestro navegador la ruta "localhost/calculadora", alli podra utilizar la aplicacion.


----


### Pantalla principal
La calculadora cuenta con un input en donde podra ingresar los numeros por medio del teclado, tiene diferentes botones para cada una de las operaciones que podra realizar. En la parte superior contiene un navegador de pestañas en la cual podra hacer el cambio de vista entre los logs de la calculadora y la calculadora.


#### Pasos para realizar una operacion

1. Ingrese el primer numero
2. Haga click en la operacion que desee realizar
3. Ingrese el segundo digito
4. Haga click en el boton con el signo de igual ( = )
5. La respuesta le aparecera en el input


<img width="402" alt="image" src="https://user-images.githubusercontent.com/69278553/154809455-212ad12b-3131-4258-83d1-c4ea6fbff98f.png">

#### Pasos para visualizar los logs de la calculadora
1. Haga click sobre Logs
2. Haga click sobre el boton Consultar

<img width="542" alt="image" src="https://user-images.githubusercontent.com/69278553/154809644-77e9e77f-fe6d-475b-9fd7-8867d03ba61f.png">


