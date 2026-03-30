---
to: src/modules/<%= h.changeCase.param(name) %>/application/delete<%= h.changeCase.pascal(name) %>.useCase.ts
---
<% 
Name = h.changeCase.pascal(name) 
Lname = h.changeCase.camel(name)
-%>
import { I<%= Name %>Repository } from '../domain/<%= Lname %>.entity';

export class Delete<%= Name %>UseCase {
  constructor(private repository: I<%= Name %>Repository) {}

  async execute(input: any): Promise<void> {
    // 1. Lógica de orquestación
    // 2. Guardar en repo
  }
}