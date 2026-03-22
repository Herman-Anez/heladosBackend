import { Injectable } from '@nestjs/common';
import { SaborRepository } from 'src/helados/domain/repositories/sabor.repository';

@Injectable()
export class GetSaborUseCase {
  constructor(private readonly repo: SaborRepository) {}

  async execute() {
    return this.repo.findAll();
  }
}
