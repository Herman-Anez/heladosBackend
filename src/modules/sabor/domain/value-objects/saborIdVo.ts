export class SaborIdVo{
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): SaborIdVo {
    if (!value || value.length < 3) {
      throw new Error(`Invalid SaborIdVo: ${value}`);
    }
    return new SaborIdVo(value);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: SaborIdVo): boolean {
    return this.value === other.getValue();
  }
}