import { Injectable } from '@nestjs/common';
import { SaboresRepository } from 'src/sabores/domain/repositories/sabores.repository';

@Injectable()
export class UpdateSaborUseCase {
  constructor(private readonly repo: SaboresRepository) {}

  async execute(id: string, name: string, price: number) {
    const sabor = await this.repo.findById(id);
    if (!sabor) throw new Error('Product not found');

    sabor.updateName(name);
    sabor.updatePrice(price);

    return this.repo.update(sabor);
  }
}
