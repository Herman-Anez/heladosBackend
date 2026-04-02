import { Cliente, ClienteProps, IClienteRepository } from '../../domain/cliente.entity';
import { CreateClienteDto } from '../dtos/cliente.dto';
import { ClienteIdVo } from '../../domain/value-objects/cliente-vos';
 @Injectable() 
export class CreateClienteUseCase {

  constructor( @Inject('IClienteRepository') private readonly repository: IClienteRepository) {}

  async execute(createclienteDto: CreateClienteDto): Promise<void> {
    const clienteprops :ClienteProps= {
      /*apply props*/
    }
    const cliente = Cliente.create(clienteprops,new uuid(ClienteIdVo));
    return this.repository.save(cliente);
  }
}