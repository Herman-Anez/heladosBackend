import { DomainException } from '../../../shared/domain/domain-exception';

export class ClienteIdVo{
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): ClienteIdVo {
    if (!value || value.length < 3) {
      throw new DomainException('Invalid ClienteIdVo: ${value}');
    }
    return new ClienteIdVo(value);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: ClienteIdVo): boolean {
    return this.value === other.getValue();
  }
}
export class ClienteEmail {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): ClienteEmail {
    if (!value || value.length < 3) {
      throw new DomainException(`Invalid Email: ${value}`);
    }
    return new ClienteEmail(value);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: ClienteEmail): boolean {
    return this.value === other.getValue();
  }
}
export class ClienteNumber {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): ClienteNumber {
    if (!value || value.length < 3) {
      throw new DomainException(`Invalid Number: ${value}`);
    }
    return new ClienteNumber(value);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: ClienteNumber): boolean {
    return this.value === other.getValue();
  }
}
