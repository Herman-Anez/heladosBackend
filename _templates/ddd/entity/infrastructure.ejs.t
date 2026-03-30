---
to: src/modules/<%= h.changeCase.param(name) %>/infrastructure/TypeOrm<%= h.changeCase.pascal(name) %>Repository.ts
---
<% 
  Name = h.changeCase.pascal(name)
  Table = h.changeCase.snake(h.inflection.pluralize(name))
-%>
import { I<%= Name %>Repository } from '../domain/<%= Name %>Entity';
import { <%= Name %>Entity } from '../domain/<%= Name %>Entity';
import { <%= Name %>IdVo } from '../domain/value-objects/<%= Name %>IdVo';
export class TypeOrm<%= Name %>Repository implements I<%= Name %>Repository {
  private tableName = '<%= Table %>';

  async save(entity: <%= Name %>Entity): Promise<void> {
    console.log(`Guardando en tabla ${this.tableName}`);
  }

  findById(id: <%= Name %>IdVo): Promise< <%= Name %>Entity | null> {
    throw new Error('Method not implemented.');
  }
}


import { Sabor } from 'src/sabor/domain/entities/sabor.entity';
import { SaborRepository } from 'src/sabor/domain/repositories/sabores.repository';

export class InMemorySaboresRepository implements SaborRepository {
  private sabores: Sabor[] = [];

  async create(sabor: Sabor): Promise<Sabor> {
    this.sabores.push(sabor);
    return sabor;
  }

  async findAll(): Promise<Sabor[]> {
    return this.sabores;
  }

  async findById(id: string): Promise<Sabor | null> {
    return this.sabores.find((p) => p.id === id) || null;
  }

  async update(sabor: Sabor): Promise<Sabor> {
    const index = this.sabores.findIndex((p) => p.id === sabor.id);
    this.sabores[index] = sabor;
    return sabor;
  }

  async delete(id: string): Promise<void> {
    this.sabores = this.sabores.filter((p) => p.id !== id);
  }
}
