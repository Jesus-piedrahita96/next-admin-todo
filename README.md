# Development
paso a paso para levantar la app en desarrollo

1. Levantar la base de datos
```
docker-compose up -d
```

2. Conectarse con la base de datos
```
si se quiere conectar con la base de datos por medio de un administrador
se recomienda realizarlo por medio de pgAdmin4
```

3. Reemplazar las variables de entorno
4. ejecutar el comando ``` npm install ``` para construir los modulos de node js
6. ejecutar el comando ``` npm run dev ``` para correr la app en modo desarrollador
7. ejecutar los comando de prisma

# Pismas commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

8. y si ya tienen una base datos, ejecuta el siguiente comando
```
npx prisma db pull
npx prisma generate
```
de inmediatamente se analizara la base de datos existente
y traera todos los modelos (tablas) al archivo de schema.prisma y luego con el siguiente comando
creara el cliente/prisma

7. ejecutar el la ruta seed para [crear la base de datos](http://localhost:3000/api/seed)



# Prod

# Stage