---
to: src/modules/<%= h.changeCase.param(name) %>/infrastructure/TypeOrm<%= h.changeCase.pascal(name) %>Repository.ts
---
<% 
  Name = h.changeCase.pascal(name)
  Table = h.changeCase.snake(h.inflection.pluralize(name))
-%>
import { I<%= Name %>Repository } from '../domain/<%= Name %>Entity';
import { <%= Name %>Entity } from '../domain/<%= Name %>Entity';

export class TypeOrm<%= Name %>Repository implements I<%= Name %>Repository {
  private tableName = '<%= Table %>';

  async save(entity: <%= Name %>Entity): Promise<void> {
    console.log(`Guardando en tabla ${this.tableName}`);
  }

  async findById(id: string): Promise<<%= Name %>Entity | null> {
    return null;
  }
}