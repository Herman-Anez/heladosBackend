import { AggregateRoot } from '../../../shared/domain/aggregateRoot';
import { UserIdVo } from './value-objects/UserIdVo';
import { UserCreatedEvent } from './events/UserCreatedEvent';
import { UserMail } from './value-objects/UserMail';

export interface UserProps {
  createdAt: Date;
  mail: UserMail;
  // Añade aquí el resto de VOs si addVO es true...
}

export class UserEntity extends AggregateRoot<UserProps> {
  
  // El constructor ahora llama a super()
  private constructor(props: UserProps, id: UserIdVo) {
    super(props, id.getValue());
  }

  static create(props: UserProps, id: UserIdVo): UserEntity {
    const entity = new UserEntity(props, id);

        entity.record(new UserCreatedEvent(id.getValue()));
    
    return entity;
  }
}
/**
 * Contrato del Repositorio para User
 * Se implementará en la capa de Infrastructure
 */
export interface IUserRepository {
  save(entity: UserEntity): Promise<void>;
  findById(id: UserIdVo): Promise<UserEntity | null>;
  findAll(): Promise<UserEntity[]>;
  delete(id: UserIdVo): Promise<void>;
}