import { Injectable } from '@nestjs/common';
import { IClienteRepository } from '../../domain/cliente.entity';
import { ClienteIdVo } from '../../domain/value-objects/cliente-vos';


@Injectable()
export class DeleteClienteUseCase {
  constructor(private readonly repo: IClienteRepository) {}

  async execute(id:  ClienteIdVo ) {
    return this.repo.delete(id);
  }
}
