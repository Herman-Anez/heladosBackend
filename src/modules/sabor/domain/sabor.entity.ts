import { AggregateRoot } from '../../../shared/domain/aggregateRoot';
import { SaborIdVo } from './value-objects/saborIdVo';
import { SaborCreatedEvent } from './events/saborCreatedEvent';
import { SaborNombre } from './value-objects/saborNombre';

export interface SaborProps {
  createdAt: Date;
  nombre: SaborNombre;
  // Añade aquí el resto de VOs si addVO es true...
}

export class Sabor extends AggregateRoot< SaborProps> {
  
  // El constructor ahora llama a super()
  private constructor(props: SaborProps, id: SaborIdVo) {
    super(props, id.getValue());
  }

  static create(props: SaborProps, id: SaborIdVo): Sabor {
    const entity = new Sabor(props, id);

        entity.record(new SaborCreatedEvent(id.getValue()));
    
    return entity;
  }
}
/**
 * Contrato del Repositorio para Sabor
 * Se implementará en la capa de Infrastructure
 */
export interface ISaborRepository {
  save(entity: Sabor): Promise<void>;
  findById(id: SaborIdVo): Promise<Sabor | null>;
  findAll(): Promise<Sabor[]>;
  delete(id: SaborIdVo): Promise<void>;
}