export class UserIdVo{
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): UserIdVo {
    if (!value || value.length < 3) {
      throw new Error(`Invalid UserIdVo: ${value}`);
    }
    return new UserIdVo(value);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: UserIdVo): boolean {
    return this.value === other.getValue();
  }
}