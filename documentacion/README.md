# heladosBackend
Ejemplo practico de un Backend de helados aplicando DDD y Patron Hexagonal

Nuestra heladeria nos deja Registrar, Consultar, Editar precio y Eliminar helados

## DDD estandars

### Dominio Principal

Nuestra app tiene como finalidad ofrecer un servicio de venta de Helados.

Nuestro servicio nos dejara registrar una cantidad de sabores y topings con los cuales se armara el producto final

Nos dejara usar ese inventario para poder vender helados.

### Definicion de lenguaje

Sabor: Un catálogo de opciones disponibles (Vainilla, Chocolate, etc.). Tiene reglas: "No se puede vender un sabor que esté marcado como 'agotado'".

Toping: Un catálogo de opciones disponibles (Vainilla, Chocolate, etc.). Tiene reglas: "No se puede vender un sabor que esté marcado como 'agotado'".

Helado: Es el producto final que el cliente recibe. esta compuesto por un sabor y hasta 3 topings.

Venta: un registro de los helados vendidos en una transaccion

Cliente: Una representacion del usuario a comprar

### Identidades y Vo

HeladoVo {
    + sabor: SaborVo 
    + topings: Toping[] 
}
Sabor {
    - id: Integer
    + nombre: String
    + precio: Integer
}
SaborVo {
    + nombre: String
    + precio: Integer
}
Toping {
    - id: Integer    
    + nombre: String
    + precio: Integer
}
TopingVo {
    + nombre: String
    + precio: Integer
}
Cliente {
    - id: ClienteId
    + nombre: String
}
Venta {
    - id: Integer    
    + clienteId: String
    + precio: Integer
}

### Sub dominios
