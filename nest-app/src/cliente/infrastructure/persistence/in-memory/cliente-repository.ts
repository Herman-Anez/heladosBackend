import { Cliente, IClienteRepository  } from '../../../domain/cliente.entity';
import { ClienteIdVo } from '../../../domain/value-objects/cliente-vos';
import { ClienteMapper } from '../Cliente.mapper'; //

export class InMemoryClienteRepository implements IClienteRepository {
  // Ahora guardamos objetos planos (persistence models) en lugar de la entidad directamente
  private clientes: any[] = []; //

  async save(cliente: Cliente): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    
    // Usamos el Mapper para convertir la Entidad a un formato de persistencia
    const persistenceModel = ClienteMapper.toPersistence(cliente); //
    
    const index = this.clientes.findIndex((p) => p.id === persistenceModel.id);
    if (index !== -1) {
      this.clientes[index] = persistenceModel;
    } else {
      this.clientes.push(persistenceModel);
    }
  }

  async create(cliente: Cliente): Promise< Cliente> {
    await this.save(cliente);
    return cliente;
  }

  async findAll(): Promise< Cliente[]> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    // Mapeamos cada registro de vuelta a una Entidad de Dominio
    return this.clientes.map(record => ClienteMapper.toDomain(record)); //
  }

  async findById(id: ClienteIdVo): Promise< Cliente | null> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    const record = this.clientes.find((p) => p.id === id.getValue());
    
    if (!record) return null;
    
    // Reconstruimos la entidad rica usando el Mapper
    return ClienteMapper.toDomain(record); //
  }

  async update(cliente: Cliente): Promise< Cliente> {
    await this.save(cliente);
    return cliente;
  }

  async delete(id: ClienteIdVo): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    this.clientes = this.clientes.filter((p) => p.id !== id.getValue());
  }
}