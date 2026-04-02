import { Injectable } from '@nestjs/common';
import { IClienteRepository } from '../../domain/cliente.entity';
import { ClienteIdVo } from '../../domain/value-objects/cliente-vos';
import { DomainException } from '../../../shared/domain/domain-exception';

@Injectable()
export class UpdateClienteUseCase {
  constructor( @Inject('IClienteRepository') private repository: IClienteRepository) {}

  async execute(id: ClienteIdVo, data: any): Promise<void> {
    const clienteI = await this.repository.findById(id);
    if (!clienteI) throw new DomainException('Product not found');
    /*update Sabor atributes*/
    return this.repository.save(clienteI);
  }
}
