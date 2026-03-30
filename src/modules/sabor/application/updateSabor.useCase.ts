import { ISaborRepository } from '../domain/sabor.entity';
import { SaborIdVo } from '../domain/value-objects/saborIdVo';

export class UpdateSaborUseCase {
  constructor(private repository: ISaborRepository) {}

  async execute(id: SaborIdVo, data: any): Promise<void> {
    // 1. Lógica de orquestación
    // 2. Guardar en repo
  }
}