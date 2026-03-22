// crear-helado.dto.ts
import { IsInt, IsString, Min } from 'class-validator';

export class CrearSaborDTO {
  @IsString()
  readonly id: string;
  @IsInt({ message: 'El ID del sabor debe ser un número entero' })
  @Min(1)
  readonly saborId: number;

  @IsInt({ message: 'El ID del sabor debe ser un número entero' })
  @Min(1)
  readonly price: number;

  @IsString()
  readonly name: string;
}
