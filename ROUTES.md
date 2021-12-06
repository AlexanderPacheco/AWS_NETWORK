## Proyecto 1

## Rutas
host:port/api/reporte/  
#### Cuerpo de la petición
```JSON
{
    "carnet": "201602782",
    "curso": "Redes 2",
    "nombre" : "Sergio Otzoy",
    "reporte": "Todo OK"
}
```
<hr>

host:port/api/reporte/list/201602782 
#### Respuesta
```JSON
{
    "atendido": "Solicitud atendida por el servidor 20001",
    "reportes": [
        {
            "_id": "616ca4e35c52db8c2c399403",
            "carnet": "201602782",
            "nombre": "Sergio Otzoy",
            "proyecto": "Redes 2",
            "reporte": "Todo OK",
            "fecha": "2021-10-17T22:34:11.193Z",
            "servidor": "2000100000"
        }
    ]
}
```
<hr>

host:port/api/reporte/list/  
#### Respuesta
```JSON
{
    "atendido": "Solicitud atendida por el servidor 20001",
    "reportes": [
        {
            "_id": "616ca4e35c52db8c2c399403",
            "carnet": "201602782",
            "nombre": "Sergio Otzoy",
            "proyecto": "Redes 2",
            "reporte": "Todo OK",
            "fecha": "2021-10-17T22:34:11.193Z",
            "servidor": "2000100000"
        }
    ]
}
```
<hr>

host:port/api/reporte/details/616ca4e35c52db8c2c399403  
#### Respuesta
```JSON
{
    "_id": "616ca4e35c52db8c2c399403",
    "carnet": "201602782",
    "nombre": "Sergio Otzoy",
    "proyecto": "Redes 2",
    "reporte": "Todo OK",
    "fecha": "2021-10-17T22:34:11.193Z",
    "servidor": "2000100000",
    "__v": 0
}
```
<hr>

host:port/api/asistencia/  
#### Cuerpo de la petición
```JSON
{
    "carnet":"202000000",
    "nombre": "Estudiante Ejemplar 1",
    "evento": "Conferencia de redes 1",
    "id": 1,
    "imgB64": "<<imagen en base 64>"
}
```
<hr>

host:port/api/asistencia/event/0  
```JSON
{
    "atendido": "Solicitud atendida por el servidor 20001",
    "asistencia": [
        {
            "_id": "616ca84189315927aa38740b",
            "carnet": "201602782",
            "nombre": "Sergio Otzoy",
            "evento": "Conferencia de redes 2",
            "id": 0,
            "link": "<<link a imagen>>",
            "keyPath": "<<keypath de objeto S3>>",
            "servidor": "2000100000",
            "fecha_hora": "2021-10-17T22:48:33.510Z",
            "__v": 0
        },
        {
            "_id": "616ca8ec47c150dd0e260a2b",
            "carnet": "201502999",
            "nombre": "Estudiante Ejemplar",
            "evento": "Conferencia de redes 2",
            "id": 0,
            "link": "<<link a imagen>>",
            "keyPath": "<<keypath de objeto S3>>",
            "servidor": "2000100000",
            "fecha_hora": "2021-10-17T22:51:24.300Z",
            "__v": 0
        },
        {
            "_id": "616ca90247c150dd0e260a2d",
            "carnet": "202000000",
            "nombre": "Estudiante Ejemplar 1",
            "evento": "Conferencia de redes 2",
            "id": 0,
            "link": "<<link a imagen>>",
            "keyPath": "<<keypath de objeto S3>>",
            "servidor": "2000100000",
            "fecha_hora": "2021-10-17T22:51:46.559Z",
            "__v": 0
        }
    ]
}
```
<hr>

host:port/api/asistencia/carnet/202000000  
#### Respuesta
```JSON
{
    "atendido": "Solicitud atendida por el servidor 2000100000",
    "asistencia": [
        {
            "_id": "616ca90247c150dd0e260a2d",
            "carnet": "202000000",
            "nombre": "Estudiante Ejemplar 1",
            "evento": "Conferencia de redes 2",
            "id": 0,
            "link": "<<link a imagen>>",
            "keyPath": "<<keypath de objeto S3>>",
            "servidor": "2000100000",
            "fecha_hora": "2021-10-17T22:51:46.559Z",
            "__v": 0
        },
        {
            "_id": "616ca91847c150dd0e260a2f",
            "carnet": "202000000",
            "nombre": "Estudiante Ejemplar 1",
            "evento": "Conferencia de redes 1",
            "id": 1,
            "link": "<<link a imagen>>",
            "keyPath": "<<keypath de objeto S3>>",
            "servidor": "2000100000",
            "fecha_hora": "2021-10-17T22:52:08.049Z",
            "__v": 0
        }
    ]
}
```

