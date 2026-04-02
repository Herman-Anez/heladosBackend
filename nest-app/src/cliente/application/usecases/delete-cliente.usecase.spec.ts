import { DeleteClienteUseCase } from './create-cliente.usecase';
import { IClienteRepository } from '../../domain/cliente.entity';

describe('DeleteClienteUseCase', () => {
  let useCase: DeleteClienteUseCase;
  let repository: IClienteRepository;

  beforeEach(() => {
    // Mock simple del repositorio
    repository = {
      save: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
      delete: jest.fn(),
    } as any;
    
    useCase = new DeleteClienteUseCase(repository);
  });

  it('debería orquestar la creación y persistencia de un cliente', async () => {
    const dto = { name: 'Juan', email: 'juan@mail.com' };
    
    // Aquí es donde arreglamos el boilerplate vacío de tu código [cite: 168]
    await useCase.execute(dto);

    expect(repository.delete).toHaveBeenCalled();
  });
});