import { PartialType } from '@nestjs/mapped-types';
import { CrearSaborDto } from './create-sabor.dto';

export class UpdateSaborDto extends PartialType(CrearSaborDto) {}
