---
to: test-src/modules/<%= h.changeCase.param(name) %>/application/update<%= h.changeCase.pascal(name) %>.useCase.ts
---
<% 
Name = h.changeCase.pascal(name) 
Lname = h.changeCase.camel(name)
-%>
import { I<%= Name %>Repository } from '../domain/<%= Lname %>.entity';
import { <%= Name %>IdVo } from '../domain/value-objects/<%= Lname %>IdVo';

export class Update<%= Name %>UseCase {
  constructor(private repository: I<%= Name %>Repository) {}

  async execute(id: <%= Name %>IdVo, data: any): Promise<void> {
    // 1. Lógica de orquestación
    // 2. Guardar en repo
  }
}