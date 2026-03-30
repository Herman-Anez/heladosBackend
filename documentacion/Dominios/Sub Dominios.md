# Sub dominios

Al evaluar el sistema se detectaron se vio que se puede divir el proceso de desarrollo en los siguientes dominios

[Sistema de usuarios](./sistema%20de%20inventario/sistema%20de%20inventario.md)
[Sistema de inventario](./sistema%20de%20inventario/sistema%20de%20inventario.md)
[Sistema de ventas](./sistema%20de%20inventario/sistema%20de%20inventario.md)




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

