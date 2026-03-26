
# Servicio de inventario

Identidades

Sabor {
    - id: Integer
    + nombre: String
    + precio: Integer
    + stock: Integer
    + avalivity: Boll
}
Toping {
    - id: Integer
    + nombre: String
    + precio: Integer
    + avalivity: Boll
}

Vo
SaborVo {
    - id: Integer
    + nombre: String
    + precio: Integer
    + stock: Integer
    + avalivity: Boll
}
TopingVo {
    - id: Integer
    + nombre: String
    + precio: Integer
    + avalivity: Boll
}

Nos permite registrar examinar y editar los productos del catalogo

Casos de uso

Un CRUD por cada Identidad del dominio
