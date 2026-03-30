---
to: src/modules/<%= h.changeCase.param(name) %>/domain/<%= h.changeCase.pascal(name) %>Entity.ts
---
<% 
  const Name = h.changeCase.pascal(name)
  const VoClassName = addVO ? Name + h.changeCase.pascal(voName) : null
  const VoHolder = addVO ? h.changeCase.camel(voName) : null
  const EventName = Name + 'CreatedEvent'
-%>
<% if(addVO){ -%>
import { <%= VoClassName %> } from './value-objects/<%= VoClassName %>';
<% } -%>
<% if(addEvents){ -%>
import { <%= EventName %> } from './events/<%= EventName %>';
<% } -%>

export interface <%= Name %>Props {
  id: string;
  createdAt: Date;
<% if(addVO){ -%>
  <%= VoHolder %>: <%= VoClassName %>;
<% } -%>
}

export class <%= Name %>Entity {
<% if(addEvents){ -%>
  private _domainEvents: any[] = [];
<% } -%>

  constructor(public readonly props: <%= Name %>Props) {}

  static create(props: <%= Name %>Props): <%= Name %>Entity {
    const entity = new <%= Name %>Entity(props);
<% if(addEvents){ -%>
    entity.record(new <%= EventName %>(props.id));
<% } -%>
    return entity;
  }

<% if(addEvents){ -%>
  public pullDomainEvents(): any[] {
    const events = [...this._domainEvents];
    this._domainEvents = [];
    return events;
  }

  protected record(event: any): void {
    this._domainEvents.push(event);
  }
<% } -%>
}

export interface I<%= Name %>Repository {
  save(entity: <%= Name %>Entity): Promise<void>;
  findById(id: string): Promise<<%= Name %>Entity | null>;
}