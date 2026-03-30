import { Sabor, ISaborRepository  } from '../../../domain/sabor.entity';
import { SaborIdVo } from '../../../domain/value-objects/saborIdVo';

export class InMemorySaborRepository implements ISaborRepository {
  private sabores: Sabor[] = [];

  async save(sabor: Sabor): Promise<void> {
    this.sabores.push(sabor);
  }

  async create(sabor: Sabor): Promise< Sabor> {
    this.sabores.push(sabor);
    return sabor;
  }

  async findAll(): Promise< Sabor[]> {
    return this.sabores;
  }

  async findById(id: SaborIdVo): Promise< Sabor | null> {
    return this.sabores.find((p) => p.id === id.getValue()) || null;
  }

  async update(sabor: Sabor): Promise< Sabor> {
    const index = this.sabores.findIndex((p) => p.id === sabor.id);
    this.sabores[index] = sabor;
    return sabor;
  }

  async delete(id: SaborIdVo): Promise<void> {
    this.sabores = this.sabores.filter((p) => p.id !== id.getValue());
  }
}
