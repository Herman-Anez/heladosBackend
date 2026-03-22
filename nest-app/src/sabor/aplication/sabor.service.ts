import { Injectable } from '@nestjs/common';

import { CreateSaborUseCase } from './use-case/create-sabor.usecase';
import { DeleteSaborUseCase } from './use-case/delete-sabor.usecase';
import { GetSaborUseCase } from './use-case/get-sabor.usecase';
import { UpdateSaborUseCase } from './use-case/update-sabor.usecase';
import { CrearSaborDTO } from '../presentation/dto/create-sabor.dto';

@Injectable()
export class SaborService {
  constructor(
    private readonly createUseCase: CreateSaborUseCase,
    private readonly getUseCase: GetSaborUseCase,
    private readonly updateUseCase: UpdateSaborUseCase,
    private readonly deleteUseCase: DeleteSaborUseCase,
  ) {}
  async create(dto: CrearSaborDTO) {
    await this.createUseCase.execute(dto);
    return 'This action adds a new sabor';
  }

  // findAll() {
  //   return `This action returns all sabor`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} sabor`;
  // }

  // update(id: number, updateSaborDto: UpdateSaborDto) {
  //   return `This action updates a #${id} sabor`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} sabor`;
  // }
}
