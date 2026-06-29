Tecnologias usadas

Node para el servidor
Express como framework web para los endpoints RESTful
MongoDB como base de datos NoSql 
Mongoose odm para el modelado de datos
bcryptjs como hasheo seguro de contraseñas 

Frontend

Reac Native Framework de desarrollo movil
Expo como plataforma y herramientas de desarrollo
Expo router para la navegacion de los archivos
Fetch API para Comunicación HTTP con el backend
Ionicons para iconografía de la interfaz

Base de Datos

MongoDBAtlas como base de datos cloud usando un cluster 

Con las coleccion categories, products, orders, users

Patrones aplicados dentro del proyecto

Arquitectura modular
Custom hooks
Servicio centralizado de apis
JWT con AsyncStorage
Eliminacion logica
Paginacion
Put-to-refresh


Requisitos para correr el proyecto

Node.js instalado
Expo go instalado en el celular o emulador 
Cuenta en MongoDB y luego configurada dentro del .env con el cluster a usar

Clonar el proyecto 
git clone https://github.com/CarlosKD12/NATURAPP.git

Dirigirse a la carpeta 
cd NATURAPP

Configurar el backend 
cd naturapp-backend
npm install

crear el .env en el backend y colocar la ruta del mongodb

Configurar frontend
cd ../naturapp-mobile
npm install

Como correr el proyecto
en el backend correr 
node seed.js
npm start 

Luego en otra terminal dirigirse al front
cd naturapp-mobile
npx expo start








