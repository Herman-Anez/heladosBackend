---
to: src/modules/<%= h.changeCase.param(name) %>/infrastructure/persistence/in-memory/<%= h.changeCase.camel(name) %>.InMemory<%= h.changeCase.pascal(name) %>Repository.ts
---
<% 
  const Name = h.changeCase.pascal(name)
  const Lname = h.changeCase.camel(name)
  const IdName = Name + 'IdVo' 
  const Plural = h.changeCase.camel(plural)
  const VoClassName = addVO ? Name + h.changeCase.pascal(voName) : null
  const VoHolder = addVO ? h.changeCase.camel(voName) : null
-%>
import { <%= Name %>, I<%= Name %>Repository  } from '../../../domain/<%= Lname %>.entity';
import { <%= Name %>IdVo } from '../../../domain/value-objects/<%= Lname %>IdVo';

export class InMemory<%= Name %>Repository implements I<%= Name %>Repository {
  private <%= Plural %>: <%= Name %>[] = [];

  async save(<%= Lname %>: <%= Name %>): Promise<void> {
    this.<%= Plural %>.push(<%= Lname %>);
  }

  async create(<%= Lname %>: <%= Name %>): Promise< <%= Name %>> {
    this.<%= Plural %>.push(<%= Lname %>);
    return <%= Lname %>;
  }

  async findAll(): Promise< <%= Name %>[]> {
    return this.<%= Plural %>;
  }

  async findById(id: <%= Name %>IdVo): Promise< <%= Name %> | null> {
    return this.<%= Plural %>.find((p) => p.id.getValue() === id.getValue()) || null;
  }

  async update(<%= Lname %>: <%= Name %>): Promise< <%= Name %>> {
    const index = this.<%= Plural %>.findIndex((p) => p.id.getValue() === <%= Lname %>.id.getValue());
    this.<%= Plural %>[index] = <%= Lname %>;
    return <%= Lname %>;
  }

  async delete(id: <%= Name %>IdVo): Promise<void> {
    this.<%= Plural %> = this.<%= Plural %>.filter((p) => p.id.getValue() !== id.getValue());
  }
}
