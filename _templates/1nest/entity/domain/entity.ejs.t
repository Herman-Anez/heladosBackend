---
to: test-src/modules/<%= h.changeCase.param(name) %>/domain/<%= h.changeCase.kebabCase(name) %>.entity.ts
---
<% 
  const Name = h.changeCase.pascal(name)
  const Lname = h.changeCase.camel(name)
  kname = h.changeCase.kebabCase(name)
  const IdName = Name + 'IdVo' 
  const LIdName = kname + '-id-vo' 
  const list = typeof voList === 'string' ? voList.split(',').map(v => v.trim()) : (voList || []);  
-%>
import { AggregateRoot } from '../../../shared/domain/aggregateRoot';
import { <%= IdName %> } from './value-objects/<%= LIdName %>';
<% if(addEvents){ -%>
import { <%= Name %>CreatedEvent } from './events/<%= kname %>-created-event';
<% } -%>
<% if(addVO){ -%>
<% list.forEach(vo => { -%>
<% 
  VoName = h.changeCase.pascal(vo)
  VoClassName = addVO ? Name + h.changeCase.pascal(vo) : null
  LVoClassName = addVO ? kname +"-"+h.changeCase.kebabCase(vo) : null
-%>
import { <%= VoClassName %> } from './value-objects/<%= LVoClassName %>';
<% }) -%>
<% } -%>

export interface <%= Name %>Props {
  createdAt: Date;
  id: <%= IdName %>
  <% if(addVO){ -%>
<% list.forEach(vo => { -%>
<% 
  VoHolder = addVO ? h.changeCase.camel(vo) : null
-%>
<%= VoHolder %>: <%= VoClassName %>;
<% }) -%>
<% } -%>
}

export class <%= Name %> extends AggregateRoot< <%= Name %>Props, <%= Name %>IdVo> {
  
  // El constructor ahora llama a super()
  private constructor(props: <%= Name %>Props, id: <%= IdName %>) {
    super(props, id);
  }

  static create(props: <%= Name %>Props, id: <%= IdName %>): <%= Name %> {
    const entity = new <%= Name %>(props, id);

    <% if(addEvents){ -%>
    entity.record(new <%= Name %>CreatedEvent(id));
    <% } -%>

    return entity;
  }
}
/**
 * Contrato del Repositorio para <%= Name %>
 * Se implementará en la capa de Infrastructure
 */
export interface I<%= Name %>Repository {
  save(entity: <%= Name %>): Promise<void>;
  findById(id: <%= IdName %>): Promise< <%= Name %> | null>;
  findAll(): Promise< <%= Name %>[]>;
  delete(id: <%= IdName %>): Promise<void>;
}