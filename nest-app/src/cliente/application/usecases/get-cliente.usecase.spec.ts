import { Cliente, IClienteRepository } from '../../domain/cliente.entity';

 @Injectable() 
export class GetClienteUseCase {
  constructor( @Inject('IClienteRepository') private repository: IClienteRepository) {}

  async execute() : Promise< Cliente[]> {
    return this.repository.findAll();
  }
}




