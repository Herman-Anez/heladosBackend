import { Test, TestingModule } from '@nestjs/testing';
import { SaborController } from './sabor.controller';
import { SaborService } from './sabor.service';

describe('SaborController', () => {
  let controller: SaborController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaborController],
      providers: [SaborService],
    }).compile();

    controller = module.get<SaborController>(SaborController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
