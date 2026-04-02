import { Injectable } from '@nestjs/common';
import { CreateClienteUseCase } from './usecases/create-cliente.usecase';
import { GetClienteUseCase } from './usecases/get-cliente.usecase';
import { UpdateClienteUseCase } from './usecases/update-cliente.usecase';
import { DeleteClienteUseCase } from './usecases/delete-cliente.usecase';
import { CreateClienteDto, UpdateClienteDto } from './dtos/cliente.dto';

@Injectable()
export class ClienteUseCases {
  constructor(
    private readonly createUseCase: CreateClienteUseCase,
    private readonly getUseCase: GetClienteUseCase,
    private readonly updateUseCase: UpdateClienteUseCase,
    private readonly deleteUseCase: DeleteClienteUseCase,
  ) {}

  async create(dto: CreateClienteDto) {
    return await this.createUseCase.execute(dto);
  }

  async findAll() {
    return await this.getUseCase.execute();
  }

  async update(id: string, dto: UpdateClienteDto) {
    return await this.updateUseCase.execute(id, dto);
  }

  async remove(id: string) {
    return await this.deleteUseCase.execute(id);
  }
}