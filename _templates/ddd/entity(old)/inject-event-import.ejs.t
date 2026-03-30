---
inject: true
to: "src/modules/<%= h.changeCase.param(name) %>/domain/<%= h.changeCase.pascal(name) %>Entity.ts"
before: "export interface <%= h.changeCase.pascal(name) %>Props"
skip_if: "CreatedEvent"
---
<% if(addEvents){ -%>
import { <%= h.changeCase.pascal(name) %>CreatedEvent } from './events/<%= h.changeCase.pascal(name) %>CreatedEvent';
<% } -%>