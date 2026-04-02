import {  Cliente } from './cliente.entity';
import {  ClienteIdVo } from './value-objects/cliente-vos';

describe(' Cliente Entity', () => {
  it('debería crear un  cliente válido y registrar el evento  ClienteCreatedEvent', () => {
    const id =  ClienteIdVo.create('123-abc');
    /*Agregar otros atributos necesarios*/
    
    const  cliente =  Cliente.create({
    /*Agregar otros atributos necesarios*/
    }, id);

    expect( cliente.id.getValue()).toBe('123-abc');
    // Verificamos que el evento se grabó en la lista interna [cite: 21, 133]
    expect( cliente.pullDomainEvents()).toHaveLength(1); 
  });

  it('debería lanzar error si el id no es valido', () => {
    expect(() => {
       ClienteIdVo.create('no'); // El VO tiene validación de longitud [cite: 100]
    }).toThrow();
  });
});