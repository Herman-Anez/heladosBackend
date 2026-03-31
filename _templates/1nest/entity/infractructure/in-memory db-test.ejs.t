---
to: test-src/modules/<%= h.changeCase.param(name) %>/infrastructure/persistence/in-memory/<%= h.changeCase.kebabCase(name) %>-repository.spec.ts
---
<% 
  const Name = h.changeCase.pascal(name)
  const Lname = h.changeCase.camel(name)
  kname = h.changeCase.kebabCase(name)
  const IdName = Name + 'IdVo' 
  const Plural = h.changeCase.camel(plural)
  const list = typeof voList === 'string' ? voList.split(',').map(v => v.trim()) : (voList || []);  

-%>
import { InMemory<%= Name %>Repository } from './<%= Lname %>-repository';
import { <%= Name %> } from '../../../domain/<%= Lname %>.entity';
import { <%= Name %>IdVo } from '../../../domain/value-objects/<%= Lname %>-id-vo';
import {<% if(addVO){ -%>
<% list.forEach(vo => { -%>
<% 
  VoName = h.changeCase.pascal(vo)
  VoClassName = addVO ? Name + h.changeCase.pascal(vo) : null
  LVoClassName = addVO ? kname +"-"+h.changeCase.kebabCase(vo) : null
-%><%= Name %><%= VoName %> , <% }) -%><% } -%>} from '../../../domain/value-objects/<%= Lname %>-vos';

describe('InMemory<%= Name %>Repository', () => {
  let repository: InMemory<%= Name %>Repository;

  beforeEach(() => {
    // Inicializamos un repositorio limpio antes de cada test
    repository = new InMemory<%= Name %>Repository();
  });

  // Función helper para crear un <%= Name %> válido rápidamente
  const createStub<%= Name %> = (idString: string, <%= VoClassName %>: string = 'test@test.com') => {
    const id = <%= Name %>IdVo.create(idString);
    <% if(addVO){ -%>
<% list.forEach(vo => { -%>
<% 
  VoName = h.changeCase.pascal(vo)
  VoClassName = addVO ? Name + h.changeCase.pascal(vo) : null
  LVoClassName = addVO ? kname +"-"+h.changeCase.kebabCase(vo) : null
-%>const <%= Lname %><%= VoName %> = <%= VoClassName %>.create(<%= VoClassName %>);<% }) -%><% }-%>
    return <%= Name %>.create({ email, createdAt: new Date() }, id);
  };

  it('debería guardar y encontrar un <%= Lname %> por su ID', async () => {
    // Arrange
    const <%= Lname %> = createStub<%= Name %>('id-1');

    // Act
    await repository.save(<%= Lname %>);
    const result = await repository.findById(<%= Lname %>.id);

    // Assert
    expect(result).not.toBeNull();
    expect(result?.id.getValue()).toBe('id-1');
  });

  it('debería retornar null si el <%= Lname %> no existe', async () => {
    const idInexistente = <%= Name %>IdVo.create('no-existe');
    const result = await repository.findById(idInexistente);
    expect(result).toBeNull();
  });

  it('debería retornar todos los <%= Plural %> guardados', async () => {
    await repository.save(createStub<%= Name %>('id-1'));
    await repository.save(createStub<%= Name %>('id-2'));

    const all = await repository.findAll();
    expect(all).toHaveLength(2);
  });

  it('debería actualizar un <%= Lname %> existente', async () => {
    // Arrange
    const <%= Lname %> = createStub<%= Name %>('id-1', 'original@test.com');
    await repository.save(<%= Lname %>);

    // Act: Creamos una instancia del mismo <%= Lname %> pero con email modificado
    const clienteActualizado = <%= Name %>.create(
      { ...<%= Lname %>.props, email: <%= Name %>Email.create('updated@test.com') },
      <%= Lname %>.id
    );
    await repository.update(clienteActualizado);

    // Assert
    const result = await repository.findById(<%= Lname %>.id);
    expect(result?.props.email.getValue()).toBe('updated@test.com');
  });

  it('debería eliminar un <%= Lname %> correctamente', async () => {
    // Arrange
    const <%= Lname %> = createStub<%= Name %>('id-delete');
    await repository.save(<%= Lname %>);

    // Act
    await repository.delete(<%= Lname %>.id);

    // Assert
    const result = await repository.findById(<%= Lname %>.id);
    expect(result).toBeNull();
  });
});