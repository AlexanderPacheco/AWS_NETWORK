## Documentación

### Modelo

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/1.png)


## Configuracion de infraestructura

A continuacion se detalla las configuraciones para montar la infraestructura en AWS.

## Creacion de VPC
> Se crea una VPC donde ira construido las demas configuraciones segun el modelo.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/a.png)

> La creacion final de la VPC se contruye con la ip 10.0.0.0/16, donde iran internamente las subnets.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/b.png)

## Creacion de Subnets

> La VPC creada anteriormente se le asignan 2 subnets privada y 1 publica.

> Podemos observar que las subnets creadas seran configuradas con ips en el rango de la VPC.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/c.png)

> Creacion de subnet privada 1, con ip 10.0.2.0/24

> Podemos ver que esta asignada a la VPC ProyectoFinalR2 creada anteriormente.

> Dicha subnet podmos observar que tiene asignada una Route table que crearemos mas adelante, la route table *RoutePrivadaR2PF*

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/d.png)

> Creacion de subnet privada 2, con ip 10.0.3.0/24

> Podemos ver que esta asignada a la VPC ProyectoFinalR2 creada anteriormente.

> Dicha subnet podmos observar que tiene asignada una Route table que crearemos mas adelante, la route table *RoutePrivada_2R2PF*

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/e.png)

> Creacion de subnet privada 2, con ip 10.0.1.0/24

> Podemos ver que esta asignada a la VPC ProyectoFinalR2 creada anteriormente.

> Dicha subnet podmos observar que tiene asignada una Route table que crearemos mas adelante, la route table *RoutePublicaR2PF*

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/f.png)

## Creacion de Route Tables

> Las route tables permiten a las EC2 que puertos y tipos de conexion aceptara, tiene que ir asociada a una subnet.

> Se creo una route table para cada subnet creada con anterioridad. Y cada route table va asociada a la VPC.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/g.png)

> Se crea la Route table para la subnet privada 1 y se asocia en la parte de *Subnet associations* a nuestra subnet.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/j.png)

> Se crea la Route table para la subnet privada 2 y se asocia en la parte de *Subnet associations* a nuestra subnet.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/k.png)

> Se crea la Route table para la subnet publica y se asocia en la parte de *Subnet associations* a nuestra subnet.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/l.png)

> A la route table en la seccion de *Routes* se crea la ruta de acceso a internet. Internet gateway se le asigna a route table publica para que pueda exponerse a internet.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/m.png)

## Creacion de Security Groups

> Se crearon 3 security groups, para las privadas vamos a observar que se agregan reglas de entrada diferentes para cada una de ellas, ya que una contiene la base de datos y otro el servicio como tal.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/s.png)

> En el security group de la subnet privada 1 especificamos las reglas de entrada hacia esa instancia.

> Este security group se le asignaran a dos instancias privadas que crearemos en el futuro.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/p.png)

> Este security group se crea especificamente para la subnet privada 2 que es donde tenemos la base de datos mongo, se abre el puerto que utiliza mongo para su conexion.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/q.png)

> Este security group se asignara al balanceador de carga por lo cual este debe tener acceso a internet, y especificamos eso en las reglas de entrada.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/t.png)

## Creacion de ACLs

> Access List utilizadas

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/main/Proyecto%201/res/acl1.jpeg)

> Access List privadas

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/main/Proyecto%201/res/acl2.jpeg)

> Access List publicas

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/main/Proyecto%201/res/acl3.jpeg)

## Creacion de instancias EC2

> Se crearon 4 instancias. 

> Las dos instancias privadas contendran nuestro servidor, dichas instancias no tendran acceso a internet. 

> La instancia mongomongo contendra nuestra base de datos.

> La instancia servidor1 tendra acceso a internet y a traves de este se accede a las dos instancias privadas.

> Cabe mencionar que las EC2 se le asigna una VPC, una subnet y un grupo de seguridad. Lo creado anteriormente.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/n.png)

> La instancia servidor1 es la unica que deber ser visible y esa tiene acceso a las privadas, en el servidor se configura por medio de su pem hacia esas privadas para que tenga acceso a ellas, se explica mas adelante.

> En esta instancia especificamos la subnet publica y la VPC a la que pertenece.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/o.png)

> Resumen de la instancia de mongomongo donde especificamos que pertenece a la subnet R2Privada2

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/u.png)

> Resumen de la instancia privada 1, esta no tiene acceso a internet, solo el servidor puede acceder a ella.

