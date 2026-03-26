// src/ice-cream/domain/ice-cream.repository.ts

import { CrearSaborDto } from '../dto/create-sabor.dto';
import { UpdateSaborDto } from '../dto/update-sabor.dto';
import { Sabor } from '../entities/sabor.entity';

export abstract class SaborControllersRepository {
  abstract findAll(): Promise<Sabor[]>;
  abstract create(crearSaborDto: CrearSaborDto): Promise<Sabor>;
  abstract findById(id: string): Promise<Sabor | null>;
  abstract update(id: string, updateSaborDto: UpdateSaborDto): Promise<Sabor>;
  abstract delete(id: string): Promise<void>;
}
