import { IUserRepository } from '../domain/UserEntity';

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(input: any): Promise<void> {
    // 1. Lógica de orquestación
    // 2. Guardar en repo
  }
}