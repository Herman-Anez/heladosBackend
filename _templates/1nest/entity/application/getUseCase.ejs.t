---
to: src/modules/<%= h.changeCase.param(name) %>/application/get<%= h.changeCase.pascal(name) %>.useCase.ts
---
<% 
Name = h.changeCase.pascal(name) 
Lname = h.changeCase.camel(name)
-%>
import { I<%= Name %>Repository } from '../domain/<%= Lname %>.entity';

export class Get<%= Name %>UseCase {
  constructor(private repository: I<%= Name %>Repository) {}

  async execute(): Promise<void> {
    // 1. Lógica de orquestación
    // 2. Guardar en repo
  }
}