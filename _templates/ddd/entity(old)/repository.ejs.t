---
to: src/modules/<%= h.changeCase.param(name) %>/application/<%= h.changeCase.pascal(name) %>.service.ts
---
<% Name = h.changeCase.pascal(name) -%>
import { Create<%= Name %>UseCase } from './Create<%= Name %>.useCase';

export class <%= Name %>Repository {

  constructor(private readonly createUseCase: Create<%= Name %>UseCase) {}

 async create(dto: any): Promise<void> {
    return await this.createUseCase.execute(dto);
  }
}

