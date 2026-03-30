export class SaborNombre {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): SaborNombre {
    if (!value || value.length < 3) {
      throw new Error(`Invalid Nombre: ${value}`);
    }
    return new SaborNombre(value);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: SaborNombre): boolean {
    return this.value === other.getValue();
  }
}
