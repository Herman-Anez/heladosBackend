import { IsInt, IsString, Min } from 'class-validator';

export class CrearSaborDto {
  @IsInt({ message: 'El ID del sabor debe ser un número entero' })
  @Min(1)
  readonly id: string;

  @IsInt({ message: 'El ID del sabor debe ser un número entero' })
  @Min(1)
  readonly price: number;

  @IsString()
  readonly name: string;
}
