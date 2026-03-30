
# Sistema de usuarios

Nos permite registrar e identificar los distintos usuarios que van a usar el sistema.

Se encarga que la definicion e implementacion de roles

## Definicion de roles

Se definieron los siguientes roles

[Administrador](./definicion%20de%20roles/Administradores.md)
[Empleado](./definicion%20de%20roles/Empleados.md)
[Cliente](./definicion%20de%20roles/Clientes.md)

## Identidades

```bash
Usuario {
    - id: Integer
    + nombre: String
    + rol: Rol
}
Rol {
    + nombre: String
}
```

## VO

```bash
UsuarioVo {
    - id: Integer
    + nombre: String
    + rol: Rol
}

```
