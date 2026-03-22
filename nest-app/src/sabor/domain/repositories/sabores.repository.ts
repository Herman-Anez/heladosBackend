// src/ice-cream/domain/ice-cream.repository.ts

import { Sabor } from '../entities/sabor.entity';

export abstract class SaborRepository {
  abstract findAll(): Promise<Sabor[]>;
  abstract create(sabor: Sabor): Promise<Sabor>;
  abstract findById(id: string): Promise<Sabor | null>;
  abstract update(product: Sabor): Promise<Sabor>;
  abstract delete(id: string): Promise<void>;
}
