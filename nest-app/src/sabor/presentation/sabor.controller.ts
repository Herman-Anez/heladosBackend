import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { SaborService } from '../aplication/sabor.service';
import { CrearSaborDTO } from './dto/create-sabor.dto';
import { UpdateSaborDto } from './dto/update-sabor.dto';

@Controller('sabor')
export class SaborController {
  constructor(private readonly saborService: SaborService) {}

  @Post()
  create(@Body() createSaborDto: CrearSaborDTO) {
    return this.saborService.create(createSaborDto);
  }

  @Get()
  findAll() {
    return this.saborService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saborService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaborDto: UpdateSaborDto) {
    return this.saborService.update(+id, updateSaborDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saborService.remove(+id);
  }
}
