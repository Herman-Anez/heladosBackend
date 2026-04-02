import { AggregateRoot } from '../../../shared/domain/aggregateRoot';
import { ClienteIdVo, ClienteEmail,ClienteNumber, } from './value-objects/cliente-vos';
import { ClienteCreatedEvent } from './events/cliente-created-event';
export interface ClienteProps {
  createdAt: Date;
  id: ClienteIdVo
  email: ClienteEmail;
  number: ClienteNumber;
}

export class Cliente extends AggregateRoot< ClienteProps, ClienteIdVo> {
  
  // El constructor ahora llama a super()
  private constructor(props: ClienteProps) {
    super(props);
  }

  static create(props: ClienteProps): Cliente {
    const entity = new Cliente(props);

        entity.record(new ClienteCreatedEvent(entity.id));
    
    return entity;
  }
}
/**
 * Contrato del Repositorio para Cliente
 * Se implementará en la capa de Infrastructure
 */
export interface IClienteRepository {
  save(entity: Cliente): Promise<void>;
  findById(id: ClienteIdVo): Promise< Cliente | null>;
  findAll(): Promise< Cliente[]>;
  delete(id: ClienteIdVo): Promise<void>;
}