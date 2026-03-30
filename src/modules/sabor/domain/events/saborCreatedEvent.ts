export class SaborCreatedEvent {
  public readonly occurredOn: Date;
  public readonly aggregateId: string;

  constructor(aggregateId: string) {
    this.aggregateId = aggregateId;
    this.occurredOn = new Date();
  }

  static eventName(): string {
    return 'sabor.created';
  }
}