> En AWS le asignamos una nat gateway a la subnet privada 1 para que acceda a internet, ya que ese accede a S3 para guardar imagenes.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/v.png)

> Resumen de la instancia privada 2, esta no tiene acceso a internet, solo el servidor puede acceder a ella.

> En AWS le asignamos una nat gateway a la subnet privada 1 para que acceda a internet, ya que ese accede a S3 para guardar imagenes.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/w.png)

> Creamos una NAT con acceso para tener acceso a internet.

> La nat se agrega al route table de la privada a la que queremos con internet, que es la route table privada 1.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/x.png)

## Creacion de Balanceador de Carga

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/y.png)

> Dentro de las instancias del balanceador especificamos que las instancias privada 1 y privada 2 creadas anteriormente.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/z.png)

> El balanceador esta siempre preguntando a nuestras privadas 1 y 2 si estan activas, esto lo hacemos en *Comprobacion de estado*.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/za.png)

> Ruta DNS generada por el balanceador de carga.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/zb.png)

## Configuracion de instancias EC2

> Ya que en este momento las instancias estan vacias, debemos subir nuestra repo a cada instancia y levantar el servicio, para acceder a nuestras instancias hacemos uso del archivo *pem* que contiene la clave de acceso.

> En este caso accedemos a nuestra instancia servidor.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/w1-entry-ec2private.jpeg)

> Estando en servidor 1, accedemos a las instancias privadas 1 y 2, y tambien a la de mongo haciendo uso del archivo *pem*

> Haciendo uso de los siguientes comandas para realizar la conexion.

```
//Damos permisos al archivo pem
chmod 400 "servers.pem"
//Conectamos a la instancia de servidores
ssh -i "servers.pem" ec2-user@10.02.82
```

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/w2-getkey.jpeg)

> Para no hacer uso seguido de nuestro archivo *.pem*, generamos una clave de acceso para las privadas.

> Creamos una clave ssh en el servidor para utilizarlo en las dos instancias privadas.

```
//Crea una clave
ssh-keygen
```


![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/w3-savekey.jpeg)

> Leemos la clave y la guardamos.

```
cat /home/ec2-user/.ssh/id_rsa.pub
```

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/w4-savekye.jpeg)

> Accedemos a una de nuestras instancias privadas y hacemos uso de nuestra clave copiada anteriormente

```
// Abrimos el archivo authorized_keys
nano authorized_keys
// Copiamos nuestra clave en el archivo
// Salimos de nuestra virtual
exit
// Ahora para acceder sin el .pem solo ponemos
ssh 10.0.2.103
```

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/w5.jpeg)

> Nos conectamos a nuestra instancia privada 1 y 2.

> En estas maquinas descargamos nuestra repo y docker para levantar nuestro servicio.

```
ssh ubuntu@10.0.3.126
```

> Descargamos nuestra repo y creamos una imagen de nuestro servidor, cabe recalcar que para que se note en el balanceador cada servicio hay que hacer un cambio de un carne en cada instancia antes de crear la imagen.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/w6.jpeg)

> Creamos nuestra imagen posicionandonos en la ruta de nuestro Dockerfile.

```
docker images
docker build -t server .
```

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/w7-server.jpeg)

> Levantamos nuestro servicio.

```
docker run -p 80:80 -d --name server server
```

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/w8.jpeg)

> SUBNET PRIVADA 2 - BD mongo - compilamos un contenedor con mongo el cual sera usada por nuestros servidores.

> SUBNET PRIVADA 1 - cambiamos una linea a un carne y compilamos una api con la ip privada de mongo, en cada server.

> Las privadas ya deben hacer referencia en el codigo de conexion hacia nuestra base de datos.

## Configuracion de Dominio y Certificado

> Por me dio de github student pack iniciamos sesion en *name.com* para el dominio publico, en aws se activa ese dominio. Se configura en ambos lados.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/zc.png)

> En AWS Certificate Manage configuramos el dominio que nos suministra name.com

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/zd.png)

> Configuramos el cname de aws hacia name.com para que tengan acceso y se genere el certificado.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/ze.png)

> Configuracion de reenvio de dominio.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/zf.png)

> Si el certificado funciono, tendria que mostrarnos nuestro dominio seguro.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/zg.png)

> Para exponer nuestro frontend se utilizo la libreria *gh-pages*.

![](https://github.com/Otzoy97/REDES2_2S2021_GRUPO18/blob/feature/Markdown/Proyecto%201/res/zh.png)
