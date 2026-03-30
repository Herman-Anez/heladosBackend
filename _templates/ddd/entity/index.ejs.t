---
to: src/modules/<%= h.changeCase.param(name) %>/index.ts
---
export * from './domain/<%= h.changeCase.pascal(name) %>Entity';
export * from './application/<%= h.changeCase.pascal(name) %>.service';