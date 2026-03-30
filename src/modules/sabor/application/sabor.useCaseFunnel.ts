import { Injectable } from '@nestjs/common';
import { CreateSaborUseCase } from './createSabor.useCase';
import { GetSaborUseCase } from './getSabor.useCase';
import { UpdateSaborUseCase } from './updateSabor.useCase';
import { DeleteSaborUseCase } from './deleteSabor.useCase';
import { SaborIdVo } from '../domain/value-objects/saborIdVo';

@Injectable()
export class SaborUseCases {
  constructor(
    private readonly createUseCase: CreateSaborUseCase,
    private readonly getUseCase: GetSaborUseCase,
    private readonly updateUseCase: UpdateSaborUseCase,
    private readonly deleteUseCase: DeleteSaborUseCase,
  ) {}

  async create(dto: CreateSaborDto) {
    return await this.createUseCase.execute(dto);
  }

  async findAll() {
    return await this.getUseCase.execute();
  }

  async update(id: SaborIdVo, data: any) {
    return await this.updateUseCase.execute(id, data);
  }

  async remove(id: SaborIdVo) {
    return await this.deleteUseCase.execute(id);
  }
}