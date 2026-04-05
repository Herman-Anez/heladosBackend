import { Cliente } from '../../domain/Cliente.entity';
import { ClienteIdVo, ClienteEmail,ClienteNumber,ClienteAddress, } from './value-objects/cliente-vos';
// Importar aquí el resto de tus VOs

export class ClienteMapper {
  /**
   * Transforma la Entidad de Dominio a un objeto plano para la Base de Datos
   */
  static toPersistence(entity: Cliente): any {
    return {
      id: entity.id.getValue(),
      // Aquí mapeas las props a columnas de DB
      createdAt: entity.props.createdAt,
      // ejemplo: email: entity.props.email.getValue(),
    };
  }

  /**
   * Transforma el registro de la Base de Datos a una Entidad de Dominio
   */
  static toDomain(record: any): Cliente {
    const id = ClienteIdVo.create(record.id);
    
    // Aquí reconstruyes la entidad con sus VOs
    return Cliente.create({
      createdAt: record.createdAt,
      // ejemplo: email: ClienteEmail.create(record.email),
    }, id);
  }
}