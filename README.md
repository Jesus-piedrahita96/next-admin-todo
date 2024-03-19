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
4. ejecutar el la ruta seed para [crear la base de datos](http://localhost:3000/api/seed)


# Pismas commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Prod

# Stage