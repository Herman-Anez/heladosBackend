import { InMemoryClienteRepository } from './cliente-repository';
import { Cliente,ClienteProps } from '../../../domain/cliente.entity';
import { ClienteIdVo,ClienteEmail,ClienteNumber,ClienteAddress, } from '../../../domain/value-objects/cliente-vos';

describe('InMemoryClienteRepository', () => {
  let repository: InMemoryClienteRepository;

  beforeEach(() => {
    repository = new InMemoryClienteRepository();
  });

  // Función helper dinámica para crear una entidad con todos sus VOs
const createStubCliente = (idString: string, firstVoValue: string = 'test-value') => {
    const props: ClienteProps = {
      id : ClienteIdVo.create(idString),
      createdAt: new Date(),
      email: ClienteEmail.create(firstVoValue),
      number: ClienteNumber.create('test-number'),
      address: ClienteAddress.create('test-address'),
    };
    return Cliente.create(props);
  };

  it('debería guardar y encontrar un cliente por su ID', async () => {
    const entity = createStubCliente('id-1');
    await repository.save(entity);
    const result = await repository.findById(entity.id);

    expect(result).not.toBeNull();
    expect(result?.id.getValue()).toBe('id-1');
  });

  it('debería retornar null si el cliente no existe', async () => {
    const idInexistente = ClienteIdVo.create('no-existe');
    const result = await repository.findById(idInexistente);
    expect(result).toBeNull();
  });

  it('debería retornar todos los clientes guardados', async () => {
    await repository.save(createStubCliente('id-1'));
    await repository.save(createStubCliente('id-2'));

    const all = await repository.findAll();
    expect(all).toHaveLength(2);
  });

  it('debería actualizar un cliente existente', async () => {
    // Arrange
    const entity = createStubCliente('id-1', 'original-value');
    await repository.save(entity);

    // Act: Modificamos el primer Value Object de la lista
    const updatedProps = { 
      ...entity.props, 
      email: ClienteEmail.create('updated-value') 
    };
    const entityActualizada = Cliente.create(updatedProps, entity.id);
    await repository.update(entityActualizada);

    // Assert
    const result = await repository.findById(entity.id);
    expect(result?.props.email.getValue()).toBe('updated-value');
  });

  it('debería eliminar un cliente correctamente', async () => {
    const entity = createStubCliente('id-delete');
    await repository.save(entity);

    await repository.delete(entity.id);

    const result = await repository.findById(entity.id);
    expect(result).toBeNull();
  });
});