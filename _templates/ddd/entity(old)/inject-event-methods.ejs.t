---
inject: true
to: "<%= addEvents ? `src/modules/${h.changeCase.param(name)}/domain/${h.changeCase.pascal(name)}Entity.ts` : null %>"
after: "export class <%= h.changeCase.pascal(name) %>Entity {"
skip_if: "private _domainEvents"
---
  private _domainEvents: any[] = [];

  public pullDomainEvents(): any[] {
    const events = [...this._domainEvents];
    this._domainEvents = [];
    return events;
  }

  protected record(event: any): void {
    this._domainEvents.push(event);
  }