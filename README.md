## TCC_pololos
----------
## How use API *POST request*

- **Usuarios sin registro:** Para los usuarios que deseen usar el servicio sin registrarse accederán de la siguiente manera, donde **Table** se refiera al numero o nombre de mesa y **Position** es el numero de silla donde se encuentra, esos datos son automatiocos y preconfigurados en cada mesa.
  
  ```JavaScript 
    {
        "Name"  : ... ,
        "Table" : ... ,
        "Position" : ... 
    }
  ```

- **Registrar usuario:** Los usuarios que desen tener acceso a delivery, promociones y otros beneficios y se dessen registrar
    
    ```JavaScript 
    {        
        "nombre"    : ... ,
        "cedula"    : ... ,
        "telefono"  : ... ,
        "direccion" : ... ,
        "usuario"   : ... ,
        "contrasenia" : ... 
    }
  ```
- **Login:** Si el usuario se encuentra registrado la respuesta será el frame *API_KEY*, de otra manera la respuesta será **LOG**
    ```JavaScript 
    {
        "usuario" : ...
        "contrasenia" : ...
    }
  ```

## How use API *POST response*

- **API_KEY:** Es la llave que usará el servidor para validar un usuario activo dentro del sistema, y su ubicacion en las mesas.
    ```JavaScript
    {"API_KEY" : "........................."}
    ```
- **LOG:** De proposito general, cómo mensajes directos del servidor, usuario no entontrado, o usuario registrado, con contrasenha incorrecta y demás mensajes
    ```JavaScript
    {"LOG" : "........................."}
    ```

