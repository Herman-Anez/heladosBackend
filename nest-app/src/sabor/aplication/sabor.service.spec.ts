import { Test, TestingModule } from '@nestjs/testing';
import { SaborService } from './sabor.service';

describe('SaborService', () => {
  let service: SaborService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaborService],
    }).compile();

    service = module.get<SaborService>(SaborService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
