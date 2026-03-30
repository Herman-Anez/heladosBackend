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

#### Servicio de inventario

Identidades

Sabor {
    - id: Integer
    + nombre: String
    + precio: Integer
}
Toping {
    - id: Integer    
    + nombre: String
    + precio: Integer
}

Nos permite registrar y editar los productos del catalogo

Casos de uso 

Un CRUD por cada Identidad del dominio

Servicio de usuarios

Nos permite registrar y editar los clientes

Casos de uso 

Un CRUD de usuarios





@startuml

!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml

title  "Diagrama de Componentes del Sistema de autenticación por correo"


System_Boundary(sy, "Heladeria", "  "){ 

    Container_Boundary(usuarios, "usuarios"){
        Container(c11, "Repositorio de Usuario",) 
        Component(Usuario, "Usuario", "Entity")
        Rel(Usuario, c11, "Usa")
    } 

    Container_Boundary(inventario, "inventario"){ 
        Container(inventarioService, "Inventario Service") 
    
         Container_Boundary(producto2, "producto2"){ 
               Component(p2, "Productos", "Entity")
               Container(p2repo, "Repositorio de productos") 
               Component(user_id_vo1p2, "UserId (Value Object)", "Identity Reference", "Referencia al ID de otro contexto")
               Rel(p2, user_id_vo1p2, "contiene") 
               Rel(p2repo ,p2 ,"Usa")
            }
             Rel(inventarioService ,p2repo ,"Usa")
    } 

    Container_Boundary(ventas, "ventas"){ 
            Component(Venta, "venta", "Entity")
            Container(c31, "Repositorio de ventas") 
            Component(user_id_vo2, "UserId (Value Object)", "Identity Reference", "Referencia al ID de otro contexto")
            Component(product_id_vo2, "ProductId (Value Object)", "Identity Reference", "Referencia al ID de otro contexto")
            Rel(Venta, user_id_vo2, "contiene") 
            Rel(Venta, product_id_vo2, "contiene") 
            Rel(c31, Venta ,"Usa")
    }


 Rel(product_id_vo2, p2,"Apunta a 1", "ID Mapping")
 Rel(user_id_vo2, Usuario,"Apunta a 2", "ID Mapping")
 Rel_R(user_id_vo1p2, Usuario,"Apunta a 3", "ID Mapping")



@enduml
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml

title "Arquitectura Heladería con Anti-Corruption Layer (ACL)"

System_Boundary(sy, "Heladeria System") {

    Container_Boundary(usuarios, "Bounded Context: Usuarios") {
        Component(Usuario, "Usuario (Agregado)", "Entity", "El modelo original")
        Container(RepoUser, "Repositorio Usuarios", "DB")
    }

    Container_Boundary(ventas, "Bounded Context: Ventas") {
        Component(Venta, "Venta", "Entity")
        
        ' El puerto: Ventas dice qué necesita de un usuario
        Component(IUserGate, "IUsuarioGateway", "Interface", "Define el contrato que Ventas entiende")
        
        ' El ACL: El traductor
        Component(usuario_acl, "UsuarioACL / Adaptador", "ACL", "Traduce 'Usuario' a 'VentaUserVO'")
        
        ' El VO interno de ventas
        Component(user_vo_interno, "VentaUserVO", "Value Object", "Modelo simplificado para Ventas")

        Rel(Venta, user_vo_interno, "usa")
        Rel(usuario_acl, IUserGate, "Implementa", "Inversión")
        Rel(IUserGate, user_vo_interno, "Retorna")
    }

    Container_Boundary(inventario, "Bounded Context: Inventario") {
        Component(p2, "Producto", "Entity")
        Component(inventario_acl, "InventarioACL", "ACL", "Traductor de productos")
    }
}

' Las dependencias externas solo las tocan las ACLs
Rel(usuario_acl, Usuario, "Consulta y Traduce", "JSON/gRPC")
Rel(inventario_acl, p2, "Consulta y Traduce", "JSON/gRPC")

' El flujo de la aplicación
Rel(Venta, IUserGate, "Solicita datos", "Puerto")

@enduml