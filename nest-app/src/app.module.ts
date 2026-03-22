import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaborModule } from './sabor/sabor.module';

@Module({
  imports: [SaborModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
