import { ISaborRepository } from '../domain/sabor.entity';

export class GetSaborUseCase {
  constructor(private repository: ISaborRepository) {}

  async execute(): Promise<void> {
    // 1. Lógica de orquestación
    // 2. Guardar en repo
  }
}