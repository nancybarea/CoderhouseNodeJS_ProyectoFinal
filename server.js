const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const productosRouter = require('./routes/productos');
const carritosRouter = require('./routes/carritos');
const mdw = require("./middlewares/mdw_url");

// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/productos', productosRouter);
app.use('/api/carrito', carritosRouter);
app.use(mdw.ruta_invalida);

// obtengo los productos 
const cl_Producto = require("./modules/cl_Producto"); //importo la clase cl_Producto
const Producto = new cl_Producto();
let listadoProductos = Producto.getProductos();

//abro conexion del lado del servidor
io.on("connection", (socket) => {  // connection no se puede modificar, va ese valor.
    // "connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log('Usuario conectado')
    //envio datos al cliente (desde servidor)
    socket.emit('mensaje_inicio', listadoProductos) // (evento, msg)

    socket.on('mensaje_AltaProducto', data => {  
        console.log("io.on sockek.on mensaje_AltaProducto: inicio (server.js):")
        if (data.estado != "OK"){
          console.log("El producto no fue dado de alta.")
        }else{
          console.log("El producto fue dado de alta correctamente.") 
          //mando mensaje a todos los conectados para actualizar su listado de productos.
          io.sockets.emit('mensaje_inicio', listadoProductos);         
        } 
      })

});

// El servidor funcionando en el puerto 8080
const PORT = process.env.PORT || 8080  // en caso que no existe 8080 toma el primero libre
httpServer.listen(PORT, () => console.log('SERVER ON'))