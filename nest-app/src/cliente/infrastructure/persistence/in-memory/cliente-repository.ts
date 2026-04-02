import { Cliente, IClienteRepository  } from '../../../domain/cliente.entity';
import { ClienteIdVo } from '../../../domain/value-objects/cliente-vos';

export class InMemoryClienteRepository implements IClienteRepository {
  private clientes: Cliente[] = [];

  async save(cliente: Cliente): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    this.clientes.push(cliente);
    return Promise.resolve();
  }

  async create(cliente: Cliente): Promise<Cliente> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    this.clientes.push(cliente);
    return cliente;
  }

  async findAll(): Promise<Cliente[]> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    return this.clientes;
  }

  async findById(id: ClienteIdVo): Promise<Cliente | null> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    return this.clientes.find((p) => p.id.getValue() === id.getValue()) || null;
  }

  async update(cliente: Cliente): Promise<Cliente> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    const index = this.clientes.findIndex((p) => p.id.getValue() === cliente.id.getValue());
    this.clientes[index] = cliente;
    return cliente;
  }

  async delete(id: ClienteIdVo): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    this.clientes = this.clientes.filter((p) => p.id.getValue() !== id.getValue());
  }
}
