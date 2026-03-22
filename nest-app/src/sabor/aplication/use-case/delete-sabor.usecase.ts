import { Injectable } from '@nestjs/common';
import { SaborRepository } from 'src/helados/domain/repositories/sabor.repository';

@Injectable()
export class DeleteSaborUseCase {
  constructor(private readonly repo: SaborRepository) {}

  async execute(id: string) {
    return this.repo.delete(id);
  }
}
