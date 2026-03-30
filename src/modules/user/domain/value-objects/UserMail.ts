export class UserMail {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): UserMail {
    if (!value || value.length < 3) {
      throw new Error(`Invalid Mail: ${value}`);
    }
    return new UserMail(value);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: UserMail): boolean {
    return this.value === other.getValue();
  }
}
