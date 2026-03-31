---
to: test-src/modules/<%= h.changeCase.param(name) %>/application/dtos/<%= h.changeCase.kebabCase(name) %>.dto.ts
---
<% 
  const Name = h.changeCase.pascal(name)
  const Lname = h.changeCase.camel(name)
  const IdName = Name + 'IdVo' 
  const Plural = h.changeCase.camel(plural)
  const VoClassName = addVO ? Name + h.changeCase.pascal(voName) : null
  const VoHolder = addVO ? h.changeCase.camel(voName) : null
-%>
<% 
if(addBoilerplate)
{ -%> 
import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';
<% } 
-%> 
export class Create<%= Name %>Dto {

<% if(addBoilerplate){ -%>
  @IsNotEmpty();
  @IsString();
<% } -%>
  readonly name: string;
  <% if(addBoilerplate){ -%>
  @IsNotEmpty()
  @IsEmail()    
<% } -%>
  readonly email: string;
}

export class Update<%= Name %>Dto {
  <% 
  if(addBoilerplate)
  { -%> 
  @IsOptional()
  @IsString()
  <% } 
  -%> 
  readonly name?: string;
  <% 
  if(addBoilerplate)
  { -%> 
  @IsOptional()
  @IsEmail()
  <% } 
  -%> 
  readonly email?: string;
}