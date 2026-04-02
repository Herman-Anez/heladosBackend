import { ClienteIdVo } from '../value-objects/cliente-vos';
export class ClienteCreatedEvent {
  public readonly occurredOn: Date;
  public readonly aggregateId: ClienteIdVo;

  constructor(aggregateId: ClienteIdVo) {
    this.aggregateId = aggregateId;
    this.occurredOn = new Date();
  }

  static eventName(): string {
    return 'cliente.created';
  }
}
