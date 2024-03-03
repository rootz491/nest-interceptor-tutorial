import { Test, TestingModule } from '@nestjs/testing';
import { RootzService } from './rootz.service';

describe('RootzService', () => {
  let service: RootzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RootzService],
    }).compile();

    service = module.get<RootzService>(RootzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
