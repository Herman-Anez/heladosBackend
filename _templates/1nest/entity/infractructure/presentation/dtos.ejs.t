---
to: src/modules/<%= h.changeCase.param(name) %>/infrastructure/presentation/dtos/create<%= h.changeCase.pascal(name) %>.dto.ts
---
<% 
  const Name = h.changeCase.pascal(name)
  const Lname = h.changeCase.camel(name)
  const IdName = Name + 'IdVo' 
  const Plural = h.changeCase.camel(plural)
  const VoClassName = addVO ? Name + h.changeCase.pascal(voName) : null
  const VoHolder = addVO ? h.changeCase.camel(voName) : null
-%>
import { IsInt, IsString, Min } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';



export class Create<%= Name %>Dto {
  @IsInt({ message: 'El ID del sabor debe ser un número entero' })
  @Min(1)
  readonly id: string;

  @IsInt({ message: 'El ID del sabor debe ser un número entero' })
  @Min(1)
  readonly price: number;

  @IsString()
  readonly name: string;
}
export class Update<%= Name %>Dto extends PartialType(Create<%= Name %>Dto) {}