import { Injectable } from '@nestjs/common';
import { Sabor } from 'src/sabor/domain/entities/sabor.entity';
import { SaborRepository } from 'src/sabor/domain/repositories/sabores.repository';
import { CrearSaborDTO } from 'src/sabor/presentation/dto/create-sabor.dto';

import { v4 as uuid } from 'uuid';

@Injectable()
export class CreateSaborUseCase {
  constructor(private readonly repo: SaborRepository) {}

  async execute(createSaborDto: ) {
    const sabor = new Sabor(uuid(), createSaborDto.name, createSaborDto.price);
    return this.repo.create(sabor);
  }
}
