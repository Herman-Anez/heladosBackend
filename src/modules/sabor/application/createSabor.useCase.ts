import { ISaborRepository } from '../domain/sabor.entity';

export class CreateSaborUseCase {
  constructor(private repository: ISaborRepository) {}

  async execute(input: any): Promise<void> {
    // 1. Lógica de orquestación
    // 2. Guardar en repo
  }
}