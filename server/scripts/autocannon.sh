# Ejecutar el server con 0x

# Primero vamos a crear un usuario nuevo
#curl -X GET "http://localhost:8080/newUser?username=dani&password=qwerty123"

#Luego ejecutamos autocannon al endpoint de autenticacion bloqueante y no bloqueante
autocannon -c 50 -d 20 'http://localhost:8080/info'

#Ver salida