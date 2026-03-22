import { Module } from '@nestjs/common';
import { SaborService } from './sabor.service';
import { SaborController } from './presentation/sabor.controller';

@Module({
  controllers: [SaborController],
  providers: [SaborService],
})
export class SaborModule {}
