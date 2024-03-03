import { Test, TestingModule } from '@nestjs/testing';
import { Rootz2Service } from './rootz2.service';

describe('Rootz2Service', () => {
  let service: Rootz2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Rootz2Service],
    }).compile();

    service = module.get<Rootz2Service>(Rootz2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
