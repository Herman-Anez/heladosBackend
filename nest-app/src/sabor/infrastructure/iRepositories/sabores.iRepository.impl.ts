/* eslint-disable @typescript-eslint/require-await */

import { Sabor } from 'src/sabor/domain/entities/sabor.entity';
import { SaborRepository } from 'src/sabor/domain/repositories/sabores.repository';

export class InMemorySaboresRepository implements SaborRepository {
  private sabores: Sabor[] = [];

  async create(sabor: Sabor): Promise<Sabor> {
    this.sabores.push(sabor);
    return sabor;
  }

  async findAll(): Promise<Sabor[]> {
    return this.sabores;
  }

  async findById(id: string): Promise<Sabor | null> {
    return this.sabores.find((p) => p.id === id) || null;
  }

  async update(sabor: Sabor): Promise<Sabor> {
    const index = this.sabores.findIndex((p) => p.id === sabor.id);
    this.sabores[index] = sabor;
    return sabor;
  }

  async delete(id: string): Promise<void> {
    this.sabores = this.sabores.filter((p) => p.id !== id);
  }
}
