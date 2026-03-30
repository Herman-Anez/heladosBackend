---
to: src/modules/<%= h.changeCase.param(name) %>/application/<%= h.changeCase.camel(name) %>.useCaseFunnel.ts
---
<% 
Name = h.changeCase.pascal(name) 
Lname = h.changeCase.camel(name)
-%>
import { Injectable } from '@nestjs/common';
import { Create<%= Name %>UseCase } from './create<%= Name %>.useCase';
import { Get<%= Name %>UseCase } from './get<%= Name %>.useCase';
import { Update<%= Name %>UseCase } from './update<%= Name %>.useCase';
import { Delete<%= Name %>UseCase } from './delete<%= Name %>.useCase';
import { <%= Name %>IdVo } from '../domain/value-objects/<%= Lname %>IdVo';

@Injectable()
export class <%= Name %>UseCases {
  constructor(
    private readonly createUseCase: Create<%= Name %>UseCase,
    private readonly getUseCase: Get<%= Name %>UseCase,
    private readonly updateUseCase: Update<%= Name %>UseCase,
    private readonly deleteUseCase: Delete<%= Name %>UseCase,
  ) {}

  async create(dto: Create<%= Name %>Dto) {
    return await this.createUseCase.execute(dto);
  }

  async findAll() {
    return await this.getUseCase.execute();
  }

  async update(id: <%= Name %>IdVo, data: any) {
    return await this.updateUseCase.execute(id, data);
  }

  async remove(id: <%= Name %>IdVo) {
    return await this.deleteUseCase.execute(id);
  }
}