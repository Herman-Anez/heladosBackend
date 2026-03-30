---
inject: true
to: "<%= addEvents ? `src/modules/${h.changeCase.param(name)}/domain/${h.changeCase.pascal(name)}Entity.ts` : null %>"
after: "static create\\(props: <%= h.changeCase.pascal(name) %>Props\\): <%= h.changeCase.pascal(name) %>Entity {"
skip_if: "record\\("
---
<% Name = h.changeCase.pascal(name) -%>
    const entity = new <%= Name %>Entity(props);
    entity.record(new <%= Name %>CreatedEvent(props.id));
    return entity;