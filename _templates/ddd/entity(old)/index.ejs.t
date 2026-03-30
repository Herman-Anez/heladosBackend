---
to: src/modules/<%= h.changeCase.param(name) %>/index.ts
---
export * from './domain/<%= h.changeCase.pascal(name) %>Entity';
export * from './application/Create<%= h.changeCase.pascal(name) %>';